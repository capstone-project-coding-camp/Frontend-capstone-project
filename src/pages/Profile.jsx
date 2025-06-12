import React, { useState, useEffect } from 'react';
import Navbar from './layouts/Navbar';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaLock } from 'react-icons/fa';
import { getMe, updateProfile, changePassword } from '../services/api';
import { getAccessToken } from '../services/auth';
import '../styles/Profile.css';

const AccountSettings = () => {
  const [profile, setProfile] = useState({
    full_name: '',
    email: '',
    phone: '',
  });

  const [editFields, setEditFields] = useState({
    full_name: false,
    email: false,
    phone: false,
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [passwordEditMode, setPasswordEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getAccessToken();
        if (!token) throw new Error('Not authenticated');
        const response = await getMe();
        const userData = response?.user || response;
        setProfile(userData);
      } catch (err) {
        setError(err.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const enableField = (field) => {
    setEditFields(prev => ({ ...prev, [field]: true }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile(profile);
      setProfile(response.data);
      setSuccess('Profile updated successfully');
      setEditFields({ full_name: false, email: false, phone: false });
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      setError('New passwords do not match');
      return;
    }

    try {
      await changePassword({
        currentPassword: password.current,
        newPassword: password.new
      });
      setSuccess('Password changed successfully');
      setPassword({ current: '', new: '', confirm: '' });
      setPasswordEditMode(false);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to change password');
    }
  };

  if (loading) return <div className="profile-page">Loading...</div>;
  if (error) return <div className="profile-page">Error: {error}</div>;

  return (
    <div>
      <Navbar hideAuthButton={true} />
    <div className="profile-page">

      <div className="profile-container">
        <div className="profile-card">
          <div className="card-header">
            <h2>Personal Information</h2>
            <p>Manage your personal details</p>
          </div>

          <div className="card-body">
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleProfileSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label><FaUser className="input-icon" /> Full Name</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="full_name"
                    value={profile.full_name}
                    onChange={handleInputChange}
                    disabled={!editFields.full_name}
                    required
                  />
                  {!editFields.full_name && (
                    <button type="button" onClick={() => enableField('full_name')} className="edit-icon">✏️</button>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label><FaEnvelope className="input-icon" /> Email</label>
                <div className="input-with-icon">
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled={!editFields.email}
                    required
                  />
                  {!editFields.email && (
                    <button type="button" onClick={() => enableField('email')} className="edit-icon">✏️</button>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="form-group">
                <label><FaPhone className="input-icon" /> Phone Number</label>
                <div className="input-with-icon">
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    disabled={!editFields.phone}
                    required
                  />
                  {!editFields.phone && (
                    <button type="button" onClick={() => enableField('phone')} className="edit-icon">✏️</button>
                  )}
                </div>
              </div>

              {/* Submit button if any field is edited */}
              <div className="form-actions">
                {(editFields.full_name || editFields.email || editFields.phone) && (
                  <button type="submit" className="save-btn">Save Changes</button>
                )}
              </div>
            </form>

            {/* Password Section */}
            <div className="password-section">
              <h3>Password Settings</h3>
              {passwordEditMode ? (
                <form onSubmit={handlePasswordSubmit}>
                  <div className="form-group">
                    <label><FaLock className="input-icon" /> Current Password</label>
                    <input
                      type="password"
                      name="current"
                      value={password.current}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label><FaLock className="input-icon" /> New Password</label>
                    <input
                      type="password"
                      name="new"
                      value={password.new}
                      onChange={handlePasswordChange}
                      required
                      minLength="6"
                    />
                  </div>
                  <div className="form-group">
                    <label><FaLock className="input-icon" /> Confirm New Password</label>
                    <input
                      type="password"
                      name="confirm"
                      value={password.confirm}
                      onChange={handlePasswordChange}
                      required
                      minLength="6"
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="save-btn">Change Password</button>
                    <button 
                      type="button" 
                      className="cancel-btn"
                      onClick={() => setPasswordEditMode(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <button 
                  type="button" 
                  className="edit-btn"
                  onClick={() => setPasswordEditMode(true)}
                >
                  Change Password
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountSettings;
