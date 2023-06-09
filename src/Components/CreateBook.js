import React from 'react';
import { useState } from 'react';

export default function CreateBook({ book, createBook }) {
  const [title, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    //let id = Math.floor(Math.random() * 100);
    createBook({ title: title });
  };

  return (
    <div className="create-book">
      <input type="text" value={title} onChange={handleChange} />
      <button className="btn-create" onClick={handleClick}>
        Create!
      </button>
    </div>
  );
}
