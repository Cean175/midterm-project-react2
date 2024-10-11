import { Link } from 'react-router-dom'; // Make sure to import Link
import './design.css';
function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/add">Add Item</Link></li>
                <li><Link to="/update">Update Item</Link></li>
                <li><Link to="/remove">Remove Item</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;