import "./App.css";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStarus";

function App() {
  let username = "Alice";
  const products = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 456, status: "обработан" },
    { orderId: 789, status: "доставлен" },
  ];
  return (
    <>
      <Greeting name={username} />
      <h3>Список покупок:</h3>
      <ShoppingList items={products} />
      <h3>Order list:</h3>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </>
  );
}

export default App;
