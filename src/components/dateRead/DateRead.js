import "./DateRead.css";

const DateRead = ({ dateRead }) => {
  const date = new Date(dateRead);
  const year = date.getFullYear();
  const month = date.toLocaleString("es-AR", { month: "long" });
  const day = date.toLocaleString("es-AR", { day: "2-digit" });

  return (
    <div className="container">
      <div className="dateItem">{day}</div>
      <div className="dateItem">{month}</div>
      <div className="dateItem">{year}</div>
    </div>
  );
};

export default DateRead;
