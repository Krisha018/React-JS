import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://630ecc12498924524a7fbab3.mockapi.io/books")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBooks(res);
      });
  }, []);

  const formatedBooks = books.map((bok) => {
    return (
      <>
        <img src={bok.BookImage} alt="asdf" height="0%" width="20%" />
        <tr>
          <Link to={"../book/" + bok.id}>
            <button
              style={{
                color: "rgb(7, 6, 6)",
                backgroundColor: "rgb(74, 139, 165)",
                border: "4px solid black",
                borderRadius: "8px"
              }}
            >
              {bok.BookTitle}
            </button>
            <br />
            <br />
          </Link>
        </tr>
      </>
    );
  });
  return formatedBooks;
}
export default Books;
