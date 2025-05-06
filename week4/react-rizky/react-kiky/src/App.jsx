// tempat import
import Header from './Header';
import Footer from './Footer';

function App() {
  // tempat logika
  return (
    // tempat tampilan/render
    // harus ada 1 parent
    <div>
      <Header />
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
