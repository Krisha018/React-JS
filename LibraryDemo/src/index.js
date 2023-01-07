import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Books from "./Books";
import Header from "./Header";
import Layout from "./Layout";
import Footer from "./Footer";
import BookDetail from "./BookDetail";
import BookAdd from "./BookAdd";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/book/:id" element={<BookDetail />}></Route>
        <Route path="/books/add" element={<BookAdd />}></Route>
        <Route path="/book/edit/:id" element={<BookAdd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
