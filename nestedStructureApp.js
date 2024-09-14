//  Nested Structure
{
  /* <div id="parent">
  <div id="child">
    <h1> I'm an H1 Tag</h1>
  </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an H1 Tag")
  )
);

console.log(parent); // Here parent is not h1 element its react element which is nothing but an object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
