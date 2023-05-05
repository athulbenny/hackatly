import React, { useState } from 'react';
import './Settings.css';

function Setting() {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  const handleLanguageChange = event => {
    setLanguage(event.target.value);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="setting">
        <h2>Notifications</h2>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationChange}
          />
          Receive notifications
        </label>
      </div>
      <div className="setting">
        <h2>Language</h2>
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    </div>
  );
}

export default Setting;
