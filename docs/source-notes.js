/*
 * Source-grounded curriculum notes.
 *
 * These are original teaching syntheses, not reproduced pages. The local casebooks
 * are mapped by printed page so learners can trace each idea back to the source.
 */

const sourceDossiers = {
  m01: {
    arc: "Role → value → decisions → operating cadence",
    prerequisites: "No prior product experience required.",
    sources: ["FMS pp. 9–14", "BITSoM pp. 12–18", "XLRI pp. 5–11"],
    chapters: [
      {
        heading: "A product is a continuing value exchange",
        body: "The FMS and BITSoM introductions place product management at the overlap of customer desirability, technical feasibility, and business viability. That overlap is more useful than the popular ‘mini-CEO’ label: a PM rarely controls the people or resources involved. A product persists because a user repeatedly receives value and the producer captures enough value to maintain it. A project, by contrast, ends when a defined scope is delivered. Strong PM work therefore keeps the post-launch loop visible—use, feedback, learning, adaptation, and economics—not merely the delivery milestone.",
        notes: ["Name the user and the repeated progress they seek.", "Name the producer and the mechanism that sustains delivery.", "Identify the feedback signal that changes the next product decision."],
        case: "For a UPI app, ‘release bill reminders’ is a project output. ‘Help recurring bill payers avoid late fees while increasing successful monthly payments’ defines a product outcome and the value loop behind it.",
      },
      {
        heading: "Outputs matter only through the behavior they enable",
        body: "The casebooks repeatedly connect PM responsibility to customer value and measurable business impact. Use a four-link chain: the team ships an output; the output creates a capability; the capability changes a user or operational behavior; that behavior contributes to an outcome. Each arrow is an assumption. If a team ships recommendations, users must notice them, trust them, act on them, and receive better results before retention or revenue can plausibly change. This chain prevents the common mistake of treating completion, adoption, and impact as interchangeable.",
        notes: ["Separate shipped, available, adopted, and valuable.", "Pair a leading behavior with a lagging business result.", "Add a guardrail for quality, trust, cost, or harm."],
        case: "A music app can ship collaborative playlists without improving retention. The decision-grade chain is: collaboration tools → invitations accepted → groups add and play songs together → more weeks with shared listening, while hides and notification opt-outs do not worsen.",
      },
      {
        heading: "The PM owns clarity, not every answer",
        body: "XLRI describes the PM as a cross-functional role that sets direction, defines success, and converts customer pain into cohesive problems. FMS adds the business, design, and technology intersection. In practice, expertise stays distributed: design owns interaction craft, engineering owns technical integrity, data owns measurement rigor, and commercial teams own market knowledge. Product leadership makes the decision, owner, criteria, contributors, and escalation path explicit. This is how a PM avoids becoming either a requirements courier or an unaccountable consensus broker.",
        notes: ["Write one accountable decision owner.", "Invite contributors for knowledge, not ceremonial approval.", "Distinguish reversible decisions from costly one-way doors."],
        case: "For a pricing test, product frames the decision and customer value; finance validates economics; data sets inference rules; engineering controls exposure; sales surfaces contract risk. Agreement is useful, but accountability must remain singular.",
      },
      {
        heading: "Run the week around evidence and decisions",
        body: "The source material lists discovery, planning, coordination, launch, measurement, and iteration as recurring PM work. A strong operating cadence groups those activities around learning loops. Discovery time produces fresh evidence. A product trio turns evidence into a recommendation. Delivery reviews remove uncertainty and unblock quality. Stakeholder communication records choices and risks. Outcome reviews compare expected and observed behavior. Calendar volume is not a proxy for product leadership; a useful week creates a small number of better decisions and closes the loops from earlier ones.",
        notes: ["Protect uninterrupted discovery and synthesis time.", "Give every recurring meeting a decision or learning purpose.", "Keep a decision log with owner, rationale, date, and revisit trigger."],
        case: "Replace a weekly status meeting with a 30-minute evidence review: what changed, which belief weakened, what decision is needed, who owns it, and when the result will be reviewed.",
      },
    ],
  },
  m02: {
    arc: "Request → context → problem → importance",
    prerequisites: "Module 1: products, outcomes, and decision ownership.",
    sources: ["IIMB pp. 18–28", "FMS pp. 16–26", "IIMC pp. 7–14"],
    chapters: [
      {
        heading: "A request is evidence of a need, not the need itself",
        body: "The Five Whys and product-design chapters are most useful when applied to the user’s recent behavior rather than to an abstract opinion. ‘Add export to Excel’ might mean the analysis is incomplete, the recipient lacks access, the user needs an auditable record, or the product does not support a downstream workflow. Record the request verbatim, then investigate the triggering situation, desired progress, workaround, and consequence. A PM preserves the evidence while keeping the interpretation provisional.",
        notes: ["Ask about the last time the situation occurred.", "Separate the need from a preferred interface or technology.", "Stop the why-chain when evidence becomes speculation."],
        case: "A seller asking for a daily email may actually need early warning before stock-outs. An inventory alert, reorder rule, API event, or operational change could all serve that need better than a scheduled report.",
      },
      {
        heading: "Context explains why the same person behaves differently",
        body: "Personas in the casebooks become actionable when they include a job, setting, constraints, and current alternative. Demographics alone rarely determine a product choice. Map the trigger that starts the search for progress, the push away from the current approach, the pull of a new option, anxieties about switching, and habits that preserve the status quo. Functional progress explains the task; emotional and social progress explain confidence, identity, and perceived risk. Non-consumption belongs in the competitive set.",
        notes: ["Segment by behavior, need, or situation before age and income.", "Include manual work and doing nothing as alternatives.", "Capture what makes switching feel risky or inconvenient."],
        case: "Two first-time borrowers may share an age bracket but need different products: one needs speed for an emergency; another needs predictability and reassurance about repayment. Their decision criteria and trust needs diverge.",
      },
      {
        heading: "A problem statement is a boundary for learning",
        body: "CIRCLES begins by comprehending the situation and identifying the customer before listing solutions. Turn that discipline into a problem frame: actor, triggering context, attempted progress, friction, consequence, evidence, and scope. A useful statement is narrow enough to guide research and broad enough to admit multiple mechanisms. Add non-goals and unknowns so the team knows what it is not claiming. Avoid embedding ‘app,’ ‘dashboard,’ ‘AI,’ or a preferred channel in the problem itself.",
        notes: ["State what is observed and what is inferred.", "Name the consequence for the user and the business.", "Write explicit boundaries, exclusions, and unknowns."],
        case: "Weak: ‘Drivers need an AI earnings dashboard.’ Stronger: ‘When choosing where to work the next shift, part-time drivers cannot predict net hourly earnings after distance and idle time, so they make low-return trips.’",
      },
      {
        heading: "Size the problem with ranges, not theater",
        body: "The guesstimate chapters across the casebooks teach decomposition, assumption ranges, and sanity checks. Use the same discipline for opportunity sizing. Estimate affected users, frequency, severity, time or money lost, and the realistic share a product can influence. Triangulate interview intensity with behavioral traces, support volume, operational cost, and market evidence. A range with a sensitivity table is more honest than a single precise number. The most valuable output is often the assumption that causes the estimate to swing.",
        notes: ["Build low, base, and high cases.", "Separate total prevalence from reachable and influenceable demand.", "Document the highest-sensitivity assumption and how to test it."],
        case: "Instead of ‘churn is a ₹10 crore problem,’ show customers affected × preventable churn rate × annual contribution margin, then vary the preventable share. The test plan should target that uncertain term first.",
      },
    ],
  },
  m03: {
    arc: "Clarify → segment → prioritize → design",
    prerequisites: "Module 2: solution-neutral problems and opportunity sizing.",
    sources: ["IIMC pp. 7–14, 20–36", "MDI pp. 4–6, 17–41", "XLRI pp. 33–45", "BITSoM pp. 80–100"],
    chapters: [
      {
        heading: "Clarify the mission before solving the prompt",
        body: "Across IIMC, MDI, XLRI, and BITSoM, strong design cases begin with CIRCLES: comprehend the situation before choosing a customer or feature. Clarify why the organization is acting, the product goal, geography, time horizon, platform, constraints, and whether the prompt concerns a new product or an improvement. Do not turn clarification into an interrogation. State reasonable assumptions, explain which one materially changes the solution space, and move forward.",
        notes: ["Clarify goal, scope, users, and constraints.", "Use the company mission as a decision filter, not decoration.", "Time-box questions and declare assumptions explicitly."],
        case: "‘Design a product for commuters’ changes radically if the goal is safety, lower emissions, or transit revenue; if the city has reliable public transport; and if the product must work on low-end devices.",
      },
      {
        heading: "Choose a beachhead instead of designing for an average",
        body: "The MDI LinkedIn-for-blue-collar-workers case illustrates useful segmentation: job type, digital access, work pattern, hiring channel, and pain intensity shape the solution more than a generic demographic profile. Generate multiple segmentations, then choose one using reach, severity, underserved need, strategic fit, and ability to learn. State why other attractive groups are deferred. A beachhead is a deliberate starting system for learning, not a permanent exclusion.",
        notes: ["Make segments mutually understandable and decision-relevant.", "Compare pain, reach, strategic fit, and access.", "Describe the chosen segment’s current workflow in concrete terms."],
        case: "For blue-collar hiring, construction workers paid per shift and technicians seeking long-term placements need different proof, matching, language, and trust mechanisms. A single ‘worker persona’ hides those differences.",
      },
      {
        heading: "Generate mechanisms, then evaluate tradeoffs",
        body: "CIRCLES separates listing solutions from evaluating tradeoffs. First create genuinely different mechanisms: remove a step, make uncertainty visible, automate a task, connect two actors, insure a risk, change an incentive, or redesign the service operation. Then compare desirability, usability, feasibility, viability, responsibility, and strategic advantage. A strong concept is a coherent thin wedge that solves the prioritized problem end to end; it is not the union of every brainstormed feature.",
        notes: ["Prioritize the problem before scoring features.", "Generate mechanisms that change the system in different ways.", "Choose with explicit tradeoffs and non-goals."],
        case: "For airport navigation, turn-by-turn maps, staff assistance, predictable transition times, and a needs passport solve different mechanisms. Combining all four without prioritization increases complexity without proving value.",
      },
      {
        heading: "Design the journey, including failure and recovery",
        body: "The user-journey frameworks in the handbooks encourage teams to map discovery, entry, action, value, repeat use, and exit. Go beyond the happy path. Include eligibility, permissions, empty states, latency, errors, human handoffs, accessibility, abuse, and recovery. Identify the value moment and instrument the smallest set of events that can show task success and quality. The interface is only one surface of the experience; policies, operations, notifications, and support are part of the product.",
        notes: ["Storyboard entry, value moment, repeat loop, and exit.", "Design at least three high-risk failure paths.", "Connect each critical step to a signal and recovery route."],
        case: "A blind user’s ATM journey includes locating the machine, private audio, card orientation, authentication, cash handling, timeout recovery, and help—not simply larger buttons on the standard screen.",
      },
    ],
  },
  m04: {
    arc: "Include → minimize → protect → govern",
    prerequisites: "Module 3: end-to-end experience design.",
    sources: ["FMS pp. 23–26", "BITSoM pp. 95–97", "IIMB pp. 73–74", "Curriculum extension: WCAG 2.2 and NIST AI RMF"],
    chapters: [
      {
        heading: "Accessibility begins with who enters the research room",
        body: "The casebook examples for products for seniors and blind users reveal a recurring lesson: an edge user changes the product model, not merely the visual styling. Recruit people who experience permanent, temporary, and situational barriers. Observe assistive technology, environmental constraints, recovery behavior, and dependence on other people. Use accessibility standards to check coverage, but let research expose which journey, policy, or service assumptions exclude users.",
        notes: ["Recruit disabled participants for relevant journeys.", "Test keyboard, zoom, contrast, motion, and screen-reader flows.", "Treat assisted and low-connectivity paths as first-class journeys."],
        case: "Google Maps for seniors may require landmark-based instructions, readable contrast, fewer mode changes, caregiver sharing, and predictable recovery when location confidence is low. Font size alone is insufficient.",
      },
      {
        heading: "Every data field needs a purpose and an exit",
        body: "Privacy becomes concrete when a team maps collection, purpose, access, retention, inference, sharing, correction, and deletion. Ask which user value or decision each field enables, whether a less sensitive proxy works, and how the experience behaves when consent is withheld. Defaults should preserve agency. Permissions requested at the moment of value are easier to understand than blanket collection during onboarding. Minimize before encrypting: secure storage does not justify unnecessary data.",
        notes: ["Tie collection to an explicit purpose and owner.", "Offer a meaningful path when optional permission is refused.", "Design access, correction, export, revocation, and deletion."],
        case: "A chronic-care wearable may need trend data but not continuous precise location. Emergency sharing should be scoped, visible, time-bound, and reversible rather than hidden in broad terms.",
      },
      {
        heading: "Trust is an outcome with counter-metrics",
        body: "Product teardowns and app critiques should examine incentives, defaults, cancellation, visibility of cost, and asymmetric control. Conversion can rise because the product is clearer—or because it pressures or confuses. Pair growth metrics with comprehension, regret, complaint, opt-out, reversal, and support signals. Map who benefits from the design and who absorbs the burden. A locally ‘successful’ metric can damage the relationship that sustains retention.",
        notes: ["Compare the ease of entering and leaving.", "Measure comprehension and downstream regret.", "Audit defaults, scarcity, hidden costs, and forced continuity."],
        case: "A prechecked loan-data consent can improve completion while reducing informed choice. A better design explains purpose, provides an equivalent manual route, and measures both completion and comprehension.",
      },
      {
        heading: "Governance must change a release decision",
        body: "A responsible review is useful only when it can alter scope, controls, rollout, monitoring, or recourse. Map users and non-users affected, plausible misuse, severity, exposure, detectability, and reversibility. Assign a risk owner and escalation path. Define evidence required for launch, thresholds for pause or rollback, communication responsibilities, and a route for users to appeal or recover. High-stakes automation needs stronger proof and human accountability than a reversible convenience feature.",
        notes: ["Tier risks by consequence and reversibility.", "Attach controls and evidence to named owners.", "Predefine monitoring, escalation, rollback, and recourse."],
        case: "For an automated eligibility decision, offline accuracy is not enough. Review subgroup errors, explanation quality, override rates, appeals, drift, and the operational ability to restore service after a wrong decision.",
      },
    ],
  },
  m05: {
    arc: "Decision → assumptions → evidence → sprint",
    prerequisites: "Course 1: problem framing, design, and responsible-product basics.",
    sources: ["FMS pp. 16–22", "IIMB pp. 64–72", "IIMC pp. 18–19"],
    chapters: [
      {
        heading: "Discovery reduces a named decision risk",
        body: "FMS’s innovation pipeline moves from customer discovery to validation, customer creation, and company building. The sequence matters because each phase answers a different uncertainty. Discovery is not a permanent workshop track or a synonym for requirements collection. Start with the product decision and the loss if it is wrong. Separate facts, interpretations, and assumptions. Choose the smallest evidence that can change whether the team proceeds, pivots, pauses, or stops.",
        notes: ["Write the decision and decision date first.", "Name the uncertainty that could invalidate the bet.", "Define what evidence would change the direction."],
        case: "Before building automated tax estimates, a team may need to decide whether uncertainty is painful enough, whether users trust a range, whether transactions can be categorized, and whether support cost destroys viability.",
      },
      {
        heading: "A product bet carries several independent risks",
        body: "The casebooks often emphasize feasibility, desirability, and viability; modern discovery expands the view to usability, adoption, and responsibility. Write each risk as a falsifiable claim. Value asks whether the problem and proposed benefit matter. Usability asks whether people can understand and succeed. Feasibility covers technology and operations. Viability covers economics, policy, and channel. Adoption covers switching and distribution. Responsibility covers safety, fairness, privacy, and recourse.",
        notes: ["Avoid one vague assumption such as ‘users will love it.’", "Include operational and channel dependencies.", "Look for risks that fail together, such as trust and adoption."],
        case: "A technically accurate health reminder can still fail because caregivers cannot configure it, clinicians will not recommend it, alerts cause anxiety, or the economics require intrusive data use.",
      },
      {
        heading: "Test the weak belief with the largest consequence",
        body: "Prioritization applies to learning as well as features. Plot assumptions by evidence strength and consequence of being wrong. Fresh, direct behavior is usually stronger than old survey intent or an executive belief. Do not select a test merely because it is easy or visually impressive. Match fidelity to uncertainty: interviews can reveal context, a prototype can reveal task breakdown, a concierge service can reveal operations, and a technical spike can reveal system constraints.",
        notes: ["Rank consequence before convenience.", "Record evidence relevance, freshness, and limitations.", "Use the cheapest credible test, not the cheapest possible activity."],
        case: "If a marketplace assumes providers will accept ten-minute bookings, a clickable customer flow tests the wrong side. A manual provider pilot is more expensive but answers the consequential operational belief.",
      },
      {
        heading: "A discovery sprint ends in a decision, not a demo",
        body: "Agile and experimentation chapters support short, cross-functional learning loops. In a two-week sprint, run customer, design, technical, data, operational, and commercial work in parallel around shared questions. Synthesize daily so contradictions surface early. Set participant targets, prototype fidelity, owners, and evidence thresholds before testing. The final review should show what was believed, what was observed, how confidence changed, what remains uncertain, and which decision follows.",
        notes: ["Sequence tests around learning dependencies.", "Synthesize while research is happening.", "Close with recommendation, confidence, risks, and next evidence."],
        case: "A ten-day sprint can combine five workflow interviews, a concierge simulation, a data-quality audit, a pricing smoke test, and a legal review—each tied to a separate assumption and one investment decision.",
      },
    ],
  },
  m06: {
    arc: "Plan → interview → observe → sample",
    prerequisites: "Module 5: assumption mapping and evidence selection.",
    sources: ["FMS pp. 16, 23–26", "IIMB pp. 20–28", "MDI pp. 17–41"],
    chapters: [
      {
        heading: "Research questions must be able to change a decision",
        body: "The product-design cases begin by clarifying the situation and customer. A research plan goes further: state the decision, current belief, unknowns, participant behaviors, method, sample variation, consent, and synthesis plan. ‘Would you use this?’ is weak because stated approval does not reveal context or switching. ‘Walk me through the last time you tried to complete this task’ produces reconstructable evidence. Every question should have a reason its answer could change scope, priority, concept, or investment.",
        notes: ["Convert assumptions into neutral research questions.", "Recruit by relevant behavior and context.", "Choose depth, breadth, and method for the decision."],
        case: "For a cooking assistant, recruit people who recently cooked under time pressure, across skill levels and household constraints—not a generic sample of smart-speaker owners.",
      },
      {
        heading: "Interview for episodes, not opinions",
        body: "Use a chronological interview. Start with the trigger and context, reconstruct actions and handoffs, inspect artifacts, ask what was difficult, and compare the outcome with expectations. Follow concrete nouns and surprising verbs. Silence gives participants room to remember. Avoid selling the concept, asking leading binaries, or rewarding answers that confirm the roadmap. Capture exact evidence beside the researcher’s interpretation so another teammate can audit the conclusion.",
        notes: ["Ask for the most recent specific example.", "Probe actions, workarounds, consequences, and alternatives.", "Mark leading questions and confirmation-seeking behavior."],
        case: "Instead of ‘Would automatic categorization help?’, ask ‘Show me how you categorized the last unusual expense. What did you do when the category was wrong?’",
      },
      {
        heading: "Observation reveals work users cannot narrate",
        body: "Many casebook solutions depend on workflows—blue-collar hiring, cooking, travel, payments, and operations. Contextual inquiry exposes interruptions, physical constraints, unofficial tools, coordination, and exception handling that interviews compress or omit. Ask the participant to teach the task while you record time, actions, artifacts, handoffs, and breakdowns. Separate description from interpretation. Avoid correcting the workflow during observation; the workaround is often the evidence.",
        notes: ["Observe in the real or realistically simulated environment.", "Record timestamps, tools, people, and exceptions.", "Ask about the purpose of a workaround before judging it."],
        case: "Watching a restaurant reconcile marketplace orders may reveal handwritten throttling rules, device switching, and staff handoffs—constraints no dashboard interview would fully surface.",
      },
      {
        heading: "Qualitative samples seek variation, not statistical representation",
        body: "A small research round cannot estimate population prevalence, but it can reveal mechanisms and differences. Recruit the behaviors and contexts most likely to change the design: new and experienced users, retained and lapsed users, high- and low-frequency workflows, assisted users, edge cases, and people facing access barriers. Define exclusions and quotas before convenience dominates. Handle consent, recording, sensitive data, and compensation as product-quality concerns, not paperwork.",
        notes: ["Use behavioral screeners instead of self-declared enthusiasm.", "Include negative cases and accessibility variation.", "Do not report qualitative frequency as market prevalence."],
        case: "Five expert power users cannot validate onboarding for first-time users. A better sample deliberately includes recent failures, non-adopters, and people using a manual alternative.",
      },
    ],
  },
  m07: {
    arc: "Evidence → patterns → insight → opportunity",
    prerequisites: "Module 6: interviewing, observation, and sampling.",
    sources: ["FMS pp. 23–26, 47–52", "IIMC pp. 53–68", "BITSoM pp. 63–78"],
    chapters: [
      {
        heading: "Keep the path from source to insight auditable",
        body: "Product teardowns and app critiques are strongest when observations are traceable to a journey, user, and goal. Store atomic evidence: what happened, source, date, segment, context, artifact, and researcher note. Keep raw evidence separate from interpretation. A light taxonomy—journey step, need, barrier, behavior, and confidence—is enough to retrieve patterns without burying the team in tags. Evidence loses value when slides preserve the conclusion but discard the basis.",
        notes: ["One observation per record, with source and context.", "Separate participant language from analyst interpretation.", "Link every insight to supporting and opposing evidence."],
        case: "‘Checkout is confusing’ is not an auditable record. ‘Three first-time mobile users returned from payment to cart to verify fees after the total changed’ preserves behavior, segment, and context.",
      },
      {
        heading: "Cluster behavior without erasing contradiction",
        body: "Affinity mapping is not a vote. Cluster by repeated behavior, goal, barrier, or workaround, then deliberately search for cases that do not fit. A highly consequential problem can matter despite appearing in only one interview; a frequently mentioned preference can remain low-value. Compare segments and contexts before merging. Record prevalence as unknown unless supported by quantitative evidence. Contradictions often reveal that the initial segmentation or journey model is too coarse.",
        notes: ["Name clusters as behaviors or needs, not topics.", "Keep negative and boundary cases visible.", "Distinguish salience, severity, and prevalence."],
        case: "Most streaming users ask for more choice, while a smaller group repeatedly abandons because selection takes too long. The contradiction suggests different intent states, not a single content problem.",
      },
      {
        heading: "An insight explains why a pattern occurs",
        body: "App critiques often stop at observations such as ‘the navigation has too many steps.’ A decision-grade insight explains the mechanism, evidence, consequence, and changed belief. Use a because/therefore structure, include confidence, and name an alternative explanation. A good insight narrows or redirects opportunity; it does not simply restate that users want convenience. The surprise is useful only when it changes what the team would build, measure, or decline.",
        notes: ["Connect observation to a plausible mechanism.", "State what prior belief changed and with what confidence.", "Name a competing explanation or missing evidence."],
        case: "Users are not abandoning expense setup because it is long; they stop when asked to choose accounting terms they cannot verify, so reducing fields alone will not resolve the confidence gap.",
      },
      {
        heading: "Opportunity trees connect outcomes to learning",
        body: "Start with a measurable outcome, then map evidence-backed opportunities expressed as user needs or barriers. Branch into distinct solution mechanisms and attach the assumption each test addresses. Do not treat the tree as a backlog hierarchy: sibling opportunities can overlap, evidence can weaken a branch, and the team must choose where to learn. Prioritize using value, evidence, strategic fit, reach, risk, and cost of delay before comparing implementation ideas.",
        notes: ["Write opportunities without feature language.", "Keep branches distinct enough to support different choices.", "Attach tests to assumptions, not to the elegance of the diagram."],
        case: "To increase completed first orders, separate uncertainty about delivery, inability to compare, payment failure, and low trust. Each opportunity implies different evidence and mechanisms.",
      },
    ],
  },
  m08: {
    arc: "Risk → prototype → test → decision",
    prerequisites: "Module 7: evidence synthesis and opportunity selection.",
    sources: ["IIMB pp. 64–74, 78–80", "FMS pp. 16–17, 23–26", "BITSoM pp. 80–100"],
    chapters: [
      {
        heading: "Prototype only what must become believable",
        body: "The IIMB wireframing and Spotify experimentation chapters support a risk-first ladder. A storyboard can test a concept and context; paper or clickable flows can test comprehension; a concierge or Wizard-of-Oz service can test value and operations; a fake door can test honest interest; a technical spike can test feasibility. Fidelity should preserve the cues required for the question and omit the rest. Polished visuals can create false confidence and make teams defend a solution before its risk is resolved.",
        notes: ["State the assumption before choosing the prototype.", "List what the prototype can and cannot prove.", "Keep unrelated risks in separate tests."],
        case: "To test whether restaurants value demand forecasting, manually deliver a weekly forecast and observe decisions before building a real-time predictive dashboard.",
      },
      {
        heading: "Separate usability, comprehension, and value",
        body: "A participant can complete a task without valuing the product, value the concept while failing the interaction, or prefer a design that performs worse. Write realistic tasks without telling the user which control to choose. Observe first, then probe expectations and reasoning. Record completion, critical errors, time, confidence, and severity alongside qualitative breakdowns. Five sessions can reveal recurring usability mechanisms; they do not estimate population conversion.",
        notes: ["Test behavior with a task, not a feature tour.", "Do not rescue participants before the breakdown is observable.", "Classify severity by impact, frequency, and recovery."],
        case: "A user who eventually sends money but cannot tell whether it succeeded has completed the button sequence without completing the trust task.",
      },
      {
        heading: "Demand strengthens as commitment becomes costly",
        body: "Interest is weak evidence. Build a ladder from attention to time, information, reputation, workflow change, and money. Test channel and willingness to pay honestly; explain when a feature is not yet available and give people a meaningful next step. Compare stated value with what users abandon, configure, upload, invite, schedule, or purchase. Viability also includes service cost, support, acquisition, margin, policy, and partner behavior—not price alone.",
        notes: ["Ask for behavior proportionate to the promised value.", "Measure who commits, from which segment, and at what cost.", "Include the operational path behind the customer promise."],
        case: "A waitlist validates little. Connecting a real data source, booking an onboarding slot, and accepting a transparent pilot price reveal progressively stronger demand and switching intent.",
      },
      {
        heading: "Evidence reviews protect the team from sunk cost",
        body: "Spotify’s think–build–ship–tweak loop and FMS’s validation pipeline both emphasize iteration and cheap failure. Review disconfirming evidence first. Compare results with thresholds defined before the test, note limitations, and separate current evidence from attachment to the solution. Choose proceed, pivot, pause, or stop. A stopped bet should record what was learned and the signal that would justify reopening it; otherwise the same unsupported idea returns under a new name.",
        notes: ["Use predefined success, failure, and ambiguity thresholds.", "Include confidence, downside, and remaining unknowns.", "Record the reopen trigger for paused or stopped work."],
        case: "If teams praise an AI summary but never use it to complete follow-up work, the value mechanism is unsupported even when usability scores are high. Pivot the workflow or stop the bet.",
      },
    ],
  },
  m09: {
    arc: "Future → diagnosis → choice → coherent action",
    prerequisites: "Courses 1–2: customer problems, evidence, and validation.",
    sources: ["IIMB pp. 78–83", "XLRI pp. 83–86", "FMS pp. 47–52"],
    chapters: [
      {
        heading: "Keep vision, goals, strategy, and tactics at different altitudes",
        body: "IIMB’s product-strategy chapter combines long-term intent, monetization, market entry, and company frameworks. Use clean definitions. Vision describes a valuable future and durable beneficiary. Goals express measurable progress or constraints. Strategy diagnoses the central challenge and chooses a way to overcome it. Tactics are revisable actions. A revenue target is a goal; a feature list is a plan. Neither explains why this arena, customer, or advantage deserves scarce resources.",
        notes: ["Write the future without specifying today’s feature.", "Use goals to constrain strategy, not replace it.", "Keep tactics easy to revise when evidence changes."],
        case: "‘Become the leading AI platform and grow 30%’ combines aspiration and goal. Strategy begins when the team chooses a high-stakes workflow, a traceability advantage, and the capabilities it will build or decline.",
      },
      {
        heading: "A strategic insight changes resource allocation",
        body: "Teardowns, market cases, and app critiques produce many observations; only some become strategic. Look for anomalies, workarounds, structural shifts, customer economics, distribution power, technology changes, or a capability competitors cannot easily match. Triangulate customer, behavioral, market, and internal evidence. Test the counterfactual: if the insight were false, would the company allocate teams, sequence bets, or enter the market differently? If not, it is context rather than strategy.",
        notes: ["Explain why the pattern exists, not just that it exists.", "Connect external change to an internal choice.", "Name evidence that could weaken the insight."],
        case: "Regulated teams are not rejecting copilots because generation is weak; they cannot trace outputs to approved evidence. That insight redirects investment from broad creativity to retrieval, citations, and governance integration.",
      },
      {
        heading: "Where to play and how to win are coupled choices",
        body: "The IIMB market-entry framework asks about company goal, core capabilities, industry structure, market size, competition, and advantage. Define the arena by customer job, segment, geography, channel, or value-chain position. Name the current alternative and the value proposition that changes behavior. Then identify an advantage—data, distribution, cost position, workflow integration, network, brand, or capability—that can persist. Attractive markets without a plausible advantage remain observations, not strategies.",
        notes: ["Choose a narrow arena with an urgent customer job.", "State the alternative the customer will stop using.", "Separate required table stakes from defensible advantage."],
        case: "A bank entering bookkeeping should not target ‘all SMEs.’ It might serve GST-registered retailers through existing transaction data and branch trust, winning on automated reconciliation and credit readiness.",
      },
      {
        heading: "A strategy memo is an argument teams can use to say no",
        body: "Working Backwards begins with a future customer outcome and forces clarity before implementation. A durable strategy memo similarly leads with diagnosis, recommendation, evidence, choices, and non-goals. Add coherent actions, enabling capabilities, risks, leading indicators, and a review cadence. Represent credible alternatives fairly. The memo succeeds when teams can use it to prioritize, reject distracting requests, and recognize evidence that requires a strategic revision.",
        notes: ["Lead with the decision and central rationale.", "Make painful non-goals explicit.", "Set checkpoints around assumptions, not arbitrary dates."],
        case: "A strategy for an SMB finance tool can reject payroll and invoicing for now, focus on four-week cash visibility, and coordinate data access, alerts, advisory partnerships, and outcome measurement around that choice.",
      },
    ],
  },
  m10: {
    arc: "Market → position → model → price",
    prerequisites: "Module 9: strategic diagnosis and choice.",
    sources: ["FMS pp. 47–52, 63–72", "IIMB pp. 81–83", "IIMC pp. 76–89", "MDI pp. 63–75"],
    chapters: [
      {
        heading: "Markets are systems of alternatives and power",
        body: "The market-entry and category-launch cases examine customers, competitors, company capabilities, channels, regulation, and category economics. Define the market from the progress a customer seeks, then map direct products, substitutes, complements, manual workflows, and non-consumption. Examine switching cost, distribution control, supply constraints, and who captures value. Category labels can hide asymmetric competition: a spreadsheet, an internal specialist, and a SaaS tool may all compete for the same job.",
        notes: ["Map behaviorally real alternatives, including doing nothing.", "Identify buyer, user, approver, blocker, and channel power.", "Track structural shifts in regulation, technology, and distribution."],
        case: "An observability startup may compete less with another dashboard than with log search and senior engineers manually diagnosing incidents. That alternative changes both positioning and pricing.",
      },
      {
        heading: "Positioning gives the customer a reason to care now",
        body: "Use the Value Proposition Canvas to connect customer jobs, pains, and gains to concrete relief and benefit. Positioning selects a target, urgent use case, frame of reference, differentiated value, and credible proof. It is not a slogan and should not enumerate every feature. Different segments can require different proof and buying context, but the underlying product must remain coherent. Test whether target users understand who it is for, when to use it, and why it is better than their current alternative.",
        notes: ["Choose one primary target and high-priority situation.", "Name differentiated value in customer language.", "Support the claim with evidence, demonstration, or mechanism."],
        case: "‘AI-powered analytics for everyone’ is weak. ‘For support leaders who cannot add analysts, explain why ticket volume changed and link every answer to source conversations’ names target, pain, and proof.",
      },
      {
        heading: "The business model explains how the system sustains value",
        body: "FMS’s Business Model Canvas spans segments, value proposition, channels, relationships, revenue, activities, resources, partners, and costs. Treat those blocks as a connected system. Model acquisition cost, gross or contribution margin, retention, expansion, support, infrastructure, partner share, and payback. Marketplaces must model both sides and local liquidity. AI products must include inference, review, and failure-recovery cost. A revenue stream without delivery economics is not yet a business model.",
        notes: ["Trace revenue to the behavior that creates customer value.", "Include variable delivery, support, and channel costs.", "Stress-test low, base, and high retention and usage."],
        case: "A low-seat-price AI assistant can lose money when heavy usage, human review, and onboarding dominate. Packaging, model routing, and value realization must be designed together.",
      },
      {
        heading: "Price captures value and shapes behavior",
        body: "IIMB and MDI compare cost-, competitor-, and value-based methods and link price to lifecycle and business objective. Begin with target, alternative, value created, willingness and ability to pay, cost floor, competitive context, and strategic goal. Choose a billing metric that grows with customer value and remains predictable. Use packages to serve meaningful differences, not to manufacture confusion. Examine cannibalization, discounting, fairness, procurement, and the behavior a pricing unit encourages.",
        notes: ["Select a value metric customers can understand and forecast.", "Use willingness-to-pay research alongside behavior.", "Model break-even, margin, expansion, and downside."],
        case: "Pricing incident software per user may discourage broad response participation. Pricing by monitored service can align better with delivered value while protecting predictable budgets.",
      },
    ],
  },
  m11: {
    arc: "Criteria → models → roadmap → revisit",
    prerequisites: "Modules 9–10: strategy, markets, and economics.",
    sources: ["BITSoM pp. 49–55", "IIMB pp. 29–34, 67–68", "IIMC pp. 9–14", "XLRI pp. 43–45", "MDI pp. 12–16"],
    chapters: [
      {
        heading: "Prioritization starts before anyone presents a favorite idea",
        body: "The source library covers RICE, ICE, Kano, MoSCoW, value–effort, Eisenhower, and buy-a-feature. Their common purpose is to make criteria and assumptions visible. Translate strategy into must-pass screens and comparison dimensions before scoring. Define population, horizon, evidence strength, total effort, dependencies, downside, and learning value. If criteria are chosen after initiatives are discussed, the spreadsheet usually rationalizes existing power rather than improving allocation.",
        notes: ["Set criteria, units, and time horizon first.", "Screen for strategic fit and non-negotiable constraints.", "Include opportunity cost and cost of delay."],
        case: "A sales-requested integration may have high near-term revenue but fail a repeatability screen. The criteria should expose that tension before the account name influences the meeting.",
      },
      {
        heading: "Know what each framework assumes",
        body: "RICE compares reach × impact × confidence ÷ effort; ICE is faster but more subjective; WSJF emphasizes cost of delay relative to job size; Kano examines how features affect satisfaction; MoSCoW establishes scope commitments. None produces objective truth. Use consistent units and definitions, show ranges, and run sensitivity analysis. A small change in confidence or effort that reverses the ranking is a signal to gather evidence, not a mandate to preserve decimal precision.",
        notes: ["Use the model that matches the decision and horizon.", "Calibrate reach, impact, confidence, and effort consistently.", "Document strategic overrides instead of hiding them."],
        case: "RICE may rank onboarding copy above enterprise identity. A strategy focused on regulated accounts can justify the override—provided the team records the capability logic, risk, and outcome.",
      },
      {
        heading: "A roadmap communicates intent and uncertainty",
        body: "IIMB’s theme-based roadmap guidance is stronger than a fixed feature calendar because it connects work to product vision and objectives. Organize around customer problems, outcomes, or strategic themes; show now, next, and later with confidence and evidence state. Add dependencies, discovery needs, guardrails, and review triggers. Dates remain appropriate for real commitments, but uncertainty should not be disguised as a promise merely because a slide has quarters.",
        notes: ["Connect every roadmap item to an outcome and strategy.", "Show confidence, evidence state, and dependencies.", "Use dates for commitments; use horizons for uncertain bets."],
        case: "Replace ‘Q3: build admin analytics’ with ‘Now: reduce time for admins to identify inactive teams,’ including baseline, target, guardrail, and the experiments that determine the solution.",
      },
      {
        heading: "A good no preserves the decision logic",
        body: "Prioritization is incomplete until rejected options, opportunity cost, and revisit conditions are recorded. Tailor communication to the stakeholder’s underlying goal: acknowledge the value, explain the criterion or constraint, show the chosen alternative, and state the signal that would reopen the decision. Avoid vague parking lots. Sequence bets so early work reduces uncertainty or unlocks later options. Revisit when assumptions change, not because the most persistent requester returns.",
        notes: ["Name the attractive option being deferred.", "Explain what the chosen work enables instead.", "Set an evidence-based revisit trigger and owner."],
        case: "Say ‘not this quarter’ to custom reporting because event quality is unreliable; fund instrumentation first and revisit when coverage and three target accounts meet defined thresholds.",
      },
    ],
  },
  m12: {
    arc: "Map → surface → decide → influence",
    prerequisites: "Module 11: transparent prioritization and roadmaps.",
    sources: ["IIMB pp. 60–70", "XLRI pp. 127–213", "BITSoM pp. 140–146"],
    chapters: [
      {
        heading: "Stakeholder maps need incentives and knowledge",
        body: "Interview experiences show that product decisions cross engineering, design, sales, legal, operations, data, executives, and customers. Map each party by decision power, implementation impact, domain knowledge, incentives, and risk carried—not title alone. Include the people who absorb operational consequences after launch. The goal is to bring relevant knowledge into the decision early while keeping one accountable owner. A map should tell you what to learn from each stakeholder and where conflict is structural.",
        notes: ["Map power, impact, knowledge, incentives, and risk.", "Include external, frontline, and operational stakeholders.", "Separate contributor, approver, owner, and informed roles."],
        case: "A KYC change affects customers, compliance, fraud, support, engineering, bank partners, and sales. Each holds different evidence; compliance risk does not make every implementation choice a consensus vote.",
      },
      {
        heading: "Pre-wiring discovers constraints before the room hardens",
        body: "Meet key stakeholders before a high-stakes review to understand evidence, constraints, objections, and vocabulary. This is not a campaign for predetermined consent. Separate disputes about facts from tradeoffs in values or risk tolerance. Circulate the decision, criteria, evidence, options, and owner in advance. In the meeting, surface dissent fairly, resolve what the current evidence can resolve, and record what requires escalation or a test.",
        notes: ["Pre-wire to learn, not to pressure.", "Distinguish evidence gaps from preference conflicts.", "Set decision roles, agenda, and escalation before the meeting."],
        case: "Sales and platform engineering can disagree about a custom workflow. Pre-work may reveal a reusable compliance need, allowing the meeting to compare a configuration layer with a customer-specific fork.",
      },
      {
        heading: "Executives need a decision narrative, not a data dump",
        body: "A strong memo states the recommendation, context, tension, evidence, credible alternatives, tradeoffs, risks, ask, and next checkpoint. Use enough data to support the mechanism, then link to detail. Represent the alternative the team rejected in a form its advocate would recognize. Name uncertainty rather than burying it in an appendix. The narrative should help a reader decide without attending the meeting and remain useful when the outcome is reviewed later.",
        notes: ["Lead with recommendation and executive ask.", "Explain mechanism and tradeoff with selective evidence.", "Record dissent, commitment, owner, and review date."],
        case: "A six-paragraph memo can decide whether to launch a retention offer: baseline, diagnosis, options, expected economics, abuse guardrail, recommendation, and approval requested.",
      },
      {
        heading: "Influence grows from reliable product reasoning",
        body: "Behavioral case preparation emphasizes personal action, conflict, evidence, and learning. In daily product work, influence comes from understanding another function’s constraints, translating the decision into its language, making commitments visible, and following through. Build trust before a crisis. Use a small piece of decisive evidence when authority is weak. Escalate when a conflict threatens customer, company, safety, or delivery—not merely when persuasion feels slow.",
        notes: ["Earn credibility through preparation and follow-through.", "Translate customer value into technical, financial, and operational terms.", "Use explicit commitments and feedback loops."],
        case: "To change a risky migration plan, a PM can combine support evidence, a failure-mode walkthrough, and a staged rollout proposal rather than relying on role authority.",
      },
    ],
  },
  m13: {
    arc: "Goal → signal → metric → system",
    prerequisites: "Course 3: strategic choices and business model.",
    sources: ["IIMC pp. 15–17", "BITSoM pp. 57–61", "IIMB pp. 35–39, 58–59", "XLRI pp. 75–82"],
    chapters: [
      {
        heading: "Start with the decision, then define the metric",
        body: "The casebooks cover AARRR, HEART, North Star metrics, dashboards, and common performance measures. Avoid beginning with whatever event is easiest to count. Write the qualitative goal, identify observable signals, then define numerator, denominator, population, window, inclusion, exclusion, source, owner, and decision. A metric without a decision becomes decoration. A signal can combine behavior and attitude when neither alone captures the customer experience.",
        notes: ["Keep the goal directional and the metric precise.", "Define population, event semantics, window, and exclusions.", "Name the decision triggered by a meaningful change."],
        case: "Goal: new sellers confidently fulfill a first order. Signals: publish, receive, accept, ship correctly, and report confidence. The activation metric must define which sellers and how long they have.",
      },
      {
        heading: "A North Star represents recurring experienced value",
        body: "IIMB defines a North Star as the one metric that best captures core value; use that as a hypothesis, not a slogan. It should represent value experienced by the customer, connect to durable business value, match the product’s natural cadence, and be influenceable by the team. Revenue may lag or be easily distorted. Active users can hide meaningless activity. Marketplaces often need successful matches with quality on both sides.",
        notes: ["Test customer value, business linkage, durability, and influence.", "Match the measure to product type and maturity.", "Examine gaming, ecosystem harm, and lag."],
        case: "Gross bookings can rise through discounts while fulfillment deteriorates. Weekly completed jobs with both sides satisfied more closely represents marketplace value.",
      },
      {
        heading: "Metric trees are causal arguments",
        body: "Decompose the North Star into controllable inputs across reach, activation, frequency, quality, and efficiency. For each link, state why it should affect the parent and what evidence supports that belief. Add guardrails for customer trust, reliability, safety, fairness, partner health, cost, and cannibalization. Label leading, lagging, diagnostic, and counter-metrics. A tree that lists correlated numbers without mechanisms cannot guide prioritization or diagnosis.",
        notes: ["Write the causal verb between parent and child.", "Separate quantity, quality, frequency, and efficiency.", "Attach owners and interventions to controllable inputs."],
        case: "Completed jobs may decompose into qualified demand × provider availability × match × acceptance × completion × satisfaction, with cancellation, safety, and margin guardrails.",
      },
      {
        heading: "HEART is a menu applied through goals and signals",
        body: "HEART covers happiness, engagement, adoption, retention, and task success. Do not fill every cell automatically. Select dimensions relevant to the journey and decision, then apply goal–signal–metric discipline. Combine attitudinal measures such as perceived ease with behavioral outcomes such as completion and recovery. Scope the framework to a product, feature, or critical journey so the result remains operational rather than becoming a company-wide catalogue.",
        notes: ["Choose only dimensions that change the decision.", "Pair attitude with behavior when trust or comprehension matters.", "Define adoption and retention around meaningful use."],
        case: "For onboarding, task success and adoption may matter immediately; retention requires a later value cycle; happiness can diagnose confidence but should not replace completion.",
      },
    ],
  },
  m14: {
    arc: "Contract → funnel → cohort → RCA",
    prerequisites: "Module 13: metric definitions, North Stars, and trees.",
    sources: ["IIMB pp. 46–59", "IIMC pp. 37–68", "BITSoM pp. 102–122", "XLRI pp. 50–64"],
    chapters: [
      {
        heading: "Analytics begins with trustworthy event contracts",
        body: "Before building dashboards, define the entity, event, actor, timestamp, properties, eligibility, identity rules, deduplication, source, latency, owner, and quality checks. A button click is not necessarily a completed customer action. Handle retries, late events, cross-device identity, bot activity, test accounts, and definition changes. Monitor event completeness and distribution. A precisely calculated metric from unstable semantics is still wrong.",
        notes: ["Define business meaning before implementation syntax.", "Specify identity, retries, duplication, and late arrival.", "Version metric definitions and monitor data quality."],
        case: "‘Order completed’ should occur after durable confirmation, not when the user taps Pay. Otherwise retries and payment failures inflate conversion.",
      },
      {
        heading: "Funnels localize friction; they do not prove cause",
        body: "Define the eligible population, ordered steps, time window, and whether journeys can repeat or branch. Compare step conversion, time-to-complete, path, device, channel, geography, and relevant user segments. A drop-off may reflect a defect, misunderstanding, low intent, price, trust, or a healthy eligibility screen. Use funnel cuts to generate discriminating questions, then combine them with session evidence, research, and operations.",
        notes: ["Choose the correct denominator at every step.", "Use nonlinear journey analysis where the product is not sequential.", "Follow a drop with evidence that distinguishes mechanisms."],
        case: "A payment-step drop concentrated on one bank and app version points toward a different investigation than a broad decline among price-sensitive new users.",
      },
      {
        heading: "Cohorts separate product health from acquisition mix",
        body: "Group users by a meaningful start event or behavior, then measure value at the product’s natural frequency. Classic retention asks who returns in a specific period; rolling retention asks who returns on or after it; bracket retention fits irregular cadence. Segment by acquisition, use case, or activation behavior. Look for curve shape, plateau, resurrection, and frequency. Apparent improvement in aggregate retention can result from a stronger acquisition mix rather than a healthier experience.",
        notes: ["Use a start event tied to first meaningful eligibility.", "Match windows to natural usage cadence.", "Compare cohorts before and after product or channel changes."],
        case: "A tax product should not be judged by daily retention. Filing-season cohorts and return for the next relevant obligation better represent repeated value.",
      },
      {
        heading: "RCA scopes the change before generating causes",
        body: "BITSoM, IIMC, MDI, and XLRI all teach RCA through clarification, scoping, hypotheses, internal/external branches, evidence, root cause, and recap. First validate the metric and timing. Cut by geography, platform, version, cohort, channel, journey step, and operational segment. Build mutually useful hypotheses across instrumentation, user behavior, product changes, system performance, policy, competition, seasonality, and operations. Prioritize tests by likelihood and speed, then close with remediation and prevention.",
        notes: ["Verify the metric before explaining it.", "Scope where and when the change exists.", "Use an issue tree and rule out branches with evidence."],
        case: "A 10% order-cancellation increase may come from one payment method, late delivery estimates, stock quality, a tracking defect, policy change, or a shifted acquisition mix. Scope prevents random solutioning.",
      },
    ],
  },
  m15: {
    arc: "Mechanism → design → inference → governance",
    prerequisites: "Modules 13–14: metric systems and trustworthy analytics.",
    sources: ["IIMB pp. 64–67, 78–80", "FMS pp. 20–22, 41–46", "XLRI pp. 24–25"],
    chapters: [
      {
        heading: "A hypothesis predicts an outcome through a mechanism",
        body: "Write intervention, population, expected behavior, mechanism, metric, guardrail, and the observation that would weaken the belief. ‘Test a new button’ is an activity. ‘Showing delivery certainty before checkout will increase completed orders among first-time users because it reduces arrival anxiety’ is a product hypothesis. The mechanism determines which intermediate signal to inspect and helps explain a null result.",
        notes: ["Specify population, intervention, and expected change.", "Name why the change should occur.", "Predefine disconfirming evidence and guardrails."],
        case: "If conversion stays flat but delivery-detail views rise, the interface may work while the assumed anxiety mechanism is too weak—or the promise lacks credibility.",
      },
      {
        heading: "Randomization protects the counterfactual",
        body: "An online controlled experiment estimates what would have happened without the treatment by assigning comparable units. Choose user, account, session, device, or cluster based on interference and persistence. Define exposure, sample eligibility, primary and guardrail metrics, minimum meaningful effect, duration, power, ramp, and health checks. Prevent treatment from leaking through collaboration, shared inventory, notifications, or caching. Staged exposure protects users while preserving inference.",
        notes: ["Randomize at the unit where treatment remains isolated.", "Check sample ratio, novelty, carryover, and contamination.", "Plan ramp, pause, and rollback criteria."],
        case: "A team-collaboration feature should usually randomize by team, not user; mixed experiences inside one workspace contaminate behavior and create support risk.",
      },
      {
        heading: "Read effect size and uncertainty together",
        body: "Statistical significance does not establish practical value. Inspect the estimate, confidence interval, baseline, minimum meaningful effect, guardrails, sample health, duration, novelty, and segments defined before analysis. Avoid repeated peeking and unexplained metric shopping. A null result may reject the effect size, not every version of the mechanism. A positive average can hide harm in a critical segment. Convert the result into ship, iterate, stop, or collect-more-evidence logic.",
        notes: ["Compare the interval with the business threshold.", "Audit assignment, exposure, and data before storytelling.", "Treat exploratory segments as hypotheses for a new test."],
        case: "A +0.2% conversion estimate can be statistically clear yet economically irrelevant after support and discount cost; a +2% result can still fail if fraud rises materially.",
      },
      {
        heading: "An experiment program is a knowledge system",
        body: "IIMB’s Spotify framework—think it, build it, ship it, tweak it—captures the operating loop. Scale requires exposure governance, metric definitions, risk tiers, ethical review, ramp standards, searchable results, and monitoring after launch. Archive null and negative results so teams do not repeat weak ideas. Do not experiment on consent quality, deceptive pressure, or unacceptable safety risk merely because the software allows randomization.",
        notes: ["Tier review by user impact and reversibility.", "Reuse metric, exposure, and analysis standards.", "Store decisions, results, limitations, and follow-up learning."],
        case: "A growth test that obscures cancellation may improve short-term retention but should fail ethical review before exposure; not every measurable behavior is an acceptable target.",
      },
    ],
  },
  m16: {
    arc: "Activate → retain → loop → balance",
    prerequisites: "Module 15: trustworthy experimentation and causal restraint.",
    sources: ["IIMC pp. 15–19", "FMS pp. 18–19, 47–52", "XLRI pp. 75–82, 103–125"],
    chapters: [
      {
        heading: "Activation is the first realized value, not completed setup",
        body: "AARRR distinguishes acquisition from activation. Define the earliest behavior that demonstrates the promised value and predicts future meaningful use. Instrument setup steps, time-to-value, and failure, then validate the relationship across cohorts and segments. Correlation does not prove that forcing the event will create retention. Improve activation by removing uncertainty, effort, and empty states around the value moment—not by celebrating account creation.",
        notes: ["Separate access, setup, and realized value.", "Validate the event’s relationship with later retention.", "Measure time-to-value and quality, not only completion."],
        case: "For a team document product, inviting a colleague may be setup; receiving and resolving a real comment can be the first collaborative value moment.",
      },
      {
        heading: "Retention follows natural value cycles",
        body: "Retention reflects repeated value at the right cadence. Diagnose retained, lapsed, and resurrected users by use case, acquisition, maturity, and activation quality. Map trigger, ability, motivation, reward, and competing alternative without reducing habit to notifications. A product can be healthy with monthly use and unhealthy with daily opens if the meaningful job is monthly. Interview behavior around the last successful and failed cycle.",
        notes: ["Define meaningful activity and natural frequency.", "Compare retained, lapsed, and resurrected behavior.", "Look for durable value before artificial re-engagement."],
        case: "A travel product should measure successful planning and return for relevant trips, not maximize daily sessions between journeys.",
      },
      {
        heading: "Growth loops compound when product use creates new input",
        body: "Funnels describe conversion through stages; loops show how one cycle generates users, content, inventory, data, reputation, or revenue that powers another. Draw each node, conversion rate, cycle time, leakage, saturation, and constraint. Collaboration, content, referral, paid, and data loops have different economics. A loop is not automatically healthy: spam, low-quality supply, and incentive gaming can accelerate while customer value deteriorates.",
        notes: ["Name the output that re-enters as new input.", "Quantify conversion, delay, leakage, and saturation.", "Guardrail relevance, trust, cost, and ecosystem quality."],
        case: "A template product can turn created templates into searchable inventory, which attracts users, whose customization generates more templates. Quality and duplication controls determine whether the loop compounds value.",
      },
      {
        heading: "Marketplace health is local and two-sided",
        body: "Marketplace teardowns for Uber, Zomato, and others show that aggregate growth can hide weak local liquidity. Define the atomic network—city, category, route, time, or skill. Measure qualified demand, available supply, match rate, acceptance, time-to-match, completion, quality, price, earnings, cancellations, safety, and retention on both sides. Balance incentives and disintermediation risk. Growth in one side without a successful match can reduce the other side’s experience.",
        notes: ["Measure liquidity inside the smallest meaningful network.", "Track outcomes and retention for both sides.", "Include trust, fairness, earnings, and multi-homing guardrails."],
        case: "A ride marketplace can add drivers nationally while airport wait times remain poor. The relevant system is supply and demand in a specific zone and time window.",
      },
    ],
  },
  m17: {
    arc: "Brief → slice → specify → flow",
    prerequisites: "Courses 1–4: evidence, strategy, and measurement.",
    sources: ["IIMB pp. 64–72", "FMS pp. 20–22", "XLRI pp. 24–25", "BITSoM pp. 19–25"],
    chapters: [
      {
        heading: "A product brief preserves decisions and open questions",
        body: "IIMB describes a PRD as a shared document for problem, opportunity, target, product, stakeholders, tasks, and measurement. Modernize that purpose: the brief should connect context, evidence, desired outcome, users, assumptions, scope, non-goals, experience, metrics, risks, dependencies, rollout, and unresolved decisions. Keep it concise and link to evidence. A brief is a living source of truth, not a contract that freezes learning or substitutes for conversation.",
        notes: ["Write for decisions across product, design, engineering, and GTM.", "Separate committed scope from assumptions and open questions.", "Maintain owners, changelog, and decision links."],
        case: "A good returns brief explains the customer and operational failure, target behavior, policy constraints, edge cases, metrics, and staged release—not only screen requirements.",
      },
      {
        heading: "Slice vertically through a value path",
        body: "Agile is valuable when it shortens the loop from idea to usable evidence. Slice a large bet into end-to-end increments that a real user can complete and the team can measure. Use a walking skeleton across necessary layers, then deepen capability. Slice by user, scenario, workflow, channel, risk, or quality level—not by frontend, backend, and database tasks. Each release should have a value hypothesis, learning goal, and explicit limit.",
        notes: ["Deliver the thinnest coherent customer path.", "Sequence slices to retire risk or unlock learning.", "Avoid technical layers that create no independently testable value."],
        case: "For expense approval, first support one policy, one approver, and manual exception handling end to end; later add delegation, complex rules, and automation.",
      },
      {
        heading: "Examples create shared understanding better than vague requirements",
        body: "A user story records context, actor, behavior, and benefit; acceptance examples make expected behavior testable. Cover happy paths plus permissions, invalid input, empty data, concurrency, latency, retries, cancellation, recovery, accessibility, and audit. Use given–when–then where it clarifies rules, but do not turn every conversation into syntax. The goal is agreement about behavior and quality, with space for design and engineering expertise.",
        notes: ["Describe behavior from a real user context.", "Prioritize high-consequence edge and recovery states.", "Keep implementation choices with the responsible experts."],
        case: "For coupon redemption, specify expired, reused, concurrent, region-restricted, offline, and refund behavior—not merely ‘user can apply coupon.’",
      },
      {
        heading: "Agile, Scrum, and Kanban are means to healthy flow",
        body: "The casebooks contrast iterative Agile with sequential Waterfall and describe sprints, stakeholder feedback, and adaptation. Scrum provides roles, events, and a cadence for inspection; Kanban visualizes flow and limits work in progress. Choose practices based on uncertainty, dependency, service demand, and release needs. Track cycle time, throughput, blocked time, rework, quality, and learning completion. A sprint full of finished tickets can still fail if no customer outcome is reviewed.",
        notes: ["Use a sprint goal or service objective, not a ticket bundle.", "Limit WIP and expose queues, blockers, and rework.", "Define done through quality and learning, not code completion."],
        case: "A discovery-heavy team may combine weekly research synthesis with continuous delivery and WIP limits rather than forcing every activity into a two-week feature sprint.",
      },
    ],
  },
  m18: {
    arc: "Interface → data → system → trust",
    prerequisites: "Module 17: briefs, slices, and cross-functional flow.",
    sources: ["FMS pp. 28–46", "XLRI pp. 13–31", "IIMB pp. 73–77", "BITSoM pp. 19–25"],
    chapters: [
      {
        heading: "APIs and webhooks are product contracts",
        body: "FMS explains APIs as request–response interfaces and webhooks as event-driven notifications. A PM should reason about consumers, endpoints, payloads, authentication, authorization, idempotency, rate limits, latency, error codes, retries, versioning, observability, and support. The customer experience includes setup, documentation, credentials, sandbox, migration, and failure recovery. A technically functioning endpoint can remain a poor platform product if integrators cannot predict or diagnose it.",
        notes: ["Define actor, action, request, response, and business meaning.", "Design duplicate, timeout, retry, and partial-failure behavior.", "Protect consumers through versioning and deprecation policy."],
        case: "A create-order API needs an idempotency key so a client retry after a timeout does not create two orders; the UI should still communicate an uncertain outcome safely.",
      },
      {
        heading: "Data models shape the product’s possible behavior",
        body: "The FMS tech stack separates frontend, backend, database, APIs, and infrastructure. Model the core entities, identifiers, relationships, lifecycle states, permissions, and events before adding analytics. Distinguish transactional data used to operate the product from analytical data used to understand it. Plan lineage, retention, deletion, and correction. A poorly chosen entity or state model creates edge cases that surface later as reporting inconsistencies and customer confusion.",
        notes: ["Define entities, ownership, identity, state, and relationships.", "Separate event occurrence from derived metric meaning.", "Plan lineage, access, retention, and deletion."],
        case: "A subscription is not just an active flag: trial, pending payment, grace, paused, canceled, expired, and reactivated states drive access, billing, messaging, and metrics.",
      },
      {
        heading: "System design translates customer expectations into tradeoffs",
        body: "IIMB’s system-design framework moves from scope to high-level architecture, deep dive, and wrap-up. Start with users, features, traffic, latency, availability, consistency, privacy, and growth. Trace the critical path through clients, services, storage, queues, caches, and third parties. Identify bottlenecks, single points of failure, and degraded modes. PMs need not implement the design, but they must understand which customer promise and business cost each technical tradeoff affects.",
        notes: ["Clarify scale and non-functional expectations.", "Draw the critical path and failure boundaries.", "Discuss bottlenecks, recovery, operations, and future scale."],
        case: "A social feed can favor fast reads using caches and asynchronous fan-out, but celebrity-scale accounts and deletion consistency require different handling and visible product tradeoffs.",
      },
      {
        heading: "Platform trust depends on boundaries and incentives",
        body: "Map assets, actors, trust boundaries, threats, permissions, controls, and recovery. Use least privilege, secure defaults, auditability, abuse limits, and transparent developer rules. Platform strategy also includes ecosystem value, documentation, backwards compatibility, review, dispute resolution, and incentives. Privacy and security are product qualities: the user must understand what happened and regain control after failure, not merely rely on an invisible control plane.",
        notes: ["Model accidental, malicious, and compromised actors.", "Use scoped permissions and observable access.", "Design appeal, recovery, and developer communication."],
        case: "A calendar integration should request the minimum scopes, explain why they are needed, allow revocation, log access, and degrade gracefully when a permission disappears.",
      },
    ],
  },
  m19: {
    arc: "Prepare → expose → measure → learn",
    prerequisites: "Module 18: technical systems and trust boundaries.",
    sources: ["IIMB pp. 64–80", "FMS pp. 28–46", "XLRI pp. 24–31"],
    chapters: [
      {
        heading: "Launch readiness turns imagined failure into owned controls",
        body: "Run a pre-mortem across customer experience, engineering, data, security, accessibility, legal, operations, support, finance, and go-to-market. Write plausible failure stories, then rate consequence, likelihood, detectability, and reversibility. Convert the important stories into controls, tests, monitors, owners, communications, and stop criteria. Rehearse support, incident roles, and rollback. A checklist is only useful when a red item can block or narrow release.",
        notes: ["Include every function that carries post-launch risk.", "Convert failure stories into evidence and owners.", "Define launch gates, rollback, and communication."],
        case: "For a billing migration, simulate duplicate charges, missing entitlements, delayed webhooks, tax errors, support spikes, and customer reconciliation before broad exposure.",
      },
      {
        heading: "Separate deployment from customer exposure",
        body: "Feature flags let teams deploy code while controlling who receives behavior. Choose internal, beta, geography, account, percentage, or risk-based cohorts. Define entry, observation, exit, pause, and rollback criteria for each stage. Monitor both technical and customer signals. Avoid permanent flag debt and inconsistent experiences across collaborators. Maintain a kill switch for high-consequence paths and ensure rollback restores data and workflow, not only code.",
        notes: ["Use cohorts that make risk and learning interpretable.", "Predefine promotion and rollback thresholds.", "Track flag owner, expiry, and cross-user consistency."],
        case: "Roll out a new checkout to employees, 1% of eligible users, 10%, 50%, and 100%, requiring payment success, latency, complaints, and refund health at every gate.",
      },
      {
        heading: "Delivery health connects speed with reliability",
        body: "Deployment frequency, change lead time, failed-deployment recovery, and change-fail rate describe the delivery system; service-level objectives describe the user reliability promise. Review them together with escaped defects, support impact, and customer outcomes. Faster small changes can improve both learning and stability when testing, observability, and rollback are strong. Do not turn DORA measures into individual targets or reward deployment volume detached from value.",
        notes: ["Measure the system, not individual productivity.", "Set SLOs from user expectations and business consequence.", "Connect flow, failure, recovery, and outcome learning."],
        case: "A team that deploys daily but takes hours to detect payment failures is not healthy. Customer success requires observability and recovery as well as change speed.",
      },
      {
        heading: "Incidents are product events and learning opportunities",
        body: "During an incident, establish commander, technical lead, communications, operations, and scribe roles. State customer impact plainly, reduce harm, preserve evidence, and update at a predictable cadence. After recovery, build a timeline and examine contributing conditions across design, code, process, dependency, incentives, and detection. Avoid blame and vague actions. Durable improvements change systems, tests, ownership, runbooks, monitoring, or product behavior.",
        notes: ["Prioritize customer safety and clear communication.", "Describe contributing conditions, not a single human cause.", "Assign measurable actions with owners and dates."],
        case: "If retries duplicate transfers, the postmortem should address idempotency, timeout UX, alerting, rollout, and reconciliation—not end with ‘engineer should be more careful.’",
      },
    ],
  },
  m20: {
    arc: "Target → launch → adopt → evolve",
    prerequisites: "Modules 9–19: strategy through reliable delivery.",
    sources: ["IIMC pp. 76–85", "XLRI pp. 71–74", "FMS pp. 16–19, category-launch cases", "IIMB pp. 68–70, 81–83"],
    chapters: [
      {
        heading: "GTM connects a chosen market to a repeatable buying motion",
        body: "IIMC and XLRI frame GTM through product, market, customer, channel, competition, pricing, promotion, and measurement. Define ICP, urgent use case, buyer, user, approver, blocker, value proposition, proof, price, route to market, sales cycle, onboarding, and success. Choose product-led, sales-led, partner-led, or hybrid motion based on complexity, price, risk, and customer behavior. A launch campaign cannot compensate for unclear value or a mismatched channel.",
        notes: ["Name the target and buying committee precisely.", "Choose a channel that fits price, trust, and complexity.", "Model acquisition through realized customer value."],
        case: "A compliance product for banks may require consultative sales, security review, implementation partners, and reference customers; a self-serve funnel alone does not match the buying system.",
      },
      {
        heading: "Launch readiness coordinates the whole business promise",
        body: "Tier launches by customer impact, external visibility, operational change, and risk. Build a readiness matrix for product, quality, security, legal, pricing, billing, analytics, support, success, sales, partners, operations, documentation, training, and communication. Give each deliverable an owner, status, dependency, gate, and contingency. Internal enablement should explain target, problem, value, qualification, demonstration, objections, limitations, escalation, and success signals.",
        notes: ["Use red–amber–green criteria with real release authority.", "Prepare frontline teams before customers encounter the change.", "Rehearse failure, rollback, and external communication."],
        case: "A major pricing launch needs contract migration, billing QA, sales scripts, support policy, customer notices, analytics, and exception rules—not only a new pricing page.",
      },
      {
        heading: "Access is not adoption; adoption is repeated value",
        body: "Map milestones from awareness and setup to first value, repeated value, team spread, operational integration, and expansion. Design separate journeys for end users, administrators, champions, and executives. Use product signals and human interventions to detect risk. Change management includes migration, training, workflow redesign, incentives, and proof of impact. Expansion should follow realized value rather than pressure customers into unused capacity.",
        notes: ["Define value milestones for each role.", "Trigger help from observed friction and health signals.", "Connect expansion to outcomes and workflow depth."],
        case: "An analytics tool is not adopted when licenses are provisioned. Adoption occurs when teams connect data, answer recurring decisions, share outputs, and reduce prior manual work.",
      },
      {
        heading: "Lifecycle strategy changes as the market and product mature",
        body: "FMS’s product lifecycle moves through development, introduction, growth, maturity, and decline. Early stages emphasize problem validation, learning, awareness, and distribution. Growth stresses quality and scaling. Maturity shifts toward differentiation, efficiency, adjacent value, and portfolio fit. Decline requires an explicit invest, maintain, harvest, consolidate, or sunset choice. Protect customer data, integrations, contracts, support, and migration when retiring a product.",
        notes: ["Diagnose lifecycle through evidence, not product age.", "Align investment, metrics, pricing, and operations to the stage.", "Sunset with notice, portability, alternatives, and support."],
        case: "A mature standalone reporting tool may be consolidated into a platform. The decision must weigh customer dependency and migration risk, not merely declining new sales.",
      },
    ],
  },
  m21: {
    arc: "Context → portfolio → topology → coaching",
    prerequisites: "Courses 1–5: full product operating system.",
    sources: ["XLRI pp. 5–11, 205–213", "FMS pp. 9–19", "IIMB pp. 78–83"],
    chapters: [
      {
        heading: "Empowerment is context plus bounded authority",
        body: "XLRI distinguishes PM types and responsibilities; company frameworks show that the role changes with context. An empowered team receives a customer problem, strategic purpose, outcome, constraints, access to evidence, and authority to choose the solution. Leaders remain accountable for strategy, staffing, standards, and escalation. Delegating a feature list is not empowerment; abandoning teams without decisions or context is not autonomy. Review evidence and impact rather than prescribing every tactic.",
        notes: ["Set an outcome mission and strategic rationale.", "Define boundaries, dependencies, and escalation paths.", "Give the team customer access and solution authority."],
        case: "A leader can assign ‘reduce failed merchant onboarding for small retailers’ with compliance boundaries and outcome targets, rather than dictating a verification feature.",
      },
      {
        heading: "Portfolio choices allocate uncertainty, not just budgets",
        body: "Map investments by customer value stream, strategic thesis, horizon, capability, expected value, uncertainty, time-to-evidence, and downside. Balance core improvement, adjacent growth, enabling platforms, and exploration according to strategy—not an automatic percentage. Fund teams long enough to learn, but attach continuation and stop criteria to major assumptions. Consider concentration, correlation, and opportunity cost across bets.",
        notes: ["Write an investment thesis for every material bet.", "Balance value horizons and shared risk.", "Review evidence, option value, and opportunity cost."],
        case: "Five AI features may look diversified while all depend on the same weak customer data. The portfolio carries one correlated risk and may need a data-enablement investment first.",
      },
      {
        heading: "Team boundaries should follow value and cognitive load",
        body: "Organize ownership around value streams and stable domains where possible. Make interfaces, service expectations, and dependencies explicit. Platform teams are product teams: they need internal customers, adoption, documentation, reliability, roadmap, and success measures. A shared component does not automatically deserve a platform. Excessive coordination signals unclear boundaries or missing interfaces; excessive separation can fragment the customer journey.",
        notes: ["Map customer value flow across team ownership.", "Use platforms to reduce repeated cognitive and operational load.", "Manage dependencies through contracts and service expectations."],
        case: "A centralized identity platform can improve security and team speed only if onboarding, migration, documentation, SLOs, and developer experience are treated as a product.",
      },
      {
        heading: "Coach the reasoning before judging the outcome",
        body: "Use product reviews to examine the decision, evidence, assumptions, alternatives, tradeoffs, risks, and next learning step. Ask questions that strengthen judgment without taking ownership away. Separate a reasonable decision with a bad outcome from poor process or neglected risk. Give specific, timely feedback and create deliberate practice around recurring gaps. Share learning across teams through decision records, case reviews, and reusable standards.",
        notes: ["Review the quality of evidence and reasoning.", "Calibrate intervention to reversibility and consequence.", "Turn recurring mistakes into practice and system changes."],
        case: "Instead of replacing a PM’s recommendation, ask which evidence supports the target segment, which alternative was rejected, and what result would change the call.",
      },
    ],
  },
  m22: {
    arc: "Opportunity → system → eval → govern",
    prerequisites: "Advanced: technical fluency, metrics, experimentation, and responsible product.",
    sources: ["XLRI pp. 13–17, 19–21, 29–31", "FMS pp. 37–40", "Curriculum extension: NIST AI RMF and Google PAIR"],
    chapters: [
      {
        heading: "Use AI when probabilistic capability beats a simpler baseline",
        body: "XLRI explains generative AI, transformers, LLMs, retrieval-augmented generation, and prompting; FMS places AI and ML in the technical stack. Start with the workflow, stakes, baseline, frequency, value of improvement, tolerance for error, available feedback, data rights, latency, and economics. Compare rules, search, templates, classical ML, and human service. AI earns complexity when its non-determinism creates material value that simpler automation cannot provide.",
        notes: ["Define task, user, stakes, and current baseline.", "Compare non-AI and narrower-ML mechanisms.", "Choose assistive or autonomous boundaries by consequence."],
        case: "AI may help draft low-stakes support replies with agent review; fully autonomous denial of a financial claim has a different error cost and accountability requirement.",
      },
      {
        heading: "The AI product is a system, not a model call",
        body: "Design input, context, retrieval, model, tools, memory, output constraints, user interface, explanation, feedback, fallback, monitoring, and human operations. RAG can ground outputs in approved sources, but retrieval quality and source freshness become new failure points. Expose uncertainty through citations, previews, editability, or escalation appropriate to the task. Treat latency, refusal, tool failure, hallucination, and partial completion as product states.",
        notes: ["Map model and non-model components end to end.", "Give users control to inspect, correct, retry, or escalate.", "Design failure, latency, and fallback before the happy path."],
        case: "A policy assistant needs retrieval filters, citations, access controls, source updates, a refusal path, feedback, and expert escalation—not only a well-written prompt.",
      },
      {
        heading: "Evals turn acceptable behavior into a release contract",
        body: "Build a representative golden set across normal, edge, adversarial, multilingual, subgroup, and unacceptable-failure cases. Define rubrics for correctness, grounding, completeness, style, refusal, safety, and task success. Combine deterministic checks, expert review, pairwise comparison, and online behavior. Compare with the current baseline, set release gates, and monitor overrides, corrections, complaints, latency, cost, incidents, and drift after launch.",
        notes: ["Stratify cases by task, risk, and user variation.", "Use human scoring where judgment is irreducible.", "Set thresholds and unacceptable-failure gates before release."],
        case: "A medical summarizer can have high average similarity while omitting rare contraindications. Those omissions need a separate high-severity test slice and a hard gate.",
      },
      {
        heading: "AI trust combines governance, recourse, and unit economics",
        body: "Map data provenance, consent, model and vendor access, retention, intellectual property, abuse, bias, overreliance, security, transparency, accountability, incident response, and recourse. Assign owners and thresholds through the lifecycle. Model cost per successful task: tokens or compute, retrieval, tools, human review, support, monitoring, and recovery. Optimize quality, latency, and cost together; a cheap answer that creates expensive correction is not efficient.",
        notes: ["Govern, map, measure, and manage risk continuously.", "Give affected users explanation, correction, and appeal paths.", "Model economics per successful customer outcome."],
        case: "A low-cost model that doubles agent verification time can be more expensive than a stronger model. Include review and error-recovery cost in the product P&L.",
      },
    ],
  },
  m23: {
    arc: "Design → analyze → estimate → tell",
    prerequisites: "All prior modules; beginners can use this as a guided practice track.",
    sources: ["XLRI pp. 47–88, 127–224", "IIMB pp. 20–63, 75–87", "IIMC pp. 20–96", "BITSoM pp. 63–146", "MDI pp. 17–121"],
    chapters: [
      {
        heading: "Product sense answers reveal prioritization, not feature volume",
        body: "The casebooks repeatedly use CIRCLES: clarify the goal, identify segments, report needs, prioritize, list mechanisms, evaluate tradeoffs, and summarize. State assumptions without stalling. Choose a segment and problem with evidence-based criteria before ideating. Go deep on one coherent experience, including failure, trust, company advantage, metrics, and risks. Interviewers evaluate transitions and judgment—the reasons you narrow—not how many features you can name.",
        notes: ["Clarify mission, scope, target, and constraints.", "Prioritize one problem before presenting solutions.", "Close with experience, metrics, guardrails, risks, and summary."],
        case: "Practice cases across the library include a child-safety tracker, ATM for blind users, cooking assistant, blue-collar LinkedIn, and Google Maps for seniors. Re-solve each with different segment choices.",
      },
      {
        heading: "Analytical interviews reward disciplined scoping",
        body: "For metrics prompts, describe product, actors, value exchange, lifecycle, North Star, input tree, and guardrails. For RCA, validate and scope the change before hypotheses; branch internal and external causes and ask for discriminating data. For execution tradeoffs, clarify goal, constraints, consequence, reversibility, and customer impact before choosing. Think aloud in a structure the interviewer can follow and update when new evidence arrives.",
        notes: ["Define the product and success before listing metrics.", "Scope time, segment, platform, geography, and journey in RCA.", "Use the product goal to break execution tradeoffs."],
        case: "Use the library’s PhonePe transaction drop, Spotify session decline, Amazon returns, and BookMyShow booking cases as timed 25-minute RCA drills.",
      },
      {
        heading: "Estimation is a transparent model of assumptions",
        body: "Choose top-down or bottom-up decomposition, define units and period, calculate cleanly, then triangulate and sanity-check. Use ranges where inputs are uncertain and identify the assumption with the largest effect. Strategy cases add company capability, market structure, customer value, competition, economics, and a recommendation. Do not confuse a market-size answer with a market-entry decision. The model matters more than memorized demographic precision.",
        notes: ["State equation and units before inserting numbers.", "Use low, base, and high assumptions with sensitivity.", "Sanity-check against a second method or known bound."],
        case: "The PDFs include ATMs, phones, flights, drivers, hotels, queries, and storage. Rebuild each estimate from first principles instead of memorizing the published path.",
      },
      {
        heading: "Behavioral stories need evidence of personal judgment",
        body: "IIMB covers STAR, SOAR, and CAR; the interview-experience chapters reveal follow-up depth. Build a story bank for conflict, failure, influence, ambiguity, prioritization, execution, customer insight, data, leadership, and learning. State context briefly, then make your decision, alternatives, actions, and measurable result specific. Separate ‘we’ from your contribution. Include what changed in your judgment and how you applied the learning later.",
        notes: ["Map multiple competencies and follow-ups to each story.", "Quantify outcome and explain causal contribution honestly.", "Show reflection, not a perfectly heroic narrative."],
        case: "Prepare a story where you changed course after evidence contradicted your idea; expect follow-ups on resistance, data quality, tradeoffs, and what you would do differently.",
      },
    ],
  },
  m24: {
    arc: "Frame → prove → build → communicate",
    prerequisites: "Use the capstone after completing at least one module in each course.",
    sources: ["Integrated synthesis of all six local PDFs and the full ProductCraft curriculum"],
    chapters: [
      {
        heading: "Choose a problem you can investigate, not a concept you want to showcase",
        body: "Select a bounded problem with meaningful stakes, access to relevant people or operational evidence, ethical research feasibility, and room for product judgment. Compare candidate problems by impact, access, learning value, strategic interest, and ability to influence. Write the actor, context, struggle, consequence, evidence, assumptions, non-goals, and research boundary. Avoid choosing a famous industry problem when you cannot reach users or verify behavior.",
        notes: ["Score access and evidence as highly as novelty.", "Define one decision the capstone must improve.", "Set privacy, consent, and harm boundaries before research."],
        case: "A verified problem in a local clinic, student workflow, small business, or internal team can produce a stronger portfolio case than an unsupported redesign of a global app.",
      },
      {
        heading: "Build an evidence chain from behavior to strategic choice",
        body: "Use at least two evidence types: interviews or observation, behavioral or operational data, market and competitive evidence, or a demand test. Preserve contradictory findings and limitations. Synthesize needs, size the opportunity with ranges, map alternatives, and choose a target and way to win. The deliverable should show how evidence changed the initial belief and which attractive option the strategy rejects.",
        notes: ["Trace every claim to source and confidence.", "Show contradiction, limitation, and unresolved uncertainty.", "Commit to target, value proposition, advantage, and non-goals."],
        case: "A strong evidence pack can show that initial demand for ‘automation’ was actually a need for predictability, changing the strategy from autonomous action to assistive planning.",
      },
      {
        heading: "Validate the mechanism and plan responsible delivery",
        body: "Generate multiple mechanisms, select a thin concept, prototype the riskiest assumption, and revise from observed evidence. Produce a product brief, critical journey, acceptance examples, metric tree, technical or service model, accessibility and trust review, release slices, GTM path, rollout gates, and rollback. The package should be coherent: measurement and delivery must test the strategy rather than accumulate unrelated artifacts.",
        notes: ["Show before-and-after beliefs from validation.", "Include analytics, operations, edge cases, and recovery.", "Sequence a thin release with evidence and stop criteria."],
        case: "If the capstone uses AI, add a non-AI baseline, representative eval set, user control, monitoring, risk ownership, and cost per successful task.",
      },
      {
        heading: "Tell a decision story, not a design-process scrapbook",
        body: "Present the problem, stakes, evidence, insight, choice, rejected alternatives, concept, validation, delivery plan, measurement, risks, and personal learning. Show moments when evidence changed the work. Prepare a five-minute summary, a 12–20 minute case, and deep appendices. Anticipate skeptical questions about sample, causality, feasibility, economics, ethics, and why this option beats the alternative. The portfolio demonstrates judgment through traceability, not visual polish alone.",
        notes: ["Lead with the decision and customer consequence.", "Use selective evidence and show tradeoffs explicitly.", "Prepare concise and deep versions plus skeptical follow-ups."],
        case: "Close with the next real decision and evidence needed. A capstone is credible when it admits what remains unknown and how the team would learn safely.",
      },
    ],
  },
};
