import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished course shell and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Product Management Professional Certificate \| ProductCraft<\/title>/i);
  assert.match(html, /ProductCraft Product Management Professional Certificate/);
  assert.match(html, /src="\/academy\/"/);
  assert.match(html, /summary_large_image/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("ships a self-contained GitHub Pages course", async () => {
  const [html, css, js, socialImage] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/styles.css", import.meta.url), "utf8"),
    readFile(new URL("../docs/app.js", import.meta.url), "utf8"),
    stat(new URL("../docs/og-v2.png", import.meta.url)),
  ]);

  assert.match(html, /Product Management Professional Certificate/);
  assert.match(html, /id="appRoot"/);
  assert.match(html, /id="globalSearch"/);
  assert.match(html, /id="notesDialog"/);
  assert.match(html, /id="certificateDialog"/);
  assert.match(html, /styles\.css/);
  assert.match(html, /app\.js/);
  assert.match(html, /og-v2\.png/);

  const moduleIds = [...js.matchAll(/id: "m\d{2}"/g)];
  assert.equal(moduleIds.length, 24);
  const lessonIds = [...js.matchAll(/L\("l\d{2}"/g)];
  assert.equal(lessonIds.length, 96);
  assert.match(js, /localStorage/);
  assert.match(js, /quizQuestions/);
  assert.match(js, /flashcards/);
  assert.match(js, /caseLabHTML/);
  assert.match(js, /interviewPrompts/);
  assert.match(js, /startTimer/);
  assert.match(js, /templateText/);

  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(css, /linear-gradient|radial-gradient/);
  assert.ok(socialImage.size > 100_000);
  await access(new URL("../docs/.nojekyll", import.meta.url));
});
