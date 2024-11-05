import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlockedIPs() {
  const [blockedIPs, setBlockedIPs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blocked-ips')
      .then(response => setBlockedIPs(response.data))
      .catch(error => console.error('Error fetching blocked IPs:', error));
  }, []);

  const unblockIP = (ip) => {
    axios.post('http://localhost:5000/api/unblock-ip', { ip })
      .then(() => setBlockedIPs(blockedIPs.filter(blockedIP => blockedIP !== ip)))
      .catch(error => console.error('Error unblocking IP:', error));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Blocked IPs</h2>
      <ul className="space-y-2">
        {blockedIPs.map((ip, index) => (
          <li key={index} className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span className="text-gray-700">{ip}</span>
            <button
              onClick={() => unblockIP(ip)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              Unblock
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlockedIPs;
