const Slide12Section2Step1 = () => (
  <>
    <div className="section-header">
      <span className="section-badge section2">Section 2</span>
      <span className="phase-badge">Step 1: Enable Advanced Features • 10 min</span>
    </div>
    <h2>Set Up Cursor Power Features</h2>
    <div className="scrollable">
      <div className="checklist">
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Turn on BugBot</strong> — Ask Cursor:{' '}
            <em>"How do I enable BugBot for my repository?"</em>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Add a Hook</strong> — Ask:{' '}
            <em>"Help me add a useful hook. What hooks are available?"</em>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Add a Skill</strong> — Ask:{' '}
            <em>"How do I add a skill to customize Cursor's behavior?"</em>
          </div>
        </div>
        <div className="check-item">
          <div className="check-box"></div>
          <div>
            <strong>Add an Agent</strong> — Ask:{' '}
            <em>"Help me set up an agent for this codebase"</em>
          </div>
        </div>
      </div>
      <div className="emphasis-box orange">
        <strong>Tip:</strong> Use Cursor's docs and Ask Mode to figure these out.
        That's the real skill!
      </div>
    </div>
  </>
)

export default Slide12Section2Step1
