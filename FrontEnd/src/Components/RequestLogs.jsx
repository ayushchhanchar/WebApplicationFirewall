import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RequestLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/logs')
      .then(response => setLogs(response.data))
      .catch(error => console.error('Error fetching logs:', error));
  }, []);

  return (
    <div className="request-logs">
      <h2>Request Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <p><strong>IP:</strong> {log.ip}</p>
            <p><strong>Path:</strong> {log.path}</p>
            <p><strong>Status:</strong> {log.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestLogs;
