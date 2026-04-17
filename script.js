const revealElements = document.querySelectorAll(".reveal");

for (const element of revealElements) {
  const delay = element.dataset.delay;
  if (delay) {
    element.style.setProperty("--reveal-delay", `${delay}ms`);
  }
}

const observer = new IntersectionObserver(
  (entries, obs) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }

      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    }
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -6% 0px",
  }
);

for (const element of revealElements) {
  observer.observe(element);
}

const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const wizardForm = document.querySelector("#briefWizard");

if (wizardForm) {
  const steps = Array.from(wizardForm.querySelectorAll(".wizard-step"));
  const stepLabels = Array.from(document.querySelectorAll(".wizard-steps li"));
  const backButton = document.querySelector("#briefBack");
  const nextButton = document.querySelector("#briefNext");
  const output = document.querySelector("#briefOutput");
  const recommendationNode = document.querySelector("#briefRecommendation");
  const copyButton = document.querySelector("#copyBrief");
  const issueLink = document.querySelector("#issueLink");
  let currentStep = 0;

  const escapeHtml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const getState = () => {
    const data = new FormData(wizardForm);

    return {
      projectName: (data.get("projectName") || "").toString().trim(),
      projectType: (data.get("projectType") || "").toString(),
      primaryUsers: (data.get("primaryUsers") || "").toString().trim(),
      deliverables: data.getAll("deliverables").map(String),
      currentState: (data.get("currentState") || "").toString().trim(),
      workflowReality: (data.get("workflowReality") || "").toString().trim(),
      systems: data.getAll("systems").map(String),
      mustKeep: (data.get("mustKeep") || "").toString().trim(),
      desiredOutcome: (data.get("desiredOutcome") || "").toString().trim(),
      timeline: (data.get("timeline") || "").toString(),
      budget: (data.get("budget") || "").toString(),
      proposalNeeds: data.getAll("proposalNeeds").map(String),
      decisionMaker: (data.get("decisionMaker") || "").toString().trim(),
      confidence: (data.get("confidence") || "").toString(),
      additionalContext: (data.get("additionalContext") || "").toString().trim(),
    };
  };

  const suggestFirstMove = (state) => {
    if (
      state.confidence === "Still exploratory / problem-first" ||
      state.systems.length >= 4 ||
      state.projectType === "Business system redesign"
    ) {
      return "Suggested first move: start with a discovery sprint and workflow map before locking a full delivery estimate.";
    }

    if (
      state.deliverables.includes("Portal or dashboard") ||
      state.deliverables.includes("Workflow automation")
    ) {
      return "Suggested first move: scope a usable first-phase portal or automation surface, then sequence the rest into phases.";
    }

    if (
      state.deliverables.includes("AI assistant or recommendation layer") ||
      state.projectType === "AI-assisted tool"
    ) {
      return "Suggested first move: prototype the decision flow first, then confirm data sources and rollout constraints.";
    }

    return "Suggested first move: prepare a focused proposal with scope options, timing scenarios, and a budget range.";
  };

  const getComplexityScore = (state) => {
    let score = 1;

    score += Math.max(0, state.deliverables.length - 1);
    score += state.systems.length >= 4 ? 3 : state.systems.length >= 2 ? 2 : state.systems.length >= 1 ? 1 : 0;
    score += state.proposalNeeds.length >= 4 ? 2 : state.proposalNeeds.length >= 2 ? 1 : 0;

    if (state.projectType === "Business system redesign" || state.projectType === "Automation layer") {
      score += 2;
    }

    if (state.projectType === "AI-assisted tool" || state.projectType === "Workflow portal") {
      score += 1;
    }

    if (state.confidence === "Partly clear, needs shaping") {
      score += 1;
    }

    if (state.confidence === "Still exploratory / problem-first") {
      score += 2;
    }

    if (state.timeline === "Urgent: within 2-4 weeks") {
      score += 1;
    }

    return score;
  };

  const getEstimate = (state) => {
    const score = getComplexityScore(state);

    if (score <= 3) {
      return {
        timeline: "1-2 weeks for a tightly scoped first phase",
        budget: state.budget || "Lean scope range",
      };
    }

    if (score <= 6) {
      return {
        timeline: "3-5 weeks for a first usable version",
        budget: state.budget || "Mid-range operational build",
      };
    }

    return {
      timeline: "6-10+ weeks with phased delivery",
      budget: state.budget || "Larger phased implementation",
    };
  };

  const getRisks = (state) => {
    const risks = [];

    if (!state.systems.length) {
      risks.push("Existing systems and integration points are still UNCONFIRMED.");
    }

    if (!state.budget) {
      risks.push("Budget range is still UNCONFIRMED.");
    }

    if (!state.decisionMaker) {
      risks.push("Decision owner and approval speed are still UNCONFIRMED.");
    }

    if (state.confidence !== "Clear enough to estimate") {
      risks.push("Final scope still needs shaping before a hard estimate should be treated as reliable.");
    }

    if (state.timeline === "Urgent: within 2-4 weeks") {
      risks.push("An urgent timeline may require narrowed scope or a phased release plan.");
    }

    if (state.mustKeep) {
      risks.push(`Any solution must protect this constraint: ${state.mustKeep}.`);
    }

    return risks.slice(0, 4);
  };

  const summarize = (state) => {
    const title = state.projectName || state.projectType || "Project inquiry";
    const estimate = getEstimate(state);
    const systemsLine = state.systems.length ? state.systems.join(", ") : "Systems to confirm";
    const deliverableLine = state.deliverables.length ? state.deliverables.join(", ") : "Deliverables to define";
    const proposalLine = state.proposalNeeds.length ? state.proposalNeeds.join(", ") : "Proposal focus still to define";
    const risks = getRisks(state);
    const recommendation = suggestFirstMove(state);

    const summarySentence = state.currentState
      ? `Build a ${state.projectType || "workflow-focused solution"} that reduces ${state.currentState.charAt(0).toLowerCase()}${state.currentState.slice(1)} and gives the team a clearer operational path.`
      : `Shape a ${state.projectType || "workflow-focused solution"} that turns a rough idea into an operationally clear first phase.`;

    const outcomeSentence = state.desiredOutcome
      ? state.desiredOutcome
      : "Clarify the desired outcome so proposal scope, timing, and budget can be discussed against a shared target.";

    const scope = [];

    if (state.deliverables.includes("Portal or dashboard")) {
      scope.push("Core portal or dashboard surface");
    }

    if (state.deliverables.includes("Workflow automation")) {
      scope.push("Workflow automation and operational handoffs");
    }

    if (state.deliverables.includes("AI assistant or recommendation layer")) {
      scope.push("AI-assisted drafting, triage, or recommendation layer");
    }

    if (state.deliverables.includes("Clickable prototype")) {
      scope.push("Clickable prototype to validate the interaction model");
    }

    if (state.deliverables.includes("Spec and phased proposal")) {
      scope.push("Spec and phased proposal structure");
    }

    if (!scope.length) {
      scope.push("Core scope still to be confirmed");
    }

    const plainText = [
      "Project Brief Seed",
      "",
      `Title: ${title}`,
      `Project type: ${state.projectType || "To confirm"}`,
      `Primary users: ${state.primaryUsers || "To confirm"}`,
      "",
      "Summary",
      summarySentence,
      outcomeSentence,
      "",
      "Scope",
      ...scope.map((item) => `- ${item}`),
      "",
      "Workflow context",
      `- Current bottleneck: ${state.currentState || "To confirm"}`,
      `- Current workflow: ${state.workflowReality || "To confirm"}`,
      `- Existing systems: ${systemsLine}`,
      "",
      "Estimate",
      `- Timeline: ${estimate.timeline}`,
      `- Budget shape: ${estimate.budget}`,
      `- Suggested first move: ${recommendation.replace("Suggested first move: ", "")}`,
      "",
      "Proposal should answer",
      `- ${proposalLine}`,
      "",
      "Risks / confirmations",
      ...risks.map((item) => `- ${item}`),
      "",
      "Decision context",
      `- Decision owner: ${state.decisionMaker || "UNCONFIRMED"}`,
      `- Scope clarity: ${state.confidence || "UNCONFIRMED"}`,
      `- Must keep: ${state.mustKeep || "UNCONFIRMED"}`,
      `- Additional context: ${state.additionalContext || "None added yet"}`,
    ].join("\n");

    return {
      title,
      summarySentence,
      outcomeSentence,
      scope,
      estimate,
      systemsLine,
      proposalLine,
      risks,
      recommendation,
      plainText,
    };
  };

  const updateIssueLink = (title, body) => {
    const issueTitle = encodeURIComponent(`[Project Inquiry] ${title}`);
    const issueBody = encodeURIComponent(body);
    issueLink.href = `https://github.com/jakubgoscinny-creator/jakubgoscinny-creator.github.io/issues/new?title=${issueTitle}&body=${issueBody}`;
  };

  const renderSummary = () => {
    const state = getState();
    const summary = summarize(state);

    output.innerHTML = `
      <section class="summary-block">
        <strong>Summary</strong>
        <p>${escapeHtml(summary.summarySentence)}</p>
        <p>${escapeHtml(summary.outcomeSentence)}</p>
      </section>
      <section class="summary-block">
        <strong>Scope</strong>
        <ul>${summary.scope.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="summary-block">
        <strong>Estimate</strong>
        <ul>
          <li>${escapeHtml(summary.estimate.timeline)}</li>
          <li>${escapeHtml(summary.estimate.budget)}</li>
          <li>${escapeHtml(summary.systemsLine)}</li>
        </ul>
      </section>
      <section class="summary-block">
        <strong>Risks / confirmations</strong>
        <ul>${summary.risks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    `;

    recommendationNode.textContent = summary.recommendation;
    copyButton.dataset.brief = summary.plainText;
    updateIssueLink(summary.title, summary.plainText);
  };

  const updateWizardStep = () => {
    steps.forEach((step, index) => {
      step.classList.toggle("is-active", index === currentStep);
    });

    stepLabels.forEach((stepLabel, index) => {
      stepLabel.classList.toggle("is-active", index === currentStep);
    });

    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Brief ready" : "Next step";
  };

  wizardForm.addEventListener("input", renderSummary);
  wizardForm.addEventListener("change", renderSummary);

  backButton.addEventListener("click", () => {
    currentStep = Math.max(0, currentStep - 1);
    updateWizardStep();
  });

  nextButton.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep += 1;
      updateWizardStep();
      return;
    }

    document.querySelector(".brief-summary")?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  });

  copyButton.addEventListener("click", async () => {
    const brief = copyButton.dataset.brief || "";

    if (!brief) {
      return;
    }

    await navigator.clipboard.writeText(brief);
    const previousLabel = copyButton.textContent;
    copyButton.textContent = "Copied brief";

    window.setTimeout(() => {
      copyButton.textContent = previousLabel;
    }, 1600);
  });

  updateWizardStep();
  renderSummary();
}
