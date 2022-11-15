const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  const value = input.value;
  input.value = "";
  const content = `
  <div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;

  list.appendChild(task);
  task.classList.add("card");
  console.log(content);
};

//listener
btn.addEventListener("click", createTask);
