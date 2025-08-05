import "./App.css";

import logo from "./media/me-mine-lg.svg";
// Import your SVG icons
import icon2 from "./media/2.svg";
import icon3 from "./media/3.svg";
import icon4 from "./media/4.svg";
import icon5 from "./media/logo-vertical.png";
import icon6 from "./media/6.svg";
import icon7 from "./media/7.svg";
import icon8 from "./media/8.svg";
import icon9 from "./media/9.svg";
import icon10 from "./media/10.svg";
import icon11 from "./media/11.svg";
import icon12 from "./media/code-stable.png";
import icon13 from "./media/java.png";
import icon15 from "./media/meta1.png";
import icon14 from "./media/Google_Ads_icon.svg";
import icon16 from "./media/GAnaltyics.png";
import mepic from "./media/mepic.jpg";
import certifiedBadge from "./media/certified.png";


// Import the new BlueStrip component
import BlueStrip from "./component/BlueStrip";
import Work from "./component/work";
import WorkStrip from "./component/workstrip";
import Result from "./component/result";
import Feedback from "./component/clientsay";
import Services from "./component/services";
import Tools from "./component/tools";
import Workplan from "./component/workplan";
import Contact from "./component/getintouch";
// import Footer from "./component/footer";



// Load Google Fonts
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Poppins:wght@400;600;700;800;900&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        {/* Floating Icons */}
        <div className="floating-icons">
          <img src={icon2} className="floating-icon icon-1" alt="icon" />
          <img src={icon3} className="floating-icon icon-2" alt="icon" />
          <img src={icon4} className="floating-icon icon-3" alt="icon" />
          <img src={icon5} className="floating-icon icon-4" alt="icon" />
          <img src={icon6} className="floating-icon icon-5" alt="icon" />
          <img src={icon7} className="floating-icon icon-6" alt="icon" />
          <img src={icon8} className="floating-icon icon-7" alt="icon" />
          <img src={icon9} className="floating-icon icon-8" alt="icon" />
          <img src={icon10} className="floating-icon icon-9" alt="icon" />
          <img src={icon11} className="floating-icon icon-10" alt="icon" />
          <img src={icon12} className="floating-icon icon-12" alt="icon" />
          <img src={icon13} className="floating-icon icon-13" alt="icon" />
          <img src={icon14} className="floating-icon icon-14" alt="icon" />
          <img src={icon15} className="floating-icon icon-15" alt="icon" />
          <img src={icon16} className="floating-icon icon-16" alt="icon" />

          {/* Additional decorative elements */}
          <div className="floating-shape shape-1">+</div>
          <div className="floating-shape shape-2">+</div>
          <div className="floating-shape shape-3">✦</div>
          <div className="floating-shape shape-4">✦</div>
        </div>

        <div className="navbar">
          <div className="logo">
            <strong>Sanket</strong>
            <img src={logo} className="icon" alt="logo" />
            <strong>Kalekar</strong>
          </div>
          <div className="nav-links">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <button type="button" className="contact-btn">
              Get in touch
            </button>
          </div>
        </div>

        <div className="logo-below">
          <img src={logo} className="large-logo" alt="Sanket Kalekar Logo" />
        </div>

        <div className="intro-text">
          <p>
            <strong>
              Hi! I am Sanket, a performance marketer and SaaS builder.
            </strong>
          </p>
        </div>

        <div className="tagline">
          <h2>
            I help businesses boost ad conversions with optimized spends and
            build SaaS.
          </h2>
        </div>
        <div className="intro-text1">
          <p>
            <strong>So the right charts tilt up.</strong>
          </p>
        </div>

        {/* Add Button Below the Tagline */}
        <div className="main-contact-btn-wrapper">
          <button type="button" className="main-contact-btn">
            Get in touch
          </button>
        </div>
      </div>

      {/* New Bio Section */}
      <div className="bio-section">
        <div className="bio-container">
          <div className="bio-content">
            <p>
              I'm a PPC Specialist with a proven track record of running
              successful performance marketing campaigns across industries. I
              develop Google Ads & Paid Social strategies that align with
              clients' business goals, and execute them, while increasing
              conversions & optimising ad spends.
            </p>
          </div>
          <div className="bio-image">
            <img src={mepic} alt="Sanket Kalekar" className="profile-photo" />
          </div>
        </div>

        {/* Badges Section */}
        <div className="badges-container">
          <div className="badge location-badge">
            <div className="badge-icon">🌍</div>
            <div className="badge-text">
              <div className="badge-title">Based in Maharashtra, India</div>
              <div className="badge-subtitle">
                Working with clients worldwide
              </div>
            </div>
          </div>

          <div className="badge certification-badge">
            <div className="badge-icon google-icon">
              <img
                src={certifiedBadge}
                alt="Google Certified"
                className="certified-img"
              />
              <span className="checkmark">✓</span>
            </div>
            <div className="badge-text">
              <div className="badge-title">certified professional</div>
              <div className="badge-subtitle">for running ads </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use the BlueStrip component */}
      <BlueStrip />
      <Work />
      <WorkStrip />
      <Result />
      <Feedback />
      <Services />
      <Tools />
      <Workplan />
      <Contact />
      {/* <Footer /> */}

      {/* Footer Section */}
    </>
  );
}

export default App;

