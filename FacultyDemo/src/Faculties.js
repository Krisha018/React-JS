import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculties() {
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    fetch("https://630ecc12498924524a7fbab3.mockapi.io/faculties")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, []);

  const formatedFaculty = faculties.map((fac) => {
    return (
      <>
        <img src={fac.FacultyImage} alt="asdf" />
        <Link to={"../faculty/" + fac.id}>
          <h4>{fac.Facultyname}</h4>
        </Link>
      </>
    );
  });
  return formatedFaculty;
}
export default Faculties;
