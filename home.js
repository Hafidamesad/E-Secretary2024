//Lorsque je clique sur le btn Delete la tache se disparaitre dans la liste
let a=0;
function addRow() {
    let table = document.getElementById('myTaskTable');
    let newRow = table.insertRow(); // Ajoute une nouvelle ligne à la fin
    newRow.innerHTML = '<td collspan ="6">List is empty! Add a Tasks.</td>';
}
function removeTask(row){
        let tab = document.getElementById('myTaskTable');
        if (a < 7){
            tab.deleteRow(row-a); // Supprime la première ligne (index 0)
            a += 1;
        }
        if(a == 7)
            addRow();
}

//Lorsque je coche la case les styles changes
function tacheFinished(taskNum){
    let trTask = document.getElementById('tache'+taskNum);
    let finiched = document.querySelector("#tache"+taskNum+" .finished");
    let deletBtn = document.querySelector("#tache"+taskNum+" .delete-btn");
    let checkboxInput = document.querySelector("#tache"+taskNum+" .checkbox");
    let taskName = document.querySelector("#tache"+taskNum+" .taskName");
    finiched.style.visibility = "visible";
    deletBtn.style.visibility = "hidden";
    checkboxInput.checked = true;
    taskName.style.textDecoration = "line-through";
    trTask.style.backgroundColor = "rgba(48, 10, 85, 0.2)";
}

//aggrandir Tast
function taskDetected(taskNum){
    let task = document.getElementById('tache'+taskNum);
    task.classList.add('changeTaskStyle');
}
function removeDetecteTask(taskNum){
    let task = document.getElementById('tache'+taskNum);
    task.classList.remove('changeTaskStyle');
}
