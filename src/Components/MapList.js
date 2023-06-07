import React from 'react';
import BookShow from './BookShow';

export default function MapList({ books, deleteBookById, editBookById }) {
  return (
    <div className="map-list">
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
