import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

// Simple Home Component
const Home = () => (
  <div style={{ padding: '20px' }}>
    <h2>Home Page</h2>
    <p>Welcome to the public home page.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Navigation Menu */}
        <nav style={{ padding: '20px', backgroundColor: '#f4f4f4', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/profile" style={{ marginRight: '15px' }}>Profile (Protected)</Link>
          <Link to="/blog/1" style={{ marginRight: '15px' }}>Blog Post 1</Link>
          <Link to="/blog/2">Blog Post 2</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Route:
            Note the "*" in "/profile/*". This tells React Router that
            the Profile component has its own nested routes inside it.
          */}
          <Route 
            path="/profile/*" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />

          {/* Dynamic Route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;