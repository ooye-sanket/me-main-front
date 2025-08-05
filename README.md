.full-white-section {
          width: 100%;
          background-color: white;
          margin: 0;
          padding: 0;
        }

        .clean-blue-strip {
          width: 100%;
          height: 80vh;
          background-color: #0000ff;
          padding: 80px 20px;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .stats-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1200px;
          width: 100%;
        }

        .stat-box {
          text-align: center;
          color: white;
          flex: 1;
          min-width: 200px;
        }

        .stat-box h2 {
          font-size: 48px;
          font-weight: 900;
          margin: 0;
          color: white;
          font-family: 'Inter', sans-serif;
        }

        .stat-box p {
          font-size: 18px;
          font-weight: 700;
          margin: 10px 0 0 0;
          color: white;
          font-family: 'Inter', sans-serif;
        }

        .workbrands {
          background-color: white;
          text-align: center;
          padding: 40px 20px;
          margin: 0;
        }

        .workbrands h2 {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .clean-blue-strip {
            padding: 100px 40px;
          }
          
          .stats-row {
            gap: 60px;
          }
          
          .stat-box h2 {
            font-size: 80px;
          }
          
          .stat-box p {
            font-size: 24px;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .clean-blue-strip {
            padding: 120px 40px;
          }
          
          .stats-row {
            gap: 50px;
          }
          
          .stat-box h2 {
            font-size: 100px;
          }
          
          .stat-box p {
            font-size: 28px;
          }
        }