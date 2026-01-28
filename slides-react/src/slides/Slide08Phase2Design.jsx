const Slide08Phase2Design = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 2: Design • 10 min</span>
    </div>
    <h2>Design</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Wait for PR approval</strong> — your Phase 1 changes need
              to be reviewed first
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Pull latest</strong> — download everyone's merged
                changes
              </div>
            </div>
            <div className="code-block">
              <code>git pull origin main</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create a branch</strong> — start fresh workspace for MVP
              </div>
            </div>
            <div className="code-block">
              <code>git checkout -b [team]/base-mvp</code>
            </div>
          </div>
        </div>

        {/* THE WORK */}
        <div className="check-group work section1">
          <div className="check-group-label">The Work</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>ONE PERSON:</strong> Create the base MVP application using
              Cursor
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Run locally</strong> — Ask Cursor:{' '}
              <em>"How do I run this project?"</em>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Verify it works</strong> — e.g., if Chrome extension, see
              it in Chrome
            </div>
          </div>
        </div>

        {/* Git FINISH */}
        <div className="check-group git">
          <div className="check-group-label">Git: Finish</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Stage your changes</strong> — tell git which files to
                save
              </div>
            </div>
            <div className="code-block">
              <code>git add .</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Commit</strong> — save your changes with a message
              </div>
            </div>
            <div className="code-block">
              <code>git commit -m "[Team] - Base MVP scaffold"</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Push</strong> — upload your branch to GitHub
              </div>
            </div>
            <div className="code-block">
              <code>git push origin [team]/base-mvp</code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Open PR and merge</strong> — this becomes the foundation
              for everyone
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide08Phase2Design
