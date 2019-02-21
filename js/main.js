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
                let oldParent = document.getElementById("todoList");
                document.getElementById("finishedTitle").style.display = "block";
                console.log(oldParent.childNodes.length);
                move(parent, task);
                if (oldParent.childNodes.length < 2) {
                    document.getElementById("todoTitle").style.display = "none";
                }
            } else {
                task.style.backgroundColor = "royalblue";
                task.style.color = "#fff";

                let parent = document.getElementById("todoList");
                let oldParent = document.getElementById("finishedList");
                console.log(oldParent.childNodes.length);
                document.getElementById("todoTitle").style.display = "block";
                move(parent, task);
                if (oldParent.childNodes.length < 2) {
                    document.getElementById("finishedTitle").style.display = "none";
                }
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
}

