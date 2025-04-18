import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];


const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map(({ id, description, quantity, packed }) => (
          <li key={id}>
            <span style={packed ? { textDecorationLine: "line-through" } : {}}>
              {quantity} {description}
            </span>
            <button className="pack-btn">𝘅</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
