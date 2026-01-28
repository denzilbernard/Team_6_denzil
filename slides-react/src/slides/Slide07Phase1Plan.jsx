const Slide07Phase1Plan = () => (
  <>
    <div className="section-header">
      <span className="section-badge section1">Section 1</span>
      <span className="phase-badge">Phase 1: Plan • 10 min</span>
    </div>
    <h2>Plan</h2>
    <div className="scrollable">
      <div className="checklist">
        {/* Git START */}
        <div className="check-group git">
          <div className="check-group-label">Git: Start</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Clone the repo</strong> — download a copy of the project
                to your computer
              </div>
            </div>
            <div className="code-block">
              <code>
                git clone [REPO_URL]
                <br />
                cd sdlc-workshop
              </code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create a branch</strong> — make your own workspace so
                changes don't affect others yet
              </div>
            </div>
            <div className="code-block">
              <code>git checkout -b [team]/setup</code>
            </div>
          </div>
        </div>

        {/* THE WORK */}
        <div className="check-group work section1">
          <div className="check-group-label">The Work</div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Create your team folder</strong>
              </div>
            </div>
            <div className="code-block">
              <code>mkdir teams/[your-team-name]</code>
            </div>
          </div>
          <div className="check-item has-code">
            <div className="check-header">
              <div className="check-box"></div>
              <div>
                <strong>Each person: Add yourself to team members</strong>
              </div>
            </div>
            <div className="code-block">
              <code>
                <span className="comment">
                  # Create teams/[team]/members/[your-name].md
                </span>
                <br />
                # [Your Name]
                <br />
                **Role:** [AE/FE/ADM]
                <br />
                **Fun fact:** [Something about you]
              </code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Create a PRD</strong> with{' '}
              <span className="highlight">5 specific tasks</span> (one per team
              member, assigned by name)
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
              <code>git commit -m "[Team] - Initial setup and PRD"</code>
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
              <code>git push origin [team]/setup</code>
            </div>
          </div>
          <div className="check-item">
            <div className="check-box"></div>
            <div>
              <strong>Open a PR</strong> — request to merge your changes into
              the main project
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Slide07Phase1Plan
