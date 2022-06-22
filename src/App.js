import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
function App() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Products />
      <Navbar />
    </div>
  );
}

export default App;
