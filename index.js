const chouchou = require('./information.js');
console.log(chouchou.color);

const cowsay  =  require ( "cowsay" ) ;

console . log ( cowsay . say ( { 
    text : `Je m'appelle ${chouchou.surname} et je suis de couleur ${chouchou.color}`, 
    e : "oO" , 
    T : "U " 
} ));