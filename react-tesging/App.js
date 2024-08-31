import React from "react";
import ReactDOM from 'react-dom/client';
import Contact from "./components/Contact";
// import ReactDOM from "react-dom/client";


const reactElemen = <div>
  <Contact />
</div>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(reactElemen)