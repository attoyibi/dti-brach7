// tempat import
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
function App() {
    // tempat logika
    let name;
    let age;

    let list;
    let listObj;
    let listFruit;

    name = 'kiky';
    age = 22;
    let job = "Pekerja"
    list = ['Hi', 'Hola'];
    listFruit = ['apel', 'jeruk', 'mangga', 'durian'];
    listObj = {
        key: 'hii',
    };

    const products = [
        {
            id: 1,
            name: 'Laptop ASUS Vivobook',
            price: 8500000,
            category: 'Elektronik',
            inStock: true,
            rating: 4.5,
        },
        {
            id: 2,
            name: 'Kemeja Pria Lengan Panjang',
            price: 150000,
            category: 'Fashion',
            inStock: false,
            rating: 4.2,
        },
        {
            id: 3,
            name: 'Kopi Arabika 250gr',
            price: 75000,
            category: 'Minuman',
            inStock: true,
            rating: 4.8,
        },
    ];

    function hitungAngka() {
        if (age == 22) {
            listObj.key = 'holaaa';
        }
    }

    // hitungAngka();

    return (
        // tempat tampilan/render
        // harus ada 1 parent
        <div>
            <Header job={job} name={name} age={age} list={listFruit} products={products} />

            <ul>
                {listFruit.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <hr />
            <ol>
                {products.map((product, index) => (
                    <>
                        <li key={product.id}>{product.name}</li>
                        <p key={index}>{product.price}</p>
                    </>
                ))}
            </ol>

            <h1>{listObj.key}</h1>
            <h2>{list}</h2>
            {/* <h2>
        {() => {
          hitungAngka();
        }}
      </h2> */}
            <div className="alignItems">
                <h1 style={{ backgroundColor: 'green' }}>This is main app</h1>
                <h2 className="backgroundColor">This is secondary</h2>
            </div>
            <button type="button">submit</button>
            <Footer />
        </div>
    );
}

export default App;
