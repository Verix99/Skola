window.addEventListener("load", () => {
  const form = document.querySelector("#new-member-form");
  const input = document.querySelector("#new-task-input");
  const number = document.querySelector("#new-number-input");
  const list_el = document.querySelector("#tasks");
  const debt = document.querySelector("#new-debt-input");
  const vyber = document.querySelector("#clenove_vyber");
  let platby = 0;
  let count = 0;
  let dluh = 0;
  var mycars = new Array();

  //Funkce která počítá členy
  document.getElementById("new-task-submit").onclick = function () {
    count += 1;
    document.getElementById("demo").innerHTML = count;
  };

  //Funkce pro přidávání členů
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    var num = number.value;

    if (!task) {
      alert("Zapište člena!");
      count -= 1;
      document.getElementById("demo").innerHTML = count;
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
    task_input_el.setAttribute("id", "clen_jmeno" + [count]);
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    let task_number_el = document.createElement("input");
    task_number_el.classList.add("number");
    task_number_el.setAttribute("id", "clen_penize" + [count]);
    task_number_el.type = "number";
    task_number_el.value = 0;
    task_number_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);
    task_content_el.appendChild(task_number_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    const task_edit_el = document.createElement("input");
    task_edit_el.setAttribute("id", "checkbox_clen" + [count]);
    task_edit_el.classList.add("edit");
    task_edit_el.type = "checkbox";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    input.value = "";
    number.value = "";

    //mazání členů
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
      count -= 1;
      document.getElementById("demo").innerHTML = count;
    });
  });
  //Funkce která počítá transakce
  document.getElementById("new-debt-submit").onclick = function () {
    platby += 1;
    document.getElementById("platba").innerHTML = platby;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let debt_castka = parseInt(debt.value);
    dluh = dluh + debt_castka;
    document.getElementById("dluh").value = dluh;
    debt_pocitani = parseInt(debt_castka);
    function countChecked() {
      let count_1 = 0;
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          count_1++;
        }
      });

      return count_1;
    }
    const cislo_checkboxu = countChecked();
    let vysledna_castka_debt = debt_castka / cislo_checkboxu;
    console.log(`Počet zaškrtnutých checkboxů: ${countChecked()}`);
    console.log(vysledna_castka_debt);
    let a = 0;
    let checking = document.querySelectorAll('input[type="checkbox"]').length;
    document.getElementById("dluh").innerHTML = dluh;
    for (let i = 0; i <= checking; i++) {
      a++;
      var user = document.getElementById("clen_penize" + [a]).value;
      let bobik = parseInt(user);
      let total = bobik - vysledna_castka_debt;
      var check = document.getElementById("checkbox_clen" + [a]);
      var clen = document.getElementById("clen_jmeno" + [a]).value;
      var clen_div = vyber.value;
      let castka_rozdeleni = debt_castka - vysledna_castka_debt;
      let oktoput = bobik + castka_rozdeleni;
      let neskrtnuty = bobik + debt_castka;
      if (check.checked) {
        document.getElementById("clen_penize" + [a]).value = total.toFixed(2);
      }
      if (clen == clen_div) {
        if (check.checked) {
          document.getElementById("clen_penize" + [a]).value =
            oktoput.toFixed(2);
          debt.value = "";
          vyber.value = "";
        } else {
          document.getElementById("clen_penize" + [a]).value =
            neskrtnuty.toFixed(2);
        }
      }
    }
    console.log(oktoput);
    console.log(total);
  };
});
