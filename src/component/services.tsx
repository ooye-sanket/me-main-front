

const Services = () => {
  const servicesData = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
          <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C3.45 6 3 6.45 3 7S3.45 8 4 8H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V8H20C20.55 8 21 7.55 21 7S20.55 6 20 6ZM10 4H14V6H10V4ZM17 8V19H7V8H17Z" fill="#0400e9"/>
          <rect x="9" y="10" width="2" height="7" fill="#ffffff"/>
          <rect x="13" y="10" width="2" height="7" fill="#ffffff"/>
          <path d="M12 14L16 10H8L12 14Z" fill="#0400e9"/>
        </svg>
      ),
      title: "Non-profit Grants",
      desc: "I help NGO's secure free Google ad grants, help them understand how to use them, keep their performance above eligibility thresholds (eg., CTR>5% etc.) while maximising & optimising the ad spends.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
          <circle cx="11" cy="11" r="8" stroke="#0400e9" strokeWidth="2" fill="none"/>
          <path d="m21 21-4.35-4.35" stroke="#0400e9" strokeWidth="2"/>
        </svg>
      ),
      title: "Search Ads",
      desc: "I help clients with their search strategy which involves keyword research, Ad copies & Extensions, Conversion Tracking, Optimisation, GA4 & GTM Set up, live reporting & more",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
          <rect x="3" y="3" width="7" height="9" rx="1" fill="#0400e9"/>
          <rect x="14" y="3" width="7" height="6" rx="1" fill="#0400e9"/>
          <rect x="3" y="15" width="7" height="6" rx="1" fill="#0400e9"/>
          <rect x="14" y="12" width="7" height="9" rx="1" fill="#0400e9"/>
        </svg>
      ),
      title: "Display Ads",
      desc: "I help brands by strategically setting up the campaigns, selecting the right Audience & reaching out to them at the right time with the right creative",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#0400e9"/>
        </svg>
      ),
      title: "Youtube Ads",
      desc: "I strategise and set up the campaigns, select the right Audience, Topics & Placements & suggestions for videos which achieve required objectives.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#0400e9"/>
          <path d="M2 17L12 22L22 17" stroke="#0400e9" strokeWidth="2" fill="none"/>
          <path d="M2 12L12 17L22 12" stroke="#0400e9" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "Performance Max ads",
      desc: "I help advertise on all channels on Google with Pmax, using the right audience signals, creative strategy & getting you the most out of it in terms of sales or leads.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" stroke="#0400e9" strokeWidth="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke="#0400e9" strokeWidth="2"/>
          <path d="M8 6H16V14H8Z" fill="#0400e9"/>
        </svg>
      ),
      title: "App Install Ads",
      desc: "I help businesses acquire users at the lowest possible cost by running app install ads for Play store & IOS. I achieve this by optimising the campaigns for in app actions to optimize on Customer Acquiring Cost (CAC)",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Poppins:wght@600;800;900&display=swap');
        
        .Services-box {
          padding: 4rem 1rem;
          max-width: 1280px;
          margin: 0 auto;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .services-title {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 3rem;
          font-weight: 900;
          color: #0e1128;
          line-height: 1.1;
          text-align: center;
          margin-bottom: 3rem;
          margin-top: 0;
        }

        .services-card {
          background: #ffffff;
          border: 1px solid #e7e8ee;
          border-radius: 1.25rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .services-main {
          display: flex;
          gap: 2rem;
          padding: 3rem;
          align-items: flex-start;
        }

        .services-big-icon {
          flex-shrink: 0;
          width: 130px;
          height: 130px;
          border: 2px solid #e7e8ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9ff;
        }

        .services-big-icon svg {
          width: 70%;
          height: 70%;
        }

        .services-copy {
          max-width: 850px;
          flex-grow: 1;
        }

        .services-heading {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #0400e9;
          font-size: 2.1rem;
          font-weight: 800;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        .services-desc {
          color: #374151;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0;
        }

        .services-features {
          background: #f7f7ff;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.75rem;
          padding: 2.5rem 3rem;
          text-align: center;
        }

        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .feature svg {
          width: 48px;
          height: 48px;
          margin-bottom: 0.75rem;
          flex-shrink: 0;
        }

        .feature span {
          font-size: 0.95rem;
          font-weight: 600;
          color: #374151;
          line-height: 1.35;
        }

        /* Simple Services Grid */
        .simple-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .simple-service-card {
          background: #ffffff;
          border: 1px solid #e7e8ee;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-align: center;
        }

        .simple-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(4, 0, 233, 0.15);
        }

        .simple-service-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #f8f9ff 0%, #e7e8ff 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #e7e8ee;
        }

        .simple-service-title {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #0400e9;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          margin-top: 0;
        }

        .simple-service-desc {
          color: #374151;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Social Media Card */
        .social-service-card {
          grid-column: 1 / -1;
        }

        .social-bottom-row {
          background: #f7f7ff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          padding: 2rem;
        }

        .social-bottom-row svg {
          width: 48px;
          height: 48px;
          transition: transform 0.3s ease;
        }

        .social-bottom-row svg:hover {
          transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .services-main {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .services-copy {
            max-width: none;
          }
          .services-features {
            grid-template-columns: repeat(3, 1fr);
          }
          .simple-services-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 540px) {
          .Services-box {
            padding: 3rem 1rem;
          }
          .services-title {
            font-size: 2rem;
          }
          .services-main {
            padding: 2rem 1.25rem;
          }
          .services-big-icon {
            width: 100px;
            height: 100px;
          }
          .services-heading {
            font-size: 1.6rem;
          }
          .services-features {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
            padding: 2rem 1.25rem;
          }
          .feature svg {
            width: 38px;
            height: 38px;
          }
          .simple-services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .simple-service-card {
            padding: 1.5rem;
          }
          .simple-service-icon {
            width: 70px;
            height: 70px;
          }
          .social-bottom-row {
            gap: 1.5rem;
          }
          .social-bottom-row svg {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <section className="Services-box">
        {/* Main heading */}
        <h2 className="services-title">I help companies with</h2>

        {/* Main services card */}
        <article className="services-card">
          {/* Upper part: logo + description */}
          <div className="services-main">
            <span className="services-big-icon">
              {/* Google G logo */}
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#0400e9"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#0400e9"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#0400e9"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#0400e9"/>
              </svg>
            </span>

            <div className="services-copy">
              <h3 className="services-heading">Google Ads</h3>
              <p className="services-desc">
                I handle everything required to ensure the success of Google Ads
                campaigns – from understanding objectives, competitor &amp; keyword
                research, creating the best campaign structure, targeting the right
                audience, running cross-funnel ads, setting up advanced conversion
                tracking, optimising regularly, and providing live reporting.
              </p>
            </div>
          </div>

          {/* Lower part: feature icons */}
          <div className="services-features">
            <div className="feature">
              {/* Eye icon - Competitor research */}
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#0400e9" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" stroke="#0400e9" strokeWidth="2"/>
              </svg>
              <span>Competitor<br />research</span>
            </div>

            <div className="feature">
              {/* Search/Magnifying glass icon - Keyword research */}
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#0400e9" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="#0400e9" strokeWidth="2"/>
              </svg>
              <span>Keyword<br />research</span>
            </div>

            <div className="feature">
              {/* Campaign structure icon */}
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke="#0400e9" strokeWidth="2" fill="none"/>
                <rect x="14" y="3" width="7" height="7" stroke="#0400e9" strokeWidth="2" fill="none"/>
                <rect x="3" y="14" width="7" height="7" stroke="#0400e9" strokeWidth="2" fill="none"/>
                <rect x="14" y="14" width="7" height="7" stroke="#0400e9" strokeWidth="2" fill="none"/>
              </svg>
              <span>Campaign<br />Structure</span>
            </div>

            <div className="feature">
              {/* Click/Cursor icon - Conversion Tracking */}
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="#0400e9" strokeWidth="2" fill="none"/>
              </svg>
              <span>Conversion<br />Tracking</span>
            </div>

            <div className="feature">
              {/* Dollar icon - Bid & Budget */}
              <svg viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="1" x2="12" y2="23" stroke="#0400e9" strokeWidth="2"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#0400e9" strokeWidth="2"/>
              </svg>
              <span>Bid &amp; Budget<br />Optimisation</span>
            </div>

            <div className="feature">
              {/* Webpage icon - Landing Page */}
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#0400e9" strokeWidth="2" fill="none"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="#0400e9" strokeWidth="2"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="#0400e9" strokeWidth="2"/>
              </svg>
              <span>Landing Page<br />Optimization</span>
            </div>
          </div>
        </article>

        {/* 6 Simple Service Cards */}
        <div className="simple-services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="simple-service-card">
              <div className="simple-service-icon">
                {service.icon}
              </div>
              <h3 className="simple-service-title">{service.title}</h3>
              <p className="simple-service-desc">{service.desc}</p>
            </div>
          ))}
          
          {/* Social Media Card */}
          <article className="services-card social-service-card">
            <div className="services-main">
              <span className="services-big-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.92 18 21.92S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#0400e9"/>
                </svg>
              </span>

              <div className="services-copy">
                <h3 className="services-heading">Social Media Ads</h3>
                <p className="services-desc">
                  By leveraging the ongoing creative strategy & testing across
                  channels, I help businesses achieve their paid social
                  objectives, whether it's driving traffic to their website,{" "}
                  <strong>generating leads, acquiring users</strong> or increasing
                  followers. The process involves targeting & testing different
                  audiences (Interest, Open, Lookalike or Remarketing), testing
                  different content (as per the audience & campaign goals) &
                  testing different creatives (hooks, statics, videos, UGC etc)
                  each week to find the winning creatives, messaging & audience
                  for the best possible performance.
                </p>
              </div>
            </div>

            <div className="social-bottom-row">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.564H7.078V12.073H10.125V9.405C10.125 6.348 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.34 7.875 13.875 8.8 13.875 9.75V12.073H17.203L16.671 15.564H13.875V24C19.612 23.094 24 18.1 24 12.073Z" fill="#0400e9"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#0400e9" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="#0400e9" strokeWidth="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#0400e9" strokeWidth="2"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M23 3A10.9 10.9 0 0 1 20.1 4.1A4.48 4.48 0 0 0 22.46 2.34A9 9 0 0 1 19.2 3.83A4.48 4.48 0 0 0 12 6.84A12.94 12.94 0 0 1 2.88 2.88A4.48 4.48 0 0 0 4.26 9.67A4.48 4.48 0 0 1 2.8 9.13V9.2A4.48 4.48 0 0 0 6.44 13.6A4.48 4.48 0 0 1 2 12.54A4.48 4.48 0 0 0 6.17 16.5A9 9 0 0 1 1.11 18.26A12.94 12.94 0 0 0 8 20.29C17.5 20.29 22.5 12.25 22.5 5.17C22.5 4.95 22.5 4.72 22.46 4.5A9.18 9.18 0 0 0 24 2.38Z" fill="#0400e9"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="#0400e9"/>
              </svg>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Services;
