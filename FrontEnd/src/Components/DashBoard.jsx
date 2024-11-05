import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import RequestLogs from './RequestLogs';
import ThreatStatistics from './ThreatStatistics';
import SettingsPanel from './SettingsPanel';
import BlockedIPs from './BlockedIPs';



const DashBoard = () => {
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl flex flex-col items-center justify-center text-white font-bold mb-4">Web Application Firewall Dashboard</h1>
      <RequestLogs/>

      <SettingsPanel/>

      <ThreatStatistics/>
      
      <BlockedIPs/>
    </div>
  )
}

export default DashBoard