import "./assets/css/header.css";

export default function Header(props) {
  return (
    <div>
      <h1 className="background-blue header-container">Header {props.name}</h1>
      <h1 className="background-blue header-container">Umur {props.age}</h1>
      <h1 className="background-blue header-container">Ini Buah {props.listFruit[0]}</h1>
    </div>
  );
}
