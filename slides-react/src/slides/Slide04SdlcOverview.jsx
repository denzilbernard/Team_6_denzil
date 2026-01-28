const Slide04SdlcOverview = () => (
  <>
    <h2>The Software Development Lifecycle</h2>
    <div className="sdlc-flow">
      <div className="sdlc-item">
        <div className="sdlc-icon">01</div>
        <div className="sdlc-name">Plan</div>
        <div className="sdlc-desc">
          Define requirements
          <br />
          Break down tasks
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">02</div>
        <div className="sdlc-name">Design</div>
        <div className="sdlc-desc">
          Architecture
          <br />
          API design
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">03</div>
        <div className="sdlc-name">Develop</div>
        <div className="sdlc-desc">
          Write code
          <br />
          Implement features
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">04</div>
        <div className="sdlc-name">Test</div>
        <div className="sdlc-desc">
          Validate
          <br />
          Find bugs
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">05</div>
        <div className="sdlc-name">Review</div>
        <div className="sdlc-desc">
          Code review
          <br />
          Quality checks
        </div>
      </div>
      <div className="sdlc-arrow">→</div>
      <div className="sdlc-item">
        <div className="sdlc-icon">06</div>
        <div className="sdlc-name">Deploy</div>
        <div className="sdlc-desc">
          Ship to
          <br />
          production
        </div>
      </div>
    </div>
    <p
      style={{
        textAlign: 'center',
        color: 'var(--text-secondary)',
        marginTop: '2rem',
        fontSize: '1.2rem',
      }}
    >
      Today you'll experience <span className="highlight">every stage</span> — and
      learn how Cursor helps at each one.
    </p>
  </>
)

export default Slide04SdlcOverview
