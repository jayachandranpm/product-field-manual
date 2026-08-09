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
  const [html, css, js, sourceNotes, iconCss, iconFont, socialImage] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/styles.css", import.meta.url), "utf8"),
    readFile(new URL("../docs/app.js", import.meta.url), "utf8"),
    readFile(new URL("../docs/source-notes.js", import.meta.url), "utf8"),
    readFile(new URL("../docs/icons/phosphor.css", import.meta.url), "utf8"),
    stat(new URL("../docs/icons/Phosphor.woff2", import.meta.url)),
    stat(new URL("../docs/og-v2.png", import.meta.url)),
  ]);

  assert.match(html, /Product Management Professional Certificate/);
  assert.match(html, /id="appRoot"/);
  assert.match(html, /id="globalSearch"/);
  assert.match(html, /id="notesDialog"/);
  assert.match(html, /id="certificateDialog"/);
  assert.match(html, /id="profileDialog"/);
  assert.match(html, /id="currentNoteEditor"/);
  assert.match(html, /icons\/phosphor\.css/);
  assert.doesNotMatch(html, /href="#overview"/);
  assert.doesNotMatch(html, /id="exploreButton"|id="mobileMenuButton"|id="mobileNav"/);
  assert.match(html, /styles\.css/);
  assert.match(html, /app\.js/);
  assert.match(html, /source-notes\.js/);
  assert.match(html, /og-v2\.png/);

  const moduleIds = [...js.matchAll(/id: "m\d{2}"/g)];
  assert.equal(moduleIds.length, 24);
  const lessonIds = [...js.matchAll(/L\("l\d{2}"/g)];
  assert.equal(lessonIds.length, 96);
  assert.equal([...sourceNotes.matchAll(/^  m\d{2}: \{/gm)].length, 24);
  assert.equal([...sourceNotes.matchAll(/heading: "/g)].length, 96);
  assert.match(sourceNotes, /FMS pp\. 9–14/);
  assert.match(sourceNotes, /XLRI pp\. 47–88, 127–224/);
  assert.match(sourceNotes, /original teaching syntheses/);
  assert.match(js, /localStorage/);
  assert.match(js, /quizQuestions/);
  assert.match(js, /flashcards/);
  assert.match(js, /caseLabHTML/);
  assert.match(js, /interviewPrompts/);
  assert.match(js, /startTimer/);
  assert.match(js, /templateText/);
  assert.match(js, /lessonBriefHTML/);
  assert.match(js, /sourceReadingHTML/);
  assert.match(js, /lessonEvaluationHTML/);
  assert.match(js, /evaluationReady/);
  assert.match(js, /pc-lesson-evaluations/);
  assert.match(js, /sidebar-scrim/);
  assert.match(js, /if \(!hash \|\| hash === "overview"\) return \{ view: "learn"/);
  assert.doesNotMatch(js, /else renderOverview\(\)/);
  assert.doesNotMatch(js, /lesson-rail|knowledgeCheckHTML|inline-answer/);
  assert.match(js, /draftedProjects/);
  assert.match(js, /certificateProgress/);
  assert.doesNotMatch(js, /guidedBriefingHTML|videoLessonHTML|play-video|briefing-play/);

  const usedActions = [...js.matchAll(/data-action=["']([^"']+)/g)].map((match) => match[1]);
  const handledActions = [...js.matchAll(/action\s*===\s*["']([^"']+)/g)].map((match) => match[1]);
  assert.deepEqual([...new Set(usedActions.filter((action) => !handledActions.includes(action)))], []);

  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /\.lesson-brief/);
  assert.match(css, /\.source-chapter/);
  assert.match(css, /\.source-note-grid/);
  assert.match(css, /\.lesson-evaluation/);
  assert.match(css, /\.evidence-table/);
  assert.match(css, /\.learning-layout \{ min-height:/);
  assert.match(css, /\.sidebar-scrim/);
  assert.match(css, /\.evidence-head \{ display: none; \}/);
  assert.doesNotMatch(css, /\.guided-briefing|\.video-lesson|\.video-screen/);
  assert.doesNotMatch(css, /linear-gradient|radial-gradient/);
  assert.match(iconCss, /font-family: "Phosphor"/);
  assert.ok(iconFont.size > 100_000);
  assert.ok(socialImage.size > 100_000);
  await access(new URL("../docs/.nojekyll", import.meta.url));
});
