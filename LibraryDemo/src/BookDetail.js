import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function BookDetail() {
  let params = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch("https://630ecc12498924524a7fbab3.mockapi.io/books/" + params.id, {
      method: "GET"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBook(res);
      });
  }, []);
  return (
    <>
      <table
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/004/575/494/small/3d-gray-background-product-display-podium-scene-with-leaf-geometric-platform-grey-background-3d-render-with-podium-stand-to-show-cosmetic-product-stage-showcase-on-pedestal-display-white-vector.jpg')",
          width: "50%",
          height: "50%",
          border: "5px solid black"
        }}
      >
        <tr>
          <td style={{ color: "blue", fontWeight: "bold", fontSize: "1.5em" }}>
            BookTitle:
          </td>
          <td
            style={{ color: "navy", fontSize: "1.5em", fontFamily: "initial" }}
          >
            {book.BookTitle}
          </td>
        </tr>

        <tr>
          <td
            style={{
              backgroundSize: "50%",
              marginRight: "50%",
              color: "blue",
              fontWeight: "bold",
              fontSize: "1.5em"
            }}
          >
            BookImage:
          </td>
          <td
            style={{ color: "navy", fontSize: "1.5em", fontFamily: "initial" }}
          >
            <img src={book.BookImage} />
          </td>
        </tr>

        <tr>
          <td style={{ color: "blue", fontWeight: "bold", fontSize: "1.5em" }}>
            BookNoOfPages:
          </td>
          <td
            style={{ color: "navy", fontSize: "1.5em", fontFamily: "initial" }}
          >
            {book.BookNoOfPages}
          </td>
        </tr>
        <tr>
          <td style={{ color: "blue", fontWeight: "bold", fontSize: "1.5em" }}>
            BookDescription:
          </td>
          <td
            style={{ color: "navy", fontSize: "1.5em", fontFamily: "initial" }}
          >
            {book.BookDescription}
          </td>
        </tr>
        <tr>
          <td style={{ color: "blue", fontWeight: "bold", fontSize: "1.5em" }}>
            BookAuthor:
          </td>
          <td
            style={{ color: "navy", fontSize: "1.5em", fontFamily: "initial" }}
          >
            {book.BookAuthor}
          </td>
        </tr>

        <tr>
          <td style={{ color: "blue", fontWeight: "bold", fontSize: "1.5em" }}>
            BookPrice:
          </td>
          <td
            style={{ color: "navy", fontSize: "1.5em", fontFamily: "initial" }}
          >
            {book.BookPrice}
          </td>
        </tr>

        <tr>
          <td>
            <button
              style={{
                color: " white",
                backgroundColor: "blue",
                borderRadius: "30px",
                width: "85px",
                border: "2px solid black"
              }}
              onClick={() => {
                fetch(
                  "https://630ecc12498924524a7fbab3.mockapi.io/books/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/books");
                });
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              style={{
                color: " white",
                backgroundColor: "blue",
                borderRadius: "30px",
                width: "85px",
                border: "2px solid black"
              }}
              onClick={() => {
                navigate("/book/edit/" + params.id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default BookDetail;
