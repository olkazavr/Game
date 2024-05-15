const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: "error",
            title: "Ой!",
            text: "Введи число від 1 до 20!",
        });
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: "error",
            title: "Ой!",
            text: "Потрібно ввести число!",
        });
    }
    else {
        if(userNumber < answer) {
            Swal.fire({
                icon: "error",
                title: "Введи число вище!",
                text: "Поки що перемагає комп'ютер",
            });
        }
        else if(userNumber > answer) {
            Swal.fire({
                icon: "error",
                title: "Введи число нище!",
                text: "Поки що перемагає комп'ютер",
            });
        }
        else {
            Swal.fire({
                title: "Ура, ти виграв!",
                imageUrl: "https://images.unsplash.com/photo-1531686264889-56fdcabd163f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: "Custom image"
            });
        }
    }
}