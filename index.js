import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";


ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,
  document.getElementById("root")
);
