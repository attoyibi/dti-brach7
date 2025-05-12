// letak import
import Header from './Header'
import Footer from './Footer'
import Card from './Card';
function App() {
    // letak logika. kita bisa menulis semua terkai javascript
    let isParagraph = true;
    let red = "red";
    let helloWord = "Halo ini"
    let name = "Muchson"
    let age = 12;
    let listMentee = ["muchson", "rizky"]
    let listMenteeObj = {
        key: "value"
    }

    // kita bisa menulis IF
    if (name == 'Muchson') {
        helloWord = helloWord + name;
        console.log(helloWord + name)
    }


    return (
        // letak tampilan
        <div>
            <Header />
            <h1 className='app-container'>{listMentee}</h1>
            <p style={{ display: 'none' }}>ini paragraf display none</p>
            {isParagraph ? <p>hilang jsx-nya ternary</p> : false}
            {isParagraph && <p>hilang jsx-nya &&</p>}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="text" />
                <input type="checkbox" name="" id="" />
                <button type="button">submit</button>
            </div>
            <Footer />
        </div>
    );
}
export default App
