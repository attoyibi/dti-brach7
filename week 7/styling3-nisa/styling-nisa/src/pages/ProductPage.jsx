import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Products() {
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  console.log(id);
  // tahap mounting
  useEffect(() => {
    //disinilah tempat logikanya nanti
    // biasanya menjadi tempat fetching data
    axios
      .get("https://dummyjson.com/products/" + id)
      .then((respond) => {
        //tempat logic ketika berhasil
        console.log(respond.data);
        setProducts([respond.data]);
      })
      .catch
      // tempat logic ketaka gagal
      ();
    console.log("ini use effect tahap mounting");
  }, [id]);

  function handleDelete(productId) {
    console.log("Product ID", productId);
    axios
      .delete("https://dummyjson.com/products/" + id)
      .then((respond) => {
        console.log("berhasil di hapus :", respond);
        const updateProduct = products.filter((product) => product.id !== productId);
        setProducts(updatedProduct);
        alert("produk berhasil di hapus");
        //bisa di refresh halaman
      })
      .catch((error) => {
        // logika ketika salah atau error
        console.log("Gagal di hapus :", respond);
      });
  }

  return (
    <div>
      Products - List Product :{" "}
      {products.map((product, index) => (
        <>
          <div style={{ border: "solid 2px gray", margin: "2px" }}>
            <div>Product ID : {product.id}</div>
            <div>Product Title : {product.title}</div>
            <div>Description : {product.description}</div>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        </>
      ))}
    </div>
  );
}
