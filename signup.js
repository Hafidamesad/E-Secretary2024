 // Fonction pour définir un cookie
 function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Événement sur le bouton "Sign up"
document.getElementById("singUpBtn").addEventListener("click", function(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    const companyName = document.getElementById("company-name").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Vérifications
    if (!companyName) {
        alert("Veuillez entrer un nom d'entreprise.");
        return;
    }

    if (!password || !confirmPassword) {
        alert("Veuillez remplir les champs de mot de passe.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Les mots-clés ne correspondent pas. Veuillez réessayer.");
        return;
    }

    // Si tout est valide, enregistrer les données et rediriger
    setCookie("companyName", companyName, 7); 
    alert("Inscription réussie !");
    window.location.href = "profil.html"; // Redirection vers la page de profil
});