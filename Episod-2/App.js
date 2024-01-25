import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: 'child1' }, [
    React.createElement("h1", {key: 1}, "I'm H1 Tag"),
    React.createElement("h2", {key: 2}, "I'm H2 Tag"),
  ]),
  React.createElement("div", { id: "child2", key: 'child2' }, [
    React.createElement("h1", {key: 1}, "I'm H1 Tag"),
    React.createElement("h2", {key: 2}, "I'm H2 Tag"),
  ]),
]);
// const parent = React.createElement("div", {}, 'hello React....')

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
