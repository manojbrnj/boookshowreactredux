import React from 'react';
import { useState } from 'react';
import UpdateBook from './UpdateBook';
export default function BookShow({ book, deleteBookById, editBookById }) {
  const [edit, setEdit] = useState(true);

  const handleClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    //  editBookById(book.id);
    setEdit(!edit);
  };

  return (
    <div className="book-show">
      <div className="show-container">
        <div className="show">
          {edit ? (
            <h1>{book.title}</h1>
          ) : (
            <UpdateBook
              editBookById={editBookById}
              book={book}
              handleEditClick={handleEditClick}
            ></UpdateBook>
          )}

          <img src={`https://picsum.photos/id/${book.id}/300/200`} alt="" />
          <p>BookId:{book.id}</p>
        </div>
        <button className="btn-delete" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button className="btn-edit" onClick={handleEditClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
