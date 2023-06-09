import React, { useContext, useEffect } from 'react';
import BookShow from './BookShow';
import boookContext from '../Context/bookcontext';
export default function MapList({ books, deleteBookById, editBookById }) {
  const { count, increment } = useContext(boookContext);
  const handleClick = () => {
    increment();
  };
  return (
    <div className="map-list" style={{ color: '#000' }}>
      <button onClick={handleClick}>count</button>
      {count}
      {books.map((book, i) => {
        return (
          <BookShow
            book={book}
            key={book.id}
            deleteBookById={deleteBookById}
            editBookById={editBookById}
          ></BookShow>
        );
      })}
    </div>
  );
}
