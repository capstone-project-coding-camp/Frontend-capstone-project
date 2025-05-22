import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import peduliGiziLogo from '../../assets/images/peduli-gizi-logo.png'; // Sesuaikan path

const Navbar = ({ hideAuthButton = false }) => {
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
            <Link to="/kontak" className="nav-link">Kontak</Link>
          </div>
        </div>
        
        {hideAuthButton && (
          <div className="navbar-auth">
            <Link to="/login" className="auth-link">
              Masuk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;