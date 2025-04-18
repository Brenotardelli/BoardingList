import { useState } from "react";
import React from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  );
};
``;
export default App;
