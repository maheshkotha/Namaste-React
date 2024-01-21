
# Create Sibbling element 

<!-- Third argument pass array of childrens -->

/*
 <div id="parent"> 
    <div id="child">
        <h2>I'm H2 Tag</h2>
    <div>
 </div>

ReactElement(Object) => HTML(Browser Understand)
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm H1 Tag"), 
    React.createElement("h2", {}, "I'm H2 Tag")]
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


# Create sibling element with React

/*
 <div id="parent"> 
    <div id="child1">
        <h1>I'm H1 Tag</h1>
        <h2>I'm H2 Tag</h2>
    <div>
    <div id="child2">
        <h1>I'm H1 Tag</h1>
        <h2>I'm H2 Tag</h2>
    <div>
 </div>

ReactElement(Object) => HTML(Browser Understand)
*/



const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "I'm H1 Tag"),
    React.createElement("h2", {}, "I'm H2 Tag")]
  ), React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I'm H1 Tag"),
    React.createElement("h2", {}, "I'm H2 Tag")]
  )]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
