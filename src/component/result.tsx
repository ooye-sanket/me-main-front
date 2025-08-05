import "./result.css";

import calcy from "../media/21.svg";
import graphImg from "../media/result-anylt.png";
import tableImg from "../media/result-anylt2.png";
import star from "../media/25.svg";
import piggy from "../media/22.svg";

const ClientResults = () => {
  return (
    <div className="client-results-container">
      <div className="gradient-bg1"></div>
      <div className="client-results-wrapper">
        {/* Header */}
        <div className="client-results-header">
          <p className="client-results-label">CLIENT RESULTS</p>
          <h1 className="client-results-title">
            In just 2 months, I <br />
            helped a fintech brand
          </h1>
        </div>
        <div className="centered-results-block">
          <div className="client-results-subtitle">
            <div className="line">Increase qualified</div>
            <div className="line highlight">leads by</div>
            <div className="big-highlight">52%</div>
          </div>

          {/* Main Content Grid */}
          <div className="analytics-images">
            <img
              src={graphImg}
              alt="Analytics Graph"
              className="analytic-img"
            />

            {/* ▼-------   NEW: mobile-only footer  -------▼ */}
            <div className="client-results-footer mobile-footer">
              <div className="line1">While reducing cost per</div>
              <div className="line highlight1">conversion by</div>
              <div className="big-highlight1">25%</div>
            </div>
            {/* ▲-------------------------------------▲ */}

            <img
              src={tableImg}
              alt="Analytics Table"
              className="analytic1-img"
            />
            <img src={star} alt="Star icon" className="star-img" />
            <img src={calcy} alt="Calculation" className="calcy-img" />
            <img src={piggy} alt="Piggy bank" className="piggy-img" />
          </div>
        </div>

        {/* Desktop footer (kept exactly where it was) */}
        <div className="centered-footer-block">
          <div className="client-results-footer desktop-footer">
            <div className="line1">While reducing cost per</div>
            <div className="line highlight1">conversion by</div>
            <div className="big-highlight1">25%</div>
          </div>
        </div>
      </div>

      {/* ─────────── New horizontal line at page bottom ─────────── */}
      <hr className="client-results-end-line" />
    </div>
  );
};

export default ClientResults;
