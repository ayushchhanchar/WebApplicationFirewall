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
    <div className="settings-panel">
      <h2>Settings</h2>
      <label>
        Rate Limit:
        <input
          type="number"
          value={rateLimit}
          onChange={handleRateLimitChange}
        />
      </label>
      <button onClick={updateSettings}>Update Settings</button>
    </div>
  );
}

export default SettingsPanel;
