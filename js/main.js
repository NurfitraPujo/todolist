function todoList() {
    let item = document.getElementById("todoInput").value;
    let text = document.createTextNode(item);
    let newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
}