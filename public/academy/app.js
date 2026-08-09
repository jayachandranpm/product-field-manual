/* eslint-disable @next/next/no-assign-module-variable */

const L = (id, title, minutes, summary, keyMoves, practice, artifact) => ({
  id, title, minutes, summary, keyMoves, practice, artifact,
});

const courses = [
  {
    id: "c1", number: 1, title: "Product Foundations", short: "Foundations", level: "Beginner", weeks: "Weeks 1–2", hours: 14,
    description: "Build the mental models that separate product management from project coordination and feature delivery.",
    color: "#0056d2",
  },
  {
    id: "c2", number: 2, title: "Discovery & Product Design", short: "Discovery", level: "Beginner–Intermediate", weeks: "Weeks 3–4", hours: 18,
    description: "Turn assumptions into evidence, identify valuable problems, and validate solutions before expensive delivery.",
    color: "#7b2cbf",
  },
  {
    id: "c3", number: 3, title: "Strategy, Prioritization & Roadmaps", short: "Strategy", level: "Intermediate", weeks: "Weeks 5–6", hours: 17,
    description: "Make coherent product choices and communicate direction without disguising uncertainty as certainty.",
    color: "#067a6f",
  },
  {
    id: "c4", number: 4, title: "Metrics, Experiments & Growth", short: "Analytics", level: "Intermediate", weeks: "Weeks 7–8", hours: 19,
    description: "Design measurement systems, reason from data, run decision-grade experiments, and build healthy growth loops.",
    color: "#b54708",
  },
  {
    id: "c5", number: 5, title: "Execution, Technology & Go-to-Market", short: "Execution", level: "Intermediate–Advanced", weeks: "Weeks 9–10", hours: 20,
    description: "Move from validated bet to reliable launch with stronger product briefs, technical judgment, and commercial fluency.",
    color: "#c11574",
  },
  {
    id: "c6", number: 6, title: "Leadership, AI & Career Mastery", short: "Leadership + AI", level: "Advanced", weeks: "Weeks 11–12", hours: 22,
    description: "Lead empowered teams, build trustworthy AI products, master PM interviews, and produce a portfolio-ready capstone.",
    color: "#344054",
  },
];

