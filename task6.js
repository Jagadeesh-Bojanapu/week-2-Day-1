const input = document.getElementById("course");
const uol = document.getElementById("unordered list")

const button = document.getElementById("btn");

function Add() {
    const coursename = input.value;
    const li = document.createElement('li');
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = coursename;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        if (checkbox.checked) {
            li.remove();
        }
    });
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    uol.appendChild(li);

    checkbox.addEventListener("change",function()
    {
        if(checkbox.checked){
            li.classList.add("completed");
        }
        else{
            li.classList.remove("completed");
        }
    });
}

btn.addEventListener("click", Add)