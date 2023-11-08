import "./App.css";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

function App() {
  return (
    <>
      <div>
        <h1>Product List</h1>
        <ProductList />
        <h1>Shopping Cart</h1>
        <CartPage />
      </div>
    </>
  );
}

export default App;
