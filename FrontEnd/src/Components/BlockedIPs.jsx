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
    <div className="blocked-ips">
      <h2>Blocked IPs</h2>
      <ul>
        {blockedIPs.map((ip, index) => (
          <li key={index}>
            {ip}
            <button onClick={() => unblockIP(ip)}>Unblock</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlockedIPs;
