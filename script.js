const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

// console.log(btn);
const createTask = (e) => {
  e.preventDefault();
  console.log("Crear Tarea");
  console.log(input.value);
  input.value = "";
};

//listener
btn.addEventListener("click", createTask);
