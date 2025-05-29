import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProductContext } from "./context/ProductContext";

export function BodyLeft() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [isShow, setIsShow] = useState(true);
  const [disabled, setDisbaled] = useState(true);
  // const [products, setProducts] = useState();

  const { products } = useContext(ProductContext);
  useEffect(() => {
    console.log("ini use effect selalu berjalan");
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((respond) => {
        console.log(respond.data.products);
        setProducts(respond.data.products);
      })
      .catch(() => {});
    // console.error("error di catch", error);
  }, []);

  function handleChangeName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }
  function handleChangeAge(e) {
    setAge(e.target.value);
    console.log(e.target.value);
  }
  function handleClick() {
    setIsShow(!isShow);
  }
  return (
    <div>
      <h1>Contoh Penggunaan "Lifecycle" menggunakan Use Effect</h1>
      <div>
        name :
        <input type="text" onChange={handleChangeName} />
        age :
        <input type="text" onChange={handleChangeAge} />
        <button type="button" disabled={disabled}>
          Submit
        </button>
      </div>
      <button type="button" onClick={handleClick}>
        Hidden/Show
      </button>
      {/* {isShow && <Timer />} */}
      <hr />
      {/* List Product :{" "}
      {products.map((product, index) => (
        <>
          <div style={{ border: "solid 2px gray", margin: "2px" }}>
            <div>Product Title : {product.title}</div>
            <div>Desccription : {product.description}</div>
          </div>
        </>
      ))}
      Ini Product Title : {products.map} */}
    </div>
  );
}
