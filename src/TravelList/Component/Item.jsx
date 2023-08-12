// item component
const Item = ({ item, onDelete, onUpdate }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.paked}
        onChange={() => onUpdate(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};
export default Item;
