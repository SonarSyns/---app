const form = document.getElementById("taskForm")

const task = document.getElementById("taskTitle")

const date = document.getElementById("taskDate")

const time = document.getElementById("taskTime")

const priority = document.getElementById("taskPriority")

const done = document.getElementById("doneCount")

const total = document.getElementById("totalCount")

const list = document.getElementById("taskList")

// А в базі є дані?
if (localStorage.getItem("task") && localStorage.getItem("date") && localStorage.getItem("time") && localStorage.getItem("priority")) {
    console.log("Дані існують в БАЗІ!!!!!")
}

form.addEventListener("submit", function () {
    console.log("Ви натиснули кнопку!")
    event.preventDefault(); // заборона перезавантаження сторінки

    console.log(task.value)
    console.log(date.value)
    console.log(time.value)
    console.log(priority.value)


    localStorage.setItem("task", task.value)
    localStorage.setItem("date", date.value)
    localStorage.setItem("time", time.value)
    localStorage.setItem("priority", priority.value)

    createTask()

})

function createTask() {
    let newTask = document.createElement("div")

    if (priority.value === "high") {
        newTask.classList = "task-item priority-high"
    }
    list.appendChild(newTask)

    let text = document.createElement("div")
    text.classList = "task-title"
    text.textContent = task.value
    newTask.appendChild(text)

    let dateText = document.createElement("div")
    dateText.classList = "task-title"
    dateText.textContent = date.value
    newTask.appendChild(dateText)

    let timeText = document.createElement("div")
    timeText.classList = "task-title"
    timeText.textContent = time.value
    newTask.appendChild(timeText)

    let btnDone = document.createElement("div")
    btnDone.classList = "btn-done"
    btnDone.textContent = "✔️"
    newTask.appendChild(btnDone)

    let btnDelete = document.createElement("div")
    btnDelete.classList = "btn-delete"
    btnDelete.textContent = "🗑"
    newTask.appendChild(btnDelete)
}   