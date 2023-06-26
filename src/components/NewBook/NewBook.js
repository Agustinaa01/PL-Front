import React from "react";
import BookForm from "../BookForm/BookForm";
import "./NewBook.css";

const NewBook = ({ onBookAdded }) => {
  return (
    <div className="new-book">
      <BookForm onBookAdded={onBookAdded} />
    </div>
  );
};

export default NewBook;
