import { useContext } from 'react';
import { BookContext } from './context/BookContext';

function App() {
  const { books } = useContext(BookContext); // <-- fix here
  return (
    <div>
      <div>
        Book dari context : {books.map((book) => (
          <div key={book.id}>
            <h1>{book.title}</h1>
            <p>{book.price}</p>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
