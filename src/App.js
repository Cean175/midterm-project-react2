
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import AddItem from './AddProduct';
import UpdateItem from './updateitem';
import RemoveItem from './removeitem';
import InventoryTable from './inventorytable';
import './design.css';
import SearchItem from './searchitem';



function App() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  const clearInputs = () => {
    
  };

  return (
    <Router>
      <div>
        
        <nav className="navbar">
          <ul>
            <li><Link to="/add">Add Item</Link></li>
            <li><Link to="/update">Update Item</Link></li>
            <li><Link to="/remove">Remove Item</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
          </ul>
        </nav>

        
        <h4>{message}</h4>

    
        <Routes>
          <Route
            path="/add"
            element={<AddItem items={items} setItems={setItems} setMessage={setMessage} clearInputs={clearInputs} />}
          />
          <Route
            path="/update"
            element={<UpdateItem items={items} setItems={setItems} setMessage={setMessage} />}
          />
          <Route
            path="/remove"
            element={<RemoveItem items={items} setItems={setItems} setMessage={setMessage} />}
          />
          <Route
            path="/inventory"
            element={<InventoryTable items={items} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
