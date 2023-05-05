import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [username, setUsername] = useState('john_doe');
  const [email, setEmail] = useState('john_doe@example.com');
  const [bio, setBio] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleBioChange = event => {
    setBio(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Profile updated');
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={handleBioChange} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
