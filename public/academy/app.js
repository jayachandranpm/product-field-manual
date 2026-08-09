const modules = [
  {
    id: "m01",
    number: "01",
    category: "foundation",
    level: "Foundation",
    title: "Product thinking",
    summary: "Learn what product management is actually accountable for: creating customer and business value under uncertainty.",
    time: "3.5 hours",
    output: "Product role charter",
    tags: ["Outcomes", "Lifecycle"],
    lessons: [
      ["Products, projects, and services", "Define a product by the value exchange and feedback loop it sustains—not by its interface or org chart."],
      ["Outcome over output", "Translate delivery language into a measurable change in customer behavior and business performance."],
      ["The PM’s decision surface", "Map where product, design, engineering, data, marketing, sales, finance, legal, and operations shape the call."],
      ["Lifecycle and PM archetypes", "Adjust the job for zero-to-one, growth, mature, platform, technical, enterprise, and AI products."],
    ],
    drill: "Take five requests from a real backlog. Rewrite each as a customer outcome, a business outcome, and an assumption that could make the request wrong.",
  },
  {
    id: "m02",
    number: "02",
    category: "foundation",
    level: "Foundation",
    title: "Problem discovery",
    summary: "Replace stakeholder folklore with direct evidence about users, their context, and the progress they are trying to make.",
    time: "5 hours",
    output: "Evidence brief",
    tags: ["Research", "JTBD"],
    lessons: [
      ["Assumptions into questions", "Build an assumption map across desirability, viability, usability, feasibility, ethics, and adoption."],
      ["Interviews and observation", "Ask about real past behavior, watch workarounds, and avoid pitching a solution during research."],
      ["Needs, jobs, and journeys", "Write solution-agnostic needs and map the trigger, current path, friction, alternatives, and desired progress."],
      ["Evidence and opportunity sizing", "Triangulate qualitative patterns with behavioral data, market structure, and the cost of the status quo."],
    ],
    drill: "Run five 30-minute interviews. Create an evidence table with verbatim observations, your interpretation, confidence, and the next question—not a feature list.",
  },
  {
    id: "m03",
    number: "03",
    category: "foundation",
    level: "Foundation",
    title: "Product sense & design",
    summary: "Turn a broad prompt into a focused user, an important problem, and a coherent solution with explicit tradeoffs.",
    time: "5 hours",
    output: "Concept brief",
    tags: ["CIRCLES", "UX"],
    lessons: [
      ["Frame the situation", "Clarify the goal, scope, constraints, company advantage, and the decision that must be made."],
      ["Segment and prioritize", "Select a user using need intensity, reach, strategic fit, and evidence—not demographic convenience."],
      ["From pain to concept", "Prioritize problems by frequency and severity, then generate distinct solution mechanisms before choosing."],
      ["Flow, accessibility, and tradeoffs", "Design the critical journey, empty and failure states, inclusive interactions, and what the MVP excludes."],
    ],
    drill: "Design a safer airport experience for travelers with invisible disabilities. Limit yourself to three segments, three problems, and three solution directions before selecting one.",
  },
  {
    id: "m04",
    number: "04",
    category: "craft",
    level: "Practitioner",
    title: "Strategy & positioning",
    summary: "Build a strategy that makes choices: where to play, how to win, which capabilities matter, and what you will not do.",
    time: "5.5 hours",
    output: "Strategy memo",
    tags: ["Vision", "Advantage"],
    lessons: [
      ["Vision, goals, and strategy", "Separate an enduring future, a measurable objective, the approach to win, and the tactics used now."],
      ["Diagnosis and strategic insight", "Study customer change, market structure, business economics, technology shifts, and internal capability."],
      ["Choices and advantage", "State a coherent target segment, value proposition, advantage, enabling capabilities, and explicit non-goals."],
      ["Narrative and Working Backwards", "Use a future press release and FAQ to make customer value, viability, risks, and open questions concrete."],
    ],
    drill: "Write a one-page strategy kernel: diagnosis, guiding approach, three coherent actions, and three attractive opportunities you are deliberately declining.",
  },
  {
    id: "m05",
    number: "05",
    category: "craft",
    level: "Practitioner",
    title: "Prioritization & roadmaps",
    summary: "Choose bets with transparent assumptions, then communicate direction without turning uncertainty into fake precision.",
    time: "4 hours",
    output: "Outcome roadmap",
    tags: ["RICE", "Tradeoffs"],
    lessons: [
      ["Decision criteria before scores", "Anchor prioritization in strategy, user value, economics, risk, learning, dependencies, and capacity."],
      ["RICE, ICE, WSJF, Kano, MoSCoW", "Know each model’s question, inputs, bias, and appropriate decision horizon."],
      ["Outcome roadmaps", "Connect now/next/later problems to outcomes, evidence, guardrails, and confidence rather than promised feature dates."],
      ["Saying no and revisiting bets", "Make the opportunity cost visible, preserve decision history, and define the trigger for reconsideration."],
    ],
    drill: "Score three real initiatives in the RICE lab, then write the strongest argument for why the numeric ranking could be wrong. Make the final call in one paragraph.",
  },
  {
    id: "m06",
    number: "06",
    category: "craft",
    level: "Practitioner",
    title: "Metrics & analytics",
    summary: "Build a measurement system that connects user value to business value and catches harmful local optimization.",
    time: "6 hours",
    output: "Metric tree & dashboard",
    tags: ["HEART", "North Star"],
    lessons: [
      ["Goal → signal → metric", "Begin with the outcome and observable behavior; only then define a precise numerator, denominator, window, and segment."],
      ["North star, inputs, and guardrails", "Choose one recurring value signal, the levers that drive it, and counter-metrics that expose gaming or harm."],
      ["Funnels, cohorts, retention", "Read conversion as a journey, separate cohort effects, and distinguish activation from durable use."],
      ["HEART, AARRR, and dashboards", "Use frameworks as coverage checks, then design a decision-oriented view with thresholds, segments, and owners."],
    ],
    drill: "Build a metric tree for one product. For every metric, add its decision owner, cadence, segment, failure threshold, and the action that a movement would trigger.",
  },
  {
    id: "m07",
    number: "07",
    category: "craft",
    level: "Practitioner",
    title: "Experiments & growth",
    summary: "Design learning that can change a decision, then grow value through activation, retention, loops, and healthy marketplaces.",
    time: "5.5 hours",
    output: "Experiment readout",
    tags: ["A/B tests", "Retention"],
    lessons: [
      ["Hypotheses and riskiest assumptions", "State the belief, population, expected behavior, causal mechanism, decision rule, and downside."],
      ["Prototype before production", "Match the prototype to the uncertainty: interviews, concierge tests, fake doors, usability tests, or technical spikes."],
      ["Online experiments", "Understand randomization, exposure, sample ratio mismatch, novelty, practical significance, and guardrail movement."],
      ["Growth systems", "Model acquisition, activation, retention, monetization, referral, loops, and cross-side marketplace health."],
    ],
    drill: "Pre-register an experiment before seeing results: primary metric, minimum meaningful effect, guardrails, duration, segments, stop conditions, and ship/iterate/stop rules.",
  },
  {
    id: "m08",
    number: "08",
    category: "craft",
    level: "Practitioner",
    title: "Delivery & execution",
    summary: "Turn a validated bet into a reliable release while protecting discovery, quality, team focus, and operational readiness.",
    time: "5 hours",
    output: "Launch-ready product brief",
    tags: ["Agile", "DORA"],
    lessons: [
      ["Product brief and PRD", "Write the context, outcome, users, evidence, scope, non-goals, experience, metrics, risks, and open decisions."],
      ["Stories and acceptance", "Slice value vertically, make edge cases explicit, and use acceptance criteria as shared understanding—not bureaucracy."],
      ["Flow and release risk", "Manage dependencies, sequencing, feature flags, rollout stages, quality signals, rollback, and operational ownership."],
      ["Scrum, Kanban, and delivery health", "Use the lightest operating cadence that preserves focus, inspection, adaptation, throughput, and stability."],
    ],
    drill: "Run a pre-mortem for a launch six weeks away. Convert each failure story into an owner, leading indicator, mitigation, contingency, and decision date.",
  },
  {
    id: "m09",
    number: "09",
    category: "craft",
    level: "Practitioner",
    title: "Technical product fluency",
    summary: "Ask better technical questions, reason about constraints, and make product tradeoffs across APIs, data, systems, reliability, and security.",
    time: "6 hours",
    output: "System decision map",
    tags: ["APIs", "Systems"],
    lessons: [
      ["APIs, data, and integrations", "Understand requests, responses, authentication, rate limits, webhooks, schemas, contracts, and integration failure."],
      ["System design for PMs", "Trace clients, services, storage, queues, caches, search, analytics, and the critical path through a system."],
      ["Scale, reliability, and cost", "Reason about latency, availability, consistency, throughput, observability, recovery, and unit economics."],
      ["Security, privacy, and platforms", "Map data sensitivity, access, abuse cases, compliance, platform incentives, and ecosystem governance."],
    ],
    drill: "Draw the critical path for a product action. At every boundary, note latency, failure behavior, data written, user recovery, and the metric that reveals degradation.",
  },
  {
    id: "m10",
    number: "10",
    category: "craft",
    level: "Practitioner",
    title: "GTM & lifecycle",
    summary: "Make the value legible, launch through the right channel, align revenue mechanics, and operate the product through maturity and sunset.",
    time: "4.5 hours",
    output: "Go-to-market plan",
    tags: ["Pricing", "Launch"],
    lessons: [
      ["Segmentation and positioning", "Define the category, target customer, urgent alternative, differentiated value, proof, and reason to believe."],
      ["Business models and pricing", "Connect willingness to pay, value metric, packaging, costs, channel incentives, and lifecycle stage."],
      ["Launch systems", "Coordinate readiness across product, sales, marketing, support, legal, operations, analytics, and incident response."],
      ["Adoption, maturity, and sunset", "Drive change management, watch product health, manage portfolio overlap, and exit with customer dignity."],
    ],
    drill: "Create a tiered launch plan with audience, promise, channel, enablement, readiness gates, leading indicators, failure thresholds, and rollback communication.",
  },
  {
    id: "m11",
    number: "11",
    category: "leadership",
    level: "Senior / Lead",
    title: "Product leadership",
    summary: "Create the context in which durable, cross-functional teams can solve important problems and learn faster than the organization’s politics.",
    time: "6 hours",
    output: "Product operating review",
    tags: ["Teams", "Portfolio"],
    lessons: [
      ["Empowered teams and context", "Give durable teams clear problems, strategic context, decision rights, and outcome accountability."],
      ["Stakeholders and narrative", "Map power and knowledge, surface disagreement early, and use decision memos to create durable alignment."],
      ["Portfolio and team topology", "Fund problems, manage dependencies and platform leverage, sequence bets, and stop work that no longer earns capacity."],
      ["Coaching and product culture", "Coach judgment through questions, raise evidence standards, reward learning, and separate healthy challenge from theater."],
    ],
    drill: "Audit one team: clarity of outcome, customer access, decision authority, discovery cadence, engineering/design partnership, stakeholder load, and stop-work behavior.",
  },
  {
    id: "m12",
    number: "12",
    category: "ai",
    level: "Advanced",
    title: "AI product management",
    summary: "Build AI products around a valuable workflow, measurable capability, trustworthy behavior, sustainable economics, and human agency.",
    time: "7 hours",
    output: "AI product & eval spec",
    tags: ["Evals", "AI risk"],
    lessons: [
      ["When AI earns its complexity", "Start with the user decision or task, compare against a simple baseline, and define where probabilistic behavior adds value."],
      ["Data, models, and product UX", "Design inputs, context, latency, cost, explanations, uncertainty, feedback, and graceful human fallback as one system."],
      ["Evals and monitoring", "Create representative test sets, task rubrics, safety checks, human review, online measures, drift detection, and release gates."],
      ["Trust, risk, and AI economics", "Apply governance across model, data, misuse, bias, privacy, security, reliability, vendor, legal, and marginal-cost risks."],
    ],
    drill: "Write an AI eval spec with target task, baseline, 30 representative cases, scoring rubric, unacceptable failures, human escalation, latency and cost budgets, and a rollback rule.",
  },
];

