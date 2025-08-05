import "./workplan.css";
import workstat from "../media/workplan1.svg";
import manstanding from "../media/workplan2.svg";

const Workplan = () => {
  return (
    <section className="workplan-section">
        
      <div className="workplan-container">
        {/* Main Title */}
        <h1 className="tools-title">How I work</h1>
        
        {/* Understanding KPIs Section */}
        <div className="section-separator"></div>
        <div className="workplan-content-section">
          <h2 className="workplan-section-title">
            Understanding the KPI's & Target Audience
          </h2>
          <div className="workplan-text-content">
            <p>
              The first step for me is to comprehend the client's KPIs and the overall business objectives.This step is akin to the fundamental Marketing concept of identifying a company's target audience and understanding their needs and wants.
            </p>
            <p>
              Asking relevant questions is a critical aspect for me, as it helps me to obtain valuable insights and create an effective strategy & Campaigns that resonates with the target audience and achieves the desired outcomes.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="section-separator"></div>

        {/* Creating Funnel Section */}
        <div className="workplan-content-section">
          <h2 className="workplan-section-title">
            Creating a funnel to target users at the right time in their user journey
          </h2>
          <div className="workplan-text-content">
            <p>
              To develop a comprehensive PPC campaign, I carefully map out the campaign structure with consideration to KPIs, target audience, Marketing funnel, and user intent. By aligning the campaign structure with these essential elements, I ensure that all phases of the user Journey - from awareness to consideration and action - are effectively covered by different campaigns.
            </p>

            <p>
              This approach enables me to create PPC campaigns that are tailored to the specific needs of each brand and result in optimal Outcomes.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="section-separator"></div>

        {/* Objectives Section */}
        <div className="workplan-content-section">
          <h2 className="workplan-section-title">
            Some Objectives I Can Help For
          </h2>
          <p className="workplan-objectives-intro">
            To develop a comprehensive PPC campaign, I carefully map out the campaign structure with consideration to KPIs, target audience, marketing funnel, and user intent.
          </p>
          
          {/* Objectives Grid */}
          <div className="objectives-grid">
            <div className="objective-item">
              <div className="objective-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6L21 3V17L8 20V6Z" stroke="#4285F4" strokeWidth="2" fill="none"/>
                  <path d="M8 6L3 4V18L8 20" stroke="#4285F4" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="objective-content">
                <h4>Brand</h4>
                <p>Awareness</p>
              </div>
            </div>

            <div className="objective-item">
              <div className="objective-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="5" stroke="#4285F4" strokeWidth="2" fill="none"/>
                  <path d="M20 21a8 8 0 1 0-16 0" stroke="#4285F4" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="8" r="2" stroke="#4285F4" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="objective-content">
                <h4>Audience</h4>
                <p>Building</p>
              </div>
            </div>

            <div className="objective-item">
              <div className="objective-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2" fill="none"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#4285F4" strokeWidth="2" fill="none"/>
                  <path d="M2 12h20" stroke="#4285F4" strokeWidth="2"/>
                </svg>
              </div>
              <div className="objective-content">
                <h4>Lead</h4>
                <p>Generation</p>
              </div>
            </div>

            <div className="objective-item">
              <div className="objective-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#4285F4" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="18" x2="12.01" y2="18" stroke="#4285F4" strokeWidth="2"/>
                </svg>
              </div>
              <div className="objective-content">
                <h4>App Installs &</h4>
                <p>Acquisition</p>
              </div>
            </div>

            <div className="objective-item">
              <div className="objective-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2" fill="none"/>
                  <path d="M12 6v6l4 2" stroke="#4285F4" strokeWidth="2"/>
                  <path d="M16 8l-2 2-2-2" stroke="#4285F4" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="objective-content">
                <h4>E-commerce</h4>
                <p>Sales</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="end-line" />

        {/* Man Image at Bottom */}
        <div className="workplan-bottom-image">
          <img 
            src={manstanding} 
            alt="Professional person with tablet" 
            className="workplan-hero-image"
          />
        </div>

                <div className="workplan-side-image">
          <img 
            src={workstat} 
            alt="Professional person with tablet" 
            className="workplan-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Workplan;