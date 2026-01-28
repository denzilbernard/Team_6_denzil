const Slide14Section2Step3 = () => (
  <>
    <div className="section-header">
      <span className="section-badge section2">Section 2</span>
      <span className="phase-badge">Step 3: Add a Feature • 10 min</span>
    </div>
    <h2>Build Something New</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create a branch</strong> — your workspace for this
                feature
              </div>
            </div>
            <div className="code-block">
              <code>git checkout -b [your-team]/adds-[feature]</code>
            </div>
          </div>
        </div>

        {/* THE WORK */}
        <div className="check-group work section2">
          <div className="check-group-label">The Work</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Decide on a feature</strong> — something small but visible
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Use Plan Mode</strong> — try different models for
              different perspectives
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Implement the feature</strong>
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
              <code>git commit -m "Add [feature]"</code>
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
              <code>git push origin [your-team]/adds-[feature]</code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Open a PR</strong> — watch BugBot review your code
            </div>
          </div>
        </div>
      </div>
      <div className="emphasis-box orange">
        <strong>Section 2 Complete</strong> — You've used BugBot, Hooks, Skills,
        Agents, and Ask Mode.
      </div>
    </div>
  </>
)

export default Slide14Section2Step3
