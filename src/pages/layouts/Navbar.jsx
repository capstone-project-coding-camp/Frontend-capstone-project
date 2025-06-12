import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  FaUserCircle, 
  FaChevronDown, 
  FaChevronUp,
  FaShareAlt,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import { checkAuth, logout } from '../../services/auth';
import '../../styles/navbar.css';
import peduliGiziLogo from '../../assets/images/peduli-gizi-logo.png';

const Navbar = ({ transparent = false, hideAuthButton = false }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const isActive = (path) => {
    return window.location.pathname === path || 
           window.location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    setIsLoggedIn(checkAuth());
  }, []);

  const handleLogout = async () => {
    await logout(); // Gunakan fungsi logout dari service/auth.js
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (showDropdown) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showDropdown]);

  return (
    <nav className="auth-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            <img 
              src={peduliGiziLogo} 
              alt="Peduli Gizi" 
              className="navbar-logo"
            />
          </Link>
          
          <div className="navbar-menu">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Beranda
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              Tentang
            </Link>
            <Link 
              to="/edukasi" 
              className={`nav-link ${isActive('/edukasi') ? 'active' : ''}`}
            >
              Edukasi
            </Link>
            {isLoggedIn && (
              <>
                <Link 
                  to="/riwayat" 
                  className={`nav-link ${isActive('/riwayat') ? 'active' : ''}`}
                >
                  Riwayat
                </Link>
                <Link 
                  to="/PredictResult" 
                  className={`nav-link ${isActive('/PredictResult') ? 'active' : ''}`}
                >
                  Hasil Prediksi
                </Link>
                <Link 
                  to="/prediksi" 
                  className={`nav-link ${isActive('/prediksi') ? 'active' : ''}`}
                >
                  Prediksi
                </Link>
              </>
            )}
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Kontak
            </Link>
          </div>
        </div>
        
        <div className="navbar-auth">
          {isLoggedIn ? (
            <div className="user-dropdown-container">
              <div className="user-profile-toggle" onClick={toggleDropdown}>
                <FaUserCircle size={24} className="user-icon" />
                {showDropdown ? (
                  <FaChevronUp size={14} className="dropdown-arrow" />
                ) : (
                  <FaChevronDown size={14} className="dropdown-arrow" />
                )}
              </div>
              
              {showDropdown && (
                <div className="profile-dropdown-menu">
                <div className="dropdown-header">
                  <FaUserCircle size={40} />
                  <span>My Profile</span>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="/share" className="dropdown-item">
                  <FaShareAlt className="dropdown-icon" />
                  <span>Share & Grow</span>
                </Link>
                <Link to="/how-it-works" className="dropdown-item">
                  <FaQuestionCircle className="dropdown-icon" />
                  <span>How it works</span>
                </Link>
                <Link to="/profile" className="dropdown-item">
                  <FaCog className="dropdown-icon" />
                  <span>Account settings</span>
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={handleLogout}>
                  <FaSignOutAlt className="dropdown-icon" />
                  <span>Log out</span>
                </button>
              </div>
              )}
            </div>
          ) : (
            !hideAuthButton && (
              <Link to="/login" className="auth-link">
                Masuk
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
