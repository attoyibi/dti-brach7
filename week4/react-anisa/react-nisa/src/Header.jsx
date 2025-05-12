<<<<<<< HEAD
import './assets/css/header.css'
=======
import "./assets/css/header.css";
>>>>>>> 7e6c7473ff6e27181ec6ea87b593fdb1b22cc28c

export default function Header(props) {
  let {age, job, name, products, list} = props
  console.log("ini adalah props : ", props.products[0].name);
  return (
    <div>
<<<<<<< HEAD
      <h1>Header {props.name}</h1>
=======
      <h1 className="background-blue header-container">Header {props.name}</h1>
      <p>tampilan : {props.products[0].name}</p>
      <p>tampilan : {age}</p>
      {/* <p>tampilan : {name}</p>
      <p>tampilan : {job}</p> */}
      <h1 className="background-blue header-container">Umur {props.age}</h1>
      <h1 className="background-blue header-container">Ini Buah {props.list[0]}</h1>
      <>
        <ol>
          {props.list.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ol>

        <ul>
          {props.products.map((product, index) => (
            <li key={index}>{product.price}</li> 
          ))}
        </ul>

        <ul>
          {props.products.map((product, index) => (
            <li key={index}>{product.category}</li>
          ))}
        </ul>
      </>
>>>>>>> 7e6c7473ff6e27181ec6ea87b593fdb1b22cc28c
    </div>
  );
}
