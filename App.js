const parent = React.createElement("div",{id : "parent"}, [
    React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {id: "headind_1"}, "Heading1 from child1"),
    React.createElement("h2", {id: "headind_2"}, "headind_2 from child2"),
]),
React.createElement("div",{id: "child2"}, [
    React.createElement("h1", {id: "headind_1"}, "Heading1 from child1"),
    React.createElement("h2", {id: "headind_2"}, "headind_2 from child2"),
])
]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)