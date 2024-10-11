import { useState } from "react";
import './design.css';

function UpdateItem({ items, setItems, setMessage }) {
    const [id, setId] = useState('');
    const [updateField, setUpdateField] = useState('');
    const [newValue, setNewValue] = useState('');

    const handleUpdate = () => {
        const itemIndex = items.findIndex(item => item.id === id);
        if (itemIndex === -1) {
            setMessage('Item not found!');
            return;
        }
        const updatedItems = [...items];
        updatedItems[itemIndex][updateField] = newValue;
        setItems(updatedItems);
        setMessage(`Item updated successfully!`);
    };

    return (
        <div className="add-item-container">
            <h3>Update Item</h3>
            <div className="form-group">
                <label>Item ID</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Field to Update</label>
                <select value={updateField} onChange={(e) => setUpdateField(e.target.value)}>
                    <option value="">Select Field</option>
                    <option value="qty">Quantity</option>
                    <option value="price">Price</option>
                </select>
            </div>
            <div className="form-group">
                <label>New Value</label>
                <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
            </div>
            <button onClick={handleUpdate}>Update Item</button>
        </div>
    );
}

export default UpdateItem;