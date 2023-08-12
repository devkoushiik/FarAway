import { useState } from "react";

// form component
const Form = ({ onAddItems }) => {
  // states
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };

    console.log(newItems);

    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ? </h3>
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
