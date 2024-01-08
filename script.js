document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("actionButton").addEventListener("click", function() {
    var description = document.getElementById("description");
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
});