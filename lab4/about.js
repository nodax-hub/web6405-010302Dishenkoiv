document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#destinations-table tbody");

    fetch("http://localhost:8000/destinations")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            tableBody.innerHTML = ""; // Очистка таблицы перед добавлением данных
            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
          <td>${item.country}</td>
          <td>${item.capital}</td>
          <td>${item.visit_date}</td>
        `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            tableBody.innerHTML = `<tr><td colspan="3" style="color: red;">Ошибка: ${error.message}</td></tr>`;
            console.error(error);
        });
});
