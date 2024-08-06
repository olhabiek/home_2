function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>Список покупок пуст</p>;
  }
  return (
    <ul>
      {items.map((item, ind) => {
        return <li key={ind}>{item}</li>;
      })}
    </ul>
  );
}

export default ShoppingList;
