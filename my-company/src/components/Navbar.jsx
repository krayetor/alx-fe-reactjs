import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        backgroundColor: '#333',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        padding: '5px 10px',
        borderRadius: '5px',
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/services" style={linkStyle}>Services</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
    );
}

export default Navbar;