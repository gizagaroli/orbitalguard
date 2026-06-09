const mapFilterButtons = document.querySelectorAll(".filter-btn");
const orbitObjects = document.querySelectorAll(".object");

mapFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedOrbit = button.dataset.filter;

        mapFilterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        orbitObjects.forEach((object) => {
            const objectOrbit = object.dataset.orbit;

            if (selectedOrbit === "todos" || selectedOrbit === objectOrbit) {
                object.classList.remove("is-hidden");
            } else {
                object.classList.add("is-hidden");
            }
        });
    });
});

const mapTime = document.querySelector("#map-time");

function updateMapTime() {
    const now = new Date();

    const formattedTime = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
    });

    mapTime.textContent = formattedTime;
}

updateMapTime();
setInterval(updateMapTime, 60000);