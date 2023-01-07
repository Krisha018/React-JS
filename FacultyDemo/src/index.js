import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Faculties from "./Faculties";
import Header from "./Header";
import Layout from "./Layout";
import Footer from "./Footer";
import FacultyDetail from "./FacultyDetail";
import FacultyAdd from "./FacultyAdd";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/faculties" element={<Faculties />}></Route>
        <Route path="/faculty/:id" element={<FacultyDetail />}></Route>
        <Route path="/faculty/add" element={<FacultyAdd />}></Route>
        <Route path="/faculty/edit/:id" element={<FacultyAdd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
