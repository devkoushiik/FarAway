import { useState } from "react";
import "./index.css";
import Form from "./Component/Form";
import Logo from "./Component/Logo";
import PackingList from "./Component/PackingList";
import { Stats } from "./Component/Stats";

const TravelList = () => {
  const [items, setItems] = useState([]);

  // handle add item
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  // handle delete
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // updating function
  const handleUpdateItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // clearing all lists
  const onSetItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onUpdate={handleUpdateItem}
        onDelete={handleDeleteItem}
        items={items}
        onSetItems={onSetItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default TravelList;
