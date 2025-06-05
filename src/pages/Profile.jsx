import React, { useState } from 'react';
import Navbar from './layouts/Navbar';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaVenusMars, FaCalendarAlt, FaCity } from 'react-icons/fa';
import '../styles/Profile.css';

const AccountSettings = () => {
  const [gender, setGender] = useState('Male');
  const [firstName, setFirstName] = useState('Round');
  const [lastName, setLastName] = useState('Donald');
  const [email, setEmail] = useState('redandDonald@gmail.com');
  const [address, setAddress] = useState('3805 Porter Rd.');
  const [phone, setPhone] = useState('(495) 555-0128');
  const [dob, setDob] = useState('1995-01-17');
  const [city, setCity] = useState('Atlanta');
  const [postalCode, setPostalCode] = useState('3000');

  return (
    <div className="profile-page">
      <Navbar hideAuthButton={true} />
      
      <div className="profile-container">
        <div className="profile-card">
          <div className="card-header">
            <h2>Personal Information</h2>
            <p>Update your personal details</p>
          </div>
          
          <div className="card-body">

            {/* Name */}
            <div className="form-row">
              <div className="form-group">
                <label><FaUser className="input-icon" /> First Name</label>
                <input 
                  type="text" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                />
              </div>
              
              <div className="form-group">
                <label><FaUser className="input-icon" /> Last Name</label>
                <input 
                  type="text" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label><FaEnvelope className="input-icon" /> Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label><FaMapMarkerAlt className="input-icon" /> Address</label>
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label><FaPhone className="input-icon" /> Phone Number</label>
              <input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
            </div>

            {/* Save Button */}
            <div className="form-actions">
              <button className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;