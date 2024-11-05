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
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Threat Statistics</h2>
      <p className="text-gray-700"><strong>Total Requests:</strong> {stats.totalRequests}</p>
      <p className="text-gray-700"><strong>Blocked Requests:</strong> {stats.blockedRequests}</p>
      <p className="text-gray-700"><strong>Suspicious Activities:</strong> {stats.suspiciousActivities}</p>
    </div>
  );
}

export default ThreatStatistics;
