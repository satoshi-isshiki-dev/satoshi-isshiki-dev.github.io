// const URL = "http://192.168.88.227:8008";
// const URL = "http://192.168.100.4:8008/";

document
  .getElementById("groupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var group = document.getElementById("groupSelect").value;

    fetch(`/students?group=${group}`)
      .then((response) => response.json())
      .then((data) => {
        var table = document.getElementById("attendanceTable");

        // Очистить таблицу
        while (table.firstChild) {
          table.removeChild(table.firstChild);
        }

        // Добавить заголовки таблицы
        var header = table.insertRow();
        header.insertCell().textContent = "№";
        header.insertCell().textContent = "Имя";
        header.insertCell().textContent = "Время логина";

        const uniqueArr = data.students.filter((item, index, self) => {
          return self.findIndex((t) => t.name === item.name) === index;
        });

        // Добавить строки таблицы
        uniqueArr.forEach(function (student, index) {
          var row = table.insertRow();
          row.insertCell().textContent = index+1;
          row.insertCell().textContent = student.name;
          row.insertCell().textContent = student.login_time;
        });
      });
  });
