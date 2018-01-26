
//connected ?
//alert("connected");
//


//QUESTION 1

//
// var compteur = document.querySelector("#i");
//
//
// var cpt = 10 ;
//
// var decre = function(){
//     if (cpt != 0){
//         cpt--
//     }
//     compteur.textContent = cpt;
// };
//
//
//
// var interval =  setInterval(function(){ decre(); }, 1000);
//


//question 2

setTimeout(function(){ alert("Hello"); }, 3000);


var canvas = document.querySelector(".carre");

 function draw(x,y) {

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "#FFF000";
        ctx.fillRect(x, y, 30, 30);


    }
};





var  myInterval;

var carre = function carre(x,y) {
    this.x = x;
    this.y = y;
    this.posx =0;
    this.posy = 0;
    this.render = function () {
        draw(this.x,this.y);
    };
    this.update = function(){
        update(this);
    };

};

var carre1 = new carre(0,0);

init();


function init() {
    myInterval = setInterval(mainLoop,1000/60);
};


function mainLoop(){

    carre1.update();
    carre1.render();
};




function update(carre) {
    canvas.getContext('2d').clearRect(0,0,1800,700);//clear le monde
    carre.x = carre.x+2;

};




