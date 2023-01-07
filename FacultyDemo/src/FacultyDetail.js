import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function FacultyDetail() {
  let params = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState({});
  useEffect(() => {
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
        setFaculty(res);
      });
  }, []);
  return (
    <>
      <table>
        <tr>
          <td>Name:</td>
          <td>{faculty.Facultyname}</td>
        </tr>
        <tr>
          <td>Image:</td>
          <td>
            <img src={faculty.FacultyImage} />
          </td>
        </tr>
        <tr>
          <td>MobileNumber:</td>
          <td>{faculty.FacultyMobile}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{faculty.FacultyEmail}</td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => {
                fetch(
                  "https://630ecc12498924524a7fbab3.mockapi.io/faculties/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/faculties");
                });
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                navigate("/faculty/edit/" + params.id);
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

export default FacultyDetail;
