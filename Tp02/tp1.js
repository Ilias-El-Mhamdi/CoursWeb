
// Vérification de connection du js

    //alert("connceted");


//EXERCICE 1



// span res dans resu
var resu= document.getElementById("res");



//fonction de calcul de factoriel n

var fact = function(n){
    var res = 1;
    for (var k=2;k<=n;k++){
        res = res*k;
    };
    return res
};

// ecriture de factoriel 5 dans resu
resu.textContent= fact(5) ;


//EXERCICE 2


//Question 4

// Autre façon de récupérer un "objet" html

var img = document.querySelector("#left");



//Fonction de baculement

var bascule = function (image , identifiant) {

    //regarde l'id et le compare à l'identifiant (left ou right)
   if( image.getAttribute("id") == identifiant){
       image.setAttribute("id", "right"); //change l'id (right et right 1 font la meme chose)
   } else if(image.getAttribute("id") == "right") {
       image.setAttribute("id", identifiant); //change l'id
   }

};


var basculeImg = function(){
    bascule(img,"left");
};


img.addEventListener("click",basculeImg ); //quand il y a un "click" sur l'img la fonction bascule se lance



//Qestion 5


var img1 = document.querySelector("#left1");


var interval =  setInterval(function(){ bascule(img1,"left1"); }, 1000);  //lance bascule("left1") toute les secondes

//recup dans interval l'identifant pour pouvoir l'areter



//il faut une fonction sans paramètre dans addEvent
var clear =function () {
    clearInterval(interval);
};


img1.addEventListener("click",clear );


// Question 6


var img2 = document.querySelector("#right1");

// var clicked = false;
//
//
//
//
//
//


var random = function () {
    var x= Math.random()*100;
    var y=Math.random()*100;
    var z=Math.random()*100;
    var t=Math.random()*100;



    img2.style= "margin: "+x+"% " + y+ "%" +z+ "% "+ t + "%";

};


img2.addEventListener("click", random);









