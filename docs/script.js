const promptComposerMarkup = `<div class="stack">
  <div class="prompt-toolbar">
    <div class="nes-field is-inline">
      <label for="composer-model">Model</label>
      <div class="nes-select">
        <select id="composer-model">
          <option>Lovable Reasoner</option>
          <option>Lovable Fast</option>
          <option>Lovable Vision</option>
        </select>
      </div>
    </div>
    <div class="nes-field is-inline">
      <label for="composer-mode">Mode</label>
      <div class="nes-select is-primary">
        <select id="composer-mode">
          <option>Build</option>
          <option>Review</option>
          <option>Research</option>
        </select>
      </div>
    </div>
  </div>
  <div class="nes-field">
    <label for="composer-input">What should Lovable create?</label>
    <textarea id="composer-input" class="nes-textarea">Summarize the support backlog, draft a release note, and highlight anything that still needs approval.</textarea>
  </div>
  <div class="inline-meta">
    <span class="nes-text is-success">Context attached · Product brief · 4 files</span>
    <span class="nes-text is-warning">Human review required before publish</span>
  </div>
  <div class="action-row">
    <button type="button" class="nes-btn is-primary">Run prompt</button>
    <button type="button" class="nes-btn">Save as workflow</button>
  </div>
</div>`;

const agentActivityMarkup = `<div class="agent-list">
  <section class="nes-container with-title">
    <p class="title">Research agent</p>
    <p class="mini-title">Status</p>
    <div class="status-row">
      <span class="nes-badge"><span class="is-success">Running</span></span>
      <span class="nes-badge"><span class="is-primary">0.94 confidence</span></span>
    </div>
    <label for="research-progress">Evidence gathered</label>
    <progress id="research-progress" class="nes-progress is-success" value="76" max="100"></progress>
    <p>Scanning customer interviews and clustering feature requests into themes.</p>
  </section>
  <section class="nes-container is-dark with-title">
    <p class="title">Shipping agent</p>
    <p class="mini-title">Status</p>
    <div class="status-row">
      <span class="nes-badge"><span class="is-warning">Awaiting approval</span></span>
      <span class="nes-badge"><span class="is-error">Publish locked</span></span>
    </div>
    <label for="shipping-progress">Release checklist</label>
    <progress id="shipping-progress" class="nes-progress is-warning" value="58" max="100"></progress>
    <p>Prepared deployment notes, but is waiting on a human to approve external changes.</p>
  </section>
</div>`;

const conversationReviewMarkup = `<section class="nes-container">
  <section class="message-list">
    <section class="message -left">
      <div class="nes-balloon from-left">
        <p>Draft a friendly onboarding checklist for new Lovable workspace admins.</p>
      </div>
    </section>
    <section class="message -right">
      <div class="nes-balloon from-right is-dark">
        <p>I created a checklist covering workspace setup, permissions, AI guardrails, and launch readiness.</p>
      </div>
    </section>
  </section>
  <div class="action-row">
    <button type="button" class="nes-btn is-success">Approve</button>
    <button type="button" class="nes-btn is-warning">Request changes</button>
    <button type="button" class="nes-btn is-error">Escalate</button>
  </div>
</section>`;

const aiOperationsDashboardMarkup = `<div class="metric-grid">
  <section class="nes-container with-title is-centered">
    <p class="title">Assist acceptance</p>
    <p class="metric-value nes-text is-success">81%</p>
    <p class="metric-label">last 7 days</p>
  </section>
  <section class="nes-container with-title is-centered">
    <p class="title">Human escalations</p>
    <p class="metric-value nes-text is-warning">14</p>
    <p class="metric-label">needs triage</p>
  </section>
  <section class="nes-container with-title is-centered">
    <p class="title">Broken runs</p>
    <p class="metric-value nes-text is-error">2</p>
    <p class="metric-label">rollback required</p>
  </section>
</div>`;

const launchChecklistMarkup = `<div>
  <div class="table-toolbar">
    <span class="nes-badge"><span class="is-primary">Beta launch</span></span>
    <span class="nes-badge"><span class="is-success">3 of 4 checks passed</span></span>
  </div>
  <div class="nes-table-responsive">
    <table class="nes-table is-bordered is-centered">
      <thead>
        <tr>
          <th>Check</th>
          <th>Owner</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Prompt QA</td>
          <td>Design</td>
          <td><span class="nes-text is-success">Ready</span></td>
        </tr>
        <tr>
          <td>Safety review</td>
          <td>Trust</td>
          <td><span class="nes-text is-warning">In review</span></td>
        </tr>
        <tr>
          <td>Fallback copy</td>
          <td>Product</td>
          <td><span class="nes-text is-success">Ready</span></td>
        </tr>
        <tr>
          <td>Monitoring alerts</td>
          <td>Engineering</td>
          <td><span class="nes-text is-success">Ready</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;

const humanInTheLoopMarkup = `<div class="review-list">
  <section class="nes-container with-title">
    <p class="title">Completed by AI</p>
    <ul class="nes-list is-disc">
      <li>Clustered 48 feedback notes</li>
      <li>Generated the launch summary</li>
      <li>Flagged 3 risky claims for review</li>
    </ul>
  </section>
  <section class="nes-container is-dark with-title">
    <p class="title">Needs human action</p>
    <ul class="nes-list is-disc is-dark">
      <li>Approve publish text</li>
      <li>Confirm pricing language</li>
      <li>Decide whether to ship to beta or everyone</li>
    </ul>
    <button type="button" class="nes-btn is-primary">Open approval queue</button>
  </section>
