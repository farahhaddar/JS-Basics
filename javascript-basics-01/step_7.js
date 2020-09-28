var shoeSize,birthYear;
 shoeSize= prompt("Enter your shoe size");
 birthYear = prompt("Enter your birth year");
 function calculate(shoeSize,birthYear){
    var r;
    r = [((shoeSize*2 )+ 5) * 50 ]- birthYear + 1766;
    alert("The result is :" + r);
 }
 calculate(shoeSize,birthYear);