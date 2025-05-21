import React, { useState, useEffect, useActionState } from 'react';
import axios from 'axios';

export default function BodyRight() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((respons) => {
        console.log(respons.data.products);
        setProducts(respons.data.products);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <p>Contoh Penggunaan API</p>
      List Product :{' '}
      {products.map((product, index) => (
        <div style={{ border: 'solid 2px', margin: '5px' }}>
          <div>Product Title : {product.title}</div>
          <div>Description : {product.description}</div>
        </div>
      ))}
    </div>
  );
}