const pathways = {
  explorer: {
    title: "Explorer → Product Builder",
    description: "Start with product thinking, discovery, product sense, prioritization, and metrics. Finish with a compact product brief.",
    modules: ["m01", "m02", "m03", "m05", "m06"],
  },
  builder: {
    title: "Builder → Product Owner",
    description: "Deepen strategy, prioritization, analytics, experimentation, execution, technical fluency, and go-to-market judgment.",
    modules: ["m04", "m05", "m06", "m07", "m08", "m09", "m10"],
  },
  leader: {
    title: "Leader → Product Multiplier",
    description: "Strengthen portfolio strategy, metric systems, lifecycle economics, empowered teams, and AI-era product governance.",
    modules: ["m04", "m06", "m10", "m11", "m12"],
  },
};

const flashcards = [
  ["METRICS", "What makes a useful North Star Metric?", "It represents recurring customer value, connects to durable business value, and can be influenced by the team. Pair it with input and guardrail metrics."],
  ["DISCOVERY", "What is the difference between an observation and an insight?", "An observation is what happened or was said. An insight is your interpretation of why it matters. Keep them separate so interpretations remain testable."],
  ["STRATEGY", "What turns a goal into a strategy?", "A diagnosis of the situation plus a chosen approach for winning. The strategy guides coherent action and rules out plausible alternatives."],
  ["PRIORITIZATION", "When should you distrust a RICE score?", "When inputs mix incompatible units, confidence is performative, effort omits dependencies, strategic fit is absent, or the decimal output disguises weak evidence."],
  ["EXPERIMENTS", "What makes an experiment decision-grade?", "A falsifiable hypothesis, valid comparison, pre-set success and guardrail rules, enough exposure, a meaningful effect threshold, and a stated action for each outcome."],
  ["PRODUCT SENSE", "How do you prioritize a user problem?", "Use evidence about frequency, severity, current alternatives, reach, strategic fit, and the cost of leaving it unsolved. Explain the rationale, not just the ranking."],
  ["DELIVERY", "What belongs in a launch pre-mortem?", "Plausible failure stories, leading indicators, prevention, contingency, owner, decision date, and rollback or communication plan."],
  ["TECHNICAL", "What is an API contract?", "The agreed request, response, authentication, errors, limits, and behavior that let systems collaborate without sharing implementation details."],
  ["GROWTH", "Why can activation be a better early metric than sign-ups?", "Sign-ups show intent or acquisition. Activation shows that users reached an early value moment correlated with future retention."],
  ["LEADERSHIP", "What distinguishes an empowered product team?", "It owns an important outcome and is trusted to discover the solution, with customer access, strategic context, cross-functional skills, and clear decision rights."],
  ["AI PRODUCT", "Why are offline AI evals not enough?", "They estimate capability on controlled cases but cannot fully capture real context, user adaptation, latency, cost, misuse, or downstream behavior. Pair them with online and qualitative evidence."],
  ["ROADMAPS", "What is the job of an outcome roadmap?", "To communicate the sequence of problems and outcomes the team intends to pursue, why now, confidence, evidence, dependencies, and what may change the plan."],
  ["RCA", "What is the first move when a KPI drops?", "Validate the definition and data, then scope the change by time, segment, platform, geography, and funnel stage before forming causes."],
  ["ACCESSIBILITY", "When should accessibility enter product work?", "During discovery. Include people with varied abilities, design accessible interactions, and treat accessibility as a product quality and user-needs concern throughout delivery."],
  ["GTM", "What is a value metric in pricing?", "The unit on which a customer’s bill changes. A strong value metric tracks perceived value, is predictable, and lets revenue grow as customer value grows."],
  ["INTERVIEWS", "What does a strong PM answer make visible?", "The goal, assumptions, structure, evidence, prioritization rationale, tradeoffs, success measures, and how new information would change the decision."],
];

