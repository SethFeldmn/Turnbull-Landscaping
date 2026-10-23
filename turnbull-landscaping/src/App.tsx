import {useEffect, useState} from 'react';

const instagram = 'https://www.instagram.com/turnbull_landscaping/';

function Arrow({diagonal = false}: {diagonal?: boolean}) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function YardDrawing() {
  return (
    <svg className="yard-drawing" viewBox="0 0 740 650" role="img" aria-label="Illustrated lawn plan with curved planting beds and mowing stripes">
      <defs>
        <pattern id="stripes" width="32" height="32" patternTransform="rotate(-28)" patternUnits="userSpaceOnUse">
          <rect width="16" height="32" fill="#c1d75f" />
          <rect x="16" width="16" height="32" fill="#d5e979" />
        </pattern>
        <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.2" fill="#f4eee1" opacity=".65" />
        </pattern>
        <clipPath id="lawn"><path d="M126 105c112-73 311-56 414 14 95 64 86 187 43 285-39 88-146 147-282 133-136-13-230-71-246-175-15-98-31-203 71-257Z" /></clipPath>
      </defs>
      <path className="plan-line plan-line-a" d="M54 162c93-126 275-159 428-110 141 44 213 157 201 283M31 228C91 71 281 9 446 49c169 41 245 175 224 331M29 295C73 147 243 67 401 83c172 17 273 141 249 314M55 386c33-134 165-221 322-218 139 3 238 98 235 231M105 470c25-95 121-165 248-168 108-3 190 53 202 139" />
      <g clipPath="url(#lawn)">
        <path fill="url(#stripes)" d="M96 50h514v520H96z" />
        <path className="mow-mark" d="M120 89c-55 114-18 257 18 361M158 81c-49 115-17 274 23 386M198 74c-39 127-14 287 29 403M239 69c-28 133-9 295 34 412M280 67c-14 134 0 298 40 412M322 69c2 131 17 287 50 401M364 75c14 117 32 266 60 380M405 84c27 106 45 232 66 343M446 96c38 91 60 194 77 286M488 113c46 77 72 156 87 227" />
        <path d="M106 404c70-29 93-114 147-162 52-46 122-29 182-19 42 7 83-9 107-44 30-44 54-81 91-78 41 3 64 45 63 88l-14 207-316 144-243-52Z" fill="#8b5b34" />
        <path d="M106 404c70-29 93-114 147-162 52-46 122-29 182-19 42 7 83-9 107-44 30-44 54-81 91-78 41 3 64 45 63 88l-14 207-316 144-243-52Z" fill="url(#dots)" />
        <path d="M109 395c70-29 93-114 147-162 52-46 122-29 182-19 42 7 83-9 107-44 30-44 54-81 91-78" className="bed-edge" />
        <g className="plants" fill="#294936">
          <path d="M204 323c-18-31-5-63 5-82 15 21 22 46 12 67 11-31 33-45 51-51-3 30-21 54-52 62 31-6 54 3 69 16-28 12-58 8-78-8-3 28-19 50-39 64-5-25 5-48 28-68-24 19-50 21-70 16 16-24 43-34 74-25Z" />
          <path d="M462 212c-8-23 2-46 14-59 8 18 8 35-1 50 15-19 33-24 49-24-10 21-27 33-50 34 24 1 40 12 48 25-22 4-43-4-55-19-10 18-27 29-45 34 2-20 13-36 35-46-22 8-41 4-55-4 17-14 39-17 60-4Z" />
          <path d="M518 386c-10-27 3-54 15-68 11 20 11 41 1 60 17-22 39-27 57-26-11 24-31 39-58 39 28 2 46 15 55 31-25 3-50-6-63-25-11 22-30 34-51 40 1-23 14-42 39-54-25 9-48 4-63-5 18-17 45-20 68-4Z" />
        </g>
        <g className="small-plants" fill="#f1e7ca"><circle cx="191" cy="375" r="5"/><circle cx="225" cy="359" r="4"/><circle cx="482" cy="259" r="4"/><circle cx="535" cy="351" r="5"/><circle cx="576" cy="225" r="4"/></g>
      </g>
      <path d="M126 105c112-73 311-56 414 14 95 64 86 187 43 285-39 88-146 147-282 133-136-13-230-71-246-175-15-98-31-203 71-257Z" className="lawn-outline" />
      <path className="dimension" d="M94 527 51 573m48-66 36 31M534 78l44-35m-49 56-32-31" />
      <g className="drawing-note"><path d="M520 522h117"/><text x="520" y="545">A CLEAN CUT,</text><text x="520" y="562">DOWN TO THE EDGE.</text></g>
      <g className="drawing-stamp"><circle cx="120" cy="126" r="37"/><text x="120" y="122">NJ</text><text x="120" y="139">40°</text></g>
      <path className="north" d="m631 135 12-31 12 31-12-6z"/><text className="north-label" x="643" y="94">N</text>
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Turnbull Landscaping home">
        <span className="brand-mark">T<span>.</span></span>
        <span className="brand-name">TURNBULL<span>LANDSCAPING</span></span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}><span/><span/></button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a className="nav-cta" href={instagram} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Get in touch <Arrow diagonal /></a>
      </nav>
    </header>
  );
}

