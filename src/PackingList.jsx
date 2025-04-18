import React from "react";

const PackingList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map(({ id, description, quantity, packed }) => (
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
    </div>
  );
};

export default PackingList;