const quizQuestions = [
  {
    question: "A team shipped 14 roadmap items, but retained usage did not move. What is the most product-minded response?",
    options: ["Increase sprint velocity", "Reframe the roadmap around the behavior and business outcome to change", "Add more features requested by sales", "Replace the team’s estimation method"],
    correct: 1,
    explanation: "Shipping is output. The team needs an outcome, a theory for changing it, and evidence about why current bets failed—not a faster feature factory.",
  },
  {
    question: "Which user-need statement is least contaminated by a solution?",
    options: ["I need an AI dashboard that predicts churn", "I need weekly email reminders", "I need to spot accounts at risk early enough to intervene", "I need a red churn score beside every account"],
    correct: 2,
    explanation: "It describes the progress and timing the user needs without prescribing interface or technology. The other choices are candidate solutions.",
  },
  {
    question: "You have three segments. Which is the strongest prioritization rationale?",
    options: ["Executives mentioned this segment most often", "It is the broadest demographic", "It has severe, frequent pain; weak alternatives; and strong strategic fit", "It is easiest to recruit for research"],
    correct: 2,
    explanation: "A strong choice connects need intensity and evidence with company advantage. Convenience and stakeholder volume are weak proxies.",
  },
  {
    question: "Which metric best reflects value for a two-sided home-services marketplace?",
    options: ["App downloads", "Weekly completed jobs with both sides satisfied", "Provider profile views", "Total push notifications sent"],
    correct: 1,
    explanation: "Completed, satisfactory exchanges represent recurring value for customers and providers. Downloads, views, and messages are upstream activity.",
  },
  {
    question: "A new recommendation system increases watch time but also increases ‘not interested’ actions. What should the PM do?",
    options: ["Ship because the North Star increased", "Ignore the negative signal until retention falls", "Inspect segments and treat negative feedback as a guardrail before deciding", "Replace watch time with click-through rate"],
    correct: 2,
    explanation: "A local gain can mask degraded user value. Guardrails and segment analysis reveal whether the mechanism is healthy or merely addictive or annoying.",
  },
  {
    question: "Initiative A has reach 1,000, impact 2, confidence 50%, effort 4. What is its RICE score?",
    options: ["62.5", "125", "250", "1,000"],
    correct: 2,
    explanation: "(1,000 × 2 × 0.50) ÷ 4 = 250. The number is only as credible as its assumptions and units.",
  },
  {
    question: "What most improves the credibility of an A/B test decision?",
    options: ["Stopping as soon as p < .05", "Choosing the winning variant after inspecting many segments", "Pre-setting the primary metric, guardrails, duration, and meaningful effect", "Testing several unrelated changes together"],
    correct: 2,
    explanation: "Pre-registration reduces opportunistic interpretation. Statistical significance alone does not establish practical value or product safety.",
  },
  {
    question: "Daily activation falls suddenly on Android in one country. What should you investigate first?",
    options: ["A global repositioning project", "The scoped funnel, release history, telemetry, and external changes for that segment", "A new annual roadmap", "Whether the entire market is shrinking"],
    correct: 1,
    explanation: "The scope strongly suggests a localized platform, instrumentation, rollout, policy, or external issue. Validate data and inspect the affected journey first.",
  },
  {
    question: "Which roadmap item communicates the strongest product intent?",
    options: ["Build AI assistant in Q2", "Improve activation", "Reduce time for a new team to complete its first shared workflow from 3 days to 1 day", "Redesign onboarding screens"],
    correct: 2,
    explanation: "It names a user-relevant outcome with a baseline and target while leaving room to discover the best solution.",
  },
  {
    question: "What is the best first baseline for an AI feature?",
    options: ["The largest available model", "A simple non-AI workflow or heuristic that solves the same task", "A competitor’s marketing claim", "Human-level performance on every edge case"],
    correct: 1,
    explanation: "A simple baseline tests whether AI earns its cost, latency, uncertainty, governance, and operational complexity for this product job.",
  },
  {
    question: "When should accessibility research begin?",
    options: ["After beta", "During final QA", "In discovery and continuously thereafter", "Only after a complaint"],
    correct: 2,
    explanation: "Accessibility affects who the users are, which needs exist, and whether concepts work. It cannot be reliably bolted on after core decisions.",
  },
  {
    question: "A senior leader asks an empowered team to build a specific feature. What is the strongest PM response?",
    options: ["Reject it because leaders should never suggest features", "Accept it immediately", "Clarify the underlying outcome and evidence, then evaluate the feature alongside alternatives", "Add it to the backlog without a date"],
    correct: 2,
    explanation: "Treat the request as useful input. Preserve alignment on the problem and outcome while keeping solution discovery evidence-led and cross-functional.",
  },
];

