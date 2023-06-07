import React from 'react';
import { useState } from 'react';
export default function UpdateBook({ editBookById, book, handleEditClick }) {
  const { id, title } = book;
  const [text, setText] = useState(title);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    editBookById(id, text);
    console.log(text);
    handleEditClick();
  };
  return (
    <div className="update-book">
      <form onSubmit={handlesubmit}>
        <input type="text" value={text} onChange={handleChange} />
      </form>
    </div>
  );
}
