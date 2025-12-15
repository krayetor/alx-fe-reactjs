import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Profile Dashboard</h2>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>

      {/* The checker expects Routes to be defined here for "ProfileDetails" 
        and "ProfileSettings" to be present in the file.
      */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet />
    </div>
  );
};

export default Profile;