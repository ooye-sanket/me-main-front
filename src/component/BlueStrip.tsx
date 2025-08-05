
import bhonga from "../media/13.svg";
import money from "../media/14.svg";
import rocket from "../media/12.svg";

const BlueStrip = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Your existing bio section would be here */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        
      </div>

      {/* The problematic section - FIXED */}
      <div className="full-white-section">
        <div className="clean-blue-strip">
          <img src={rocket} alt="icon12" className="floating-icon blue-icon blue-icon-1" />
          <img src={bhonga} alt="icon13" className="floating-icon blue-icon blue-icon-2" />
          <img src={money} alt="icon14" className="floating-icon blue-icon blue-icon-3" />

          
          <div className="stats-row">
            <div className="stat-box">
              <h2>50+</h2>
              <p>Brands helped</p>
            </div>
            <div className="stat-box">
              <h2>$55M+</h2>
              <p>Revenue generated</p>
            </div>
            <div className="stat-box">
              <h2>$20M+</h2>
              <p>Budget Managed</p>
            </div>
          </div>
        </div>
        
        
      </div>

      
    </div>
  );
};

export default BlueStrip;