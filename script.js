const dice = document.getElementById('dice');
const advice_text = document.querySelector('.advice_text'); 
const number=document.getElementById("number");

window.onload = randmoizedAdvice;


dice.addEventListener("click", function () {
    randmoizedAdvice();
});

function randmoizedAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => {
            number.textContent=data.slip.id;
            advice_text.textContent = data.slip.advice;
        })
        .catch((error) => {
            alert(`Error ${error}`);
        });
}
