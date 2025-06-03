import { useState, useContext } from "react";
import { CountContext } from "./context/CountContext.jsx";
import { NameContext } from "./context/NameContext.jsx"; // Tambahkan ini

function App() {
  const { count, setCount } = useContext(CountContext);
  const { name, setName } = useContext(NameContext);

  const [inputNama, setInputNama] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputNama);
  };
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={inputNama}
          onChange={(e) => setInputNama(e.target.value)}
        />
        <button type="submit">Tampilkan Nama</button>
      </form>
      {name && <p>Nama yang diinput: {name}</p>}
    </>
  );
}
export default App;