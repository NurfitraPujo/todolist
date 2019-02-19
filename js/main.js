function addTask() {
    //take value from text input
    let item = document.getElementById("todoInput").value;
    if (item == "") {
        //return when the input is empty
        return;
    }
    else {
        let text = document.createTextNode(item);
        let task = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkTask";
        checkbox.onclick = function () {
            if (checkbox.checked) {
                task.style.backgroundColor = "#d1d1d1";
                task.style.color = "#181818";

                let parent = document.getElementById("finishedList");
                move(parent, task);
            } else {
                task.style.backgroundColor = "royalblue";
                task.style.color = "#fff";

                let parent = document.getElementById("todoList");
                move(parent, task);
            }
        }

        checkbox.classList.add("check");
        task.classList.add("task");

        document.getElementById("todoTitle").style.display = "block";
        task.appendChild(checkbox);
        task.appendChild(text);
        document.getElementById("todoList").appendChild(task);

        document.getElementById("todoInput").value = "";
    }
}

//move finished task 
function move(parent, task) {
    parent.appendChild(task);
    console.log(parent.id)
    removeTitle(parent);
}

function removeTitle(parent) {
    let todoTitle = document.getElementById("todoTitle");
    let finishedTitle = document.getElementById("finishedTitle");

    if (parent.id = "todoList") {
        todoTitle.style.display = "block";
        if (!finishedTitle.hasChildNodes) {
            finishedTitle.style.display = "none";
        }
    } else if (parent.id = "finishedList") {
        finishedTitle.style.display = "block";
        if (!todoTitle.hasChildNodes) {
            todoTitle.style.display = "none";
        }
    }
}