const modules = [
  {
    id: "m01", course: "c1", number: 1, title: "The product manager’s real job", duration: "3h 10m", level: "Foundation",
    summary: "Define product management by the decisions and outcomes it owns, not by a universal list of meetings and documents.",
    project: "Product role charter", framework: "Outcome decision map",
    frameworkDefinition: "A product manager creates the conditions for a cross-functional team to discover and deliver customer value that advances the business. The job is a system of choices under uncertainty: what problem matters, for whom, why now, what evidence is sufficient, what tradeoff is acceptable, and how the team will know value was created.",
    steps: ["Name the customer and the progress they seek.", "Connect that progress to a business mechanism.", "List the irreversible and reversible decisions ahead.", "Assign decision roles across product, design, engineering, data, and go-to-market.", "Define evidence and outcome reviews before delivery starts."],
    caseStudy: "A collaboration team receives a request for ‘AI meeting summaries.’ A feature manager writes requirements. A product manager first asks whose follow-up work is failing, how often, what the cost is, whether summaries change completion behavior, and what privacy constraints could make the feature harmful. The deliverable changes from a feature spec to a testable outcome: increase on-time completion of meeting actions without increasing sensitive-data exposure.",
    checklist: ["Customer outcome is observable", "Business value mechanism is explicit", "Assumptions are separated from facts", "Decision owner and contributors are named", "Success and guardrail metrics are defined"],
    pitfalls: ["Treating stakeholder requests as validated needs", "Calling roadmap delivery an outcome", "Becoming the team secretary or mini-CEO", "Owning every decision instead of enabling the right decision"],
    sources: ["svpg-model", "bitsom"],
    check: { q: "Which statement best describes product management?", a: 2, options: ["Owning the engineering delivery schedule", "Writing every requirement before design starts", "Enabling a team to create customer and business value under uncertainty", "Collecting and ranking stakeholder feature requests"] },
    lessons: [
      L("l01", "Products, projects, and product management", 42, "Distinguish an enduring value system from a time-bounded delivery effort and understand why the distinction changes incentives.", ["Define a product by a repeated value exchange", "Separate product accountability from project coordination", "Map the feedback loop that keeps a product alive"], "Choose a product you use weekly. Write the producer, user, value exchange, feedback loop, and business mechanism in five lines.", "One-page product system map"),
      L("l02", "Outcomes over output", 48, "Translate feature and activity language into measurable changes in customer behavior and business performance.", ["Use the output → capability → behavior → outcome chain", "Write leading and lagging indicators", "Recognize outcome theater and metric substitution"], "Rewrite five roadmap items as user behaviors, business effects, assumptions, and guardrails.", "Outcome rewrite worksheet"),
      L("l03", "The PM decision surface", 46, "Clarify who decides, who contributes, and where product, design, engineering, and business expertise must converge.", ["Classify one-way and two-way door decisions", "Use decision rights instead of vague consensus", "Identify domain experts before the meeting"], "Create a RAPID-style decision map for one contentious product choice.", "Decision-rights map"),
      L("l04", "A week in the life of a strong PM", 54, "Design a weekly operating cadence around evidence, decisions, and team learning instead of calendar volume.", ["Protect discovery and thinking time", "Design rituals around decisions", "Close loops with decision logs and outcome reviews"], "Audit last week’s calendar. Label every block evidence, decision, delivery, communication, or waste; then redesign next week.", "Personal PM operating cadence"),
    ],
  },
  {
    id: "m02", course: "c1", number: 2, title: "Customer value & problem framing", duration: "3h 30m", level: "Foundation",
    summary: "Frame the customer’s struggle, desired progress, context, and alternatives before allowing a solution to dominate the conversation.",
    project: "Problem framing brief", framework: "Context–struggle–progress–outcome",
    frameworkDefinition: "A useful problem frame is specific enough to guide discovery but open enough to admit multiple solutions. It identifies a real actor, the triggering situation, the progress they are trying to make, the friction or risk in the current approach, the evidence available, and why solving it matters now.",
    steps: ["Start from a triggering situation, not a persona biography.", "Describe current behavior and workarounds.", "Name the functional, emotional, and social progress sought.", "Quantify frequency, severity, and cost of the status quo.", "Set boundaries: what is inside the problem and what is not."],
    caseStudy: "‘Small businesses need a cash-flow dashboard’ is a solution claim. Interviews reveal the real struggle: owners discover upcoming cash shortfalls too late to delay purchases or chase invoices. The problem frame becomes: when planning the next four weeks, owners need early warning of a likely cash gap and its drivers so they can intervene before payroll is at risk.",
    checklist: ["Names a real user and situation", "Describes evidence-backed current behavior", "Avoids interface and technology language", "Explains importance and urgency", "Includes non-goals and unknowns"],
    pitfalls: ["Confusing a loud complaint with a broad problem", "Writing a persona from demographics alone", "Using ‘users want’ without evidence", "Defining the problem so narrowly that only one solution fits"],
    sources: ["gov-needs", "iimb"],
    check: { q: "Which is the strongest solution-neutral user need?", a: 1, options: ["I need an AI churn dashboard", "I need to spot accounts at risk early enough to intervene", "I need red alerts beside risky customers", "I need weekly churn emails"] },
    lessons: [
      L("l01", "From requests to underlying needs", 49, "Learn to hear a request without mistaking it for the need that motivated it.", ["Use five whys without interrogating the user", "Separate need, constraint, preference, and solution", "Preserve verbatim evidence beside interpretation"], "Take ten support tickets and rewrite each request as a need hypothesis plus a question that could disprove it.", "Request-to-need evidence table"),
      L("l02", "Jobs, desired progress, and context", 55, "Use jobs thinking to explain why people switch, persist with imperfect tools, or do nothing.", ["Map trigger, push, pull, anxiety, and habit", "Capture functional, emotional, and social progress", "Treat non-consumption as an alternative"], "Interview one person about the last time they adopted a tool. Reconstruct the timeline and competing forces.", "Switch timeline"),
      L("l03", "Writing a decision-grade problem statement", 47, "Turn scattered observations into a bounded statement a team can act on and test.", ["Use actor + context + struggle + consequence", "Add evidence strength and uncertainty", "Write explicit non-goals"], "Write three progressively narrower problem frames and explain which decision each version enables.", "Problem framing brief"),
      L("l04", "Sizing importance without false precision", 59, "Combine qualitative intensity with behavioral, operational, and market evidence.", ["Estimate affected population and frequency", "Calculate cost of the status quo", "Use ranges and confidence instead of fake decimals"], "Build a low/base/high estimate for one problem and document the assumption with the largest swing.", "Opportunity sizing model"),
    ],
  },
  {
    id: "m03", course: "c1", number: 3, title: "Product sense & solution design", duration: "3h 45m", level: "Foundation",
    summary: "Move from a broad prompt to a focused user, prioritized problem, coherent concept, and measurable experience.",
    project: "Product concept deck", framework: "Frame–segment–prioritize–solve–measure",
    frameworkDefinition: "Product sense is structured judgment: the ability to notice what matters, connect user context to business advantage, generate distinct mechanisms, and make tradeoffs explicit. Frameworks create coverage; evidence and taste determine the quality of the choice.",
    steps: ["Clarify mission, goal, scope, and constraints.", "Segment by behavior or need, then select deliberately.", "Prioritize problems before features.", "Generate multiple mechanisms, not cosmetic variants.", "Design the critical flow, failure states, and measurement plan."],
    caseStudy: "Designing an airport experience for travelers with invisible disabilities begins with stressful transitions, disclosure choices, unpredictable queues, and handoffs—not a generic airport app. A strong concept combines an optional needs passport, discreet assistance signals, predictable wayfinding, and staff workflow changes, with privacy and misclassification guardrails.",
    checklist: ["Goal and scope are clear", "Segment choice is evidence-backed", "Problems are ranked before solutions", "Concepts use different mechanisms", "Critical path and edge cases are shown"],
    pitfalls: ["Jumping to favorite features", "Segmenting only by age or income", "Ignoring current alternatives", "Listing metrics without a causal link"],
    sources: ["iimb", "iimc", "brian-sense"],
    check: { q: "What should happen immediately before solution ideation?", a: 2, options: ["Pick a technology", "Estimate engineering effort", "Prioritize user problems", "Create a launch plan"] },
    lessons: [
      L("l01", "Clarify the product prompt", 43, "Create a useful frame when a prompt is broad, ambiguous, or intentionally under-specified.", ["State mission and product goal", "Declare assumptions without stalling", "Choose a sensible horizon and geography"], "Answer ‘design a product for commuters’ by writing the five clarifications that most change the solution space.", "Prompt framing canvas"),
      L("l02", "Segment users and choose a beachhead", 58, "Build mutually useful behavioral segments and make a defensible first choice.", ["Segment by needs, frequency, sophistication, or context", "Compare pain intensity, reach, and strategic fit", "Avoid averages that hide incompatible needs"], "Create three segmentations for the same product; select the one that best changes a product decision.", "Segment decision matrix"),
      L("l03", "Generate and select solution mechanisms", 62, "Create distinct ways to remove friction, reduce uncertainty, or change incentives.", ["Use eliminate, automate, guide, connect, and insure prompts", "Compare value, usability, feasibility, viability, and risk", "Choose a thin coherent wedge"], "Generate ten mechanisms for one problem; cluster them, then select a concept with explicit non-goals.", "Concept selection scorecard"),
      L("l04", "Design the end-to-end experience", 62, "Express the critical path, recovery, trust, accessibility, and service operations behind the interface.", ["Map entry, value moment, repeat loop, and exit", "Design empty, error, loading, and recovery states", "Instrument the experience without over-collecting data"], "Storyboard the happy path and three failure paths for your concept.", "Experience storyboard"),
    ],
  },
  {
    id: "m04", course: "c1", number: 4, title: "Accessibility, ethics & trust", duration: "3h 35m", level: "Foundation",
    summary: "Treat inclusion, privacy, safety, and customer trust as product requirements and discovery inputs—not compliance polish.",
    project: "Responsible product review", framework: "Benefit–burden–power–recourse",
    frameworkDefinition: "Responsible product judgment asks who receives the benefit, who carries the burden, who has meaningful choice, what can go wrong at scale, and how people can understand, contest, or recover from a consequential decision.",
    steps: ["Map direct, indirect, and excluded users.", "Identify sensitive moments, data, and power asymmetries.", "Run abuse, accessibility, and unintended-consequence scenarios.", "Reduce data and automate only within a clear accountability boundary.", "Design explanation, consent, appeal, support, and recovery."],
    caseStudy: "A lending app increases completed applications by preselecting optional data sharing. Conversion rises, but consent quality falls and assisted users are disproportionately confused. The product team replaces the default with progressive disclosure, a plain-language explanation, equivalent manual path, and a guardrail measuring informed opt-out and support contacts.",
    checklist: ["Disabled and edge users are included in research", "Consent is meaningful and reversible", "Sensitive data is minimized", "Harm and abuse cases have owners", "Users have recourse and recovery"],
    pitfalls: ["Using accessibility as a QA checklist only", "Optimizing consent acceptance instead of comprehension", "Assuming aggregate benefit distributes equally", "Hiding policy choices behind an algorithm"],
    sources: ["wcag", "gov-access", "nist-ai"],
    check: { q: "When should accessibility enter product work?", a: 0, options: ["During discovery and throughout the lifecycle", "Only during final QA", "After a user complaint", "Once the product is profitable"] },
    lessons: [
      L("l01", "Inclusive discovery and accessibility", 52, "Research with people who experience barriers and design accessibility into the product model.", ["Recruit beyond the convenient average", "Understand permanent, temporary, and situational barriers", "Use WCAG as a floor, not a substitute for research"], "Audit a core journey with keyboard-only, zoom, contrast, and screen-reader heuristics; write questions for disabled users.", "Inclusive research plan"),
      L("l02", "Privacy as a product decision", 49, "Connect data collection to user value, risk, retention, access, and deletion.", ["Practice data minimization", "Map purpose and access for every field", "Design privacy-preserving defaults"], "Create a data inventory for one feature and remove every field without a concrete decision or user benefit.", "Data purpose map"),
      L("l03", "Dark patterns, incentives, and trust", 55, "Recognize when short-term metric gains depend on confusion, pressure, asymmetry, or loss of agency.", ["Audit defaults and cancellation symmetry", "Pair conversion with comprehension and regret", "Model incentives across all sides"], "Red-team an onboarding or checkout flow for obstruction, hidden costs, forced action, and confirmshaming.", "Trust guardrail sheet"),
      L("l04", "Responsible product reviews", 59, "Create lightweight, repeatable governance that improves decisions without becoming theater.", ["Assign risk owners and escalation paths", "Use scenario-based evidence", "Define launch gates, monitoring, and recourse"], "Facilitate a 45-minute responsible-product review and convert risks into design changes or monitored acceptance.", "Risk and recourse register"),
    ],
  },

  {
    id: "m05", course: "c2", number: 5, title: "Discovery planning & assumptions", duration: "4h 15m", level: "Beginner–Intermediate",
    summary: "Turn a product bet into a prioritized learning plan across value, usability, feasibility, viability, adoption, and risk.",
    project: "Discovery plan", framework: "Assumption map + evidence ladder",
    frameworkDefinition: "Discovery reduces the uncertainty that could make a product decision wrong. Start by decomposing the bet into assumptions, rank them by importance and uncertainty, then choose the cheapest credible evidence that can change the decision.",
    steps: ["Write the outcome and decision to be made.", "List assumptions across six risk dimensions.", "Rank by consequence of being wrong and evidence weakness.", "Match method fidelity to the uncertainty.", "Timebox learning and predefine pivot, proceed, and stop signals."],
    caseStudy: "A team assumes freelancers will pay for automated tax estimates. Before building, it separates desirability (is uncertainty painful?), viability (will they pay enough?), feasibility (can data be categorized reliably?), usability (can they correct errors?), and trust risk. Interviews, a concierge estimate, and a pricing smoke test answer different assumptions.",
    checklist: ["Decision and outcome are explicit", "Riskiest assumptions are ranked", "Methods match questions", "Disconfirming evidence is defined", "Timebox and decision date exist"],
    pitfalls: ["Calling requirements gathering discovery", "Testing easy assumptions first", "Using one prototype to answer every question", "Continuing discovery without a decision threshold"],
    sources: ["svpg-discovery", "gov-discovery", "bitsom"],
    check: { q: "Which assumption should a team usually test first?", a: 3, options: ["The easiest one", "The one a stakeholder prefers", "The one with the cheapest prototype", "The uncertain one whose failure would invalidate the bet"] },
    lessons: [
      L("l01", "Discovery is decision risk reduction", 51, "Define discovery by the uncertainty it removes rather than by a list of workshops.", ["Separate problem and solution discovery", "Tie learning to a concrete decision", "Distinguish evidence, interpretation, and choice"], "Take one roadmap bet and write the exact decision discovery must enable within two weeks.", "Discovery decision statement"),
      L("l02", "Map the six product risks", 67, "Inspect value, usability, feasibility, viability, adoption, and responsibility before commitment.", ["Write assumptions as falsifiable claims", "Include operational and channel constraints", "Identify correlated risks"], "Create 20 assumptions for a real product bet and tag each by risk type.", "Six-risk assumption map"),
      L("l03", "Prioritize the riskiest assumptions", 58, "Focus scarce learning time on beliefs that are both weak and consequential.", ["Score uncertainty and consequence", "Use evidence freshness and relevance", "Surface executive assumptions safely"], "Plot assumptions on importance versus evidence strength and select the top three.", "Risk-priority matrix"),
      L("l04", "Build a two-week discovery sprint", 79, "Sequence research, prototypes, and technical checks around learning milestones.", ["Run parallel product trio tracks", "Set daily synthesis and decision points", "End with evidence, not a pitch deck"], "Plan ten working days with questions, methods, owners, participants, and decision rules.", "Two-week discovery plan"),
    ],
  },
  {
    id: "m06", course: "c2", number: 6, title: "Interviews, observation & research", duration: "4h 40m", level: "Beginner–Intermediate",
    summary: "Collect credible qualitative evidence about real behavior, context, workarounds, and decision forces.",
    project: "Research study + evidence log", framework: "Past behavior–specific context–neutral probe",
    frameworkDefinition: "Strong interviews reconstruct specific events. They ask what happened, when, with whom, what tools were used, what the participant did next, and why. Opinions about hypothetical futures are weaker evidence than demonstrated past behavior and observed constraints.",
    steps: ["Define research questions, not discussion topics.", "Recruit actual or likely users across relevant variation.", "Ask for a recent specific example.", "Probe sequence, artifacts, workarounds, emotion, and consequence.", "Debrief immediately and label observation versus inference."],
    caseStudy: "Instead of asking ‘Would you use collaborative budgeting?’ a researcher asks a couple to walk through the last time they planned a large expense. Conflicting spreadsheets, delayed conversations, separate accounts, and anxiety reveal coordination and trust problems a feature survey would miss.",
    checklist: ["Research questions map to decisions", "Participants match behavior criteria", "Questions avoid pitching", "Specific events and artifacts are captured", "Consent and data handling are clear"],
    pitfalls: ["Leading with the proposed solution", "Recruiting friends as representative users", "Treating stated willingness to pay as payment", "Converting every quote into a feature"],
    sources: ["gov-research", "gov-needs", "iimb"],
    check: { q: "Which question produces the strongest behavioral evidence?", a: 2, options: ["Would you use this feature?", "How useful is this idea from 1–10?", "Tell me about the last time this happened", "Do you agree this would save time?"] },
    lessons: [
      L("l01", "Write a focused research plan", 61, "Connect participant criteria and methods to the decisions the team must make.", ["Turn assumptions into research questions", "Choose depth, breadth, and method", "Plan consent, recording, and synthesis"], "Write a one-page plan with five research questions and a reason each answer could change the product.", "Research plan"),
      L("l02", "Conduct non-leading interviews", 74, "Use neutral prompts and disciplined follow-ups to reconstruct reality.", ["Open with context and recent events", "Use silence and laddering", "Avoid approval-seeking and solution validation"], "Run a 30-minute interview; mark every moment you suggested an answer and rewrite the question.", "Interview transcript critique"),
      L("l03", "Observation and contextual inquiry", 70, "See tacit knowledge, environmental constraints, and workarounds that are hard to verbalize.", ["Observe the real environment", "Ask users to teach the task", "Capture tools, handoffs, interruptions, and exceptions"], "Observe a repeated task for 20 minutes and create a timestamped behavior log without interpretation.", "Context observation log"),
      L("l04", "Recruitment, sampling, and research ethics", 75, "Recruit the right variation without pretending small qualitative samples are statistically representative.", ["Use behavior-based screeners", "Include edge and disabled users", "Protect privacy and compensate fairly"], "Create recruitment criteria, exclusions, quotas, and a screener for one research round.", "Recruitment screener"),
    ],
  },
  {
    id: "m07", course: "c2", number: 7, title: "Synthesis & opportunity mapping", duration: "4h 20m", level: "Intermediate",
    summary: "Turn messy research into traceable patterns, opportunities, and priority choices without laundering opinions into insights.",
    project: "Opportunity solution tree", framework: "Evidence → pattern → insight → opportunity",
    frameworkDefinition: "Synthesis is an argument built from traceable evidence. Observations become patterns when they recur meaningfully; patterns become insights when a credible explanation changes how the team sees the problem; insights become opportunities when they identify a valuable outcome or unmet need worth addressing.",
    steps: ["Centralize notes at the observation level.", "Cluster by behavior, need, context, or breakdown—not by desired feature.", "Write insights as evidence-backed explanations.", "Translate insights into outcome-oriented opportunities.", "Prioritize by importance, evidence, strategic fit, and solvability."],
    caseStudy: "A B2B onboarding study finds users repeatedly export configuration steps into shared documents. The pattern is not ‘users want export.’ The insight is that onboarding spans several roles and days, while the product assumes one uninterrupted admin session. The opportunity becomes preserving shared progress and handoffs across roles.",
    checklist: ["Every insight links to observations", "Contradictory evidence is retained", "Segments are not averaged away", "Opportunities are solution-neutral", "Priority rationale is explicit"],
    pitfalls: ["Affinity mapping toward the team’s favorite idea", "Counting quotes as market prevalence", "Calling a theme an insight", "Deleting outliers that expose risk"],
    sources: ["gov-needs", "svpg-insights", "mdi"],
    check: { q: "What makes an insight decision-useful?", a: 1, options: ["It contains a memorable quote", "It explains evidence in a way that changes a decision", "It appears on many sticky notes", "It directly recommends a feature"] },
    lessons: [
      L("l01", "Build a trustworthy evidence repository", 57, "Preserve source, segment, context, confidence, and interpretation so insights remain auditable.", ["Use atomic observations", "Tag without over-taxonomy", "Separate raw evidence from analyst notes"], "Turn one interview transcript into atomic evidence records with source and confidence.", "Evidence repository schema"),
      L("l02", "Find patterns without erasing difference", 65, "Cluster evidence while protecting segment-specific and contradictory signals.", ["Cluster by behavior and need", "Use negative cases to test patterns", "Distinguish prevalence from salience"], "Synthesize five interviews and write the strongest contradictory observation beside each pattern.", "Pattern board"),
      L("l03", "Write insights that explain", 60, "Move beyond summary statements to causal, surprising, and actionable explanations.", ["Use because/therefore structure", "State confidence and alternatives", "Link insight to changed belief"], "Rewrite five generic findings into explanatory insights with supporting and opposing evidence.", "Insight brief"),
      L("l04", "Opportunity solution trees", 78, "Connect an outcome to opportunities, solution options, and assumption tests without turning the tree into decoration.", ["Start from a measurable outcome", "Make opportunities distinct and evidence-backed", "Attach tests to solution assumptions"], "Build a three-level tree and select one opportunity with a written rationale.", "Opportunity solution tree"),
    ],
  },
  {
    id: "m08", course: "c2", number: 8, title: "Prototyping & validation", duration: "4h 45m", level: "Intermediate",
    summary: "Match prototype fidelity and validation method to the uncertainty, then make an honest proceed, pivot, or stop decision.",
    project: "Validated concept report", framework: "Question–prototype–signal–decision",
    frameworkDefinition: "A prototype is a learning instrument, not a miniature product. Its fidelity should be high only where realism is necessary to answer the question. Validity comes from matching method to uncertainty, observing behavior, and defining the decision rule before results create attachment.",
    steps: ["Name one uncertainty and its consequence.", "Choose the cheapest representation that preserves the relevant behavior.", "Define participants, task, signal, and threshold.", "Test comprehension, usability, demand, feasibility, or viability separately.", "Record evidence and decide without averaging away critical failures."],
    caseStudy: "A concierge pilot for automatic vendor reconciliation manually produces the promised output for ten finance teams. It tests whether the result changes review time and error detection before model automation. A clickable prototype separately tests correction and trust. A technical spike tests matching accuracy. One polished prototype could not credibly answer all three.",
    checklist: ["Learning question is singular and explicit", "Fidelity matches the risk", "Behavior matters more than compliments", "Success and failure thresholds exist", "Results lead to a documented decision"],
    pitfalls: ["Building production code to learn demand", "Using usability tests to claim market demand", "Asking participants to predict future use", "Calling any positive feedback validation"],
    sources: ["svpg-discovery", "iimb", "bitsom"],
    check: { q: "What determines appropriate prototype fidelity?", a: 0, options: ["The uncertainty the team must resolve", "The seniority of the stakeholder", "The final visual design", "The number of engineers available"] },
    lessons: [
      L("l01", "Choose the right prototype", 63, "Use storyboards, paper flows, clickable screens, concierge services, fake doors, or technical spikes deliberately.", ["Match prototype to risk", "Preserve only necessary realism", "Avoid combining incompatible tests"], "For six assumptions, select a prototype and explain what it can and cannot prove.", "Prototype strategy matrix"),
      L("l02", "Usability and concept testing", 78, "Separate comprehension, task success, perceived value, and preference.", ["Write realistic tasks", "Observe without rescuing", "Classify severity and root cause"], "Run five task-based sessions and calculate task success alongside qualitative breakdowns.", "Usability findings report"),
      L("l03", "Demand and viability tests", 71, "Test commitment, channel, pricing, and operational reality with honest experiments.", ["Use progressively stronger commitment signals", "Avoid deceptive fake doors", "Test willingness and ability to pay"], "Design a demand ladder from interest to time, data, reputation, and money commitment.", "Demand experiment plan"),
      L("l04", "Evidence reviews and kill decisions", 73, "Combine evidence, confidence, and downside to choose proceed, pivot, pause, or stop.", ["Review disconfirming evidence first", "Separate sunk cost from future value", "Write the trigger for reopening a stopped bet"], "Run an evidence review using a decision memo with recommendation, confidence, risks, and next evidence.", "Validation decision memo"),
    ],
  },

  {
    id: "m09", course: "c3", number: 9, title: "Vision, strategy & strategic insight", duration: "4h 30m", level: "Intermediate",
    summary: "Connect an enduring product future to a focused diagnosis, a chosen way to win, and coherent action.",
    project: "Product strategy memo", framework: "Diagnosis–guiding approach–coherent actions",
    frameworkDefinition: "Vision describes a valuable future. Goals define measurable progress. Strategy explains where to focus and how the organization will overcome the central challenge. Tactics are the current actions. A credible strategy makes attractive alternatives explicit and coordinates multiple actions around an insight or advantage.",
    steps: ["Describe the future and beneficiary without feature detail.", "Diagnose the market, customer, economics, technology, and capability situation.", "Identify the linchpin insight or constraint.", "Choose target, value proposition, and advantage.", "Commit coherent actions and explicit non-goals."],
    caseStudy: "A generic strategy says ‘use AI to grow enterprise revenue.’ A coherent strategy diagnoses that regulated teams abandon general copilots because outputs cannot be traced to approved evidence. It focuses on high-stakes review workflows, wins through citation-grounded generation and governance integration, and declines broad consumer creation features.",
    checklist: ["Diagnosis explains the core challenge", "Choice narrows target and approach", "Advantage is more than ‘better UX’", "Actions reinforce one another", "Non-goals are credible and painful"],
    pitfalls: ["Calling revenue targets strategy", "Confusing a roadmap with strategy", "Using trends instead of insights", "Writing non-goals nobody wanted anyway"],
    sources: ["svpg-strategy", "aws-strategy", "iimb"],
    check: { q: "Which combination is closest to a strategy?", a: 3, options: ["Mission plus feature roadmap", "Revenue target plus deadlines", "Vision plus OKRs", "Diagnosis plus guiding approach and coherent actions"] },
    lessons: [
      L("l01", "Vision, goals, strategy, and tactics", 58, "Create clean distinctions so conversations occur at the right altitude.", ["Write enduring vision without vagueness", "Use goals as constraints and scorecards", "Keep tactics revisable"], "Classify 20 statements from your organization and rewrite the mislabeled ones.", "Strategy stack"),
      L("l02", "Generate strategic insights", 74, "Find non-obvious truths in customer behavior, market structure, technology, economics, or capability.", ["Look for anomalies and workarounds", "Connect multiple evidence types", "Test whether an insight changes allocation"], "Create an insight inventory and explain what decision each item changes.", "Strategic insight brief"),
      L("l03", "Choose where to play and how to win", 69, "Commit to a target arena, value proposition, advantage, and enabling capabilities.", ["Define the market by customer job", "Name the alternative you must beat", "Separate advantage from table stakes"], "Write three distinct strategic choices and compare coherence, advantage, and risk.", "Choice cascade"),
      L("l04", "Write the product strategy memo", 69, "Communicate the argument, choices, evidence, actions, risks, and review cadence in a durable form.", ["Lead with decision and rationale", "Show evidence without data dumping", "Set strategic checkpoints"], "Write a two-page strategy memo that a team can use to accept and reject work.", "Product strategy memo"),
    ],
  },
  {
    id: "m10", course: "c3", number: 10, title: "Market, positioning & business models", duration: "4h 10m", level: "Intermediate",
    summary: "Understand the market as alternatives and value exchange, then align positioning, monetization, channel, and economics.",
    project: "Positioning and business model brief", framework: "Segment–alternative–value–proof–economics",
    frameworkDefinition: "Positioning establishes the context in which a target customer understands why a product matters. The business model explains how the organization captures enough value to sustain delivery. Both must align with the customer’s alternative, buying process, willingness to pay, cost to serve, and channel incentives.",
    steps: ["Choose the segment and urgent use case.", "Name the real competitive alternative, including manual work and doing nothing.", "State differentiated value and credible proof.", "Select value metric, packaging, price architecture, and channel.", "Model unit economics, adoption friction, and lifecycle effects."],
    caseStudy: "A developer observability tool initially positions against other dashboards. Interviews show smaller teams actually compete with ad hoc log searches and senior engineer interruptions. The product positions around shortening incident diagnosis without a dedicated SRE team, prices by monitored service rather than seats, and proves value through reduced mean time to restore.",
    checklist: ["Target and use case are narrow", "Alternative is behaviorally real", "Value is differentiated and provable", "Pricing metric tracks customer value", "Economics include support and channel cost"],
    pitfalls: ["Defining the market by product category only", "Pricing from competitor averages", "Using every customer as the target", "Ignoring buyer, user, approver, and blocker differences"],
    sources: ["iimb", "iimc", "aws-strategy"],
    check: { q: "What is usually the most important competitive alternative?", a: 2, options: ["The market leader", "The newest startup", "What the customer actually does today, including nothing", "The product with the closest feature list"] },
    lessons: [
      L("l01", "Market structure and alternatives", 58, "Map category, substitutes, complements, ecosystem power, and switching constraints.", ["Use job-based market boundaries", "Identify asymmetric competitors", "Track regulation, technology, and distribution shifts"], "Create an alternative map including direct, indirect, manual, and non-consumption paths.", "Market structure map"),
      L("l02", "Segmentation and positioning", 66, "Write a positioning argument for a target that has an urgent reason to care.", ["Separate market segment from persona", "Name the frame of reference", "Support claims with proof"], "Draft three positioning variants for different segments and test comprehension with five people.", "Positioning canvas"),
      L("l03", "Business models and unit economics", 65, "Connect revenue mechanics to acquisition, delivery, support, retention, and margin.", ["Model CAC, contribution margin, retention, and payback", "Understand marketplace take rates", "Include variable AI and infrastructure costs"], "Build a unit economics tree with low/base/high cases.", "Unit economics model"),
      L("l04", "Pricing, packaging, and value metrics", 61, "Design how customers buy and expand without turning complexity into hidden friction.", ["Choose a value-aligned billing unit", "Separate good-better-best with meaningful fences", "Plan research and price-change communication"], "Design three packages and stress-test fairness, predictability, expansion, and cost coverage.", "Pricing architecture"),
    ],
  },
  {
    id: "m11", course: "c3", number: 11, title: "Prioritization & roadmaps", duration: "4h 15m", level: "Intermediate",
    summary: "Choose among valuable options with transparent criteria and communicate direction without false precision.",
    project: "Outcome roadmap + decision log", framework: "Strategic fit–value–evidence–risk–effort",
    frameworkDefinition: "Prioritization is resource allocation in service of strategy. Scoring models can expose assumptions, but they cannot make the decision. A good roadmap communicates the problems and outcomes the team intends to pursue, their sequence and confidence, and what evidence could change the plan.",
    steps: ["Set criteria and units before discussing initiatives.", "Screen for strategy and non-negotiable constraints.", "Estimate value, reach, evidence, risk, and total effort.", "Compare opportunity cost and portfolio balance.", "Record the call, dissent, assumptions, and revisit trigger."],
    caseStudy: "RICE ranks a minor onboarding optimization above an enterprise identity capability. The score misses that identity unlocks the chosen enterprise segment and reduces sales friction across several bets. The team uses RICE as input, documents the strategic override, funds a technical spike, and keeps a measurable adoption outcome rather than promising ‘SSO in Q3.’",
    checklist: ["Criteria match strategy", "Scores use compatible units", "Dependencies and risk are visible", "Opportunity cost is named", "Roadmap communicates outcomes and confidence"],
    pitfalls: ["Letting decimals imply certainty", "Mixing annual reach with monthly effort", "Scoring politics after the decision", "Turning now/next/later into hidden fixed dates"],
    sources: ["iimb", "iimc", "mdi"],
    check: { q: "What is the best role for a RICE score?", a: 1, options: ["Automatically determine the roadmap", "Expose and compare assumptions as one input to judgment", "Replace product strategy", "Guarantee stakeholder agreement"] },
    lessons: [
      L("l01", "Set decision criteria before scoring", 55, "Translate strategy into filters and weighted criteria that can distinguish options.", ["Use must-pass strategic screens", "Define units and time horizon", "Include downside and learning value"], "Facilitate a criteria-setting session before anyone presents preferred initiatives.", "Priority criteria charter"),
      L("l02", "RICE, ICE, WSJF, Kano, and MoSCoW", 72, "Understand the question each framework answers, its biases, and when it becomes misleading.", ["Calculate consistently", "Run sensitivity analysis", "Choose a model for the decision horizon"], "Score the same initiatives with two models and explain why rankings differ.", "Prioritization comparison sheet"),
      L("l03", "Outcome-based roadmaps", 62, "Express direction through customer problems, outcomes, evidence, and confidence rather than feature promises.", ["Use now/next/later intentionally", "Connect outcomes to strategy", "Attach discovery state and guardrails"], "Convert a feature roadmap into an outcome roadmap with explicit uncertainty.", "Outcome roadmap"),
      L("l04", "Say no, sequence bets, and revisit", 66, "Make rejection respectful, evidence-based, and reversible when assumptions change.", ["Name opportunity cost", "Offer decision logic, not excuses", "Set revisit signals instead of vague parking lots"], "Write three ‘no for now’ responses for an executive, customer, and engineering partner.", "Decision and revisit log"),
    ],
  },
  {
    id: "m12", course: "c3", number: 12, title: "Stakeholders & decision narratives", duration: "4h 05m", level: "Intermediate",
    summary: "Create alignment through shared evidence, explicit disagreement, decision rights, and durable narratives—not meeting volume.",
    project: "Executive decision memo", framework: "Context–tension–options–recommendation–commitment",
    frameworkDefinition: "Stakeholder management is not making everyone happy. It is designing a decision process in which relevant knowledge, incentives, constraints, and dissent surface early enough to improve the call, while a clear owner remains accountable for the decision.",
    steps: ["Map power, knowledge, impact, and incentives.", "Pre-wire to discover concerns, not manufacture consent.", "Frame the decision and criteria in writing.", "Represent alternatives and dissent fairly.", "Record the decision, commitments, unresolved risks, and review date."],
    caseStudy: "Sales wants a custom workflow for a large prospect; engineering warns it will fragment the platform. The PM quantifies revenue and repeatability, identifies the underlying compliance need across target accounts, proposes a configurable capability rather than a fork, and secures a staged commitment with adoption and maintenance thresholds.",
    checklist: ["Decision owner is clear", "Stakeholders are mapped by more than title", "Alternatives receive fair treatment", "Dissent is documented", "Commitments and follow-up are explicit"],
    pitfalls: ["Equating alignment with unanimity", "Surprising decision makers in the final meeting", "Presenting only the preferred option", "Using a deck when a durable memo is needed"],
    sources: ["iimb", "brian-behavioral", "amazon-questions"],
    check: { q: "What does healthy product alignment require?", a: 3, options: ["Every stakeholder gets a requested feature", "All decisions are made by consensus", "Disagreement is avoided", "Relevant disagreement is surfaced and a clear owner decides"] },
    lessons: [
      L("l01", "Map stakeholders, incentives, and knowledge", 56, "See beyond org charts to who holds power, context, risk, and implementation knowledge.", ["Map influence and impact", "Identify incentive conflicts", "Include external and operational stakeholders"], "Create a stakeholder map for one cross-functional bet and write what each party knows that you need.", "Stakeholder system map"),
      L("l02", "Pre-wire and facilitate hard decisions", 61, "Prepare a decision without turning pre-alignment into political theater.", ["Interview for constraints and objections", "Separate fact disputes from value tradeoffs", "Use facilitation to preserve productive conflict"], "Plan a decision meeting with pre-reads, criteria, roles, and an escalation path.", "Decision meeting design"),
      L("l03", "Write executive product narratives", 70, "Compress complexity without removing uncertainty, tradeoffs, or asks.", ["Lead with recommendation", "Use a narrative arc grounded in evidence", "Make the executive ask explicit"], "Write a six-paragraph memo for a decision with two credible alternatives.", "Executive decision memo"),
      L("l04", "Influence without authority", 58, "Build trust through reliable reasoning, domain empathy, and visible follow-through.", ["Earn credibility before persuasion", "Translate across functional languages", "Use commitments and feedback loops"], "Choose a stalled initiative and design one week of evidence, conversation, and commitment moves.", "Influence plan"),
    ],
  },

  {
    id: "m13", course: "c4", number: 13, title: "Measurement systems & North Stars", duration: "4h 40m", level: "Intermediate",
    summary: "Build a metric system that connects recurring customer value to business value, controllable inputs, and protective guardrails.",
    project: "North Star metric tree", framework: "Outcome–signal–metric–decision",
    frameworkDefinition: "Metrics are compressed evidence for decisions. A North Star should represent recurring value experienced by the customer, connect plausibly to durable business value, and be influenceable by the product team. Inputs explain how value is created; guardrails expose quality loss, harm, or gaming.",
    steps: ["Define the product’s value exchange and maturity stage.", "Write the desired outcome before the metric.", "Choose observable signals and precise definitions.", "Decompose the North Star into input levers.", "Add quality, safety, ecosystem, and business guardrails."],
    caseStudy: "A marketplace rejects gross bookings as its sole North Star because discounts can inflate it while fulfillment deteriorates. It uses weekly successfully completed jobs with both sides satisfied, decomposed into qualified demand, provider availability, match rate, acceptance, completion, and satisfaction, with cancellation, safety, and contribution-margin guardrails.",
    checklist: ["Metric represents experienced value", "Definition includes population and window", "Inputs are causally plausible", "Guardrails reveal gaming and harm", "Every metric has an owner and decision"],
    pitfalls: ["Choosing revenue for an early value loop", "Using active users without defining meaningful activity", "Building a dashboard with no decisions", "Creating a composite index nobody understands"],
    sources: ["google-heart", "metrics-playbook", "iimb"],
    check: { q: "Which is the strongest North Star for a home-services marketplace?", a: 2, options: ["App downloads", "Provider profiles viewed", "Weekly completed jobs with both sides satisfied", "Push notifications sent"] },
    lessons: [
      L("l01", "Goal–signal–metric discipline", 65, "Translate a product goal into observable evidence and a precise quantitative definition.", ["Keep goals qualitative and directional", "Use signals as observable behavior", "Define numerator, denominator, window, and segment"], "Write three GSM chains and ask what decision a movement in each metric triggers.", "GSM worksheet"),
      L("l02", "Choose a credible North Star", 71, "Select a value measure appropriate to product type, maturity, and ecosystem.", ["Test customer value and business linkage", "Avoid vanity and lag-only metrics", "Use ecosystem value for marketplaces"], "Generate five candidate North Stars and score value, durability, influence, measurability, and gaming risk.", "North Star decision memo"),
      L("l03", "Build input and guardrail trees", 72, "Decompose outcomes into controllable levers and counter-metrics.", ["Use a causal rather than decorative tree", "Identify quantity, quality, and efficiency", "Add counterfactual thinking"], "Build a metric tree to three levels and label leading, lagging, diagnostic, and guardrail measures.", "Metric tree"),
      L("l04", "HEART and user-centered measurement", 72, "Apply happiness, engagement, adoption, retention, and task success selectively through goals, signals, and metrics.", ["Choose dimensions relevant to the decision", "Combine attitudinal and behavioral evidence", "Scope HEART to a product or journey"], "Build a HEART table for onboarding and remove every metric that does not support a decision.", "HEART scorecard"),
    ],
  },
  {
    id: "m14", course: "c4", number: 14, title: "Funnels, cohorts & product analytics", duration: "4h 50m", level: "Intermediate",
    summary: "Diagnose product behavior with reliable definitions, segmented funnels, cohorts, retention curves, and causal restraint.",
    project: "Analytics investigation", framework: "Validate–scope–segment–hypothesize–verify",
    frameworkDefinition: "Product analytics begins with instrumentation and definition quality. When a metric moves, validate the data, scope the change across time and segments, locate the journey stage, generate competing hypotheses, and seek discriminating evidence before assigning a cause.",
    steps: ["Validate definition, event health, and comparison period.", "Scope when the change began and who is affected.", "Segment by platform, geography, channel, cohort, plan, and behavior.", "Localize the change in the funnel or loop.", "Test release, product, market, operational, and instrumentation hypotheses."],
    caseStudy: "Activation drops 18% on Android in one country. The team first verifies event delivery, then finds the drop starts after a mobile release and only affects devices using a regional identity provider. Session replay and logs reveal a redirect loop. A global onboarding redesign would have wasted weeks.",
    checklist: ["Metric definition is validated", "Comparison accounts for seasonality", "Segments are decision-relevant", "Cohorts share a meaningful start", "Correlation is not claimed as cause"],
    pitfalls: ["Starting with a favorite cause", "Averaging platform or acquisition mixes", "Using retention without a meaningful activity", "Changing metric definitions silently"],
    sources: ["metrics-playbook", "brian-analytics", "iimb"],
    check: { q: "What is the first response to a sudden KPI drop?", a: 0, options: ["Validate the metric and scope the change", "Brainstorm features", "Escalate the roadmap", "Run a broad survey"] },
    lessons: [
      L("l01", "Instrumentation and metric contracts", 66, "Create trusted events, properties, identity rules, ownership, and definition change control.", ["Write event semantics", "Handle identity and deduplication", "Monitor event completeness and latency"], "Write a metric contract for activation with events, edge cases, owner, and QA checks.", "Metric contract"),
      L("l02", "Funnels and journey diagnosis", 72, "Use step conversion, time-to-complete, paths, and segments to find meaningful friction.", ["Define eligible populations", "Avoid linear funnels for nonlinear journeys", "Combine drop-off with qualitative evidence"], "Analyze a five-step funnel and propose three discriminating follow-up cuts.", "Funnel diagnosis"),
      L("l03", "Cohorts and retention", 78, "Separate product health from acquisition mix and read retention as repeated value behavior.", ["Choose acquisition or behavior cohorts", "Use classic, rolling, and bracket retention", "Look for curves, resurrection, and habit frequency"], "Build a retention table and explain what would count as a healthy curve for the product cadence.", "Cohort analysis"),
      L("l04", "Root-cause analysis for PMs", 74, "Investigate metric changes with competing hypotheses, evidence trees, and operational partnership.", ["Scope before cause", "Use issue trees across internal and external factors", "Close with remediation and prevention"], "Run a 30-minute RCA simulation on a conversion drop and document ruled-out causes.", "RCA evidence tree"),
    ],
  },
  {
    id: "m15", course: "c4", number: 15, title: "Experimentation & causal decisions", duration: "4h 55m", level: "Intermediate–Advanced",
    summary: "Design experiments that can change a decision, interpret uncertainty honestly, and avoid common statistical and product traps.",
    project: "Experiment preregistration + readout", framework: "Hypothesis–design–decision rule–readout",
    frameworkDefinition: "A decision-grade experiment states the population, intervention, comparison, causal mechanism, primary outcome, guardrails, minimum meaningful effect, assignment method, duration, and action for likely result patterns before the team sees the data.",
    steps: ["Write a falsifiable hypothesis and mechanism.", "Choose unit of randomization and exposure.", "Set primary metric, guardrails, and minimum meaningful effect.", "Estimate sample and duration; validate allocation health.", "Read statistical and practical significance, segments, and long-term risk."],
    caseStudy: "A recommendation change lifts watch time 3% but increases ‘not interested’ actions 14% and shows no retention gain. The team does not ship on the local metric. It inspects segment harm, novelty, and content diversity, then iterates the objective and guardrails.",
    checklist: ["Hypothesis includes a mechanism", "Primary metric is singular", "Guardrails cover downside", "Stop rule is precommitted", "Decision uses practical significance"],
    pitfalls: ["Peeking and stopping at significance", "Testing many metrics and reporting the winner", "Ignoring sample ratio mismatch", "Treating no significance as proof of no effect"],
    sources: ["microsoft-exp", "metrics-playbook", "iimb"],
    check: { q: "What most improves experiment credibility?", a: 1, options: ["Stopping when p < .05", "Predefining metrics, duration, effect threshold, and decision rules", "Testing many segments until one wins", "Combining several unrelated changes"] },
    lessons: [
      L("l01", "Hypotheses and causal mechanisms", 64, "Write what will change, for whom, why, and what observation would weaken the belief.", ["Specify intervention and population", "Name the mechanism", "Distinguish prediction from explanation"], "Rewrite five vague experiment ideas as falsifiable mechanism hypotheses.", "Hypothesis register"),
      L("l02", "Design online controlled experiments", 82, "Choose randomization, exposure, metrics, power, and duration that match the product system.", ["Select user, session, device, or cluster assignment", "Prevent contamination", "Plan ramp and sample health checks"], "Draft an A/B test design and list every way treatment could leak into control.", "Experiment design"),
      L("l03", "Interpret results without fooling yourself", 81, "Balance uncertainty, effect size, guardrails, novelty, segments, and business consequences.", ["Read confidence intervals", "Distinguish statistical from practical value", "Control exploratory analysis"], "Write ship, iterate, and stop arguments for the same ambiguous result.", "Experiment readout"),
      L("l04", "Experiment programs and ethics", 68, "Build trustworthy experimentation operations with review, monitoring, knowledge reuse, and user protection.", ["Use exposure and metric governance", "Avoid harmful or deceptive tests", "Archive null results and learnings"], "Design a lightweight experiment review with risk tiers and required evidence.", "Experiment governance guide"),
    ],
  },
  {
    id: "m16", course: "c4", number: 16, title: "Growth, retention & marketplaces", duration: "4h 35m", level: "Intermediate–Advanced",
    summary: "Build growth from repeated customer value, sound activation, durable retention, loops, and balanced ecosystem health.",
    project: "Growth model", framework: "Acquisition–activation–retention–monetization–referral",
    frameworkDefinition: "Growth is the compounding distribution and retention of customer value, not a bag of acquisition tactics. Sustainable systems connect an early value moment to a repeat habit, a viable business model, and loops where product use creates inputs for future growth.",
    steps: ["Define the core value event and natural frequency.", "Find the activation milestone correlated with retention.", "Diagnose retention by cohort and segment.", "Model acquisition channels and growth loops separately.", "Balance quantity, quality, liquidity, safety, and economics."],
    caseStudy: "A learning app optimizes registrations and reminders but completion stays flat. Analysis shows learners who finish one short practice within 24 hours are three times likelier to return in week two. The team redesigns onboarding around immediate practice, not profile completion, and guardrails reminder opt-outs and shallow streak behavior.",
    checklist: ["Activation predicts future value", "Retention matches product cadence", "Loops have measurable cycle time", "Marketplace sides are balanced", "Monetization does not destroy the value loop"],
    pitfalls: ["Calling paid acquisition a growth loop", "Using sign-up as activation", "Optimizing one marketplace side", "Rewarding activity that reduces value quality"],
    sources: ["metrics-playbook", "iimb", "iimc"],
    check: { q: "Why is activation often stronger than registration?", a: 3, options: ["It is easier to count", "It always occurs on day one", "It replaces retention", "It captures an early value behavior associated with return"] },
    lessons: [
      L("l01", "Activation and the first value moment", 64, "Find the earliest behavior that demonstrates value and predicts durable use.", ["Separate setup from value", "Use behavioral correlations carefully", "Design time-to-value experiments"], "Analyze an onboarding journey and propose an activation event with evidence needed to validate it.", "Activation brief"),
      L("l02", "Retention, resurrection, and habit", 70, "Design around natural frequency and diagnose why users continue, lapse, or return.", ["Use meaningful activity retention", "Segment by use case and acquisition", "Map triggers, ability, motivation, and reward"], "Interview three retained and three lapsed users about a specific use cycle.", "Retention diagnosis"),
      L("l03", "Growth loops and channel economics", 72, "Model how use produces new or more valuable use through content, collaboration, referrals, data, or paid channels.", ["Draw loop nodes and conversion rates", "Estimate cycle time and saturation", "Separate loops from funnels"], "Build a quantitative loop and identify the constraint with the highest leverage.", "Growth loop model"),
      L("l04", "Marketplace liquidity and ecosystem health", 69, "Measure match quality, time, density, incentives, trust, and cross-side retention.", ["Define the atomic network", "Balance supply and demand locally", "Guardrail safety, fairness, and multi-homing"], "Create a marketplace health dashboard for one city or category.", "Marketplace metric system"),
    ],
  },

  {
    id: "m17", course: "c5", number: 17, title: "Product briefs, agile & team flow", duration: "4h 45m", level: "Intermediate",
    summary: "Translate a validated bet into shared context, sliced value, acceptance, and a team cadence that preserves learning.",
    project: "Launch-ready product brief", framework: "Context–outcome–scope–experience–evidence–risk",
    frameworkDefinition: "A product brief is a living decision artifact. It aligns the team on why the problem matters, what outcome is expected, who is affected, what evidence supports the bet, what is in and out, how the experience should behave, how success will be measured, and which risks remain open.",
    steps: ["Write context, outcome, users, and evidence.", "Define scope and non-goals around a coherent value slice.", "Describe experience principles, critical flow, and edge cases.", "Set acceptance, analytics, rollout, and operational readiness.", "Track open decisions rather than hiding them in prose."],
    caseStudy: "A team planning ‘saved searches’ reframes the slice around recruiters returning to a high-value candidate set. The first release supports one named search, change detection, and an email summary; it excludes shared folders and complex rules. Acceptance covers empty results, deleted candidates, permissions, unsubscribe, analytics, and rollback.",
    checklist: ["Brief explains why and why now", "Scope is a coherent value slice", "Non-goals protect focus", "Edge cases and instrumentation exist", "Open risks have owners and dates"],
    pitfalls: ["Writing a solution novel before discovery", "Using stories as mini contracts", "Slicing by technical layer", "Calling sprint velocity customer value"],
    sources: ["scrum", "iimb", "bitsom"],
    check: { q: "What makes a strong first release?", a: 2, options: ["Every requested feature", "The smallest amount of engineering work", "A thin, end-to-end slice that delivers testable value", "A complete backend without UI"] },
    lessons: [
      L("l01", "Write a product brief people use", 70, "Create a concise source of truth for context, decisions, scope, metrics, and risk.", ["Write for cross-functional decisions", "Keep evidence linked", "Use open questions and changelog"], "Draft a two-page brief and ask each function to mark unclear decisions.", "Product brief"),
      L("l02", "Slice outcomes into releasable value", 71, "Reduce batch size without reducing the release to disconnected technical tasks.", ["Slice by workflow and risk", "Use walking skeletons", "Separate must-work from later depth"], "Break one large initiative into three independently valuable and learnable releases.", "Release slice map"),
      L("l03", "Stories, acceptance, and edge cases", 69, "Use examples and criteria to create shared understanding of behavior and quality.", ["Write behavior from user context", "Use given/when/then selectively", "Cover permissions, failure, empty, and recovery states"], "Write acceptance examples for one happy path and five high-risk edge cases.", "Acceptance suite"),
      L("l04", "Scrum, Kanban, and healthy flow", 75, "Choose operating practices that improve focus, inspection, adaptation, throughput, and reliability.", ["Understand WIP and cycle time", "Use sprint goals as outcomes", "Separate cadence from dogma"], "Map team flow from ready to learning complete and identify queues and rework.", "Flow improvement plan"),
    ],
  },
  {
    id: "m18", course: "c5", number: 18, title: "Technical fluency for PMs", duration: "5h 20m", level: "Intermediate–Advanced",
    summary: "Reason about APIs, data, systems, tradeoffs, security, and cost well enough to ask better product questions.",
    project: "System and API decision map", framework: "Request–compute–store–respond–observe",
    frameworkDefinition: "Technical fluency is not pretending to be the architect. It is understanding the system boundaries, critical path, contracts, data, failure modes, scale assumptions, security responsibilities, and cost drivers that shape customer and business choices.",
    steps: ["Trace a user action across client, network, services, storage, and third parties.", "Define API inputs, outputs, authentication, limits, and errors.", "Map data creation, sensitivity, ownership, retention, and deletion.", "Set reliability, latency, consistency, throughput, and recovery needs.", "Model cost and observability at the relevant scale."],
    caseStudy: "A PM asks for real-time inventory across 5,000 stores. Technical mapping reveals partner updates arrive in batches, identifiers are inconsistent, and false availability causes expensive cancellations. The decision shifts from ‘real time everywhere’ to freshness tiers, confidence labels, reconciliation, and a reservation flow for high-risk items.",
    checklist: ["Critical path is understandable", "Contracts and failures are explicit", "Data sensitivity and retention are mapped", "Nonfunctional needs match user stakes", "Cost grows sustainably with value"],
    pitfalls: ["Using architecture terms without decision relevance", "Demanding five nines for low-stakes flows", "Ignoring third-party failure", "Treating security as a final review"],
    sources: ["dora", "bitsom", "iimb"],
    check: { q: "What is the PM’s goal in system design discussions?", a: 1, options: ["Choose every implementation detail", "Understand constraints and make better customer/business tradeoffs", "Replace the technical lead", "Maximize architectural complexity"] },
    lessons: [
      L("l01", "APIs, contracts, and integrations", 78, "Understand requests, responses, authentication, idempotency, rate limits, webhooks, and versioning.", ["Read an API contract", "Design error and retry behavior", "Protect consumers from breaking changes"], "Write a plain-language API contract for creating and tracking an order.", "API product spec"),
      L("l02", "Data models, events, and analytics", 82, "Connect product behavior to entities, relationships, state, events, and trustworthy measurement.", ["Distinguish transactional and analytical data", "Define entity identity and state", "Plan lineage and deletion"], "Model the core entities and events for a subscription product.", "Data and event map"),
      L("l03", "Systems, scale, and reliability", 86, "Reason about latency, throughput, availability, consistency, queues, caches, and graceful degradation.", ["Trace the critical path", "Use SLOs from user expectations", "Design partial failure and recovery"], "Run a scale thought experiment at 10× volume and identify the first three product-relevant bottlenecks.", "System tradeoff map"),
      L("l04", "Security, privacy, and platform thinking", 74, "Map trust boundaries, permissions, abuse, ecosystem incentives, and governance.", ["Use least privilege", "Model threats and abuse cases", "Design platform rules and developer experience"], "Threat-model one core flow with assets, actors, threats, controls, and user recovery.", "Product threat model"),
    ],
  },
  {
    id: "m19", course: "c5", number: 19, title: "Delivery, quality & reliability", duration: "4h 45m", level: "Intermediate–Advanced",
    summary: "Release incrementally, operate responsibly, and use delivery health as a product capability rather than a project afterthought.",
    project: "Rollout and reliability plan", framework: "Prepare–expose–observe–decide–recover",
    frameworkDefinition: "A launch is a controlled change to a live socio-technical system. Product and engineering jointly define readiness, exposure, monitoring, decision thresholds, support, communication, and rollback so the team can learn without transferring avoidable risk to customers.",
    steps: ["Run pre-mortem and define readiness gates.", "Use flags, cohorts, canaries, and staged exposure.", "Monitor customer, business, system, and support signals.", "Set proceed, pause, rollback, and escalation thresholds.", "Review incidents and outcomes, then improve the system."],
    caseStudy: "A payment change launches to employees, then 1%, 10%, and 50% of eligible traffic. Authorization improves, but duplicate charges rise above the guardrail at 10%. An automated kill switch stops exposure, support receives affected accounts, and the team traces a retry idempotency flaw before resuming.",
    checklist: ["Readiness is cross-functional", "Exposure can be controlled", "Monitoring covers customer and system", "Rollback is tested", "On-call and communication owners exist"],
    pitfalls: ["Treating release as completion", "Monitoring averages only", "Owning metrics without alerts or action", "Writing a postmortem that blames an individual"],
    sources: ["dora", "scrum", "iimb"],
    check: { q: "What is the safest general rollout pattern for a high-risk change?", a: 2, options: ["Release to everyone at once", "Wait for perfection", "Stage exposure with guardrails and rollback", "Hide incidents until after launch"] },
    lessons: [
      L("l01", "Launch readiness and pre-mortems", 66, "Imagine failure before launch and convert stories into controls, owners, and decisions.", ["Cover product, technical, legal, support, and GTM readiness", "Use leading signals", "Practice rollback and communication"], "Run a pre-mortem with ten failure stories and prioritize by likelihood and consequence.", "Launch readiness review"),
      L("l02", "Feature flags and staged rollouts", 70, "Separate deploy from release and manage exposure as a product variable.", ["Choose cohorts and ramps", "Avoid flag debt", "Use holdouts and kill switches"], "Design a four-stage rollout with entry, exit, and rollback criteria.", "Rollout plan"),
      L("l03", "DORA, SLOs, and delivery health", 75, "Use flow and reliability measures to improve learning speed and customer trust.", ["Understand deployment frequency, lead time, failed deployment recovery, and change fail rate", "Set user-centered SLOs", "Balance speed and stability"], "Build a delivery health review that connects system measures to customer outcomes.", "Delivery scorecard"),
      L("l04", "Incidents, postmortems, and learning", 74, "Respond clearly, reduce harm, and improve systems without blame.", ["Establish incident roles", "Communicate impact and recovery", "Find contributing conditions and durable actions"], "Write a blameless postmortem from a sample incident timeline.", "Incident learning review"),
    ],
  },
  {
    id: "m20", course: "c5", number: 20, title: "Go-to-market & lifecycle", duration: "5h 10m", level: "Intermediate–Advanced",
    summary: "Coordinate product, market, sales, support, operations, and economics from launch through adoption, maturity, and sunset.",
    project: "GTM and lifecycle plan", framework: "Audience–promise–proof–channel–readiness–learning",
    frameworkDefinition: "Go-to-market is how a chosen customer discovers, understands, buys, adopts, and realizes value from the product. A launch plan aligns audience, positioning, channel, enablement, product readiness, operational readiness, measures, and response—not just an announcement date.",
    steps: ["Define audience, buyer, user, trigger, and promise.", "Match launch tier and channels to strategic importance.", "Build product, data, sales, support, legal, and operations readiness.", "Instrument awareness, consideration, activation, adoption, retention, and economics.", "Plan iteration, expansion, maturity management, and sunset."],
    caseStudy: "An enterprise workflow product ships generally available but adoption stalls. The missing work is organizational: admins need security documentation, managers need rollout templates, users need migrated defaults, and customer success needs adoption diagnostics. The revised GTM treats enablement and change management as part of the product.",
    checklist: ["Promise matches the product’s evidence", "Buyer and user journeys are distinct", "Internal teams are enabled", "Adoption and retention are instrumented", "Maturity and exit criteria exist"],
    pitfalls: ["Equating launch with press", "Measuring sign-ups without adoption", "Setting price independently of packaging", "Keeping zombie products without a customer transition"],
    sources: ["iimb", "iimc", "aws-working"],
    check: { q: "When is a product launch complete?", a: 3, options: ["When the press release is published", "When engineering deploys", "When sales is trained", "When the team has evidence of adoption, value, and operational stability"] },
    lessons: [
      L("l01", "Build the go-to-market strategy", 80, "Connect target, positioning, channel, buying motion, enablement, and readiness.", ["Map buyer, user, approver, and blocker", "Choose product-led, sales-led, partner, or hybrid motion", "Set launch tiers"], "Write a GTM strategy for one segment with a channel rationale.", "GTM strategy"),
      L("l02", "Launch planning and enablement", 77, "Coordinate deliverables, dependencies, gates, owners, and contingency across the business.", ["Create a readiness matrix", "Enable sales, support, success, and operations", "Plan internal and external communication"], "Build a launch RACI and readiness checklist with red/amber/green criteria.", "Launch command plan"),
      L("l03", "Adoption, change, and expansion", 78, "Help customers change behavior and realize value after access is granted.", ["Map adoption milestones", "Design admin and champion journeys", "Use health signals and interventions"], "Create a 30-day adoption playbook with triggers and owners.", "Adoption plan"),
      L("l04", "Maturity, portfolio fit, and sunset", 75, "Manage declining growth, optimize economics, consolidate overlap, and retire products with dignity.", ["Diagnose maturity structurally", "Set invest, maintain, harvest, or sunset choices", "Protect data portability and customer transition"], "Write a sunset decision memo and customer migration timeline.", "Lifecycle decision plan"),
    ],
  },

  {
    id: "m21", course: "c6", number: 21, title: "Product leadership & portfolios", duration: "5h 20m", level: "Advanced",
    summary: "Create context, team topology, portfolio choices, coaching systems, and outcome reviews that multiply product judgment.",
    project: "Product operating review", framework: "Context–capability–autonomy–accountability",
    frameworkDefinition: "Product leadership does not centralize every answer. It chooses important problems, establishes strategic context and constraints, builds durable cross-functional capability, grants decision authority, reviews outcomes and evidence, and changes the system when teams cannot succeed.",
    steps: ["Translate strategy into a small set of product problems.", "Align durable teams to customers, journeys, or capabilities.", "Define decision rights and cross-team interfaces.", "Fund outcomes and discovery rather than feature backlogs.", "Coach judgment through evidence and portfolio reviews."],
    caseStudy: "A product organization has 14 teams each attached to annual projects. Dependencies dominate planning and nobody owns customer outcomes. Leadership reorganizes around three durable value streams and one platform, sets outcome missions, creates quarterly investment reviews, and measures decision latency, customer access, learning cadence, and realized impact.",
    checklist: ["Teams own outcomes, not components only", "Strategy guides allocation", "Decision rights are explicit", "Platforms have customer-like consumers", "Portfolio reviews stop work as well as start it"],
    pitfalls: ["Calling delegation empowerment without context", "Using OKRs as task lists", "Changing team topology every quarter", "Rewarding roadmap certainty over learning"],
    sources: ["svpg-empowered", "svpg-model", "bitsom"],
    check: { q: "What most distinguishes an empowered product team?", a: 0, options: ["It owns an important outcome and discovers the solution", "It writes more detailed requirements", "It needs no strategic constraints", "It controls every cross-team dependency"] },
    lessons: [
      L("l01", "Empowered teams and strategic context", 78, "Give teams a problem, purpose, constraints, access, and authority without abandoning accountability.", ["Set outcome missions", "Define boundaries and escalation", "Review evidence and impact"], "Audit a team’s context, authority, customer access, and outcome accountability.", "Empowerment audit"),
      L("l02", "Portfolio strategy and investment", 84, "Allocate teams and capital across horizons, value streams, capabilities, and uncertainty.", ["Use thesis-based investments", "Balance core, adjacent, and exploratory work", "Set continuation and stop criteria"], "Build a portfolio map and recommend one increase, one reduction, and one stop.", "Portfolio investment memo"),
      L("l03", "Team topology and platform leverage", 82, "Design boundaries and interfaces that reduce cognitive load and increase independent flow.", ["Align teams to value", "Treat platform teams as product teams", "Manage dependencies through interfaces, not coordination only"], "Map value streams, team ownership, dependencies, and platform opportunities.", "Team topology map"),
      L("l04", "Coaching product judgment", 76, "Raise quality through questions, calibrated feedback, decision reviews, and deliberate practice.", ["Coach reasoning before outcomes", "Separate reversible mistakes from negligence", "Create learning loops across teams"], "Run a product review using questions that expose assumptions without taking over the decision.", "Product review guide"),
    ],
  },
  {
    id: "m22", course: "c6", number: 22, title: "AI product management", duration: "6h 10m", level: "Advanced",
    summary: "Build AI products around valuable workflows, representative evaluation, trustworthy behavior, human agency, and sustainable economics.",
    project: "AI product + eval specification", framework: "Task–baseline–system–eval–governance–economics",
    frameworkDefinition: "An AI feature is a probabilistic product system, not just a model call. Product quality emerges from task definition, data and context, model behavior, prompts and tools, user interaction, evaluation, monitoring, human fallback, governance, latency, reliability, and marginal cost.",
    steps: ["Define the task, user decision, stakes, and simple baseline.", "Design the system across data, model, tools, UX, and human roles.", "Create representative eval sets and scoring rubrics.", "Set unacceptable failures, release gates, monitoring, and recourse.", "Model latency, quality, cost, vendor, and operational tradeoffs."],
    caseStudy: "A support copilot is evaluated on helpful-sounding answers and scores well, but agents discover citations often point to outdated policy. The team redefines the task as grounded resolution assistance, builds time-stamped policy retrieval, evaluates answer correctness and citation entailment, requires agent confirmation for refunds, and monitors override and escalation rates.",
    checklist: ["AI beats a simple baseline on the task", "Eval cases represent real and high-risk use", "Human agency and fallback exist", "Quality, latency, and cost budgets are explicit", "Monitoring detects drift and unacceptable failure"],
    pitfalls: ["Starting with a model instead of a workflow", "Using demo quality as an eval", "Averaging away catastrophic failures", "Ignoring marginal inference and review cost"],
    sources: ["nist-ai", "google-ml", "pair"],
    check: { q: "What is the strongest first baseline for an AI feature?", a: 1, options: ["The largest model available", "The current workflow or a simple non-AI heuristic", "A competitor marketing demo", "Perfect human performance on every edge case"] },
    lessons: [
      L("l01", "When AI earns its complexity", 78, "Choose tasks where probabilistic capability creates enough value to justify new uncertainty and cost.", ["Start from workflow and stakes", "Compare against simple automation", "Select assistive or autonomous boundaries"], "Score five AI opportunities on value, baseline gap, tolerance for error, feedback, data, and economics.", "AI opportunity scorecard"),
      L("l02", "Design the AI product system", 94, "Compose context, retrieval, model, tools, memory, UX, explanations, feedback, and fallback.", ["Design uncertainty and correction", "Use human control proportionate to stakes", "Treat latency and failure as UX states"], "Draw an AI system journey including model and non-model failure paths.", "AI system blueprint"),
      L("l03", "Evals, red teams, and monitoring", 108, "Measure task performance with representative cases, rubrics, adversarial tests, online signals, and release gates.", ["Build stratified golden sets", "Use deterministic and human scoring", "Monitor drift, overrides, cost, and incidents"], "Create 30 eval cases with normal, edge, adversarial, and unacceptable-failure categories.", "AI eval specification"),
      L("l04", "AI trust, risk, and economics", 90, "Apply governance, transparency, data controls, vendor strategy, and unit economics across the lifecycle.", ["Use govern, map, measure, manage", "Model misuse and overreliance", "Budget quality, latency, tokens, review, and recovery"], "Write an AI launch risk register with owners, evidence, thresholds, and recourse.", "AI governance and economics plan"),
    ],
  },
  {
    id: "m23", course: "c6", number: 23, title: "PM interviews & career stories", duration: "5h 25m", level: "All levels",
    summary: "Demonstrate product judgment in product sense, analytical, strategy, execution, and behavioral interviews.",
    project: "Interview answer portfolio", framework: "Clarify–structure–choose–measure–adapt",
    frameworkDefinition: "Strong interview answers make reasoning visible. They clarify the goal, establish a structure, prioritize with explicit rationale, develop depth where it matters, measure success and downside, and show how new evidence would change the decision. Memorized acronyms are scaffolding, not the answer.",
    steps: ["Clarify mission, goal, scope, and assumptions.", "State a tailored structure before exploring.", "Prioritize users, problems, causes, or metrics with rationale.", "Go deep on tradeoffs and the critical product mechanism.", "Synthesize the decision, measures, risks, and next evidence."],
    caseStudy: "For ‘improve public transit,’ a candidate avoids listing features. They choose late-shift service workers after comparing need severity and alternative quality, prioritize unpredictable transfers, propose a reliability-aware trip and employer shuttle coordination concept, and measure successful on-time arrivals with safety and missed-connection guardrails.",
    checklist: ["Structure fits the question", "Priorities have reasons", "Company and user value connect", "Tradeoffs and counter-metrics appear", "Answer ends with synthesis"],
    pitfalls: ["Reciting a framework mechanically", "Brainstorming without choosing", "Using one North Star for every product", "Telling behavioral stories without personal decisions and impact"],
    sources: ["brian-sense", "brian-analytics", "brian-behavioral", "amazon-questions"],
    check: { q: "What most improves a PM interview answer?", a: 2, options: ["Using the longest framework", "Listing every possible idea", "Making priorities and tradeoffs explicit", "Avoiding assumptions entirely"] },
    lessons: [
      L("l01", "Product sense and design interviews", 86, "Frame, segment, prioritize, solve, and measure while showing product taste and tradeoffs.", ["Use company advantage naturally", "Prioritize before ideating", "Design the critical journey and risks"], "Record a 35-minute product sense answer and score transitions, rationale, depth, and synthesis.", "Product sense answer"),
      L("l02", "Metrics, RCA, and execution interviews", 84, "Define product success, decompose metrics, diagnose changes, and make launch tradeoffs.", ["Choose North Star, inputs, and counters", "Scope RCA before hypotheses", "Use goals to break tradeoff ties"], "Complete one metrics design and one KPI-drop prompt under time.", "Analytical answer set"),
      L("l03", "Strategy and estimation interviews", 76, "Use structured assumptions, market insight, economics, and sensitivity to make a recommendation.", ["Build top-down and bottom-up estimates", "Separate goals from strategy", "Use ranges and sanity checks"], "Estimate one market two ways and write the assumption that most changes the answer.", "Strategy and estimation set"),
      L("l04", "Behavioral stories and the interview loop", 79, "Build evidence-rich stories about conflict, failure, influence, execution, and learning.", ["Create a story bank by competency", "Use situation, complication, action, result, learning", "Make personal judgment and impact specific"], "Write eight stories and map each to likely follow-up questions.", "Behavioral story bank"),
    ],
  },
  {
    id: "m24", course: "c6", number: 24, title: "Portfolio capstone: zero to launch", duration: "5h 05m", level: "Advanced",
    summary: "Integrate the entire program into one decision-grade product case with evidence, strategy, concept, metrics, plan, and reflection.",
    project: "Complete product portfolio case", framework: "Discover–decide–design–de-risk–deliver–learn",
    frameworkDefinition: "The capstone is not a fictional feature deck. It is a traceable product argument: a meaningful problem, credible evidence, a strategic choice, a coherent experience, explicit assumptions, measurement and risk systems, an executable release, and honest reflection about what remains unknown.",
    steps: ["Choose a real problem with accessible users and evidence.", "Conduct discovery and synthesize opportunities.", "Write strategy, target, and explicit non-goals.", "Prototype, validate, and revise the concept.", "Build metrics, rollout, GTM, economics, and reflection."],
    caseStudy: "A capstone on medication adherence does not claim to solve healthcare broadly. It focuses on adults managing new multi-drug routines after discharge, documents handoff and comprehension failures, prototypes a caregiver-aware plan, includes accessibility and privacy, measures correctly followed doses and preventable support needs, and limits launch to one clinic workflow.",
    checklist: ["Evidence is traceable", "Choice is strategically coherent", "Concept addresses the prioritized problem", "Metrics and risks guide decisions", "Portfolio communicates learning, not certainty"],
    pitfalls: ["Inventing research quotes", "Hiding weak evidence", "Designing too broad a solution", "Showing polished screens without decisions"],
    sources: ["gov-discovery", "svpg-strategy", "google-heart", "dora", "nist-ai"],
    check: { q: "What makes the strongest PM portfolio case?", a: 3, options: ["The most polished UI", "The largest feature list", "The most famous problem", "A traceable chain from evidence to decisions, tradeoffs, and outcomes"] },
    lessons: [
      L("l01", "Choose and frame the capstone problem", 62, "Select a bounded problem with real access, meaningful stakes, and room for product judgment.", ["Use problem selection criteria", "Set ethical research boundaries", "Write an initial assumption map"], "Pitch three candidate problems and select one using access, impact, learning, and feasibility.", "Capstone charter"),
      L("l02", "Build the evidence and strategy", 81, "Conduct research, synthesize opportunities, size importance, and make a strategic choice.", ["Use at least two evidence types", "Show contradictions and limitations", "Commit to target and non-goals"], "Submit an evidence brief and two-page product strategy.", "Evidence + strategy pack"),
      L("l03", "Design, validate, and plan delivery", 88, "Create a coherent concept, test riskiest assumptions, and define the release, system, and rollout.", ["Prototype the critical mechanism", "Revise from evidence", "Include accessibility, analytics, operations, and rollback"], "Submit prototype, test report, product brief, and rollout plan.", "Validated product package"),
      L("l04", "Present the portfolio case", 74, "Tell a concise product story that makes judgment, evidence, uncertainty, and personal learning visible.", ["Use a decision narrative", "Show before-and-after beliefs", "Prepare a five-minute and twenty-minute version"], "Record a 12-minute presentation and answer ten skeptical follow-ups.", "Portfolio case presentation"),
    ],
  },
];

