import React, { useState } from 'react';
import axios from 'axios';

function SettingsPanel() {
  const [rateLimit, setRateLimit] = useState(100);

  const handleRateLimitChange = (event) => {
    setRateLimit(event.target.value);
  };

  const updateSettings = () => {
    axios.post('http://localhost:5000/api/settings', { rateLimit })
      .then(response => alert('Settings updated'))
      .catch(error => console.error('Error updating settings:', error));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <label className="block mb-2">
        <span className="text-gray-700">Rate Limit:</span>
        <input
          type="number"
          value={rateLimit}
          onChange={handleRateLimitChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </label>
      <button
        onClick={updateSettings}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Update Settings
      </button>
    </div>
  );
}

export default SettingsPanel;
