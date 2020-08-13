/*alert("hello world!");
document.write("Hello World!");
console.log("Hello World!");*/
/*var x=Number(prompt("donner un nombre x"));
var y=Number(prompt("donner un nombre y"));
console.write("<h1>La somme de <br/> "+x+"+"+y+"="+(x+y)+"</h1>");*/
function somme(){ 
/*var x=Number(document.f1.nb1.value);
var y=Number(document.f1.nb2.value);*/
var x=Number(document.getElementById("nb1").value);
var y=Number(document.getElementById("nb2").value);
if(isNaN(x) || isNaN(y)){
    console.log("vous n'avez pas entrer un nombre!");
}else{
    console.log("La somme de  "+x+"+"+y+"="+(x+y));
}
return false;
}
