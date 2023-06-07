import './App.css';
import { useState } from 'react';
import CreateBook from './Components/CreateBook';
import MapList from './Components/MapList';

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (book) => {
    setBooks([...books, book]);
  };
  // delete book

  const deleteBookById = (id) => {
    const deleted = books.filter((item, i) => id !== item.id);
    setBooks(deleted);
  };

  const editBookById = (id, title) => {
    const updated = books.map((item, i) => {
      if (item.id === id) {
        return { ...item, title: title };
      }
      return item;
    });
    console.log(updated);
    setBooks([...updated]);
  };
  return (
    <div className="App">
      {/* create Book */}
      <CreateBook createBook={createBook} books={books}></CreateBook>
      {/* bookList */}
      <MapList
        books={books}
        deleteBookById={deleteBookById}
        editBookById={editBookById}
      />
      {/* bookshow */}
    </div>
  );
}

export default App;
