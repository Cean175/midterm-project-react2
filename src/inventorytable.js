import React, { useState } from 'react';
import './design.css';

function InventoryTable({ items }) {
    const [searchId, setSearchId] = useState(''); 
    const [sortedItems, setSortedItems] = useState(items); 
    const [sortBy, setSortBy] = useState(''); 
    const [sortOrder, setSortOrder] = useState('asc'); 
    const [lowStockItems, setLowStockItems] = useState([]); 

    
    const handleSearch = () => {
        const item = items.find((item) => item.id === searchId);
        if (item) {
            setSortedItems([item]); 
        } else {
            alert('Item not found!');
            setSortedItems(items); 
        }
    };

    
    const handleSort = () => {
        let sorted = [...items];
        if (sortBy === 'quantity') {
            sorted = sorted.sort((a, b) => (sortOrder === 'asc' ? a.qty - b.qty : b.qty - a.qty));
        } else if (sortBy === 'price') {
            sorted = sorted.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
        }
        setSortedItems(sorted); 
    };

   
    const handleLowStock = () => {
        const lowStock = items.filter((item) => item.qty <= 5);
        setLowStockItems(lowStock);
    };

    return (
        <div className="inventory-table-container">
            <h3>Current Inventory</h3>

          
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Search by Item ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

           
            <div className="form-group">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="quantity">Quantity</option>
                    <option value="price">Price</option>
                </select>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <button onClick={handleSort}>Sort</button>
            </div>

            
            <table className="inventory-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

          
            <div className="form-group">
                <button onClick={handleLowStock}>Show Low Stock Items</button>
            </div>

            {lowStockItems.length > 0 && (
                <table className="inventory-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lowStockItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default InventoryTable;