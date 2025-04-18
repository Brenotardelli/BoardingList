import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [desc, setDesc] = useState("");
  const [opt, setOpt] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = {
      id: Date.now(),
      description: desc,
      quantity: opt,
      packed: false,
    };

    onAddItems(newItem);
    setDesc("");
    setOpt(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do I need to pack this time?</h3>
      <select value={opt} onChange={(e) => setOpt(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Form;
