// api: https://api.adviceslip.com/advice

const id = document.getElementById("id");
const advice = document.getElementById("advice");
const btn = document.getElementById("btn");

const fetchDetails = async () => {
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
    .then(resp => resp.json())
    .then(data => {
        id.innerText = data.slip.id;
        advice.innerText = data.slip.advice;
    });
}

window.addEventListener("load", fetchDetails);
btn.addEventListener("click", fetchDetails);