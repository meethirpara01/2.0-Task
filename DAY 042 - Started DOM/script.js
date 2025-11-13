let h1 = document.querySelector('.CH1');
let counter = 0;

let inc = document.querySelector(".Inc");
let dec = document.querySelector(".Dec");

inc.addEventListener('click', () =>
{
    counter++;
    h1.innerText = counter;
})

dec.addEventListener('click', () =>
{
    counter--;
    h1.innerText = counter;
})