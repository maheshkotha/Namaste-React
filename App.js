import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: 'child1' }, [
//     React.createElement("h1", {key: 1}, "I'm H1 Tag"),
//     React.createElement("h2", {key: 2}, "I'm H2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: 'child2' }, [
//     React.createElement("h1", {key: 1}, "I'm H1 Tag"),
//     React.createElement("h2", {key: 2}, "I'm H2 Tag"),
//   ]),
// ]);
// // const parent = React.createElement("div", {}, 'hello React....')

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// React.createElement = Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX (transpiled before it reached the JS) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => React.createElement = ReactElement.JS Object => HTMLElement(render)
const jsxHeading = <h1>Namaste React using JSX</h1>;

const Title = () => {
  return <h1>Namaste React Title Component</h1>;
};

// React Functional Component
const Heading = () => {
  return (
    <div className="container">
      {/* TWO Components in One component is Component Composition */}
      <Title />
      { Title()}
      <Title></Title>
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
