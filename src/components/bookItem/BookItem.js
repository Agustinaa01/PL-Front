import { useState } from "react";
import BookCard from "../bookCard/BookCard";
import DateRead from "../dateRead/DateRead";
import "./BookItem.css";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  const [bookTitle, setBookTitle] = useState(title);
  const [bookAuthor, setBookAuthor] = useState(author);

  const clickChangeTitleHandler = () => {
    setBookTitle("Actualizado");
  };

  return (
    <BookCard>
      <h2> Titulo: {bookTitle}</h2>
      <h3>Autor: {author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
      <button onClick={clickChangeTitleHandler}>cambiar titulo</button>
    </BookCard>
  );
};

export default BookItem;
