document.getElementById("add-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed", checkbox.checked);
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
  }
});
