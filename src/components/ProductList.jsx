import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const handleAddToCart = (productId) => {
    const quantity = 1;
    dispatch(addToCart({ productId, quantity }));
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>Price: ${product.price}</h4>
            <h4>Stock: {product.stock}</h4>
            <button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
