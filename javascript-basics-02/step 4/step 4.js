let b = document.querySelector("button");
let n = document.querySelector("#name");
let sn = document.querySelector("#surname");
let c = document.querySelector("#city");
b.addEventListener("click", () => {
  if (confirm("do you want to reset all fields?")) {
    n.value = "";
    sn.value = "";
    c.value = "";
  }
});
