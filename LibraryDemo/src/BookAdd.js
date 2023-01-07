import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Books from "./Books";

export default function BookAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch("https://630ecc12498924524a7fbab3.mockapi.io/books/" + params.id, {
        method: "GET"
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>Enter BookTitle</td>
          <td>:</td>
          <td>
            <input
              value={data.BookTitle}
              onChange={(e) => {
                setData({ ...data, BookTitle: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter BookNoOfPages</td>
          <td>:</td>
          <td>
            <input
              value={data.BookNoOfPages}
              onChange={(e) => {
                setData({ ...data, BookNoOfPages: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter BookDescription</td>
          <td>:</td>
          <td>
            <input
              value={data.BookDescription}
              onChange={(e) => {
                setData({ ...data, BookDescription: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter BookAuthor</td>
          <td>:</td>
          <td>
            <input
              value={data.BookAuthor}
              onChange={(e) => {
                setData({ ...data, BookAuthor: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter BookPrice</td>
          <td>:</td>
          <td>
            <input
              value={data.BookPrice}
              onChange={(e) => {
                setData({ ...data, BookPrice: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter BookImage</td>
          <td>:</td>
          <td>
            <input
              value={data.BookImage}
              onChange={(e) => {
                setData({ ...data, BookImage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <button
              style={{
                color: " white",
                backgroundColor: "blue",
                borderRadius: "30px",
                width: "85px",
                border: "2px solid black"
              }}
              onClick={() => {
                if (params.id > 0) {
                } else {
                  fetch(
                    "https://630ecc12498924524a7fbab3.mockapi.io/books" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/books");
                  });
                }
                fetch("https://630ecc12498924524a7fbab3.mockapi.io/books", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then(() => {
                  navigate("/books");
                });
              }}
            >
              {params.id > 0 && "Edit"}
              {!(params.id > 0) && "Add"}
              Book
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
