// calendar js

let currentDate = new Date();

function generateCalendar() {
  const tableBody = document.getElementById("calendar-body");
  const monthYearElement = document.getElementById("month-year");
  tableBody.innerHTML = "";

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startingDay = firstDayOfMonth.getDay();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startingDay) {
        const cell = document.createElement("td");
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        const cell = document.createElement("td");
        cell.textContent = date;
        if (
          currentDate.getDate() === date &&
          currentDate.getMonth() === firstDayOfMonth.getMonth()
        ) {
          cell.classList.add("current-day");
        }
        row.appendChild(cell);
        date++;
      }
    }
    tableBody.appendChild(row);
  }

  const monthYearText = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getFullYear()}`;
  monthYearElement.textContent = `${monthYearText}`;
}

function previousMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar();
  removeCurrentDayHighlight();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar();
  removeCurrentDayHighlight();
}

function highlightToday() {
  currentDate = new Date();
  generateCalendar();
  addCurrentDayHighlight();
}

function removeCurrentDayHighlight() {
  const currentDayCells = document.querySelectorAll(".current-day");
  currentDayCells.forEach((cell) => cell.classList.remove("current-day"));
}

function addCurrentDayHighlight() {
  const today = new Date();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startingDay = firstDayOfMonth.getDay();
  let date = 1;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startingDay) {
        // Do nothing for previous month's days
      } else if (date > daysInMonth) {
        // Do nothing for days after this month
      } else {
        const cell = document.querySelector(
          `#calendar-body tr:nth-child(${i + 1}) td:nth-child(${j + 1})`
        );
        if (
          today.getDate() === date &&
          today.getMonth() === firstDayOfMonth.getMonth()
        ) {
          cell.classList.add("current-day");
        }
        date++;
      }
    }
  }
}

function generateBreadCrumb() {
  // Breadcrumb JS
  var ul = docment.getElementById("breadcrumb");
  var a = document.createElement("a");
  var li = document.createElement("li");
  a.appendChild(document.createTextNode("Summary"));
  li.appendChild(a);
  ul.appendChild(li);
}

generateCalendar();

generateBreadCrumb();
