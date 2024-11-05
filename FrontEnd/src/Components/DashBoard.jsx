import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RequestLogs from './RequestLogs';
import ThreatStatistics from './ThreatStatistics';
import SettingsPanel from './SettingsPanel';
import BlockedIPs from './BlockedIPs';



const DashBoard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      // Fetch events from backend
      axios.get('http://localhost:5000/logs')
        .then(response => setEvents(response.data))
        .catch(error => console.error("Error fetching logs:", error));
    }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Web Application Firewall Dashboard</h1>
      

      <RequestLogs/>

      <BlockedIPs/>

      <SettingsPanel/>

      <ThreatStatistics/>
      {/* Additional components for stats and manual controls can be added here */}
    </div>
  )
}

export default DashBoard