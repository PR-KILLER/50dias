const submitButton = document.querySelector('#submit-button');
const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const items = document.querySelector('.item');
const body = document.querySelector('body');

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === "" || emailValue === "") {
      return alert("Pleade fill out all the fields");
    }

    myForm.style.background = "red;"
    items.firstChild.textContent = nameValue;
    items.children[1].textContent = emailValue;

    body.style.background = 'white';
});
