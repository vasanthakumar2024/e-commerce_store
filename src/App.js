import React, { useState } from "react";
import "./App.css";
import tshirt from "./img/1.jpg";
import watch from "./img/2.jpg";
import shoes from "./img/3.jpg";

const products = [
  { id: 1, name: "tshirt", price: 40, image: tshirt },
  { id: 2, name: "watch", price: 20, image: watch },
  { id: 3, name: "shoes", price: 10, image: shoes },
];

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };

const checkout = () => {
  alert("Thank you for your parchase!");
  setCart([]);
};

return (
  <div className="App">
    <header className="App-header">
      <h1>E-Commerce Store</h1>
    </header>
    <section className="App-products">
      {products.map((product) => (
        <div key={product.id} className="App-product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product.id)}>Add to cart</button>
        </div>
      ))}
    </section>
    <section className="App-cart">
      <h2>Shopping cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}-${item.price}</li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
    </section>
  </div>
);
}
export default App;
