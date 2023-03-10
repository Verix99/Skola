window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const number = document.querySelector("#new-number-input");
  const list_el = document.querySelector("#tasks");

  let count = 0;
  document.getElementById("new-task-submit").onclick = function () {
    count += 1; //sčítání členů
    document.getElementById("demo").innerHTML = count; //sčítání členů
  };
  var mycars = new Array();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    const num = number.value;

    if (!task) {
      alert("Zapište člena!");
      return;
    }

    mycars[count] = task;

    var options = "";

    for (var i = 0; i < mycars.length; i++) {
      options += '<option value="' + mycars[i] + '" />';
    }
    document.getElementById("anrede").innerHTML = options;

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task + " " + " Částka: " + num + "$";
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    const task_edit_el = document.createElement("checkbox");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
      count -= 1;
      document.getElementById("demo").innerHTML = count;
    });
  });
});
