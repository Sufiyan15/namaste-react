/**
 * <div class="parent">
 *  <div class="child1">
 *    <h1>Heading</h1>
 *    <h2>Heading 2</h2>
 *  </div>
 *  <div class="child2">
 *    <h1>Heading</h1>
 *    <h2>Heading 2</h2>
 *  </div>
 * </div>
 *
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Heading"),
//     React.createElement("h2", {}, "Heading 2"),
//   ])
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { className: "child1" }, [
    React.createElement("h1", {}, "Heading"),
    React.createElement("h2", {}, "Heading 2"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", {}, "Heading"),
    React.createElement("h2", {}, "Heading 2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
