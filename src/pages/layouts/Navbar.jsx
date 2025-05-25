import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { checkAuth, logout } from '../../services/auth';
import '../../styles/navbar.css';
import peduliGiziLogo from '../../assets/images/peduli-gizi-logo.png';

const Navbar = ({ hideAuthButton = false }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setIsLoggedIn(checkAuth());
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
            <Link to="/" className="nav-link">Beranda</Link>
            <Link to="/tentang" className="nav-link">Tentang</Link>
            <Link to="/edukasi" className="nav-link">Edukasi</Link>
            {isLoggedIn && (
              <Link to="/prediksi" className="nav-link">Prediksi</Link>
            )}
            <Link to="/kontak" className="nav-link">Kontak</Link>
          </div>
        </div>
        
        <div className="navbar-auth">
          {isLoggedIn ? (
            <div className="user-dropdown">
              <button className="user-icon" onClick={toggleDropdown}>
                <FaUserCircle size={24} />
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/profil" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    Profil
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            hideAuthButton && (
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