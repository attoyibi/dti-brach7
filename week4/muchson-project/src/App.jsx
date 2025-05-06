// letak import
import Header from './Header'
import Footer from './Footer'

function App() {
    // letak logika
    let isParagraph = true;
    let red = "red";
    return (
        // letak tampilan
        <div>
            <Header />
            <h1 className='app-container'>Halo ini App</h1>
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
