const Slide09Phase3Develop = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 3: Develop • 20 min</span>
    </div>
    <h2>
      Develop{' '}
      <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        (EACH person)
      </span>
    </h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Pull latest</strong> — get the MVP that was just merged
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
                <strong>Create your branch</strong> — your own workspace for
                your feature
              </div>
            </div>
            <div className="code-block">
              <code>git checkout -b [your-name]/[feature]</code>
            </div>
          </div>
        </div>

        {/* THE WORK */}
        <div className="check-group work section1">
          <div className="check-group-label">The Work</div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Run the project</strong> — make sure the base MVP works
              first
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Use Plan Mode</strong> to design YOUR section from the PRD
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Implement your feature</strong> using Tab completion +
              Cmd+K
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
              <code>git push origin [your-name]/[feature]</code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Open a PR</strong> — request review from a teammate
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide09Phase3Develop
