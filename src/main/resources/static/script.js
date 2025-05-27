function addTodo() {
    const input = document.getElementById("todo-input");
    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.textContent = value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
        ul.removeChild(li);
    };

    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = "";
}
