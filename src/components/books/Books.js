import BookItem from "../bookItem/BookItem";

const Books = ({ books, year }) => {
  const booksMapped =
    year === ""
      ? books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            pageCount={book.pageCount}
            dateRead={book.dateRead}
          />
        ))
      : books
          .filter((book) => year === book.dateRead.getFullYear().toString())
          .map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              author={book.author}
              pageCount={book.pageCount}
              dateRead={book.dateRead}
            />
          ));

  return (
    <div className="books">
      {booksMapped.length === 0 ? (
        <h2>No hay Lecturas disponibles para el año {year}</h2>
      ) : (
        booksMapped
      )}
    </div>
  );
};

export default Books;
