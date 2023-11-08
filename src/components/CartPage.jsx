import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartSlice";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    const cartItem = cartItems.find((item) => item.productId === productId);
    const product = products.find((product) => product.id === productId);

    if (product && product.stock > cartItem.quantity) {
      dispatch(addToCart({ productId, quantity: 1 }));
    }
  };

  const handleDecrement = (productId) => {
    const cartItem = cartItems.find((item) => item.productId === productId);

    if (cartItem && cartItem.quantity > 1) {
      dispatch(removeFromCart({ productId, quantity: 1 }));
    }
  };

  const calculateSubtotal = (productId) => {
    const cartItem = cartItems.find((item) => item.productId === productId);
    const product = products.find((product) => product.id === productId);

    if (cartItem && product) {
      return cartItem.quantity * product.price;
    }

    return 0;
  };

  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          const product = products.find(
            (product) => product.id === cartItem.productId
          );

          return (
            <div key={cartItem.productId} className="cart-item">
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {cartItem.quantity}</p>
                <p>Stock: {product.stock}</p>
                <button onClick={() => handleDecrement(cartItem.productId)}>
                  -
                </button>
                Quantity
                <button onClick={() => handleIncrement(cartItem.productId)}>
                  +
                </button>
                <h4>Subtotal: ${calculateSubtotal(cartItem.productId)}</h4>
                <h4>TOTAL: ${calculateSubtotal(cartItem.productId)}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
