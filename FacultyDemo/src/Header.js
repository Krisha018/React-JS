import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 style={{ color: "red" }}>Welcome to the Faculty Page</h1>
      <Link to="./">
        <button style={{ color: "blue", background: "lightblue" }}>Home</button>
      </Link>
      &nbsp;&nbsp;
      <Link to="./faculties">
        <button style={{ color: "blue", background: "lightblue" }}>
          All Faculty
        </button>
      </Link>
      &nbsp;&nbsp;
      <Link to="./faculty/add">
        <button style={{ color: "blue", background: "lightblue" }}>
          Add Faculty
        </button>
      </Link>
      <br />
    </>
  );
}
export default Header;
