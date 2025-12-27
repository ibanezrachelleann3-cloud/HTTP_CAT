// Status code descriptions
const statusDescriptions = {
    200: "OK – Request successful",
    201: "Created – Resource created",
    301: "Moved Permanently",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    503: "Service Unavailable"
};

// Sync dropdown value to input
function syncInput() {
    const select = document.getElementById("statusSelect");
    document.getElementById("statusCode").value = select.value;
    showCat();
}

// Show cat image
function showCat() {
    const code = document.getElementById("statusCode").value;
    const image = document.getElementById("catImage");
    const error = document.getElementById("errorMessage");
    const desc = document.getElementById("description");

    if (code === "") {
        error.textContent = "Please enter a status code.";
        image.src = "";
        desc.textContent = "";
        return;
    }

    image.src = `https://http.cat/${code}.jpg`;
    error.textContent = "";

    desc.textContent = statusDescriptions[code] || "Unknown status code";

    image.onerror = function () {
        error.textContent = "Invalid HTTP status code!";
        image.src = "";
        desc.textContent = "";
    };
}

// Press ENTER to submit
function handleEnter(event) {
    if (event.key === "Enter") {
        showCat();
    }
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
