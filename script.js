import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/displayTasks.js";

// Immediately invoked function expression IIFE - Mas Seguridad
(() => {
  const btn = document.querySelector("[data-form-btn]");

  //listener
  btn.addEventListener("click", addTask);
  displayTasks();
})();
