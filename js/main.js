function addTask() {
    //take value from text input
    let item = document.getElementById("todoInput").value;
    if (item == "") {
        //return when the input is empty
        return;
    }
    else {
        let text = document.createTextNode(item);
        let newItem = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkTask";
        checkbox.onclick = function () {
            finish(newItem);
        }

        checkbox.classList.add("check");
        newItem.classList.add("task");

        newItem.appendChild(checkbox);
        newItem.appendChild(text);
        document.getElementById("todoList").appendChild(newItem);
        document.getElementById("todoInput").value = "";
    }
}

//change checkbox color
// function isChecked(elem) {
//     elem.parentNode.style.color = (elem.checked) ? '#fff' : '#fff';
// }

//move finished task 
function finish(newItem) {
    newItem.id = "finished";
    document.getElementById("finishedTitle").style.visibility = "visible";

    let moved = document.getElementById("finished");
    let parent = moved.parentElement;
    let reference = parent.querySelector("#finishedList");

    parent.appendChild(moved, reference);
}
