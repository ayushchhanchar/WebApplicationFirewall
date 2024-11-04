import React, { useEffect, useState } from 'react'
import axios from 'axios'



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
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold">Recent Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="border-b py-2">
              {event.message}
            </li>
          ))}
        </ul>
      </div>
      {/* Additional components for stats and manual controls can be added here */}
    </div>
  )
}

export default DashBoard