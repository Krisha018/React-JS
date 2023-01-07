import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Faculties from "./Faculties";

export default function FacultyAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://630ecc12498924524a7fbab3.mockapi.io/faculties/" + params.id,
        {
          method: "GET"
        }
      )
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
          <td>Enter Facultyname</td>
          <td>:</td>
          <td>
            <input
              value={data.Facultyname}
              onChange={(e) => {
                setData({ ...data, Facultyname: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter FacultyImage</td>
          <td>:</td>
          <td>
            <input
              value={data.FacultyImage}
              onChange={(e) => {
                setData({ ...data, FacultyImage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter FacultyMobile</td>
          <td>:</td>
          <td>
            <input
              value={data.FacultyMobile}
              onChange={(e) => {
                setData({ ...data, FacultyMobile: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter FacultyEmail</td>
          <td>:</td>
          <td>
            <input
              value={data.FacultyEmail}
              onChange={(e) => {
                setData({ ...data, FacultyEmail: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <button
              onClick={() => {
                if (params.id > 0) {
                } else {
                  fetch(
                    "https://630ecc12498924524a7fbab3.mockapi.io/faculties" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/faculties");
                  });
                }
                fetch("https://630ecc12498924524a7fbab3.mockapi.io/faculties", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then(() => {
                  navigate("/faculties");
                });
              }}
            >
              {params.id > 0 && "Edit"}
              {!(params.id > 0) && "Add"}
              Faculty
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
