import React, { useState } from "react";

const PackingList = ({ items, handleDeleteItem, handleToggleItem, handleClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  const [isModalOpen, setIsModalOpen] = useState(false);

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map(({ id, description, quantity, packed }) => (
          <li key={id}>
            <input type="checkbox" value={packed} onChange={() => handleToggleItem(id)} />
            <span style={packed ? { textDecorationLine: "line-through" } : {}}>
              {quantity} {description}
            </span>
            <button onClick={() => handleDeleteItem(id)} className="pack-btn">
              𝘅
            </button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => setIsModalOpen(true)}>Clear list</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to clear the list?</p>
            <div className="modal-buttons">
              <button
                onClick={() => {
                  handleClearList();
                  setIsModalOpen(false);
                }}
              >
                Yes
              </button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackingList;
