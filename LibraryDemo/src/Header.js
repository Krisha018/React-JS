import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <img
        src="http://www.darshan.ac.in/Content/media/DU_Logo.svg"
        height="90%"
        width="20%"
        paddingTop="0%"
      />
      <center>
        <img
          src="https://i.ytimg.com/vi/PcnVPMcHTzM/maxresdefault.jpg"
          height="40%"
          width="50%"
          border="5px solid black"
        />
      </center>
      <center>
        <img
          src="https://jgu.edu.in/wp-content/uploads/2021/07/global-library-main_0_0-1.jpg"
          height="30%"
          width="30%"
          border="10px solid "
        />
      </center>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <center>
        <h2
          style={{
            color: "lightblue",
            backgroundColor: "red",
            alignContent: "center",
            textAlign: "center",
            marginLeft: "30%",
            marginRight: "30%"
          }}
        >
          READ BOOKS BEFORE ROBOTS DO.
        </h2>
      </center>
      <center>
        {" "}
        <img
          src="https://c.ndtvimg.com/2021-04/7ejj5718_world-book-day_625x300_21_April_21.jpg?im=Resize=(1230,900)"
          height="20%"
          width="20%"
          border="30px solid "
        />
      </center>
      <h1
        style={{
          color: "lightblue",
          backgroundColor: "darkgreen",
          alignContent: "center",
          textAlign: "center",
          marginLeft: "20%",
          marginRight: "20%"
        }}
      >
        "A BOOK CAN CHANGE YOUR LIFE"
      </h1>
      <Link to="./">
        <button
          style={{
            color: "darkblue",
            backgroundColor: "Highlight",
            width: "90px",
            height: "0%",
            marginBottom: "2%",
            borderRadius: "50px",
            border: "4px solid black"
          }}
        >
          Home
        </button>
      </Link>
      &nbsp;&nbsp;
      <Link to="./books">
        <button
          style={{
            color: "darkblue",
            background: "Highlight",
            width: "90px",
            height: "0%",
            borderRadius: "50px",
            border: "4px solid black"
          }}
        >
          All Books
        </button>
      </Link>
      &nbsp;&nbsp;
      <Link to="./books/add">
        <button
          style={{
            color: "darkblue",
            backgroundColor: "Highlight",
            width: "90px",
            height: "0%",
            borderRadius: "50px",
            border: "4px solid black"
          }}
        >
          Add Books
        </button>
      </Link>
      <br />
    </>
  );
}
export default Header;
