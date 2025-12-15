import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

// Simple components for testing
const Home = () => <h2>Home Page (Public)</h2>;
const ProfileDetails = () => <p>Here are the user details.</p>;
const ProfileSettings = () => <p>Change your settings here.</p>;

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        {/* Navigation Menu */}
        <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/profile" style={{ marginRight: '15px' }}>Profile (Protected)</Link>
          <Link to="/blog/1" style={{ marginRight: '15px' }}>Blog Post 1</Link>
          <Link to="/blog/2">Blog Post 2</Link>
        </nav>

        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Route with Nested Routes */}
          <Route 
            path="/profile/*" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* These routes are relative to /profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;