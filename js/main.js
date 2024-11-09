let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthYearElement = document.getElementById("current-month-year");
const calendarDaysElement = document.querySelector(".calendar-days");
const calendarDatesElement = document.querySelector(".calendar-dates");

function initCalendar() {
    renderHeader();
    renderDays();
    renderDates(currentMonth, currentYear);
}

function renderHeader() {
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    monthYearElement.innerText = `${monthNames[currentMonth]} ${currentYear}`;
}

function renderDays() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    calendarDaysElement.innerHTML = "";
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.innerText = day;
        calendarDaysElement.appendChild(dayElement);
    });
}

function renderDates(month, year) {
    calendarDatesElement.innerHTML = ""; 

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("empty");
        calendarDatesElement.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement("div");
        dateElement.classList.add("date");
        dateElement.innerText = day;
        calendarDatesElement.appendChild(dateElement);

        if (day === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            dateElement.classList.add("today");

            dateElement.addEventListener("click", () => {
                alert("You clicked on today's date!");
            });
        }

    }
}

document.getElementById("prev-month").addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    updateCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    updateCalendar();
});

function updateCalendar() {
    renderHeader();
    renderDates(currentMonth, currentYear);
}

initCalendar();
