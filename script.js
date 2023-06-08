const nume = document.querySelector("h1");

nume.addEventListener("click", () => {
    nume.textContent = "ION";
});


const nume1 = document.querySelector("h2");

nume1.addEventListener("click", () => {
    nume1.textContent = "Dima";
});

const but = document.querySelector("button");
const body = document.querySelector("body");
const arrDima = ["D", "I", "M", "A"];
let count = 0;

but.addEventListener("click", () => {
    const patrat = document.createElement("div");
    patrat.classList.add("patrat");
    body.append(patrat);
    patrat.textContent = arrDima[count];
    count++;
});