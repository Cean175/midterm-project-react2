import { useState } from "react";
import './design.css';

function RemoveItem({ items, setItems, setMessage }) {
    const [id, setId] = useState('');

    const removeItem = () => {
        const itemIndex = items.findIndex(item => item.id === id);
        if (itemIndex === -1) {
            setMessage('Item not found!');
            return;
        }
        const removedItem = items[itemIndex];
        setItems(items.filter(item => item.id !== id));
        setMessage(`Item "${removedItem.name}" has been removed from the inventory.`);
    };

    return (
        <div className="add-item-container">
            <h3>Remove Item</h3>
            <div className="form-group">
                <label>Item ID</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <button onClick={removeItem}>Remove Item</button>
        </div>
    );
}

export default RemoveItem;