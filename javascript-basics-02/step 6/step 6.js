let x=document.querySelector("#image1");
let y=document.querySelector("#image1");

x.addEventListener("mouseover", function() {
    document.querySelector("#image1").src = "images/image1_2.jpg";
    document.querySelector("#image2").src = "images/image2_2.jpg";
    document.querySelector("#image3").src = "images/image3_2.jpg";
    document.querySelector("#image4").src = "images/image4_2.jpg";
    document.querySelector("#image5").src = "images/image5_2.jpg";});

y.addEventListener("mouseout", function() {
        document.querySelector("#image1").src = "images/image1.jpg";
        document.querySelector("#image2").src = "images/image2.jpg";
        document.querySelector("#image3").src = "images/image3.jpg";
        document.querySelector("#image4").src = "images/image4.jpg";
        document.querySelector("#image5").src = "images/image5.jpg";});
