import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import RiskCard from "../components/RiskCard";
import SafeMap from "../components/SafeMap";
import "./Dashboard.css";

function Dashboard() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const snapshot = await getDocs(collection(db, "symptoms"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setReports(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const calculateRiskData = () => {
    const districtMap = {};

    reports.forEach(report => {
      const city = report.city;

      if (!districtMap[city]) {
        districtMap[city] = {
          location: city,
          reportCount: 0,
          symptomScore: 0
        };
      }

      districtMap[city].reportCount += 1;

      const score =
        Number(report.difficultyBreathing) +
        Number(report.cough) +
        Number(report.fatigue) +
        Number(report.fever) +
        Number(report.headache) +
        Number(report.nausea);

      districtMap[city].symptomScore += score;
    });

    return Object.values(districtMap).map((d, index) => {
      let riskLevel = "Low";
      let trend = "stable";

      if (d.symptomScore >= 20) riskLevel = "High";
      else if (d.symptomScore >= 10) riskLevel = "Medium";

      return {
        id: index,
        location: d.location,
        riskLevel,
        reportCount: d.reportCount,
        trend
      };
    });
  };

  const riskData = calculateRiskData();

  const filteredData =
    filter === "all"
      ? riskData
      : riskData.filter(item => item.riskLevel.toLowerCase() === filter);

  const stats = {
    totalReports: reports.length,
    highRiskAreas: riskData.filter(d => d.riskLevel === "High").length,
    mediumRiskAreas: riskData.filter(d => d.riskLevel === "Medium").length,
    lowRiskAreas: riskData.filter(d => d.riskLevel === "Low").length
  };

  if (loading) {
    return (
      <div className="page dashboard-page">
        <div className="container">
          <p style={{ padding: "2rem", textAlign: "center", fontSize: "1.2rem" }}>
            Loading dashboard data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page dashboard-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Tamil Nadu Outbreak Risk Dashboard</h1>
          <p className="page-subtitle">
            Real-time visualization of disease outbreak risk levels across Tamil Nadu districts
          </p>
        </header>

        <section className="dashboard-stats">
          <div className="dashboard-stat-card">
            <span className="stat-value">{stats.totalReports}</span>
            <span className="stat-label">Total Reports</span>
          </div>

          <div className="dashboard-stat-card">
            <span className="stat-value">{stats.highRiskAreas}</span>
            <span className="stat-label">High Risk Districts</span>
          </div>

          <div className="dashboard-stat-card">
            <span className="stat-value">{stats.mediumRiskAreas}</span>
            <span className="stat-label">Medium Risk Districts</span>
          </div>

          <div className="dashboard-stat-card">
            <span className="stat-value">{stats.lowRiskAreas}</span>
            <span className="stat-label">Low Risk Districts</span>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "#1e293b" }}>
            Tamil Nadu Disease Outbreak Map
          </h2>
          <SafeMap />
        </section>

        <section className="risk-cards-section">
          <div className="filter-buttons">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("high")}>High</button>
            <button onClick={() => setFilter("medium")}>Medium</button>
            <button onClick={() => setFilter("low")}>Low</button>
          </div>

          <div className="risk-cards-grid">
            {filteredData.map(item => (
              <RiskCard
                key={item.id}
                location={item.location}
                riskLevel={item.riskLevel}
                reportCount={item.reportCount}
                trend={item.trend}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
