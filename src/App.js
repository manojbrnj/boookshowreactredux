import './App.css';
import { useEffect, useState } from 'react';
import CreateBook from './Components/CreateBook';
import MapList from './Components/MapList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const fetch = async () => {
    const res = await axios.get('http://localhost:3001/books');
    setBooks(res.data);
  };
  useEffect(() => {
    console.log('hi');
    fetch();
  }, []);
  const createBook = async (book) => {
    const response = await axios.post('http://localhost:3001/books', book);
    setBooks([...books, response.data]);
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
