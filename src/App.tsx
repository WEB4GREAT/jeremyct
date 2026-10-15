import { useEffect, useState } from 'react'
import {
  FiArrowDownRight,
  FiArrowRight,
  FiX,
} from 'react-icons/fi'

const offers = [
  {
    name: 'Sponsored post',
    price: '$200',
    description:
      'One original post about your project, written in my voice and published on my account. I explain what it does in plain words so people understand it without clicking first. Includes one retweet.',
    best: 'Best for launches, announcements and product explainers.',
  },
  {
    name: 'Two-post package',
    price: '$350',
    description:
      'Two original posts about your project, backed by multiple retweets, so it gets more than one moment in front of my audience.',
    best: 'Best for projects that want a bigger push in a single window.',
  },
  {
    name: '30 second video',
    price: '$300',
    description:
      'A 30 second video about your project, posted on my account with a caption that explains why it matters. Send me the footage or assets and I cut it.',
    best: 'Best for products with a demo, interview or announcement to show.',
  },
  {
    name: 'Thread',
    price: '$280',
    description:
      'A longer breakdown covering what you do, how it works and why it matters. It reads as useful content first and promotion second.',
    best: 'Best for products that need more than one post to explain.',
  },
  {
    name: 'Monthly partnership',
    price: '$4,000 to $7,000',
    description:
      'A month of posts, spaced out and mixed between formats, so your project keeps showing up without feeling repetitive. The price depends on how often you want me to post.',
    best: 'Best for projects that want steady visibility, not a single spike.',
  },
]

const process = [
  {
    title: 'Send a brief',
    description:
      'Tell me what you want promoted, the link, your preferred dates and anything I should avoid saying.',
  },
  {
    title: 'Get a quote',
    description:
      'I confirm the format, the price from the list above and the posting date.',
  },
  {
    title: 'Review the draft',
    description:
      'I write the post and send it to you. You check the facts. I keep the wording in my own voice.',
  },
  {
    title: 'Post goes live',
    description:
      'I publish on the agreed date and send you the link.',
  },
]

const standards = [
  {
    title: 'Paid posts are labeled',
    description:
      'Every sponsored post says it is a paid partnership, so my audience knows what they are reading.',
  },
  {
    title: 'I only promote what I can explain',
    description:
      'If I cannot describe what your project does in plain words, I will tell you and pass.',
  },
  {
    title: 'No guaranteed results',
    description:
      'I cannot promise reach, sign-ups, sales or price movement. I can promise a clear, honest post.',
  },
  {
    title: 'You approve the facts',
    description:
      'You see the draft before it goes out and can correct anything inaccurate.',
  },
]

const navItems = [
  { label: 'Offers', href: '#offers' },
  { label: 'Process', href: '#process' },
  { label: 'Standards', href: '#standards' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="topbar">
        <a
          className="handle"
          href="https://x.com/jeremyct"
          target="_blank"
          rel="noreferrer"
          aria-label="Jeremy on X"
        >
          @jeremyct<span className="handle-dot">.</span>
        </a>

        <span className="topbar-note">PROMOTIONS & PARTNERSHIPS</span>

        <button
          className="menu-trigger"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
        >
          <span>Menu</span>
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </header>

      <div
        className={`menu-overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-top">
          <a className="handle menu-handle" href="#home" onClick={closeMenu}>
            @jeremyct<span className="handle-dot">.</span>
          </a>

          <button
            className="close-menu"
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation"
            tabIndex={menuOpen ? 0 : -1}
          >
            <FiX />
            <span>Close</span>
          </button>
        </div>

        <nav className="overlay-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>{item.label}</span>
              <FiArrowDownRight aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="menu-bottom">
          <span>CRYPTO / FINANCE / ECONOMICS</span>
          <a
            href="https://x.com/jeremyct"
            target="_blank"
            rel="noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            Find me on X <FiArrowRight />
          </a>
        </div>
      </div>

      <main id="home">
        <section className="hero">
          <div className="hero-kicker">
            <span className="status-dot" />
            INDEPENDENT CREATOR ON X
          </div>

          <h1>
            Good projects
            <br />
            deserve <span>attention.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              I run a daily X account covering crypto, finance and economics.
              If your project fits that audience, I can write about it, clip
              it or build a campaign around it. Pick a format below and send
              me a DM.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#offers">
                See what I offer <FiArrowRight />
              </a>

              <a
                className="text-link"
                href="https://x.com/jeremyct"
                target="_blank"
                rel="noreferrer"
              >
                Send a brief <FiArrowDownRight />
              </a>
            </div>
          </div>

          <div className="hero-index" aria-hidden="true">
            <span>CRYPTO</span>
            <span>FINANCE</span>
            <span>ECONOMICS</span>
          </div>
        </section>

        <section className="offers section-wrap" id="offers">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WORK WITH ME</span>
              <h2>Offers<span className="blue-period">.</span></h2>
            </div>
            <p>Five ways to put your project in front of my audience.</p>
          </div>

          <div className="offer-list">
            {offers.map((offer, index) => (
              <article className="offer-row" key={offer.name}>
                <div className="offer-name">
                  <span className="offer-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{offer.name}</h3>
                </div>

                <div className="offer-details">
                  <p>{offer.description}</p>
                  <span className="offer-best">{offer.best}</span>
                </div>

                <div className="offer-price">{offer.price}</div>
              </article>
            ))}
          </div>

          <p className="price-note">
            All prices in USD. Monthly partnership pricing depends on posting
            frequency.
          </p>
        </section>

        <section className="process section-wrap" id="process">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SIMPLE FROM THE START</span>
              <h2>Process<span className="blue-period">.</span></h2>
            </div>
            <p>From first message to live post in four steps.</p>
          </div>

          <div className="process-list">
            {process.map((step) => (
              <article className="process-row" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="standards section-wrap" id="standards">
          <div className="section-heading">
            <div>
              <span className="eyebrow">NO SURPRISES</span>
              <h2>Standards<span className="blue-period">.</span></h2>
            </div>
            <p>What you can count on, and what I will not promise.</p>
          </div>

          <div className="standards-grid">
            {standards.map((standard) => (
              <article className="standard-item" key={standard.title}>
                <span className="standard-mark" aria-hidden="true">+</span>
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
              <h2>
                Let’s talk
                <br />
                about it<span>.</span>
              </h2>
              <p>Send a brief by direct message on X.</p>
              <p className="contact-subtext">
                Include these four things and I can quote you quickly.
              </p>
            </div>

            <div className="contact-details">
              <ul>
                <li>What you want promoted, with a link</li>
                <li>The format you are interested in</li>
                <li>Your target dates</li>
                <li>Anything I should not say</li>
              </ul>

              <a
                className="button button-blue"
                href="https://x.com/jeremyct"
                target="_blank"
                rel="noreferrer"
              >
                Message @jeremyct on X <FiArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Jeremy</span>
        <span>Crypto, finance and economics on X</span>
        <a href="#home" aria-label="Back to top">
          Back to top <FiArrowRight />
        </a>
      </footer>
    </>
  )
}

export default App
