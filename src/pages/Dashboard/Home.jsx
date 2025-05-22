import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">Welcome to Dashboard</h1>
          <p className="lead">
            You are logged in! This is your dashboard page.
          </p>
          <div className="mt-4">
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login Page
            </Link>
            <Link to="/register" className="btn btn-outline-secondary">
              Register Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}