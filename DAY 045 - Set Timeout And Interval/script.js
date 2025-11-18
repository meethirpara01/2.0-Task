let btn = document.querySelector(".btn");
let wid = document.querySelector(".inner");
let h2 = document.querySelector(".progress");

let growth = 0;

btn.addEventListener("click", () => {

    // btn.dispatchEvent(Event);
    let time = Math.floor(Math.random()* 10 + 5);
    console.log(time);
    

    let dow = setInterval(() =>{
        growth++;
        wid.style.width = `${growth}%`
        h2.innerHTML = `${growth}%`
        btn.innerHTML = "Downloading"
        btn.style.opacity = 0.5
        console.log(growth);
    }, time*10);

    setTimeout(() =>{
        clearInterval(dow);
        btn.innerHTML = "Downloded"
        btn.style.opacity = 0.5
    }, time*1000)
 
});