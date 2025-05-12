export default function Footer(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>Footer</h1>
      <ol>
        {props.products.map((product, index) => (
          <div>
            <li key={index}>{product.name}</li>
            <p key={index}>{product.price}</p>
            <p key={index}>{product.category}</p>
          </div>
        ))}
      </ol>
    </div>
  );
}
