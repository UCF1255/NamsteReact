const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
console.log(heading); // Here heading is not h1 element its react element which is nothing but an object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
