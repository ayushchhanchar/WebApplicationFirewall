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
    <div className="bg-[#27374D] shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-xl text-white font-semibold mb-4">Request Logs</h2>
      <ul className="space-y-4">
        {logs.map((log, index) => (
          <li key={index} className="border-b border-gray-300 pb-2">
            <p className="text-gray-400"><strong>IP:</strong> {log.ip}</p>
            <p className="text-gray-400"><strong>Path:</strong> {log.path}</p>
            <p className="text-gray-400"><strong>Status:</strong> {log.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestLogs;
