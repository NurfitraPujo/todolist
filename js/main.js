/*DATE TIME*/
//check and display current date
function formatDate() {
    let d = new Date(),
        month = d.getMonth(),
        date = '' + d.getDate(),
        year = d.getFullYear(),
        day = d.getDay();
    if (date.length < 2) date = '0' + date;

    switch (month) {
        case 0:
            month = 'Jan';
            break;
        case 1:
            month = 'Feb';
            break;
        case 2:
            month = 'Mar';
            break;
        case 3:
            month = 'Apr';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'Aug';
            break;
        case 8:
            month = 'Sept';
            break;
        case 9:
            month = 'Okt';
            break;
        case 10:
            month = 'Nov';
            break;
        case 11:
            month = 'Des';
            break;
    }

    switch (day) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
    }

    return day + ', ' + [date, month, year].join(' ');
};

document.getElementById("date").innerHTML = formatDate();

/*CREATE NEW TASK*/
//query selectors
var form = document.querySelector(".input-form");
var trigger = document.querySelector(".add-button");
var closeButton = document.querySelector(".close-button");
var input = document.getElementById("todo-input");
var todoList = document.getElementById("todolist");

//Event Listeners
trigger.addEventListener("click", toogleForm);
closeButton.addEventListener("click", toogleForm);

//function
function toogleForm() {
    form.classList.toggle("show-form");
}

function newTask() {
    let value = input.value;
    if (value == "") {
        return false;
    } else {
        let item = document.getElementById("li");
        item.classList.add("task");

        todoList.appendChild(item).append(value);
        toogleForm();
        return false;
    }
}
