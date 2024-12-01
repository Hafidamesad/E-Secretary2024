function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

    function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}


    document.getElementById("logInBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const companyName = document.getElementById("company-name").value;
    if (companyName) {
        setCookie("companyName", companyName, 7); 
        window.location.href = "home.html"; 
    } else {
        alert("Veuillez entrer un nom d'entreprise.");
    }
});