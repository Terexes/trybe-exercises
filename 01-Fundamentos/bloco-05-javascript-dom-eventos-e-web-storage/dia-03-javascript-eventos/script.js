function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
function createDezDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const days = document.getElementById('days');

  for (let i of dezDaysList) {
    const dezDay = i;
    const dezDayEl = document.createElement('li');
    if (dezDay === 4 || dezDay === 11 || dezDay === 18 || dezDay === 25) {
      dezDayEl.classList.add('friday');
      if (dezDay === 25) {
        dezDayEl.classList.add('holiday');
      }
    } else if (dezDay === 24 || dezDay === 25 || dezDay === 31) {
      dezDayEl.classList.add('holiday');
    } else {
      dezDayEl.classList.add('day');
    }
    dezDayEl.classList.add('day');

    dezDayEl.innerHTML = dezDay;
    days.appendChild(dezDayEl);
  }
}
// Exercício 2
function buttonFeriados(str) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonFeriados = document.createElement('button');
  buttonFeriados.innerText = str;
  buttonFeriados.classList.add('btn-holiday');
  buttonsContainer.appendChild(buttonFeriados);
}

// Exercício 3
function destacaFeriados() {
  const button = document.querySelector('.btn-holiday');
  button.addEventListener('click', function () {
    const days = document.querySelectorAll('.holiday');
    for (let day of days) {
      day.classList.toggle('holiday-bg');
    }
  });
}

// Exercício 4
function buttonSexta(str) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonSexta = document.createElement('button');
  buttonSexta.innerText = str;
  buttonSexta.classList.add('btn-friday');
  buttonsContainer.appendChild(buttonSexta);
}

// Exercício 5
function alteraTextoSexta(texto) {
  const button = document.querySelector('.btn-friday');
  const fridayDays = document.querySelectorAll('.friday');
  const fridays = [4, 11, 18, 25];
  button.addEventListener('click', function () {
    for (let i = 0; i < fridayDays.length; i++) {
      if (fridayDays[i].innerHTML !== texto) {
        fridayDays[i].innerHTML = texto;
      } else {
        fridayDays[i].innerHTML = fridays[i];
      }
    }
  });
}

// Exercício 6
function hover() {
  const days = document.querySelectorAll('.day');
  for (let day of days) {
    day.addEventListener('mouseover', function () {
      day.style.fontSize = '30px';
      day.style.fontWeight = '600';
    });
    day.addEventListener('mouseleave', function () {
      day.style.fontSize = '20px';
      day.style.fontWeight = '400';
    });
  }
}

// Exercício 7
function criarTarefa(tarefa) {
  const setTasks = document.querySelector('.my-tasks');
  const spanTarefa = document.createElement('span');
  spanTarefa.innerHTML = tarefa;
  setTasks.appendChild(spanTarefa);
}

// Exercício 8
function legendaComCor(cor) {
  const myTasks = document.querySelector('.my-tasks');
  const novaTarefa = document.createElement('div');
  novaTarefa.classList.add('task');
  novaTarefa.style.backgroundColor = cor;
  myTasks.appendChild(novaTarefa);
}

// Exercício 9
function selectTask() {
  const tasks = document.querySelectorAll('.task');
  for (let task of tasks) {
    task.addEventListener('click', function () {
      task.classList.toggle('selected');
    });
  }
}

// Exercício 10
function corDaTask() {
  const days = document.querySelectorAll('.day');
  for (let day of days) {
    day.addEventListener('click', function () {
      const task = document.querySelector('.selected');
      if (day.style.color !== task.style.backgroundColor) {
        day.style.color = task.style.backgroundColor;
      } else {
        day.style.color = 'rgb(119,119,119)';
      }
    });
  }
}

// Bônus
function taskMaker() {
  const taskInput = document.getElementById('task-input');
  const btnAdd = document.getElementById('btn-add');
  const taskList = document.querySelector('.my-tasks');

  btnAdd.addEventListener('click', function () {
    if (taskInput.value.length > 0) {
      let novaTask = document.createElement('li');
      novaTask.innerText = taskInput.value;
      taskList.appendChild(novaTask);
      novaTask = '';
    } else {
      alert('Digite ao menos 1 caractere');
      novaTask = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', function (event) {
  createDezDays();
  buttonFeriados('Feriados');
  buttonSexta('Sexta-Feira');
  destacaFeriados();
  alteraTextoSexta('Sextou !');
  hover();
  criarTarefa('teste');
  legendaComCor('green');
  criarTarefa('teste2');
  legendaComCor('orange');
  selectTask();
  corDaTask();
  taskMaker();
});