const metricTemplates = {
  marketplace: {
    root: "Weekly successful matches",
    meaning: "Recurring value exchanged by both sides",
    inputs: [["Qualified supply", "Active providers × availability"], ["Match conversion", "Intent → accepted match"], ["Repeat rate", "Customers returning in 30 days"]],
    guardrails: "Cancellation rate · complaint rate · provider earnings spread",
    trap: "More transactions can hide worse match quality or an unhealthy side of the marketplace.",
  },
  saas: {
    root: "Weekly teams completing the core workflow",
    meaning: "Organizations repeatedly achieving the product’s promised job",
    inputs: [["Activated workspaces", "New teams reaching first value"], ["Workflow frequency", "Core actions per active team"], ["Seat breadth", "Contributing users per workspace"]],
    guardrails: "Task failure · support burden · logo churn · admin effort",
    trap: "More active seats can coexist with weak organizational value or forced usage.",
  },
  consumer: {
    root: "Weekly users achieving the core outcome",
    meaning: "People repeatedly receiving the intended value",
    inputs: [["Activation", "New users reaching first value"], ["Frequency", "Valuable sessions per active user"], ["Retention", "Users returning in the natural cycle"]],
    guardrails: "Negative feedback · unwanted time spent · crash rate · churn intent",
    trap: "Engagement can rise because of friction, compulsion, or confusion rather than value.",
  },
  ai: {
    root: "Weekly tasks completed with accepted AI assistance",
    meaning: "Useful work finished with output the user trusts enough to use",
    inputs: [["Eligible adoption", "Target tasks attempted with AI"], ["Acceptance quality", "Outputs used with minimal correction"], ["Repeat use", "Users returning for the same valuable job"]],
    guardrails: "Severe eval failures · override rate · latency · cost per accepted task",
    trap: "Prompt volume and generated tokens reward activity, not correct or trusted outcomes.",
  },
};

