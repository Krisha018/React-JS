import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="./">Home</Link> &nbsp;
      <Link to="./faculties">All Faculty</Link> &nbsp;
      <Link to="./faculty/add">Add Faculty</Link> &nbsp;
    </>
  );
}

export default Header;
