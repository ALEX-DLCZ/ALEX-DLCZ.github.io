document.addEventListener("DOMContentLoaded", function() {
    fetch('layers/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.log("Erreur lors du chargement du header :", error));
});