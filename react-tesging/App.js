import React from "react";
import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom/client";


const reactElemen = React.createElement("h1", {}, "React Heading Element");

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(reactElemen)