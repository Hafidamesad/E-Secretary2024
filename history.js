const dateInput = document.getElementById("date");
        const taskRows = document.querySelectorAll(".task-row");

        dateInput.addEventListener("change", function() {
            const selectedDate = dateInput.value;

            taskRows.forEach(row => {
                const rowDate = row.getAttribute("data-date");
                if (selectedDate === rowDate || selectedDate === "") {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });