import { useState } from "react";
import './design.css';

function AddItem({ items, setItems, setMessage, clearInputs }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
  
    const addItem = () => {
      
      const idExists = items.some((item) => item.id === id);
  
      if (idExists) {
        setMessage('ID already exists! Please enter a unique ID.');
        return; 
      }
  
      
      if (id && name && qty > 0 && price > 0 && category) {
        const newItem = { id, name, qty, price, category };
        setItems([...items, newItem]); 
        setMessage(`Item "${name}" added successfully!`);
        clearInputs(); 
      } else {
        setMessage('Please fill all fields correctly.'); 
      }
    };
  
    return (
      <div className="add-item-container">
        <h3>Add Item</h3>
        <div className="form-group">
          <label htmlFor="itemId">Item ID</label>
          <input
            type="text"
            id="itemId"
            placeholder="Item ID"
            value={id}
            onChange={(e) => setId(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemQty">Quantity</label>
          <input
            type="number"
            id="itemQty"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemPrice">Price</label>
          <input
            type="number"
            id="itemPrice"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemCategory">Category</label>
          <select
            id="itemCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Groceries">Groceries</option>
          </select>
        </div>
        <button onClick={addItem}>Add Item</button> 
      </div>
    );
  }
  
  export default AddItem;
  