const sourceLibrary = {
  "svpg-model": { name: "SVPG — Product Model Concepts", url: "https://www.svpg.com/product-model-concepts/", type: "Primary industry source" },
  "svpg-strategy": { name: "SVPG — Product Strategy Overview", url: "https://www.svpg.com/product-strategy-overview/", type: "Primary industry source" },
  "svpg-insights": { name: "SVPG — Product Strategy Insights", url: "https://www.svpg.com/product-strategy-insights/", type: "Primary industry source" },
  "svpg-discovery": { name: "SVPG — Product Discovery", url: "https://www.svpg.com/product-discovery-plan/", type: "Primary industry source" },
  "svpg-empowered": { name: "SVPG — Empowered Product Teams", url: "https://www.svpg.com/empowered-product-teams/", type: "Primary industry source" },
  "gov-needs": { name: "GOV.UK — Learning about users and their needs", url: "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs", type: "Government service standard" },
  "gov-research": { name: "GOV.UK — Plan user research", url: "https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service", type: "Government service standard" },
  "gov-discovery": { name: "GOV.UK — How discovery works", url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works", type: "Government service standard" },
  "gov-access": { name: "GOV.UK — Making services accessible", url: "https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction", type: "Government service standard" },
  "google-heart": { name: "Google Research — HEART framework", url: "https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/", type: "Research paper" },
  "microsoft-exp": { name: "Microsoft Research — Experimentation Platform", url: "https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/", type: "Research program" },
  "dora": { name: "DORA — Software delivery performance", url: "https://dora.dev/guides/dora-metrics-four-keys/", type: "Research program" },
  "scrum": { name: "The Scrum Guide", url: "https://scrumguides.org/scrum-guide.html", type: "Official guide" },
  "wcag": { name: "W3C — WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/", type: "Web standard" },
  "nist-ai": { name: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", type: "Government standard" },
  "google-ml": { name: "Google — Rules of Machine Learning", url: "https://developers.google.com/machine-learning/guides/rules-of-ml", type: "Official engineering guide" },
  "pair": { name: "Google PAIR — People + AI Guidebook", url: "https://pair.withgoogle.com/guidebook/", type: "Official design guide" },
  "aws-working": { name: "AWS — Working Backwards", url: "https://aws.amazon.com/executive-insights/content/how-amazon-defines-and-operationalizes-a-day-1-culture/", type: "Primary company source" },
  "aws-strategy": { name: "AWS — Product strategies that deliver value", url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-product-development/welcome.html", type: "Official guidance" },
  "iimb": { name: "IIM Bangalore Product Management Casebook", type: "Local study library" },
  "iimc": { name: "IIM Calcutta Product Management Casebook", type: "Local study library" },
  "mdi": { name: "MDI Product Management Casebook", type: "Local study library" },
  "bitsom": { name: "BITSoM Product Management Handbook", type: "Local study library" },
  "metrics-playbook": { name: "Product Metrics & Execution Playbook", type: "Local study library" },
  "brian-sense": { name: "Brian’s Product Sense Interview Guide", type: "Local study library" },
  "brian-analytics": { name: "Brian’s Analytical Interview Guide", type: "Local study library" },
  "brian-behavioral": { name: "Brian’s Behavioral Interview Guide", type: "Local study library" },
  "amazon-questions": { name: "Amazon PM Interview Question Study Guide", type: "Local study library" },
};

const quizQuestions = modules.map((module) => ({ ...module.check, module: module.title, id: module.id }));

const flashcards = [
  ["FOUNDATIONS", "Output vs. outcome", "Output is something shipped or done. An outcome is a measurable change in customer behavior or business performance that the output is intended to cause."],
  ["DISCOVERY", "Riskiest assumption", "The belief that is both weakly supported and consequential enough that, if false, the product bet should change or stop."],
  ["RESEARCH", "Observation vs. insight", "An observation records what happened. An insight is an evidence-backed explanation that changes how the team understands a problem or decision."],
  ["PRODUCT SENSE", "Strong segmentation", "A segmentation is useful when different groups have meaningfully different needs or behaviors that lead to different product decisions."],
  ["STRATEGY", "Strategy kernel", "A diagnosis of the central challenge, a guiding approach for overcoming it, and coherent actions that reinforce the approach."],
  ["POSITIONING", "Competitive alternative", "What the target customer actually does today to make progress—including manual work, another category, or doing nothing."],
  ["PRIORITIZATION", "RICE", "Reach × Impact × Confidence ÷ Effort. It exposes assumptions; it does not replace strategic judgment."],
  ["ROADMAP", "Outcome roadmap", "A communication of problems and outcomes to pursue, sequence, evidence, confidence, dependencies, and the signals that could change the plan."],
  ["METRICS", "North Star", "A measure of recurring customer value that links to durable business value and can be influenced by the product team."],
  ["METRICS", "Guardrail", "A counter-metric that reveals quality loss, ecosystem damage, harm, or gaming while a primary metric improves."],
  ["ANALYTICS", "Cohort", "A group sharing a meaningful start event or behavior, used to separate product changes from differences in acquisition or timing."],
  ["RCA", "First move after a KPI drop", "Validate the metric and scope the change by time, segment, platform, geography, cohort, and funnel stage before proposing causes."],
  ["EXPERIMENTS", "Minimum meaningful effect", "The smallest change that would be practically valuable enough to justify the cost and risk of shipping."],
  ["EXPERIMENTS", "Sample ratio mismatch", "A statistically unlikely imbalance between intended and observed treatment allocation; often a sign of assignment or data-quality problems."],
  ["GROWTH", "Activation", "An early behavior showing the user reached meaningful value and associated with a higher probability of future retention."],
  ["MARKETPLACES", "Liquidity", "The probability, quality, and speed of a successful match within an atomic network such as a location, category, or time window."],
  ["DELIVERY", "Vertical slice", "A thin end-to-end increment that delivers testable customer value across the necessary system layers."],
  ["TECHNICAL", "API contract", "The agreed inputs, outputs, authentication, errors, limits, and behavior that allow systems to work together independently."],
  ["RELIABILITY", "SLO", "A target for service reliability from the user’s perspective, often expressed as an objective for availability, latency, or correctness."],
  ["GTM", "Value metric", "The unit that changes what a customer pays. Strong value metrics scale with perceived value, remain predictable, and cover cost."],
  ["LEADERSHIP", "Empowered team", "A durable cross-functional team given an important outcome, strategic context, customer access, and authority to discover the solution."],
  ["AI PRODUCT", "Evaluation set", "A representative, versioned collection of normal, edge, high-risk, and adversarial cases scored against explicit task rubrics."],
  ["AI PRODUCT", "Human fallback", "A designed path for review, correction, escalation, or manual completion when the AI is uncertain or the stakes exceed its authority."],
  ["INTERVIEWS", "Strong synthesis", "A concise close that restates the goal, selected choice, rationale, measures, risks, and what new evidence would change the decision."],
];

const interviewPrompts = [
  ["Product sense", "Design a product that helps first-generation college students choose a career path."],
  ["Product improvement", "How would you improve WhatsApp for small local businesses?"],
  ["Metrics", "Define success metrics for a neighborhood community marketplace."],
  ["Root cause", "Completed rides fell 12% last week in one major city. Diagnose the change."],
  ["Strategy", "Should a productivity software company launch a hardware device?"],
  ["Prioritization", "A large customer wants a custom integration while activation is falling. How do you decide?"],
  ["Execution", "Your experiment improves conversion but increases refunds. What do you do?"],
  ["AI product", "Design an AI assistant for hospital discharge coordinators."],
  ["Leadership", "A team repeatedly delivers its roadmap but misses outcomes. How would you intervene?"],
  ["Behavioral", "Tell me about a time you changed direction after your evidence proved you wrong."],
];

const state = {
  completed: new Set(JSON.parse(localStorage.getItem("pc-completed") || "[]")),
  bookmarks: new Set(JSON.parse(localStorage.getItem("pc-bookmarks") || "[]")),
  notes: JSON.parse(localStorage.getItem("pc-notes") || "{}"),
  enrolled: localStorage.getItem("pc-enrolled") === "true",
  currentModule: localStorage.getItem("pc-current-module") || "m01",
  currentLesson: localStorage.getItem("pc-current-lesson") || "l01",
  openCourses: new Set(["c1"]),
  openModules: new Set(["m01"]),
  practiceTab: "quiz",
  quizIndex: 0,
  quizAnswers: JSON.parse(localStorage.getItem("pc-quiz-answers") || "{}"),
  flashIndex: 0,
  flashFlipped: false,
  caseScores: { value: 7, evidence: 5, strategy: 8, effort: 4, risk: 5 },
  timer: 0,
  timerId: null,
  interviewIndex: 0,
};

const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
const appRoot = document.querySelector("#appRoot");
const toast = document.querySelector("#toast");

function saveState() {
  localStorage.setItem("pc-completed", JSON.stringify([...state.completed]));
  localStorage.setItem("pc-bookmarks", JSON.stringify([...state.bookmarks]));
  localStorage.setItem("pc-notes", JSON.stringify(state.notes));
  localStorage.setItem("pc-enrolled", String(state.enrolled));
  localStorage.setItem("pc-current-module", state.currentModule);
  localStorage.setItem("pc-current-lesson", state.currentLesson);
  localStorage.setItem("pc-quiz-answers", JSON.stringify(state.quizAnswers));
}

function lessonKey(moduleId, lessonId) { return `${moduleId}-${lessonId}`; }
function currentModule() { return modules.find((module) => module.id === state.currentModule) || modules[0]; }
function currentLesson() { return currentModule().lessons.find((lesson) => lesson.id === state.currentLesson) || currentModule().lessons[0]; }
function courseModules(courseId) { return modules.filter((module) => module.course === courseId); }
function moduleProgress(module) { return module.lessons.filter((lesson) => state.completed.has(lessonKey(module.id, lesson.id))).length; }
function courseProgress(courseId) {
  const scoped = courseModules(courseId);
  const count = scoped.reduce((sum, module) => sum + moduleProgress(module), 0);
  return Math.round((count / (scoped.length * 4)) * 100);
}
function totalProgress() { return Math.round((state.completed.size / totalLessons) * 100); }
function escapeHTML(value = "") { return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function getRoute() {
  const hash = location.hash.replace(/^#/, "") || "overview";
  const parts = hash.split("/");
  return { view: parts[0], module: parts[1], lesson: parts[2] };
}

function updateNav(view) {
  document.querySelectorAll("[data-route-link]").forEach((link) => link.classList.toggle("active", link.dataset.routeLink === view));
}

function render() {
  const route = getRoute();
  if (route.module && modules.some((module) => module.id === route.module)) {
    state.currentModule = route.module;
    const module = currentModule();
    state.currentLesson = module.lessons.some((lesson) => lesson.id === route.lesson) ? route.lesson : module.lessons[0].id;
    state.openCourses.add(module.course);
    state.openModules.add(module.id);
    saveState();
  }
  updateNav(route.view);
  if (route.view === "learn") renderLearn();
  else if (route.view === "practice") renderPractice();
  else if (route.view === "grades") renderGrades();
  else renderOverview();
  document.querySelector("#mainContent")?.focus({ preventScroll: true });
}

function renderOverview() {
  const progress = totalProgress();
  appRoot.innerHTML = `
    <section class="program-hero">
      <div class="hero-breadcrumb"><a href="#overview">Professional Certificates</a><span>/</span>Product Management</div>
      <div class="hero-grid page-width">
        <div class="hero-content">
          <div class="provider-line"><span class="provider-mark">PC</span><span>ProductCraft Academy</span></div>
          <h1>Product Management<br />Professional Certificate</h1>
          <p class="hero-subtitle">Master the full product craft—from customer discovery and strategy to analytics, execution, leadership, and AI. Learn the concepts, do the work, and leave with a portfolio.</p>
          <div class="hero-trust">
            <span><b>Beginner to advanced</b></span><span>•</span><span>No prior PM experience required</span>
          </div>
          <div class="hero-actions">
            <button class="primary-button large" data-action="enroll">${state.enrolled ? `Resume learning — ${progress}%` : "Enroll and start learning"}</button>
            <button class="save-program-button" data-action="save-program"><span aria-hidden="true">♡</span> Save</button>
          </div>
          <small class="honesty-note">Free, self-paced learning experience. The completion certificate is issued by ProductCraft and is not an accredited degree.</small>
        </div>
        <aside class="enrollment-card">
          <div class="course-preview">
            <span class="preview-label">YOUR LEARNING PATH</span>
            <div class="preview-stack">
              ${courses.slice(0, 4).map((course) => `<i style="--course-color:${course.color}">${course.number}</i>`).join("")}
              <b>+2</b>
            </div>
            <strong>From first principle<br />to product leadership.</strong>
          </div>
          <div class="enrollment-details">
            <h2>${state.enrolled ? "Continue your certificate" : "Start learning today"}</h2>
            <ul><li><span>✓</span> 6 applied courses</li><li><span>✓</span> 24 modules · 96 lessons</li><li><span>✓</span> 24 projects and templates</li><li><span>✓</span> Practice labs and interview drills</li></ul>
            <button class="primary-button full" data-action="enroll">${state.enrolled ? "Go to current lesson" : "Enroll now"}</button>
          </div>
        </aside>
      </div>
    </section>

    <div class="program-stats">
      <div class="page-width stats-grid"><span><b>122 hours</b><small>at your own pace</small></span><span><b>6 courses</b><small>one complete pathway</small></span><span><b>96 lessons</b><small>with knowledge checks</small></span><span><b>24 projects</b><small>portfolio-focused work</small></span></div>
    </div>

    <nav class="program-tabs" aria-label="Program sections"><div class="page-width"><a href="#about">About</a><a href="#outcomes">Outcomes</a><a href="#syllabus">Courses</a><a href="#projects">Projects</a><a href="#sources">Sources</a></div></nav>

    <div class="program-body page-width">
      <div class="program-main">
        <section class="content-section" id="about">
          <span class="section-kicker">PROFESSIONAL CERTIFICATE</span>
          <h2>A complete operating system for product work</h2>
          <p class="section-lede">Most PM courses teach a dictionary of frameworks. This program teaches the judgment that makes those frameworks useful: how to turn uncertainty into evidence, evidence into a choice, and a shipped product into measurable learning.</p>
          <div class="audience-grid">
            <article><span>01</span><h3>Breaking into product</h3><p>Build vocabulary, first-principles understanding, case practice, and portfolio evidence without assuming prior PM experience.</p></article>
            <article><span>02</span><h3>Working product managers</h3><p>Deepen discovery, strategy, analytics, technical fluency, execution, and stakeholder decision quality.</p></article>
            <article><span>03</span><h3>Product leaders</h3><p>Strengthen portfolio choices, empowered teams, platform thinking, coaching, and AI-era product governance.</p></article>
          </div>
        </section>

        <section class="content-section" id="outcomes">
          <span class="section-kicker">WHAT YOU WILL BE ABLE TO DO</span>
          <h2>Build products with evidence and intent</h2>
          <div class="outcome-list">
            ${[
              ["Discover the right problem", "Plan research, conduct non-leading interviews, synthesize evidence, and size the cost of the status quo."],
              ["Make a product strategy", "Turn customer, market, technology, and business insight into choices that guide what you will—and will not—build."],
              ["Design a measurement system", "Create North Stars, input metrics, guardrails, funnels, cohorts, experiments, and root-cause analyses."],
              ["Ship and operate responsibly", "Write usable product briefs, reason about technical systems, stage releases, monitor quality, and plan recovery."],
              ["Lead products and teams", "Allocate across a portfolio, shape empowered teams, influence decisions, coach judgment, and build trustworthy AI products."],
            ].map(([title, copy], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${title}</h3><p>${copy}</p></div></article>`).join("")}
          </div>
        </section>

        <section class="content-section" id="syllabus">
          <span class="section-kicker">PROGRAM SYLLABUS</span>
          <h2>Six courses. One integrated craft.</h2>
          <p class="section-lede">Each course contains four modules. Every module combines lesson reading, an applied example, a decision tool, a knowledge check, and a portfolio artifact.</p>
          <div class="course-sequence">
            ${courses.map((course) => {
              const scoped = courseModules(course.id);
              return `<article class="sequence-card">
                <button class="sequence-header" type="button" data-action="toggle-overview-course" data-course="${course.id}" aria-expanded="${course.id === "c1"}">
                  <span class="course-number" style="--course-color:${course.color}">${course.number}</span>
                  <span class="sequence-title"><small>COURSE ${course.number} · ${course.level}</small><strong>${course.title}</strong><em>${course.description}</em></span>
                  <span class="sequence-meta"><b>${course.hours} hours</b><i>⌄</i></span>
                </button>
                <div class="sequence-content" ${course.id === "c1" ? "" : "hidden"} data-overview-course="${course.id}">
                  ${scoped.map((module) => `<a href="#learn/${module.id}/${module.lessons[0].id}"><span>${String(module.number).padStart(2, "0")}</span><div><b>${module.title}</b><small>${module.duration} · 4 lessons · ${module.project}</small></div><i>→</i></a>`).join("")}
                </div>
              </article>`;
            }).join("")}
          </div>
        </section>

        <section class="content-section" id="projects">
          <span class="section-kicker">LEARN BY DOING</span>
          <h2>Leave with proof of judgment</h2>
          <div class="project-showcase">
            <article class="featured-project"><small>FINAL CAPSTONE</small><h3>Zero-to-launch product case</h3><p>Conduct discovery, make a strategy, validate a concept, design metrics, write a product brief, plan rollout and GTM, and present the case in a portfolio-ready narrative.</p><a href="#learn/m24/l01">View capstone requirements →</a></article>
            <div class="mini-projects"><article><span>⌕</span><b>Evidence brief</b><small>Research + synthesis</small></article><article><span>⌁</span><b>Strategy memo</b><small>Choices + non-goals</small></article><article><span>↗</span><b>Metric tree</b><small>North Star + guardrails</small></article><article><span>AI</span><b>AI eval spec</b><small>Cases + release gates</small></article></div>
          </div>
        </section>

        <section class="content-section source-section" id="sources">
          <span class="section-kicker">SOURCE-GROUNDED CURRICULUM</span>
          <h2>Built from primary research and rich casebooks</h2>
          <p class="section-lede">The curriculum synthesizes your local IIM, MDI, BITSoM, interview, and metrics study library with original sources from Google Research, GOV.UK, SVPG, DORA, W3C, NIST, Scrum, AWS, and Microsoft. Private PDFs are referenced but not redistributed.</p>
          <div class="source-grid">
            ${Object.values(sourceLibrary).slice(0, 18).map((source) => source.url ? `<a href="${source.url}" target="_blank" rel="noreferrer"><small>${source.type}</small><b>${source.name}</b><span>Open source ↗</span></a>` : `<article><small>${source.type}</small><b>${source.name}</b><span>Referenced locally</span></article>`).join("")}
          </div>
        </section>
      </div>

      <aside class="program-aside">
        <div class="aside-card"><small>THIS PROGRAM INCLUDES</small><ul><li><span>▷</span> 96 guided lessons</li><li><span>◫</span> 24 portfolio projects</li><li><span>?</span> 24 module checks</li><li><span>◇</span> 24 flashcards</li><li><span>⌁</span> Interview simulator</li><li><span>✓</span> Completion certificate</li></ul></div>
        <div class="aside-card"><small>RECOMMENDED PACE</small><b class="aside-big">10 hours / week</b><p>Complete the program in about 12 weeks, or learn at your own pace. Progress and notes stay on this device.</p></div>
      </aside>
    </div>`;
}

function syllabusHTML() {
  return courses.map((course) => {
    const courseOpen = state.openCourses.has(course.id);
    return `<section class="side-course">
      <button class="side-course-header" data-action="toggle-course" data-course="${course.id}" aria-expanded="${courseOpen}">
        <span class="tiny-course-number" style="--course-color:${course.color}">${course.number}</span><span><small>COURSE ${course.number}</small><b>${course.short}</b></span><i>${courseProgress(course.id)}%</i><em>⌄</em>
      </button>
      <div class="side-modules" ${courseOpen ? "" : "hidden"}>
        ${courseModules(course.id).map((module) => {
          const open = state.openModules.has(module.id);
          return `<div class="side-module ${module.id === state.currentModule ? "current" : ""}">
            <button data-action="toggle-module" data-module="${module.id}" aria-expanded="${open}"><span>${String(module.number).padStart(2, "0")}</span><b>${module.title}</b><i>${moduleProgress(module)}/4</i><em>⌄</em></button>
            <div class="side-lessons" ${open ? "" : "hidden"}>
              ${module.lessons.map((lesson, index) => {
                const key = lessonKey(module.id, lesson.id);
                return `<a class="${module.id === state.currentModule && lesson.id === state.currentLesson ? "active" : ""} ${state.completed.has(key) ? "done" : ""}" href="#learn/${module.id}/${lesson.id}"><span>${state.completed.has(key) ? "✓" : index + 1}</span><div><b>${lesson.title}</b><small>${lesson.minutes} min</small></div></a>`;
              }).join("")}
            </div>
          </div>`;
        }).join("")}
      </div>
    </section>`;
  }).join("");
}

function renderLearn() {
  const module = currentModule();
  const lesson = currentLesson();
  const course = courses.find((item) => item.id === module.course);
  const key = lessonKey(module.id, lesson.id);
  const lessonIndex = module.lessons.findIndex((item) => item.id === lesson.id);
  const note = state.notes[key] || "";
  const sources = module.sources.map((id) => sourceLibrary[id]).filter(Boolean);
  appRoot.innerHTML = `
    <div class="learning-layout">
      <aside class="learning-sidebar" aria-label="Course syllabus">
        <div class="learning-sidebar-top">
          <a href="#overview">← Program overview</a>
          <div class="overall-progress"><span><b>${totalProgress()}%</b> certificate progress</span><div><i style="width:${totalProgress()}%"></i></div><small>${state.completed.size} of ${totalLessons} lessons complete</small></div>
        </div>
        <div class="syllabus-scroll">${syllabusHTML()}</div>
      </aside>

      <section class="lesson-workspace">
        <header class="lesson-topbar">
          <button class="syllabus-toggle" data-action="toggle-syllabus" aria-label="Toggle syllabus">☰</button>
          <div><small>COURSE ${course.number} · MODULE ${module.number}</small><b>${module.title}</b></div>
          <div class="lesson-actions"><button data-action="show-notes">Notes</button><button data-action="toggle-bookmark" class="${state.bookmarks.has(key) ? "saved" : ""}" aria-label="Bookmark lesson">${state.bookmarks.has(key) ? "★ Saved" : "☆ Save"}</button></div>
        </header>

        <div class="lesson-content-wrap">
          <article class="lesson-article">
            <div class="lesson-heading">
              <div class="lesson-badges"><span>Lesson ${lessonIndex + 1} of 4</span><span>${lesson.minutes} min</span><span>Reading + practice</span></div>
              <h1>${lesson.title}</h1>
              <p>${lesson.summary}</p>
            </div>

            <div class="video-lesson" data-video-state="idle">
              <div class="video-screen">
                <div class="video-brand"><span class="brand-symbol small" aria-hidden="true"><i></i><i></i><i></i><i></i></span>PRODUCTCRAFT</div>
                <div class="video-slide"><small>MODULE ${module.number} · ${module.framework.toUpperCase()}</small><strong>${lesson.title}</strong><span>${lesson.keyMoves[0]}</span></div>
                <button class="video-play" data-action="play-video" aria-label="Play lesson overview"><span>▶</span></button>
                <div class="video-controls"><span>▶</span><div><i></i></div><time>00:00 / 06:30</time><span>CC</span><span>⚙</span></div>
              </div>
              <div class="video-caption"><div><b>Lesson overview</b><small>A concise introduction before the deep reading</small></div><button data-action="toggle-transcript">Show transcript</button></div>
              <div class="video-transcript" hidden><b>Transcript</b><p>In this lesson, we will use <strong>${module.framework}</strong> to make a better product decision. The core idea is simple: ${lesson.summary} You will learn how to ${lesson.keyMoves.join(", how to ").toLowerCase()}, and then apply it to a concrete product situation.</p></div>
            </div>

            <nav class="article-toc" aria-label="On this page"><b>In this lesson</b><a href="#objectives">Objectives</a><a href="#core-concept">Core concept</a><a href="#playbook">Playbook</a><a href="#case">Case</a><a href="#practice-task">Practice</a><a href="#knowledge-check">Check</a></nav>

            <section class="reading-section" id="objectives">
              <span class="reading-kicker">LEARNING OBJECTIVES</span><h2>What you will learn</h2>
              <ul class="objective-list">${lesson.keyMoves.map((move) => `<li><span>✓</span>${move}</li>`).join("")}</ul>
            </section>

            <section class="reading-section" id="core-concept">
              <span class="reading-kicker">CORE CONCEPT</span><h2>${module.framework}</h2>
              <p class="lead-paragraph">${module.frameworkDefinition}</p>
              <div class="concept-grid">
                ${lesson.keyMoves.map((move, index) => `<article><span>0${index + 1}</span><h3>${move}</h3><p>${conceptExplanation(module, lesson, index)}</p></article>`).join("")}
              </div>
              <aside class="key-idea"><span>KEY IDEA</span><p>Frameworks create coverage, not certainty. Use <b>${module.framework}</b> to expose the reasoning, then let evidence, constraints, and product judgment determine the choice.</p></aside>
            </section>

            <section class="reading-section" id="playbook">
              <span class="reading-kicker">FIELD PLAYBOOK</span><h2>How to apply it</h2>
              <div class="playbook-steps">${module.steps.map((step, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${step}</h3><p>${stepExplanation(index)}</p></div></article>`).join("")}</div>
            </section>

            <section class="reading-section" id="case">
              <span class="reading-kicker">WORKED CASE</span><h2>See the reasoning in action</h2>
              <div class="case-study"><div class="case-label"><span>CASE</span><b>${module.title}</b></div><p>${module.caseStudy}</p></div>
              <div class="two-column-reading"><div><h3>Quality checklist</h3><ul>${module.checklist.map((item) => `<li><span>✓</span>${item}</li>`).join("")}</ul></div><div class="pitfall-box"><h3>Common failure modes</h3><ul>${module.pitfalls.map((item) => `<li><span>×</span>${item}</li>`).join("")}</ul></div></div>
            </section>

            <section class="reading-section" id="practice-task">
              <span class="reading-kicker">APPLY THE LESSON</span><h2>Your field assignment</h2>
              <div class="assignment-card"><div class="assignment-icon">✎</div><div><small>${lesson.minutes}–90 MINUTES · PORTFOLIO PRACTICE</small><h3>${lesson.artifact}</h3><p>${lesson.practice}</p><div class="assignment-actions"><button class="primary-button" data-action="download-template">Open working template</button><button class="secondary-button" data-action="mark-project">Mark artifact drafted</button></div></div></div>
            </section>

            <section class="reading-section" id="knowledge-check">
              <span class="reading-kicker">KNOWLEDGE CHECK</span><h2>Test the decision</h2>
              <div class="inline-check" data-check-module="${module.id}">
                <p>${module.check.q}</p>
                <div>${module.check.options.map((option, index) => `<button data-action="inline-answer" data-answer="${index}" data-correct="${module.check.a}"><span>${String.fromCharCode(65 + index)}</span>${option}</button>`).join("")}</div>
                <aside class="check-feedback" hidden></aside>
              </div>
            </section>

            <section class="reading-section sources-reading">
              <span class="reading-kicker">GO DEEPER</span><h2>Sources for this module</h2>
              <div>${sources.map((source) => source.url ? `<a href="${source.url}" target="_blank" rel="noreferrer"><span>↗</span><b>${source.name}</b><small>${source.type}</small></a>` : `<article><span>◫</span><b>${source.name}</b><small>${source.type} · used for synthesis, not redistributed</small></article>`).join("")}</div>
            </section>

            <footer class="lesson-footer-nav">
              ${previousLessonLink(module, lesson) || `<span></span>`}
              <button class="complete-button ${state.completed.has(key) ? "completed" : ""}" data-action="toggle-complete">${state.completed.has(key) ? "✓ Lesson completed" : "Mark complete & continue →"}</button>
              ${nextLessonLink(module, lesson) || `<span></span>`}
            </footer>
          </article>

          <aside class="lesson-rail">
            <div class="rail-progress"><div class="circle-progress" style="--progress:${moduleProgress(module) * 25}"><span>${moduleProgress(module)}/4</span></div><div><b>Module progress</b><small>${module.duration}</small></div></div>
            <div class="rail-card"><div><b>Your notes</b><button data-action="show-notes">View all</button></div><textarea id="lessonNote" placeholder="Capture an idea, question, or example…">${escapeHTML(note)}</textarea><small>Saved automatically on this device</small></div>
            <div class="rail-card"><b>Module project</b><h3>${module.project}</h3><p>Complete the four lesson artifacts, then combine them into this module deliverable.</p><a href="#grades">View project status →</a></div>
            <div class="rail-card next-up"><small>NEXT UP</small>${nextLessonLink(module, lesson, true) || `<b>Course review</b><a href="#grades">See your grades →</a>`}</div>
          </aside>
        </div>
      </section>
    </div>`;
}

function conceptExplanation(module, lesson, index) {
  const patterns = [
    `Begin with the decision this move must improve. Write what you currently believe, the evidence behind it, and what would cause you to change course. In ${module.title.toLowerCase()}, the quality of the reasoning matters more than a polished artifact.`,
    `Make the unit of analysis explicit: user, segment, event, cohort, workflow, team, or market. Ambiguous units produce confident but incompatible answers. Preserve the context in which the evidence was created.`,
    `Translate the idea into an observable choice or behavior. Pair the intended gain with a counter-signal so improvement in one area cannot silently transfer cost or harm elsewhere.`,
  ];
  return `${patterns[index] || patterns[0]} The practical test for this lesson is: ${lesson.practice}`;
}

function stepExplanation(index) {
  return [
    "Write this before opening a framework or spreadsheet. The initial wording determines what evidence will count and which alternatives stay visible.",
    "Use more than one evidence source when the decision is important. Record confidence and relevance rather than treating every input as equally strong.",
    "Invite the functions closest to the constraint. Product quality improves when design, engineering, data, operations, and commercial knowledge enter before commitment.",
    "State the tradeoff and rejected alternative in plain language. A real decision should make it possible to explain why an attractive option is not being pursued now.",
    "Set the review moment and trigger in advance. The work is not complete until the team knows what changed, why, and what it will do next.",
  ][index] || "Document the reasoning and next decision.";
}

function adjacentLesson(module, lesson, offset) {
  const all = modules.flatMap((item) => item.lessons.map((entry) => ({ module: item, lesson: entry })));
  const index = all.findIndex((entry) => entry.module.id === module.id && entry.lesson.id === lesson.id);
  return all[index + offset];
}
function previousLessonLink(module, lesson) {
  const previous = adjacentLesson(module, lesson, -1);
  return previous ? `<a class="adjacent-link previous" href="#learn/${previous.module.id}/${previous.lesson.id}"><small>← PREVIOUS</small><b>${previous.lesson.title}</b></a>` : "";
}
function nextLessonLink(module, lesson, compact = false) {
  const next = adjacentLesson(module, lesson, 1);
  if (!next) return "";
  return compact ? `<b>${next.lesson.title}</b><a href="#learn/${next.module.id}/${next.lesson.id}">Open lesson →</a>` : `<a class="adjacent-link next" href="#learn/${next.module.id}/${next.lesson.id}"><small>NEXT →</small><b>${next.lesson.title}</b></a>`;
}

function renderPractice() {
  appRoot.innerHTML = `
    <div class="practice-page page-width">
      <header class="page-heading"><div><span class="section-kicker">PRACTICE LAB</span><h1>Turn recognition into recall.</h1><p>Use focused practice to build fast, structured product judgment for the job and the interview.</p></div><div class="practice-streak"><span>7</span><div><b>day practice plan</b><small>20 minutes per day</small></div></div></header>
      <div class="practice-tabs" role="tablist">
        ${[["quiz", "Mastery quiz", "24 questions"], ["flashcards", "Flashcards", "24 concepts"], ["case", "Decision lab", "1 live scenario"], ["interview", "Interview simulator", "10 prompts"]].map(([id, title, meta]) => `<button class="${state.practiceTab === id ? "active" : ""}" data-action="practice-tab" data-tab="${id}" role="tab"><b>${title}</b><small>${meta}</small></button>`).join("")}
      </div>
      <div class="practice-panel" id="practicePanel">${practicePanelHTML()}</div>
    </div>`;
}

function practicePanelHTML() {
  if (state.practiceTab === "flashcards") return flashcardHTML();
  if (state.practiceTab === "case") return caseLabHTML();
  if (state.practiceTab === "interview") return interviewHTML();
  return quizHTML();
}

function quizHTML() {
  const item = quizQuestions[state.quizIndex];
  const answered = state.quizAnswers[item.id];
  const correctCount = Object.entries(state.quizAnswers).filter(([id, answer]) => quizQuestions.find((q) => q.id === id)?.a === answer).length;
  return `<div class="quiz-layout">
    <aside class="quiz-progress"><span class="quiz-score">${correctCount}<small>correct</small></span><b>Program mastery</b><p>${Object.keys(state.quizAnswers).length} of ${quizQuestions.length} questions attempted</p><div class="question-map">${quizQuestions.map((question, index) => `<button data-action="quiz-jump" data-index="${index}" class="${index === state.quizIndex ? "current" : ""} ${state.quizAnswers[question.id] !== undefined ? (state.quizAnswers[question.id] === question.a ? "right" : "wrong") : ""}">${index + 1}</button>`).join("")}</div><button class="text-button" data-action="reset-quiz">Reset answers</button></aside>
    <section class="quiz-card"><div class="quiz-topline"><span>QUESTION ${state.quizIndex + 1} OF ${quizQuestions.length}</span><span>${item.module}</span></div><h2>${item.q}</h2><div class="quiz-options">${item.options.map((option, index) => `<button data-action="quiz-answer" data-answer="${index}" class="${answered !== undefined ? (index === item.a ? "correct" : index === answered ? "incorrect" : "muted") : ""}" ${answered !== undefined ? "disabled" : ""}><span>${String.fromCharCode(65 + index)}</span><b>${option}</b></button>`).join("")}</div>${answered !== undefined ? `<div class="quiz-explanation ${answered === item.a ? "correct" : "incorrect"}"><b>${answered === item.a ? "Correct." : "Not quite."}</b><p>${quizExplanation(item)}</p></div><div class="quiz-nav"><button class="secondary-button" data-action="quiz-previous" ${state.quizIndex === 0 ? "disabled" : ""}>← Previous</button><button class="primary-button" data-action="quiz-next">${state.quizIndex === quizQuestions.length - 1 ? "Review results" : "Next question →"}</button></div>` : ""}</section>
  </div>`;
}

function quizExplanation(item) {
  const module = modules.find((entry) => entry.id === item.id);
  return `The best answer follows the module’s central idea: ${module.frameworkDefinition.split(".")[0]}. Review the worked case if you want to see the reasoning applied.`;
}

function flashcardHTML() {
  const [category, term, definition] = flashcards[state.flashIndex];
  return `<div class="flashcard-layout"><div class="flashcard-meta"><span>${state.flashIndex + 1} / ${flashcards.length}</span><button data-action="shuffle-flashcards">Shuffle ↝</button></div><button class="study-card ${state.flashFlipped ? "flipped" : ""}" data-action="flip-card"><span class="study-front"><small>${category}</small><strong>${term}</strong><em>Tap to reveal answer</em></span><span class="study-back"><small>FIELD DEFINITION</small><strong>${definition}</strong><em>Tap to see term</em></span></button><div class="flashcard-nav"><button class="secondary-button" data-action="flash-previous">← Previous</button><div><button data-action="flash-rate" data-rating="again">Study again</button><button data-action="flash-rate" data-rating="gotit">Got it ✓</button></div><button class="primary-button" data-action="flash-next">Next →</button></div></div>`;
}

function caseLabHTML() {
  const { value, evidence, strategy, effort, risk } = state.caseScores;
  const score = ((value * evidence * strategy) / Math.max(1, effort * risk)).toFixed(1);
  return `<div class="case-lab">
    <header><span>DECISION LAB · PRIORITIZATION</span><h2>Should Atlas build automated renewal forecasting?</h2><p>Atlas is a B2B subscription platform. Customer success teams discover renewal risk too late. Leadership wants AI forecasting, but historical CRM data is incomplete and the enterprise roadmap is crowded.</p></header>
    <div class="case-grid"><section class="case-evidence"><h3>Evidence packet</h3><article><small>CUSTOMER</small><b>8 of 12 interviewed teams use manual risk spreadsheets</b><p>Largest teams spend 6–10 hours weekly consolidating renewal signals.</p></article><article><small>BEHAVIOR</small><b>Only 42% of accounts have complete activity and CRM fields</b><p>Missing data clusters among smaller customers and recent migrations.</p></article><article><small>BUSINESS</small><b>A 1-point gross retention lift is worth ₹1.8 crore annually</b><p>But forecast errors could redirect scarce success-manager attention.</p></article><article><small>CONSTRAINT</small><b>Estimated 8–12 engineer-weeks for an assistive beta</b><p>Includes data quality, explanations, feedback, and monitoring.</p></article></section>
      <section class="decision-console"><h3>Score the decision</h3>${[["value", "Customer + business value", value], ["evidence", "Evidence strength", evidence], ["strategy", "Strategic fit", strategy], ["effort", "Effort + opportunity cost", effort], ["risk", "Downside + trust risk", risk]].map(([id, label, current]) => `<label><span><b>${label}</b><output>${current}/10</output></span><input type="range" min="1" max="10" value="${current}" data-case-score="${id}" /></label>`).join("")}<div class="decision-score"><small>DIRECTIONAL BET SCORE</small><strong>${score}</strong><span>Use the score to expose assumptions, not automate the call.</span></div><label class="decision-write"><b>Your recommendation</b><textarea id="caseRecommendation" placeholder="Choose proceed, pivot, pause, or stop. Explain the strongest evidence, biggest risk, thin next step, and decision threshold."></textarea></label><button class="primary-button full" data-action="evaluate-case">Evaluate my reasoning</button><div id="caseFeedback"></div></section></div>
  </div>`;
}

function interviewHTML() {
  const [type, prompt] = interviewPrompts[state.interviewIndex];
  return `<div class="interview-lab"><aside><span class="interview-type">${type}</span><h2>${prompt}</h2><div class="interview-structure"><b>Suggested structure</b><ol><li>Clarify goal and assumptions</li><li>State your approach</li><li>Prioritize with reasons</li><li>Go deep on the key mechanism</li><li>Measure, guardrail, and synthesize</li></ol></div><button class="text-button" data-action="new-prompt">Give me another prompt ↝</button></aside><section class="timer-card"><small>FOCUSED RESPONSE TIMER</small><time id="interviewTimer">${formatTime(state.timer)}</time><div><button class="primary-button large" data-action="toggle-timer">${state.timerId ? "Pause" : state.timer ? "Resume" : "Start 30-minute timer"}</button><button class="secondary-button" data-action="reset-timer">Reset</button></div><label><b>Answer notes</b><textarea placeholder="Capture your structure, priorities, tradeoffs, metrics, and risks…"></textarea></label><div class="self-rubric"><b>Self-review</b><span>□ Clear goal</span><span>□ Explicit priorities</span><span>□ Deep mechanism</span><span>□ Tradeoffs</span><span>□ Metrics + guardrails</span><span>□ Concise synthesis</span></div></section></div>`;
}

function formatTime(seconds) {
  const remaining = Math.max(0, 1800 - seconds);
  return `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
}

function renderGrades() {
  const progress = totalProgress();
  appRoot.innerHTML = `<div class="grades-page page-width">
    <header class="page-heading"><div><span class="section-kicker">YOUR PROGRESS</span><h1>Grades &amp; projects</h1><p>Complete lessons, knowledge checks, and applied projects to earn your ProductCraft certificate.</p></div><div class="grade-summary"><strong>${progress}%</strong><span>overall completion</span></div></header>
    <div class="grade-grid"><main>
      <section class="grade-card certificate-progress"><div><span class="certificate-mini-mark">PC</span><div><small>PROFESSIONAL CERTIFICATE</small><h2>${progress === 100 ? "Certificate earned" : "Keep building your product craft"}</h2><p>${state.completed.size} of ${totalLessons} lessons completed. Finish every lesson and module project to unlock your certificate.</p></div></div><div class="certificate-bar"><i style="width:${progress}%"></i></div><button class="primary-button" data-action="open-certificate" ${progress < 100 ? "disabled" : ""}>${progress === 100 ? "View certificate" : `${totalLessons - state.completed.size} lessons remaining`}</button></section>
      <section class="grade-card"><div class="grade-card-heading"><div><small>COURSEWORK</small><h2>Course progress</h2></div><span>6 courses</span></div><div class="course-grade-list">${courses.map((course) => { const coursePct = courseProgress(course.id); return `<article><span class="course-number" style="--course-color:${course.color}">${course.number}</span><div><b>${course.title}</b><small>${courseModules(course.id).reduce((sum, module) => sum + moduleProgress(module), 0)} of 16 lessons · ${course.hours} hours</small><div><i style="width:${coursePct}%"></i></div></div><strong>${coursePct}%</strong><a href="#learn/${courseModules(course.id)[0].id}/l01">→</a></article>`; }).join("")}</div></section>
      <section class="grade-card"><div class="grade-card-heading"><div><small>APPLIED WORK</small><h2>Project portfolio</h2></div><span>24 artifacts</span></div><div class="project-table"><div class="project-row header"><span>Project</span><span>Course</span><span>Status</span></div>${modules.map((module) => { const done = moduleProgress(module) === 4; const course = courses.find((item) => item.id === module.course); return `<a class="project-row" href="#learn/${module.id}/${module.lessons[3].id}"><span><b>${module.project}</b><small>${module.framework}</small></span><span>Course ${course.number}</span><span class="status-pill ${done ? "done" : ""}">${done ? "Complete" : `${moduleProgress(module)}/4 lessons`}</span></a>`; }).join("")}</div></section>
    </main><aside><div class="aside-card"><small>MASTERY QUIZ</small><b class="aside-big">${Object.keys(state.quizAnswers).length} / ${quizQuestions.length}</b><p>Questions attempted across all 24 modules.</p><a href="#practice">Continue quiz →</a></div><div class="aside-card"><small>BOOKMARKS</small><b class="aside-big">${state.bookmarks.size} saved</b><p>Return to important lessons and concepts.</p><button class="text-button" data-action="show-bookmarks">View saved lessons</button></div><div class="aside-card"><small>NOTES</small><b class="aside-big">${Object.values(state.notes).filter(Boolean).length} lessons</b><p>Your private course notebook is stored on this device.</p><button class="text-button" data-action="show-notes">Open notebook</button></div></aside></div>
  </div>`;
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "enroll") {
    state.enrolled = true; saveState(); location.hash = `learn/${state.currentModule}/${state.currentLesson}`;
  } else if (action === "save-program") {
    showToast("Program saved on this device."); target.innerHTML = `<span aria-hidden="true">♥</span> Saved`;
  } else if (action === "toggle-overview-course") {
    const content = document.querySelector(`[data-overview-course="${target.dataset.course}"]`);
    const willOpen = content.hasAttribute("hidden"); content.toggleAttribute("hidden"); target.setAttribute("aria-expanded", willOpen);
  } else if (action === "toggle-course") {
    const id = target.dataset.course;
    if (state.openCourses.has(id)) state.openCourses.delete(id);
    else state.openCourses.add(id);
    renderLearn();
  } else if (action === "toggle-module") {
    const id = target.dataset.module;
    if (state.openModules.has(id)) state.openModules.delete(id);
    else state.openModules.add(id);
    renderLearn();
  } else if (action === "toggle-syllabus") {
    document.querySelector(".learning-sidebar")?.classList.toggle("mobile-open");
  } else if (action === "toggle-bookmark") {
    const key = lessonKey(state.currentModule, state.currentLesson);
    if (state.bookmarks.has(key)) state.bookmarks.delete(key);
    else state.bookmarks.add(key);
    saveState(); showToast(state.bookmarks.has(key) ? "Lesson saved." : "Bookmark removed."); renderLearn();
  } else if (action === "play-video") {
    target.closest(".video-lesson").classList.toggle("playing"); target.querySelector("span").textContent = target.closest(".video-lesson").classList.contains("playing") ? "Ⅱ" : "▶";
  } else if (action === "toggle-transcript") {
    const transcript = target.closest(".video-lesson").querySelector(".video-transcript"); const open = transcript.hasAttribute("hidden"); transcript.toggleAttribute("hidden"); target.textContent = open ? "Hide transcript" : "Show transcript";
  } else if (action === "download-template") {
    const lesson = currentLesson(); const module = currentModule(); downloadText(`${lesson.artifact}.txt`, templateText(module, lesson)); showToast("Working template downloaded.");
  } else if (action === "mark-project") {
    showToast("Artifact marked as drafted. Finish the lesson to add it to progress."); target.textContent = "✓ Drafted";
  } else if (action === "inline-answer") {
    const correct = Number(target.dataset.correct); const selected = Number(target.dataset.answer); const container = target.closest(".inline-check"); container.querySelectorAll("button").forEach((button) => { button.disabled = true; if (Number(button.dataset.answer) === correct) button.classList.add("correct"); }); if (selected !== correct) target.classList.add("incorrect"); const feedback = container.querySelector(".check-feedback"); feedback.hidden = false; feedback.innerHTML = selected === correct ? `<b>Correct.</b> You selected the answer that best preserves product judgment and customer value.` : `<b>Review the reasoning.</b> The strongest answer is ${String.fromCharCode(65 + correct)}. Revisit the core concept and worked case above.`;
  } else if (action === "toggle-complete") {
    const key = lessonKey(state.currentModule, state.currentLesson); if (state.completed.has(key)) { state.completed.delete(key); saveState(); renderLearn(); } else { state.completed.add(key); saveState(); const next = adjacentLesson(currentModule(), currentLesson(), 1); showToast("Lesson completed — nice work."); if (next) location.hash = `learn/${next.module.id}/${next.lesson.id}`; else renderGrades(); }
  } else if (action === "show-notes") {
    showNotes();
  } else if (action === "practice-tab") {
    state.practiceTab = target.dataset.tab; renderPractice();
  } else if (action === "quiz-answer") {
    state.quizAnswers[quizQuestions[state.quizIndex].id] = Number(target.dataset.answer); saveState(); renderPractice();
  } else if (action === "quiz-next") {
    if (state.quizIndex < quizQuestions.length - 1) state.quizIndex += 1; else showToast(`Quiz complete: ${Object.entries(state.quizAnswers).filter(([id, a]) => quizQuestions.find((q) => q.id === id)?.a === a).length}/${quizQuestions.length} correct.`); renderPractice();
  } else if (action === "quiz-previous") {
    state.quizIndex = Math.max(0, state.quizIndex - 1); renderPractice();
  } else if (action === "quiz-jump") {
    state.quizIndex = Number(target.dataset.index); renderPractice();
  } else if (action === "reset-quiz") {
    state.quizAnswers = {}; state.quizIndex = 0; saveState(); renderPractice();
  } else if (action === "flip-card") {
    state.flashFlipped = !state.flashFlipped; renderPractice();
  } else if (action === "flash-next" || action === "flash-rate") {
    state.flashIndex = (state.flashIndex + 1) % flashcards.length; state.flashFlipped = false; if (action === "flash-rate") showToast(target.dataset.rating === "gotit" ? "Marked as known." : "Card will stay in your practice loop."); renderPractice();
  } else if (action === "flash-previous") {
    state.flashIndex = (state.flashIndex - 1 + flashcards.length) % flashcards.length; state.flashFlipped = false; renderPractice();
  } else if (action === "shuffle-flashcards") {
    state.flashIndex = Math.floor(Math.random() * flashcards.length); state.flashFlipped = false; renderPractice();
  } else if (action === "evaluate-case") {
    const text = document.querySelector("#caseRecommendation").value.trim(); const feedback = document.querySelector("#caseFeedback"); const signals = [text.match(/proceed|pivot|pause|stop/i), text.match(/evidence|data|interview|42%|8 of 12/i), text.match(/risk|trust|error|guardrail/i), text.match(/test|pilot|beta|next step/i), text.match(/threshold|if |when |criteria/i)].filter(Boolean).length; feedback.innerHTML = `<div class="case-evaluation ${signals >= 4 ? "strong" : "develop"}"><b>${signals >= 4 ? "Strong decision structure" : "Push the reasoning further"}</b><p>${signals >= 4 ? "You made a recommendation, used evidence, surfaced risk, proposed a thin next step, and included a decision condition." : "A decision-grade answer should choose a direction, cite the strongest evidence, name the downside, propose a thin next step, and define the threshold for further investment."}</p><span>Rubric coverage: ${signals}/5</span></div>`;
  } else if (action === "new-prompt") {
    state.interviewIndex = (state.interviewIndex + 1) % interviewPrompts.length; state.timer = 0; stopTimer(); renderPractice();
  } else if (action === "toggle-timer") {
    if (state.timerId) stopTimer();
    else startTimer();
    renderPractice();
  } else if (action === "reset-timer") {
    stopTimer(); state.timer = 0; renderPractice();
  } else if (action === "open-certificate") {
    document.querySelector("#certificateDialog").showModal();
  } else if (action === "show-bookmarks") {
    showNotes(true);
  }
}

function templateText(module, lesson) {
  return `PRODUCTCRAFT WORKING TEMPLATE\n\nModule: ${module.title}\nLesson: ${lesson.title}\nArtifact: ${lesson.artifact}\n\n1. DECISION TO IMPROVE\nWhat decision will this artifact help someone make?\n\n2. CURRENT BELIEF\nWhat do you believe, and why? Separate facts, interpretations, and assumptions.\n\n3. EVIDENCE\nWhat direct, behavioral, quantitative, operational, or market evidence supports or weakens the belief?\n\n4. APPLICATION\n${lesson.practice}\n\n5. TRADEOFFS\nWhat attractive alternative are you not choosing? What downside or guardrail matters?\n\n6. NEXT DECISION\nWhat will you do next, by when, and what new evidence would change the decision?\n\nQUALITY CHECK\n${module.checklist.map((item) => `- [ ] ${item}`).join("\n")}\n`;
}

function downloadText(filename, content) {
  const blob = new Blob([content], { type: "text/plain" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = filename.replace(/[^a-z0-9.-]+/gi, "-").toLowerCase(); link.click(); URL.revokeObjectURL(link.href);
}

function showNotes(bookmarksOnly = false) {
  const dialog = document.querySelector("#notesDialog"); const container = document.querySelector("#allNotes");
  const records = modules.flatMap((module) => module.lessons.map((lesson) => ({ module, lesson, key: lessonKey(module.id, lesson.id) }))).filter((entry) => bookmarksOnly ? state.bookmarks.has(entry.key) : Boolean(state.notes[entry.key]));
  dialog.querySelector("h2").textContent = bookmarksOnly ? "Saved lessons" : "Course notes";
  container.innerHTML = records.length ? records.map((entry) => `<a href="#learn/${entry.module.id}/${entry.lesson.id}" onclick="document.querySelector('#notesDialog').close()"><small>MODULE ${entry.module.number}</small><b>${entry.lesson.title}</b><p>${bookmarksOnly ? entry.lesson.summary : escapeHTML(state.notes[entry.key])}</p></a>`).join("") : `<div class="empty-notes"><span>✎</span><b>${bookmarksOnly ? "No saved lessons yet" : "Your notebook is empty"}</b><p>${bookmarksOnly ? "Use Save on any lesson to return to it here." : "Write notes beside any lesson and they will appear here."}</p></div>`;
  dialog.showModal();
}

function startTimer() {
  if (state.timer >= 1800) state.timer = 0;
  state.timerId = window.setInterval(() => { state.timer += 1; const display = document.querySelector("#interviewTimer"); if (display) display.textContent = formatTime(state.timer); if (state.timer >= 1800) { stopTimer(); showToast("Time. Take 60 seconds to synthesize your answer."); renderPractice(); } }, 1000);
}
function stopTimer() { if (state.timerId) window.clearInterval(state.timerId); state.timerId = null; }

document.addEventListener("click", handleClick);
window.addEventListener("hashchange", render);

document.addEventListener("input", (event) => {
  if (event.target.id === "lessonNote") { state.notes[lessonKey(state.currentModule, state.currentLesson)] = event.target.value; saveState(); }
  if (event.target.matches("[data-case-score]")) { state.caseScores[event.target.dataset.caseScore] = Number(event.target.value); const preserved = document.querySelector("#caseRecommendation")?.value || ""; document.querySelector("#practicePanel").innerHTML = caseLabHTML(); document.querySelector("#caseRecommendation").value = preserved; }
});

document.querySelector("#globalSearch").addEventListener("submit", (event) => { event.preventDefault(); const first = document.querySelector("#searchResults a"); if (first) first.click(); });
document.querySelector("#searchInput").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase(); const results = document.querySelector("#searchResults");
  if (query.length < 2) { results.hidden = true; return; }
  const matches = modules.flatMap((module) => module.lessons.map((lesson) => ({ module, lesson }))).filter(({ module, lesson }) => `${module.title} ${module.summary} ${lesson.title} ${lesson.summary} ${lesson.keyMoves.join(" ")}`.toLowerCase().includes(query)).slice(0, 8);
  results.innerHTML = matches.length ? matches.map(({ module, lesson }) => `<a href="#learn/${module.id}/${lesson.id}"><span>MODULE ${module.number}</span><b>${lesson.title}</b><small>${module.title}</small></a>`).join("") : `<p>No lesson found. Try “metrics,” “strategy,” “AI,” or “research.”</p>`;
  results.hidden = false;
});

document.querySelector("#exploreButton").addEventListener("click", (event) => { const menu = document.querySelector("#exploreMenu"); const open = menu.hasAttribute("hidden"); menu.toggleAttribute("hidden"); event.currentTarget.setAttribute("aria-expanded", open); });
document.querySelector("#mobileMenuButton").addEventListener("click", (event) => { const menu = document.querySelector("#mobileNav"); const open = menu.hasAttribute("hidden"); menu.toggleAttribute("hidden"); event.currentTarget.setAttribute("aria-expanded", open); });
document.querySelector("#themeButton").addEventListener("click", () => { document.documentElement.classList.toggle("dark"); localStorage.setItem("pc-theme", document.documentElement.classList.contains("dark") ? "dark" : "light"); });
document.querySelector("#closeCertificate").addEventListener("click", () => document.querySelector("#certificateDialog").close());
document.querySelector("#printCertificate").addEventListener("click", () => window.print());
document.addEventListener("keydown", (event) => { if (event.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { event.preventDefault(); document.querySelector("#searchInput").focus(); } });
document.querySelectorAll("[data-level-shortcut]").forEach((link) => link.addEventListener("click", () => { document.querySelector("#exploreMenu").hidden = true; }));
if (localStorage.getItem("pc-theme") === "dark") document.documentElement.classList.add("dark");

render();
