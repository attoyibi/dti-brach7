import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState("anisa");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("ini use effect selalu berjalan");
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("error di catch", error);
      });
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
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        name,
        setName,
        age,
        setAge,
        isShow,
        setIsShow,
        disabled,
        setDisabled,
        handleChangeName,
        handleChangeAge,
        handleClick,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