const services = [
  {number: '01', title: 'Lawn care', copy: 'A clean, even cut with the kind of stripes you notice on the way back up the drive.', word: 'MOW', shape: 'stripes'},
  {number: '02', title: 'Edging', copy: 'Crisp lines along sidewalks and beds. The small detail that makes the whole yard feel finished.', word: 'EDGE', shape: 'edge'},
  {number: '03', title: 'Mulch work', copy: 'Fresh definition for planting beds, laid with care and finished clean around the edges.', word: 'MULCH', shape: 'mulch'},
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={scrolled ? 'site scrolled' : 'site'} id="top">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot"/> HUNTERDON COUNTY, NEW JERSEY <span className="eyebrow-rule"/></p>
            <h1 id="hero-title"><span>GOOD</span><span>GROUND<span className="period">.</span></span></h1>
            <div className="hero-bottom">
              <p className="hero-intro">Thoughtful lawn care.<br/>A clean finish, every time.</p>
              <a href="#services" className="round-link" aria-label="Explore our services"><span>SCROLL<br/>TO EXPLORE</span><i><Arrow /></i></a>
            </div>
          </div>
          <div className="hero-art"><YardDrawing/><span className="art-caption">FIELD STUDY 01 <i>—</i> A WELL KEPT LAWN</span></div>
          <span className="hero-index">40° 30′ N &nbsp; / &nbsp; 74° 52′ W</span>
          <span className="hero-side-label">LOCAL KNOW-HOW · THOUGHTFUL WORK</span>
        </section>

        <section className="intro-section" id="approach">
          <div className="intro-meta"><span className="eyebrow">01 / THE APPROACH</span><span className="meta-line"/><span className="meta-end">HUNTERDON COUNTY, NJ</span></div>
          <div className="intro-content">
            <h2>A good yard is<br/><em>felt</em> before it’s noticed.</h2>
            <div className="intro-aside"><span className="asterisk">✳</span><p>Consistent care. Sharp edges. Nothing overdone. Just the satisfaction of coming home to a yard that feels looked after.</p><a className="text-link" href={instagram} target="_blank" rel="noreferrer">SEE THE WORK <Arrow diagonal /></a></div>
          </div>
          <div className="intro-bottom"><span>CARE IN THE DETAILS</span><span className="tiny-sun">✳</span><span>PRIDE IN THE FINISH</span></div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading"><div><span className="eyebrow">02 / WHAT WE DO</span><h2>The essentials,<br/><em>done right.</em></h2></div><p>Reliable care for the parts of your landscape that shape the way home feels.</p></div>
          <div className="service-list">
            {services.map((service) => <article className={`service-card ${service.shape}`} key={service.number}>
              <div className="service-top"><span>{service.number} / SERVICE</span><span className="service-graphic" aria-hidden="true"><i>{service.word}</i></span></div>
              <div className="service-bottom"><h3>{service.title}</h3><p>{service.copy}</p><span className="service-arrow" aria-hidden="true"><Arrow diagonal /></span></div>
            </article>)}
          </div>
          <div className="service-foot"><span>GOOD WORK SHOWS IN THE DETAILS.</span><a href={instagram} target="_blank" rel="noreferrer">VIEW RECENT PROJECTS <Arrow diagonal /></a></div>
        </section>

        <section className="about-section" id="about">
          <div className="about-art"><div className="sun-disc"/><svg viewBox="0 0 500 500" role="img" aria-label="Abstract illustration of a cared-for garden"><path d="M35 348c48-47 95-64 143-46 50 19 75 6 116-33 54-51 104-31 175-72v303H35z" fill="#d5e979"/><path d="M35 382c74-46 123-53 178-19 49 31 80 16 121-22 46-43 87-44 135-60v219H35z" fill="#aec24e"/><path d="M28 411c76-32 125-30 181 1 44 24 74 16 111-12 55-42 99-38 149-39" fill="none" stroke="#172d22" strokeWidth="2"/><path d="M83 340c-12-57 2-119 40-166m-24 129c-32-24-52-23-73-17 14-26 42-39 71-30m-49-30c-12-34-4-62 11-84 16 26 19 52 5 77m-5-48c17-26 38-35 57-34-8 23-26 39-53 43m321 163c-11-54 5-111 40-155m-17 121c-29-23-49-23-69-17 13-25 40-38 67-29m-40-29c-11-32-3-59 12-80 15 24 18 49 5 73m-5-46c16-25 36-33 54-32-7 22-24 37-50 41" fill="none" stroke="#203c2b" strokeWidth="3" strokeLinecap="round"/><path d="M112 373v-64m314 36v-76" stroke="#203c2b" strokeWidth="2" strokeDasharray="3 5"/><circle cx="83" cy="234" r="4" fill="#f3ede0"/><circle cx="439" cy="265" r="4" fill="#f3ede0"/></svg><span className="about-art-label">ROOTED HERE<br/>✳ &nbsp; EST. IN HUNTERDON</span></div>
          <div className="about-copy"><span className="eyebrow">03 / A LITTLE ABOUT US</span><h2>Local roots.<br/><em>Lasting care.</em></h2><p>Turnbull Landscaping is a local lawn care and landscaping business serving Hunterdon County, New Jersey. With over eight years of experience, the focus is simple: show up, work with care, and leave every edge looking sharp.</p><div className="experience"><strong>08<span>+</span></strong><span>YEARS OF<br/>HANDS-ON EXPERIENCE</span></div><a href={instagram} target="_blank" rel="noreferrer" className="about-link">FOLLOW ALONG ON INSTAGRAM <Arrow diagonal /></a></div>
        </section>

        <section className="contact-section">
          <div className="contact-top"><span className="eyebrow">04 / START A CONVERSATION</span><span>HUNTERDON COUNTY, NEW JERSEY</span></div>
          <h2>Let’s get<br/><em>to work.</em></h2>
          <div className="contact-bottom"><p>Have a lawn that needs a little attention?<br/>Send a message and tell us about it.</p><a className="contact-button" href={instagram} target="_blank" rel="noreferrer">MESSAGE ON INSTAGRAM <Arrow diagonal /></a></div>
          <span className="contact-spark">✳</span>
        </section>
      </main>
      <footer className="footer"><a className="footer-brand" href="#top">TURNBULL<span>LANDSCAPING</span></a><span>GOOD GROUND. GOOD WORK.</span><a href={instagram} target="_blank" rel="noreferrer">INSTAGRAM <Arrow diagonal /></a><span>© {new Date().getFullYear()} TURNBULL LANDSCAPING</span></footer>
    </div>
  );
}
