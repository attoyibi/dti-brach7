import Header from './Header'
import Footer from './Footer'
function App(){ //parent
  let isParagraph = true;
  let red = "red";
  //letak logika
  return(
    //letak tampilan
    <div>
      <Header/> 
      <h1 className='background-blue'>App Komponen</h1>
      <p style={{ display: 'none' }}>ini ada paragraf display none</p>

      {isParagraph ? <p>hilang jsx-nya ternary</p> : false}
      {isParagraph && <p>hilang <jsx-nya></jsx-nya></p>}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="text" />
      <input type="checkbox" name='' id='' />
      <button type="button">submit </button>
    </div>
    <Footer/>
  </div>
  );
}
export default App;