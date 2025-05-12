import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
function App() {
  //parent
  //letak logika, kita bisa menulis semua terkait JavaScript
  let isParagraph = true;
  let red = "red";
  let helloWord = "Halo ini App";
  let name = "Anisa";
  let age = 23;
  let job = "Teacher"
  let listMentee = ["muchson", "rizky", "anisa"];
  let listMenteeObj = {
    key: "hello",
  };
  console.log(listMenteeObj);
  let listFruit = ["pepaya", "semangka", "pisang", "jambu"];

  const products = [
    {
      id: 1,
      name: "Laptop ASUS Vivobook",
      price: 8500000,
      category: "Elektronik",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Kemeja Pria Lengan Panjang",
      price: 150000,
      category: "Fashion",
      inStock: false,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Kopi Arabika 250gr",
      price: 75000,
      category: "Minuman",
      inStock: true,
      rating: 4.8,
    },
  ];

  //kita bisa menulis if
  if (name == "Anisa") {
    helloWord = helloWord + name;
    console.log(helloWord + name);
  }

  function umurSaya() {
    if (age == 23) {
      listMenteeObj.key = 23;
    }
  }

  umurSaya();

  return (
    //letak tampilan
    <div>
      <Header name={name} age={age} list={listFruit} products={products} job={job}  /> 
      <ul>
        {listFruit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <ol>
        {products.map((product) => (
          <>
            <li key={product.id}>{product.name}</li>
            <p>{product.price}</p>
          </>
        ))}
      </ol>
      <h1 className="header-container">{helloWord}</h1>
      <h2 className="header-container">{listMentee[0]}</h2>
      <h2 className="header-container">{listMenteeObj.key}</h2>
      <p style={{ display: "none" }}>ini ada paragraf display none</p>
      {isParagraph ? <p>hilang jsx-nya ternary</p> : false}
      {isParagraph && <p>hilang jsx-nya</p>}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" />
        <input type="checkbox" name="" id="" />
        <button type="button">submit </button>
      </div>
      <Footer />
    </div>
  );
}
export default App;
