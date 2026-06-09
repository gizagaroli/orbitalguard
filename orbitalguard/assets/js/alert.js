const filterButtons = document.querySelectorAll(".filter-btn");
const alertRows = document.querySelectorAll(".table-row");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        alertRows.forEach((row) => {
            const rowLevel = row.dataset.level;

            if (selectedFilter === "todos" || selectedFilter === rowLevel) {
                row.classList.remove("is-hidden");
            } else {
                row.classList.add("is-hidden");
            }
        });
    });
});