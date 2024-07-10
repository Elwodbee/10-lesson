const todoForm = document.querySelector(".form");
const todoInput = document.querySelector(".input");
const todoList = document.querySelector(".list");

todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const newItem = document.createElement("li");
    const userName = document.createElement("span");
    const checkbox = document.createElement("input");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    
    checkbox.type = "checkbox";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    deleteBtn.className = "delete";
    editBtn.className = "edit";

    userName.textContent = todoInput.value;

    const wrapper = document.createElement("div");
    wrapper.append(deleteBtn, editBtn)
    
    newItem.className = "item"
    
    newItem.append(checkbox, userName, editBtn, deleteBtn);
    
    todoList.appendChild(newItem);
    todoInput.value = "";
    
    editBtn.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "text";
        input.value = userName.textContent;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.className = "save";

        newItem.replaceChild(input, userName);
        newItem.replaceChild(saveBtn, editBtn);

        saveBtn.addEventListener("click", () => {
            userName.textContent = input.value;
            newItem.replaceChild(userName, input);
            newItem.replaceChild(editBtn, saveBtn);
        });
    });

    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(newItem);
    });
});
