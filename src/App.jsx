import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Check,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Headphones,
  HeartPulse,
  Landmark,
  LockKeyhole,
  MapPin,
  Menu,
  Navigation,
  PackageCheck,
  Phone,
  PhoneCall,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Stamp,
  Star,
  X,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Document delivery',
    text: 'Confidential contracts, certificates and sensitive paperwork delivered securely.',
  },
  {
    icon: ShoppingBag,
    title: 'Essential items',
    text: 'Reliable movement of urgent home and office essentials across the city.',
  },
  {
    icon: Stamp,
    title: 'Document procurement',
    text: 'Stamp papers, deeds, drafts and more procured and delivered without the wait.',
  },
  {
    icon: FileCheck2,
    title: 'Notary support',
    text: 'Careful handling of notarised documents with dependable doorstep delivery.',
  },
  {
    icon: HeartPulse,
    title: 'Medical delivery',
    text: 'Priority dispatch of reports, prescriptions, samples and pharmacy supplies.',
  },
  {
    icon: Landmark,
    title: 'Banking errands',
    text: 'Discreet delivery of cheques, drafts, loan documents and banking requests.',
  },
]

const promises = [
  {
    icon: ShieldCheck,
    title: 'Verified at every step',
    text: 'OTP-based handover and background-verified delivery professionals.',
  },
  {
    icon: Navigation,
    title: 'Visible from pickup to drop',
    text: 'Live status updates keep you informed throughout the journey.',
  },
  {
    icon: Headphones,
    title: 'Real people, ready to help',
    text: 'Our Chennai support team is available whenever you need clarity.',
  },
]

const steps = [
  ['01', 'Share the details', 'Tell us what needs to move, where, and by when.'],
  ['02', 'We collect safely', 'A verified Sealed partner arrives at your doorstep.'],
  ['03', 'Track the journey', 'Follow your delivery with clear, timely status updates.'],
  ['04', 'OTP-secure handover', 'The item is released only after recipient verification.'],
]

