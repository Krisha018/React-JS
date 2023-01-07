import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          backgroundImage:
            "url('https://media.istockphoto.com/photos/light-blue-paper-texture-background-picture-id1303637923?b=1&k=20&m=1303637923&s=612x612&w=0&h=iwLb9ARrRFooPmT5Bp2Gq2iX22AbVGIVpRrJFd2Bvl4=')"
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default Layout;
