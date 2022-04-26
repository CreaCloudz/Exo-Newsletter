let btnAdd = document.querySelector('.button-send');
let ul = document.createElement('ul');

btnAdd.addEventListener('click', function (event){
    event.preventDefault();

    // Create button and button function
    let button = document.createElement('button');
    button.classList.add("btn", "btn-danger");
    button.onclick = function(event) {
        let target = event.target;
        let parent = target.parentElement;

        parent.remove();
    }
    button.textContent = "Supprimer";

    // Create li in ul and add button in li
    let li = document.createElement('li');
    let myForm = document.getElementById('form');
    formData = new FormData(myForm);
    li.textContent = formData.get('name') + ' ' + formData.get('prenom') + ' ' + formData.get('mail') + "  -  ";
    li.classList.add("mt-3");

    document.getElementById('list-inscription').append(ul.appendChild(li));
    li.appendChild(button);

    // Add all on the body
    document.body.append(ul);
});
