const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
                        
// Ajouter un événement de clic sur le bouton
uploadBtn.addEventListener('click', () => {
    fileInput.click(); // Ouvre l'explorateur de fichiers
});
                        
// Ajouter un événement pour quand l'utilisateur sélectionne un fichier
fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
    // Si plusieurs fichiers sont sélectionnés
    let fileNames = [];
    for (let i = 0; i < fileInput.files.length; i++) {
        fileNames.push(fileInput.files[i].name); // Ajouter le nom de chaque fichier à la liste
    }
                      
    // Afficher les noms de tous les fichiers sélectionnés
    alert(`Fichiers sélectionnés : ${fileNames.join(', ')}`);
    } else {
     alert("Aucun fichier sélectionné.");
    }
});
//Ajout des listes
function addDateList(){
    const dateInput = document.getElementById('task-date');
    const selectedDate = dateInput.value; // Récupère la date saisie

    return selectedDate;
}
function addList() {
    // Récupérer les valeurs des champs
    const newListName = document.getElementById('list-task').value.trim();
    const dueDate = document.getElementById('task-date').value;

    // Vérifier si le champ texte est vide
    if (!newListName) {
        alert("Veuillez entrer un nom pour la nouvelle liste.");
        return;
    }

    // Ajouter la nouvelle option à la liste déroulante
    const select = document.getElementById('task-list');
    const newOption = document.createElement('option');
    newOption.value = newListName.toLowerCase().replace(/\s+/g, '-'); // Génère une valeur unique
    newOption.text = newListName;

    select.add(newOption);

    // Réinitialiser les champs
    document.getElementById('list-task').value = '';
    document.getElementById('task-date').value = '';
}
