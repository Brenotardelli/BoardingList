import React from "react";

const Stats = ({ items }) => {
  if (!items.length) return <p className="stats">Start to list your items.</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const perCent = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <p>{perCent === 100 ? "You got everything! Ready to go ✈️" : ` You have ${numItems} items on your list, and you already packed ${numPacked} (${perCent}%)`}</p>
    </footer>
  );
};

export default Stats;
