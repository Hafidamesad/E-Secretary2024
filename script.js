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

document.addEventListener("DOMContentLoaded", function() {
    const companyName = getCookie("companyName"); 
    
    if (companyName) {
        document.getElementById("companyName").textContent = companyName;
    } else {
        alert("Aucune donnée utilisateur trouvée. Veuillez vous inscrire.");
    }
});


        const editButton = document.getElementById('editProfile');
        const saveButton = document.getElementById('saveProfile');
        const formInputs = document.querySelectorAll('#profileForm input');
        const companyNameElement = document.getElementById('companyName');
        const companyNameInput = document.getElementById('companyNameInput');
        const descriptionElement = document.getElementById('description');
        const descriptionInput = document.getElementById('descriptionInput');
        const fileInput = document.getElementById('fileInput');
        const profileImage = document.getElementById('profileImage');

        editButton.addEventListener('click', (event) => {
            event.preventDefault();
            formInputs.forEach(input => {
                input.readOnly = false; 
            });
            companyNameElement.style.display = 'none';
            companyNameInput.style.display = 'inline-block';
            descriptionElement.style.display = 'none';
            descriptionInput.style.display = 'inline-block';

            editButton.style.display = 'none'; 
            saveButton.style.display = 'inline-block'; 
        });

        saveButton.addEventListener('click', (event) => {
            event.preventDefault();
            formInputs.forEach(input => {
                input.readOnly = true; 
            });
            companyNameElement.textContent = companyNameInput.value;
            descriptionElement.textContent = descriptionInput.value;

            companyNameElement.style.display = 'inline-block';
            companyNameInput.style.display = 'none';
            descriptionElement.style.display = 'inline-block';
            descriptionInput.style.display = 'none';

            editButton.style.display = 'inline-block'; 
            saveButton.style.display = 'none'; 
            alert('Les informations ont été mises à jour avec succès.');
        });

        profileImage.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    