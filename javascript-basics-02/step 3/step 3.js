let x = document.querySelector("#d1");
let y = document.querySelector("#name");
y.addEventListener("keyup", () => {
    x.textContent = y.value;
});