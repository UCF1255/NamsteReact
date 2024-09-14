//  Nested Structure
{
  /* <div id="parent">
  <div id="child">
    <h1> I'm an H1 Tag</h1>
    <h2> I'm an H1 Tag</h2>  // h1 h2 sibling
  </div>
    <div id="child2">
    <h1> I'm an H1 Tag</h1>
    <h2> I'm an H1 Tag</h2>  // h1 h2 sibling
  </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 Tag from child2"),
    React.createElement("h2", {}, "I'm an H2 Tag from child2"),
  ]),
]);

console.log(parent); // Here parent is not h1 element its react element which is nothing but an object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
