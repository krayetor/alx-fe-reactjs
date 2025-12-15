import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Profile Dashboard (Protected)</h2>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      
      {/* The nested route content will appear here */}
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f3f4f5', color: 'black' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;