</div>`;

const sampleCollection = [
  {
    id: "prompt-composer",
    title: "Prompt composer",
    component: "prompt-composer-preview",
    description:
      "A default creation surface should expose the model, the operating mode, and the next safe action in one place.",
    showCode: false,
    code: promptComposerMarkup,
  },
  {
    id: "agent-activity",
    title: "Agent activity",
    component: "agent-activity-preview",
    description:
      "Agent cards should make progress, confidence, and intervention points visible without opening another panel.",
    showCode: false,
    code: agentActivityMarkup,
  },
  {
    id: "conversation-review",
    title: "Conversation review",
    component: "conversation-review-preview",
    description:
      "Assistant responses need lightweight review affordances so product teams can approve, revise, or escalate quickly.",
    showCode: false,
    code: conversationReviewMarkup,
  },
  {
    id: "ai-operations-dashboard",
    title: "AI operations dashboard",
    component: "ai-operations-dashboard-preview",
    description:
      "Operational dashboards should emphasize trust metrics rather than vanity counts.",
    showCode: false,
    code: aiOperationsDashboardMarkup,
  },
  {
    id: "launch-checklist",
    title: "Launch checklist",
    component: "launch-checklist-preview",
    description:
      "Use lightweight tables and badges to document readiness, owners, and blockers before enabling an AI feature.",
    showCode: false,
    code: launchChecklistMarkup,
  },
  {
    id: "human-in-the-loop-handoff",
    title: "Human-in-the-loop handoff",
    component: "human-in-the-loop-preview",
    description:
      "Critical flows should tell users exactly what the AI completed and what still requires a person.",
    note: "Always reserve primary emphasis for the next safe human action.",
    showCode: false,
    code: humanInTheLoopMarkup,
  },
];

const principles = [
  {
    title: "Visible system status",
    description:
      "AI should never feel magical at the expense of clarity. Show active work, waiting states, and completion paths in every major flow.",
  },
  {
    title: "Trust by default",
    description:
      "Put confidence, provenance, and safety cues close to actions so teams can approve faster without guessing what happened.",
  },
  {
    title: "Composable surfaces",
    description:
      "The same primitives should scale from a single prompt box to multi-step agent workflows and dashboards.",
  },
  {
    title: "Human override",
    description:
      "Every automated action needs a clear stop, retry, or escalation route when quality or safety is uncertain.",
  },
];

new Vue({
  el: "#lovable-design-system",
  components: {
    "prompt-composer-preview": { template: promptComposerMarkup },
    "agent-activity-preview": { template: agentActivityMarkup },
    "conversation-review-preview": { template: conversationReviewMarkup },
    "ai-operations-dashboard-preview": { template: aiOperationsDashboardMarkup },
    "launch-checklist-preview": { template: launchChecklistMarkup },
    "human-in-the-loop-preview": { template: humanInTheLoopMarkup },
  },
  data() {
    return {
      collection: sampleCollection,
      principles,
      copiedBalloon: {
        display: "none",
        top: 0,
        left: 0,
        message: "copied!",
        success: true,
      },
      activeSection: "principles",
      onScroll: null,
      scrollPos: 0,
    };
  },
  mounted() {
    this.onScroll = () => {
      this.scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      this.updateActiveSection();
    };
    document.addEventListener("scroll", this.onScroll);
    this.updateActiveSection();
    this.$nextTick(() => {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    async copy(event, id) {
      const code = this.collection.find((entry) => entry.id === id).code;
      let copied = false;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(code);
          copied = true;
        } else {
          throw new Error("Clipboard API unavailable");
        }
      } catch (error) {
        const fake = document.createElement("textarea");
        fake.value = code;
        fake.setAttribute("readonly", "");
        Object.assign(fake.style, {
          position: "absolute",
          left: "-9999px",
        });
        this.$el.appendChild(fake);
        fake.select();
        copied = document.execCommand("copy");
        this.$el.removeChild(fake);
      }

      this.showCopiedBalloon(event.pageY, event.pageX, copied);
    },
    updateActiveSection() {
      const sections = ["principles", "foundations", "patterns"];
      const current = sections.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return false;

        const { top, bottom } = section.getBoundingClientRect();
        return top <= 140 && bottom > 140;
      });
      const visited = sections.filter((sectionId) => {
        const section = document.getElementById(sectionId);
        return section && section.getBoundingClientRect().top <= 140;
      });

      this.activeSection = current || visited[visited.length - 1] || sections[0];
    },
    showCopiedBalloon(top, left, success) {
      this.copiedBalloon = {
        display: "block",
        top: `${top - 100}px`,
        left: `${left - 180}px`,
        message: success ? "copied!" : "copy failed",
        success,
      };
      setTimeout(() => {
        this.copiedBalloon.display = "none";
      }, 1000);
    },
  },
});