const interviewPrompts = [
  ["PRODUCT SENSE", "Design a better airport experience for travelers with invisible disabilities."],
  ["METRICS", "You own a new group-travel feature. Define the goal, North Star, inputs, and guardrails."],
  ["ROOT CAUSE", "Completed food-delivery orders fell 12% yesterday. Diagnose the problem."],
  ["STRATEGY", "Should a collaboration platform enter the lightweight CRM market? Make the strategic call."],
  ["PRIORITIZATION", "Choose between faster search, creator analytics, and a referral program for a growing marketplace."],
  ["PRODUCT SENSE", "Design a financial product for gig workers with unpredictable income."],
  ["AI PRODUCT", "Design an AI support agent that a regulated bank could safely deploy."],
  ["TRADEOFF", "A change raises short-term conversion 8% but lowers 30-day retention 3%. Decide what to do."],
  ["EXECUTION", "Plan the launch of a new payments flow across web, iOS, and Android in six weeks."],
  ["GUESSTIMATE", "Estimate the number of daily digital payment transactions at a large Indian university."],
];

const state = {
  completed: new Set(readStorage("pfm-completed", [])),
  capstone: new Set(readStorage("pfm-capstone", [])),
  selectedLevel: readStorage("pfm-level", "explorer"),
  currentModule: null,
  flashIndex: 0,
  flashDeck: [...flashcards],
  quizIndex: 0,
  quizScore: 0,
  quizSelected: null,
  quizAnswered: false,
  quizFinished: false,
  promptIndex: 0,
  timerSeconds: 600,
  timerId: null,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The course remains fully usable when storage is unavailable.
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderModules(filter = "all") {
  const visible = modules.filter((module) => filter === "all" || module.category === filter);
  $("#visibleModuleCount").textContent = `${visible.length} module${visible.length === 1 ? "" : "s"}`;
  $("#moduleGrid").innerHTML = visible.map((module) => `
    <button class="module-card ${state.completed.has(module.id) ? "completed" : ""}" type="button" data-open-module="${module.id}">
      <span class="module-top"><span class="module-number">MODULE ${module.number} / ${module.level}</span><span class="module-status">✓ MASTERED</span></span>
      <h3>${escapeHtml(module.title)}</h3>
      <p>${escapeHtml(module.summary)}</p>
      <span class="module-bottom"><span class="module-tags">${module.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</span><span class="module-time">${escapeHtml(module.time)}</span></span>
    </button>
  `).join("");
}

function selectLevel(level, notify = false) {
  if (!pathways[level]) return;
  state.selectedLevel = level;
  writeStorage("pfm-level", level);
  $$(".level-card").forEach((card) => {
    const selected = card.dataset.level === level;
    card.classList.toggle("selected", selected);
    card.setAttribute("aria-checked", String(selected));
  });
  const route = pathways[level];
  $("#routeTitle").textContent = route.title;
  $("#routeDescription").textContent = route.description;
  $("#routeMap").innerHTML = route.modules.map((id) => {
    const module = modules.find((item) => item.id === id);
    return `<span class="route-step"><b>${module.number}</b></span>`;
  }).join("");
  if (notify) showToast(`${route.title} selected. Your route is saved on this device.`);
}

function openModule(id) {
  const module = modules.find((item) => item.id === id);
  if (!module) return;
  state.currentModule = id;
  $("#dialogModuleNumber").textContent = `MODULE ${module.number}`;
  $("#dialogLevel").textContent = module.level.toUpperCase();
  $("#moduleDialogTitle").textContent = module.title;
  $("#dialogSummary").textContent = module.summary;
  $("#dialogTime").textContent = module.time;
  $("#dialogOutput").textContent = module.output;
  $("#dialogDrill").textContent = module.drill;
  $("#dialogLessons").innerHTML = module.lessons.map((lesson, index) => `
    <article class="lesson-item">
      <span>0${index + 1}</span>
      <h3>${escapeHtml(lesson[0])}</h3>
      <p>${escapeHtml(lesson[1])}</p>
    </article>
  `).join("");
  const completeButton = $("#completeModuleButton");
  const complete = state.completed.has(id);
  completeButton.textContent = complete ? "Mark as in progress" : "Mark module complete";
  completeButton.classList.toggle("ink", complete);
  const dialog = $("#moduleDialog");
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialogs() {
  $$("dialog[open]").forEach((dialog) => dialog.close());
  document.body.classList.remove("dialog-open");
}

function toggleModuleComplete() {
  const id = state.currentModule;
  if (!id) return;
  const module = modules.find((item) => item.id === id);
  if (state.completed.has(id)) {
    state.completed.delete(id);
    showToast(`${module.title} moved back to in progress.`);
  } else {
    state.completed.add(id);
    showToast(`Module ${module.number} mastered. Keep the loop moving.`);
  }
  writeStorage("pfm-completed", [...state.completed]);
  updateProgress();
  renderModules($(".filter-button.active")?.dataset.filter || "all");
  openModule(id);
}

function updateProgress() {
  const count = state.completed.size;
  const percent = Math.round((count / modules.length) * 100);
  $("#sideProgressLabel").textContent = `${percent}%`;
  $("#sideProgressBar").style.width = `${percent}%`;
  const track = $(".side-progress .progress-track");
  track.setAttribute("aria-valuenow", String(percent));
  const next = modules.find((module) => !state.completed.has(module.id));
  $("#resumeCopy").textContent = next ? `${count} mastered · Next: ${next.title}` : "All modules mastered. Begin the capstone.";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  writeStorage("pfm-theme", theme);
  const dark = theme === "dark";
  $("#themeLabel").textContent = dark ? "Light mode" : "Dark mode";
  $("#themeIcon").textContent = dark ? "☀" : "◐";
}

function showFlashcard() {
  const card = state.flashDeck[state.flashIndex];
  $("#flashCategory").textContent = card[0];
  $("#flashQuestion").textContent = card[1];
  $("#flashAnswer").textContent = card[2];
  $("#flashCounter").textContent = `${state.flashIndex + 1} / ${state.flashDeck.length}`;
  $("#flashcard").classList.remove("flipped");
}

function moveFlashcard(delta) {
  state.flashIndex = (state.flashIndex + delta + state.flashDeck.length) % state.flashDeck.length;
  showFlashcard();
}

function shuffleFlashcards() {
  for (let i = state.flashDeck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.flashDeck[i], state.flashDeck[j]] = [state.flashDeck[j], state.flashDeck[i]];
  }
  state.flashIndex = 0;
  showFlashcard();
  showToast("Flashcards shuffled. Retrieval beats recognition.");
}

function showQuizQuestion() {
  const question = quizQuestions[state.quizIndex];
  state.quizSelected = null;
  state.quizAnswered = false;
  $("#questionCount").textContent = `Question ${state.quizIndex + 1} of ${quizQuestions.length}`;
  $("#quizQuestion").textContent = question.question;
  $("#answerList").innerHTML = question.options.map((option, index) => `
    <button class="answer-option" type="button" data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}</button>
  `).join("");
  $("#quizExplanation").hidden = true;
  $("#quizExplanation").textContent = "";
  const button = $("#nextQuestion");
  button.disabled = true;
  button.textContent = "Check answer";
  $("#quizProgressBar").style.width = `${(state.quizIndex / quizQuestions.length) * 100}%`;
  $("#quizScore").textContent = `Score ${state.quizScore} / ${state.quizIndex}`;
}

function selectQuizAnswer(index) {
  if (state.quizAnswered || state.quizFinished) return;
  state.quizSelected = index;
  $$(".answer-option").forEach((button) => button.classList.toggle("selected", Number(button.dataset.answer) === index));
  $("#nextQuestion").disabled = false;
}

function handleQuizAction() {
  if (state.quizFinished) {
    restartQuiz();
    return;
  }
  if (state.quizSelected === null) return;
  const question = quizQuestions[state.quizIndex];
  if (!state.quizAnswered) {
    state.quizAnswered = true;
    const correct = state.quizSelected === question.correct;
    if (correct) state.quizScore += 1;
    $$(".answer-option").forEach((button) => {
      const index = Number(button.dataset.answer);
      button.classList.toggle("correct", index === question.correct);
      button.classList.toggle("incorrect", index === state.quizSelected && !correct);
      button.disabled = true;
    });
    const explanation = $("#quizExplanation");
    explanation.hidden = false;
    explanation.innerHTML = `<strong>${correct ? "Good call." : "Not quite."}</strong> ${escapeHtml(question.explanation)}`;
    $("#quizScore").textContent = `Score ${state.quizScore} / ${state.quizIndex + 1}`;
    $("#quizProgressBar").style.width = `${((state.quizIndex + 1) / quizQuestions.length) * 100}%`;
    $("#nextQuestion").textContent = state.quizIndex === quizQuestions.length - 1 ? "See result" : "Next question →";
    return;
  }
  if (state.quizIndex < quizQuestions.length - 1) {
    state.quizIndex += 1;
    showQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  state.quizFinished = true;
  const percent = Math.round((state.quizScore / quizQuestions.length) * 100);
  $("#questionCount").textContent = "QUIZ COMPLETE";
  $("#quizQuestion").textContent = percent >= 80 ? `${percent}% — decision-ready.` : `${percent}% — one more learning loop.`;
  $("#answerList").innerHTML = `<div class="quiz-explanation"><strong>${state.quizScore} of ${quizQuestions.length} correct.</strong> ${percent >= 80 ? "You are connecting tools to judgment." : "Review the explanations, revisit weak modules, and try again—the questions reshuffle on every run."}</div>`;
  $("#quizExplanation").hidden = true;
  const button = $("#nextQuestion");
  button.disabled = false;
  button.textContent = "Retake quiz ↻";
  showToast(percent >= 80 ? "Mastery unlocked. Now prove it in the capstone." : "Useful signal. Review, retrieve, repeat.");
}

function restartQuiz() {
  quizQuestions.sort(() => Math.random() - 0.5);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizSelected = null;
  state.quizAnswered = false;
  state.quizFinished = false;
  showQuizQuestion();
}

function calculateRice() {
  const rows = $$("[data-rice-row]").map((row) => {
    const name = $("[data-field='name']", row).value.trim() || "Unnamed bet";
    const reach = Math.max(0, Number($("[data-field='reach']", row).value) || 0);
    const impact = Math.max(0, Number($("[data-field='impact']", row).value) || 0);
    const confidence = Math.min(100, Math.max(0, Number($("[data-field='confidence']", row).value) || 0));
    const effort = Math.max(0.1, Number($("[data-field='effort']", row).value) || 0.1);
    const score = (reach * impact * (confidence / 100)) / effort;
    $("[data-field='score']", row).value = score.toLocaleString(undefined, { maximumFractionDigits: 1 });
    return { name, score, confidence, effort };
  });
  rows.sort((a, b) => b.score - a.score);
  const winner = rows[0];
  $("#riceWinner").textContent = winner.name;
  $("#riceInsight").textContent = winner.confidence < 60
    ? "The ranking is led by a low-confidence estimate. Buy evidence before buying the roadmap."
    : winner.effort <= 1
      ? "Low estimated effort is driving the rank. Check hidden dependencies, rollout, and operational cost."
      : "This bet leads on current assumptions. Test whether its reach and impact use the same decision horizon as the alternatives.";
}

function buildMetricTree(event) {
  if (event) event.preventDefault();
  const type = $("#metricProductType").value;
  const stage = $("#metricStage").value;
  const product = $("#metricProductName").value.trim() || "Your product";
  const template = metricTemplates[type];
  const stageCopy = {
    zero: "At 0 → 1, instrument learning, activation, and repeated value before optimizing scale.",
    growth: "In growth, watch whether acquisition expands durable value without degrading quality.",
    mature: "At maturity, segment deeply: aggregate stability can hide churn, saturation, or declining quality.",
  }[stage];
  $("#metricTree").innerHTML = `
    <div class="tree-root"><small>${escapeHtml(product.toUpperCase())} / NORTH STAR</small><strong>${escapeHtml(template.root)}</strong><span>${escapeHtml(template.meaning)}</span></div>
    <div class="tree-branches">${template.inputs.map((input, index) => `<div><small>INPUT 0${index + 1}</small><strong>${escapeHtml(input[0])}</strong><span>${escapeHtml(input[1])}</span></div>`).join("")}</div>
    <div class="tree-guardrail"><small>GUARDRAILS</small><strong>${escapeHtml(template.guardrails)}</strong></div>
    <p class="tree-trap"><b>Watch the trap:</b> ${escapeHtml(template.trap)} ${escapeHtml(stageCopy)}</p>
  `;
}

function showInterviewPrompt(index) {
  state.promptIndex = (index + interviewPrompts.length) % interviewPrompts.length;
  const prompt = interviewPrompts[state.promptIndex];
  $("#dojoType").textContent = prompt[0];
  $("#dojoPrompt").textContent = prompt[1];
  $("#dojoCount").textContent = `Prompt ${state.promptIndex + 1} / ${interviewPrompts.length}`;
}

function updateTimer() {
  const minutes = Math.floor(state.timerSeconds / 60);
  const seconds = state.timerSeconds % 60;
  $("#timerDisplay").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function toggleTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
    $("#timerToggle").textContent = "Resume";
    return;
  }
  if (state.timerSeconds === 0) state.timerSeconds = 600;
  $("#timerToggle").textContent = "Pause";
  state.timerId = setInterval(() => {
    state.timerSeconds -= 1;
    updateTimer();
    if (state.timerSeconds <= 0) {
      clearInterval(state.timerId);
      state.timerId = null;
      $("#timerToggle").textContent = "Start again";
      showToast("Time. Summarize the call, metric, and biggest risk in 30 seconds.");
    }
  }, 1000);
}

function resetTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  state.timerSeconds = 600;
  $("#timerToggle").textContent = "Start";
  updateTimer();
}

