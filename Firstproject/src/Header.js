import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1
        style={{
          color: "black",
          backgroundColor: "darkgrey",
          paddingLeft: "40%"
        }}
      >
        MY FIRST WEB PAGE
      </h1>
      <Link to="./">
        <button
          style={{ color: "black", backgroundColor: "red", fontSize: "120%" }}
        >
          Home
        </button>
      </Link>{" "}
      &nbsp;
      <Link to="./Student">
        <button
          style={{ color: "black", backgroundColor: "red", fontSize: "120%" }}
        >
          Student
        </button>
      </Link>{" "}
      &nbsp;
      <Link to="./Products">
        <button
          style={{ color: "black", backgroundColor: "red", fontSize: "120%" }}
        >
          Products
        </button>
      </Link>{" "}
      &nbsp;
    </>
  );
}

export default Header;