const navItems = [
  ['Home', '#home'],
  ['Why Sealed', '#about'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement">
        <div className="container announcement-inner">
          <p>
            <span className="pulse-dot" /> Secure delivery across Chennai, 7 days a week
          </p>
          <a href="tel:+919150965551">
            <Phone size={14} /> +91 91509 65551
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Sealed home" onClick={closeMenu}>
            <img src="/assets/sealed-logo.png" alt="Sealed" />
          </a>

          <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="business-link" href="https://sealedtobusiness.com/" target="_blank" rel="noreferrer">
              For business <ArrowRight size={15} />
            </a>
            <a className="button button-small nav-cta" href="#contact" onClick={closeMenu}>
              Book a pickup
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <BadgeCheck size={17} /> Chennai&apos;s secure delivery partner
              </div>
              <h1>
                Every important delivery, <em>handled with care.</em>
              </h1>
              <p className="hero-lede">
                From confidential documents to time-sensitive essentials, Sealed brings them home safely,
                quickly and with complete peace of mind.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contact">
                  Schedule a pickup <ArrowRight size={18} />
                </a>
                <a className="text-link" href="tel:+914440012000">
                  <span className="text-link-icon"><PhoneCall size={18} /></span>
                  <span><small>Need it now?</small>044-4001 2000</span>
                </a>
              </div>
              <div className="hero-proof" aria-label="Customer rating">
                <div className="avatar-stack" aria-hidden="true">
                  <span>AR</span><span>MF</span><span>SK</span>
                </div>
                <div>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}
                  </div>
                  <p>Trusted by families &amp; businesses across Chennai</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  src="/assets/sealed-hero.jpg"
                  alt="A Sealed courier safely handing over a document"
                />
                <div className="image-shade" />
              </div>
              <div className="floating-card secure-card">
                <span className="float-icon"><LockKeyhole size={20} /></span>
                <span><small>Handover protected</small><strong>OTP verified</strong></span>
                <span className="status-check"><Check size={14} /></span>
              </div>
              <div className="floating-card tracking-card">
                <span className="route-pulse"><Navigation size={17} /></span>
                <span><small>Your delivery</small><strong>Arriving in 12 min</strong></span>
              </div>
            </div>
          </div>

          <div className="container trust-strip">
            <div><strong>10K+</strong><span>secure deliveries</span></div>
            <div><strong>4.9/5</strong><span>customer rating</span></div>
            <div><strong>7 days</strong><span>available every week</span></div>
            <div><strong>OTP</strong><span>protected handover</span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container section-heading split-heading">
            <div>
              <span className="section-kicker">Why Sealed</span>
              <h2>Built for the things<br />you can&apos;t replace.</h2>
            </div>
            <p>
              Speed matters. But for an important document, trust matters more. Sealed combines the care of a
              personal handover with the visibility of modern delivery.
            </p>
          </div>

          <div className="container promise-grid">
            {promises.map(({ icon: Icon, title, text }, index) => (
              <article className="promise-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <div className="promise-icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container section-heading centered-heading">
            <span className="section-kicker">What we deliver</span>
            <h2>One trusted partner for<br />every important errand.</h2>
            <p>Thoughtful, secure delivery services designed around real everyday needs.</p>
          </div>

          <div className="container service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="service-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact" aria-label={`Book ${title}`}>
                  Book this service <ChevronRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="process-pattern" />
          <div className="container process-layout">
            <div className="process-intro">
              <span className="section-kicker light-kicker">Simple by design</span>
              <h2>From your hands<br />to theirs, safely.</h2>
              <p>A clear, carefully managed journey with security built into every stage.</p>
              <a className="button button-light" href="#contact">Start a delivery <ArrowRight size={18} /></a>
            </div>
            <div className="steps-list">
              {steps.map(([number, title, text]) => (
                <article className="step" key={number}>
                  <span className="step-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <span className="step-check"><Check size={16} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section app-section">
          <div className="container app-card">
            <div className="app-copy">
              <span className="section-kicker">Sealed in your pocket</span>
              <h2>Book, track and breathe easy.</h2>
              <p>
                Get instant access to secure pickups, live tracking and delivery updates—wherever you are.
              </p>
              <ul>
                <li><Check size={16} /> Quick pickup scheduling</li>
                <li><Check size={16} /> Live delivery status</li>
                <li><Check size={16} /> Secure delivery history</li>
              </ul>
              <div className="store-buttons">
                <a href="https://apps.apple.com/in/app/sealed-secure-delivery/id1576298909" target="_blank" rel="noreferrer">
                  <img src="/assets/app-store.png" alt="Download on the App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.devsol.customer" target="_blank" rel="noreferrer">
                  <img src="/assets/google-play.png" alt="Get it on Google Play" />
                </a>
              </div>
            </div>
            <div className="phone-stage" aria-hidden="true">
              <div className="phone-halo" />
              <img src="/assets/app-phone.png" alt="" />
              <div className="app-float app-float-one"><PackageCheck size={18} /><span>Delivered safely</span></div>
              <div className="app-float app-float-two"><Zap size={18} /><span>Pickup confirmed</span></div>
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container testimonial-grid">
            <div className="testimonial-intro">
              <span className="section-kicker">A reputation for care</span>
              <h2>Trusted when it matters most.</h2>
              <p>Real experiences from the people who count on Sealed.</p>
              <div className="rating-card">
                <strong>4.9</strong>
                <div><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}</div><span>Average customer rating</span></div>
              </div>
            </div>
            <article className="featured-quote">
              <Quote className="quote-icon" size={44} />
              <p>
                “Had a wonderful experience with Sealed. The entire process felt personal, dependable and
                thoughtfully handled from beginning to end.”
              </p>
              <div className="quote-author">
                <span>TF</span>
                <div><strong>Thaseen Fathima</strong><small>Sealed customer, Chennai</small></div>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker light-kicker">Let&apos;s get it moving</span>
              <h2>Tell us what<br />needs delivering.</h2>
              <p>Share a few details and our team will help you choose the safest, quickest option.</p>

              <div className="contact-details">
                <a href="tel:+919150965551"><span><PhoneCall size={20} /></span><div><small>Call us</small><strong>+91 91509 65551</strong></div></a>
                <a href="https://maps.google.com/?cid=16043225124085920044" target="_blank" rel="noreferrer"><span><MapPin size={20} /></span><div><small>Visit us</small><strong>Purasawalkam, Chennai</strong></div></a>
                <div><span><Clock3 size={20} /></span><div><small>Open today</small><strong>7:00 am — 10:00 pm</strong></div></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <div><span>Pickup request</span><h3>How can we help?</h3></div>
                <span className="form-icon"><Smartphone size={22} /></span>
              </div>
              <div className="form-row">
                <label>First name<input name="firstName" type="text" placeholder="Your first name" required /></label>
                <label>Last name<input name="lastName" type="text" placeholder="Your last name" required /></label>
              </div>
              <label>Phone number<input name="phone" type="tel" placeholder="+91 98765 43210" required /></label>
              <label>What do you need delivered?<textarea name="message" rows="4" placeholder="Tell us about the item, pickup and destination" required /></label>
              <button className="button form-button" type="submit">Request a callback <ArrowRight size={18} /></button>
              {submitted && <p className="success-message" role="status"><Check size={16} /> Thanks! Our team will call you shortly.</p>}
              <p className="privacy-note"><LockKeyhole size={13} /> Your information stays private with Sealed.</p>
            </form>
          </div>
        </section>

        <section className="location-section">
          <div className="container location-grid">
            <div className="location-card">
              <span className="section-kicker">Find us</span>
              <h2>Right in the heart of Chennai.</h2>
              <p>270, Purasawalkam High Road,<br />Opp. Saravana Stores, Chennai — 600007</p>
              <div className="hours-grid">
                <span><small>Mon — Sat</small><strong>7 am — 10 pm</strong></span>
                <span><small>Sunday</small><strong>9 am — 9 pm</strong></span>
              </div>
              <a className="map-link" href="https://maps.google.com/?cid=16043225124085920044" target="_blank" rel="noreferrer">
                Open in Google Maps <ArrowRight size={17} />
              </a>
            </div>
            <div className="map-wrap">
              <iframe
                title="Sealed office location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.391915030549!2d80.256354!3d13.086764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265b3e7b0be83%3A0xdea4fc3fecc3712c!2sSealed!5e0!3m2!1sen!2sin!4v1725698743921!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home"><img src="/assets/sealed-logo.png" alt="Sealed" /></a>
            <p>For the deliveries that deserve more care.</p>
          </div>
          <div className="footer-links"><strong>Explore</strong>{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
          <div className="footer-links"><strong>Services</strong><a href="#services">Documents</a><a href="#services">Essentials</a><a href="#services">Banking</a><a href="#services">Medical</a></div>
          <div className="footer-contact"><strong>Stay connected</strong><a href="tel:+914440012000">044-4001 2000</a><a href="mailto:hello@sealed.co.in">hello@sealed.co.in</a><div className="socials"><a href="https://www.facebook.com/sealedsecuredelivery/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a><a href="https://www.instagram.com/sealedsecuredelivery/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a><a href="https://twitter.com/Sealed80526202" target="_blank" rel="noreferrer" aria-label="X">x</a></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Sealed. All rights reserved.</span><span>Securely delivered in Chennai.</span></div>
      </footer>

      <div className="mobile-actions" aria-label="Quick actions">
        <a href="tel:+919150965551"><PhoneCall size={18} /> Call</a>
        <a href="#contact">Book pickup <ArrowRight size={17} /></a>
      </div>
    </div>
  )
}

export default App
