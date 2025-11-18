let btn = document.querySelector(".btn");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
    let h1 = document.createElement("h1");

    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let rot = Math.floor(Math.random()*360);
    let scl = Math.floor(Math.random()*3);
    let c1 = Math.floor(Math.random()*150);
    let c2 = Math.floor(Math.random()*150);
    let c3 = Math.floor(Math.random()*150);


    h1.innerHTML = "M E E T H I R P A R A";
    h1.style.color = "white";
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;
    h1.style.whiteSpace = "nowrap";
    h1.style.textTransform = "uppercase";
    h1.style.position = "absolute";
    h1.style.left = `${x}%`;
    h1.style.top = `${y}%`;
    h1.style.rotate = `${rot}deg`;
    h1.style.scale = scl;
    main.appendChild(h1);
});