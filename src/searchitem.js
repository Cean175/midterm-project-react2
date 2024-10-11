import { useState } from "react";
import './design.css';

function SearchItem({ items }) {
  const [searchId, setSearchId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');


  const handleSearch = () => {
    const item = items.find(item => item.id === searchId);
    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }
  };

  return (
    <div>
      <h3>Search Item by ID</h3>
      <input
        type="text"
        placeholder="Enter Item ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {message && <p>{message}</p>}

      {foundItem && (
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
            <tr>
              <td>{foundItem.id}</td>
              <td>{foundItem.name}</td>
              <td>{foundItem.qty}</td>
              <td>{foundItem.price}</td>
              <td>{foundItem.category}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchItem;