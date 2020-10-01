let show=document.getElementById("show");
  let hide=document.getElementById("hide");
  let p=document.getElementById("texte");
  
  
function action() {
  show.addEventListener("click", function(){
    p.style.display = "block";
  })
  
  hide.addEventListener("click", function(){
    p.style.display = "none";
  })
  
}

action();