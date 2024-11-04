import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ThreatStatistics() {
  const [stats, setStats] = useState({
    totalRequests: 0,
    blockedRequests: 0,
    suspiciousActivities: 0,
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/stats')
      .then(response => setStats(response.data))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div className="threat-statistics">
      <h2>Threat Statistics</h2>
      <p><strong>Total Requests:</strong> {stats.totalRequests}</p>
      <p><strong>Blocked Requests:</strong> {stats.blockedRequests}</p>
      <p><strong>Suspicious Activities:</strong> {stats.suspiciousActivities}</p>
    </div>
  );
}

export default ThreatStatistics;
