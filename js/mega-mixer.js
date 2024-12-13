/* utilisez la méthode _.shuffle de loadhash pour mélanger le tableau !!
https://lodash.com/docs/#shuffle

 <button id="ButtonToDelete">BOUTON TOGGLE A EFFACER</button>

 <div class="back smiley" style='background-image: url("images/smiley/smiley-10.png");'>
                <div class="prenom">Prénom</div>
                <div class="nom">Nom</div>
            </div>


              <div class="flipcard h" id="card">
            <div class="front interrogation">
                ?
            </div>
            
        </div>




*/

const ListeApprenants = ["BOUHADOUF Isaac","SEMOL Frédéric","CONRAUX Kylian",
                        "KHELIL Yamine","LANAUD Corentin","BELABED Samir",
                        "DE-OLIVEIRA Gabrielle", "BOUCHERBA Médy",
                        "CHERCHARI Samy", "TURAN Theoman"];

/*
   
let bdelete = document.getElementById("ButtonToDelete");


let Prenom = document.getElementsByClassName("prenom");



let smiley = document.getElementsByClassName("smiley")



*/


const Sizer = document.getElementById("sizer");

let Cardd = document.getElementById("card");







let Bouton = document.getElementById("BoutonInitialiser");
let Placer = document.getElementById("BoutonPlacer");
let Nombres = document.getElementById("numberSelect");



Bouton.addEventListener('click',() => {

Bouton.disabled = true; 
Placer.disabled = false;



},);




Placer.addEventListener('click',() => {
  
  Bouton.disabled = false;
  Placer.disabled = true; 


},);

Nombres.addEventListener('click', () => {


  
  
  });



















     


ListeApprenants.forEach((cartes) => {

  
 
 let Smiley = document.createElement('div');
 Smiley.classList.add("smiley", "back");
 Smiley.style.backgroundImage = 'url("images/smiley/smiley-10.png")';

 let divNoms = document.createElement('div');
 divNoms.classList.add("prenom");
 divNoms.innerText =  cartes;



 let fCard = document.createElement('div');
 fCard.classList.add("flipcard", "h");

 let fInterr = document.createElement('div');
 fInterr.classList.add("interrogation");





 
Sizer.appendChild(Smiley);
Smiley.appendChild(divNoms);


});













        
console.log(ListeApprenants);