function updateCapstone() {
  $$("[data-phase]").forEach((card) => {
    const complete = state.capstone.has(card.dataset.phase);
    card.classList.toggle("complete", complete);
    card.setAttribute("aria-pressed", String(complete));
  });
  const count = state.capstone.size;
  $("#capstoneComplete").textContent = String(count);
  $("#capstoneProgressBar").style.width = `${(count / 4) * 100}%`;
  $(".capstone-progress .progress-track").setAttribute("aria-valuenow", String(count));
}

function openSearch() {
  const dialog = $("#searchDialog");
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
  setTimeout(() => $("#searchInput").focus(), 20);
}

function searchCourse(query) {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    $("#searchResults").innerHTML = "<p>Try “metrics”, “AI”, “strategy”, or “interview”.</p>";
    return;
  }
  const results = modules.filter((module) => {
    const corpus = [module.title, module.summary, module.level, module.output, module.drill, ...module.tags, ...module.lessons.flat()].join(" ").toLowerCase();
    return corpus.includes(clean);
  });
  $("#searchResults").innerHTML = results.length ? results.map((module) => `
    <button class="search-result" type="button" data-search-module="${module.id}">
      <span>${module.number}</span><span><strong>${escapeHtml(module.title)}</strong><small>${escapeHtml(module.summary)}</small></span><b>→</b>
    </button>
  `).join("") : `<p>No exact match. Try a broader concept or browse the full curriculum.</p>`;
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function switchLab(id) {
  $$(".lab-tab").forEach((tab) => {
    const active = tab.dataset.lab === id;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  $$(".lab-panel").forEach((panel) => {
    const active = panel.id === `panel-${id}`;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
}

function startSelectedRoute() {
  const route = pathways[state.selectedLevel];
  const nextId = route.modules.find((id) => !state.completed.has(id)) || route.modules[0];
  openModule(nextId);
}

function initializeNavigationObserver() {
  const sections = ["top", "pathways", "curriculum", "practice", "capstone", "sources"];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    $$(".side-nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.5] });
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const moduleTrigger = event.target.closest("[data-open-module]");
    if (moduleTrigger) openModule(moduleTrigger.dataset.openModule);
    const closeTrigger = event.target.closest("[data-close-dialog]");
    if (closeTrigger) closeDialogs();
    const searchResult = event.target.closest("[data-search-module]");
    if (searchResult) {
      $("#searchDialog").close();
      openModule(searchResult.dataset.searchModule);
    }
  });

  $$(".level-card").forEach((card) => card.addEventListener("click", () => selectLevel(card.dataset.level, true)));
  $$(".filter-button").forEach((button) => button.addEventListener("click", () => {
    $$(".filter-button").forEach((item) => item.classList.toggle("active", item === button));
    renderModules(button.dataset.filter);
  }));
  $$(".lab-tab").forEach((tab) => tab.addEventListener("click", () => switchLab(tab.dataset.lab)));
  $$("[data-phase]").forEach((card) => card.addEventListener("click", () => {
    const phase = card.dataset.phase;
    state.capstone.has(phase) ? state.capstone.delete(phase) : state.capstone.add(phase);
    writeStorage("pfm-capstone", [...state.capstone]);
    updateCapstone();
    if (state.capstone.size === 4) showToast("Capstone loop complete. Publish the evidence and the decisions.");
  }));

  $("#startRouteButton").addEventListener("click", startSelectedRoute);
  $("#completeModuleButton").addEventListener("click", toggleModuleComplete);
  $("#themeButton").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  $("#searchButton").addEventListener("click", openSearch);
  $("#mobileSearchButton").addEventListener("click", openSearch);
  $("#searchInput").addEventListener("input", (event) => searchCourse(event.target.value));

  $("#flashcard").addEventListener("click", () => $("#flashcard").classList.toggle("flipped"));
  $("#previousCard").addEventListener("click", () => moveFlashcard(-1));
  $("#nextCard").addEventListener("click", () => moveFlashcard(1));
  $("#shuffleCards").addEventListener("click", shuffleFlashcards);

  $("#answerList").addEventListener("click", (event) => {
    const option = event.target.closest("[data-answer]");
    if (option) selectQuizAnswer(Number(option.dataset.answer));
  });
  $("#nextQuestion").addEventListener("click", handleQuizAction);

  $("#riceTableBody").addEventListener("input", calculateRice);
  $("#riceTableBody").addEventListener("change", calculateRice);
  $("#metricForm").addEventListener("submit", buildMetricTree);
  $("#newPrompt").addEventListener("click", () => showInterviewPrompt(state.promptIndex + 1));
  $("#timerToggle").addEventListener("click", toggleTimer);
  $("#timerReset").addEventListener("click", resetTimer);

  $("#moduleDialog").addEventListener("click", (event) => {
    if (event.target === $("#moduleDialog")) closeDialogs();
  });
  $("#searchDialog").addEventListener("click", (event) => {
    if (event.target === $("#searchDialog")) closeDialogs();
  });
  $$("dialog").forEach((dialog) => dialog.addEventListener("close", () => {
    if (!$("dialog[open]")) document.body.classList.remove("dialog-open");
  }));

  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName;
    const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
    if (event.key === "/" && !typing) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "ArrowRight" && $("#panel-flashcards").classList.contains("active") && !typing) moveFlashcard(1);
    if (event.key === "ArrowLeft" && $("#panel-flashcards").classList.contains("active") && !typing) moveFlashcard(-1);
  });
}

function init() {
  renderModules();
  selectLevel(pathways[state.selectedLevel] ? state.selectedLevel : "explorer");
  updateProgress();
  updateCapstone();
  showFlashcard();
  showQuizQuestion();
  calculateRice();
  buildMetricTree();
  updateTimer();
  setTheme(readStorage("pfm-theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  bindEvents();
  initializeNavigationObserver();
}

init();
