import { Navigate } from 'react-router-dom';

// Simulate authentication status
const useAuth = () => {
  // Set this to false to test the redirect
  const user = { loggedIn: true }; 
  return user && user.loggedIn;
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;