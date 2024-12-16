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

const ListeApprenants = ["BOUHADOUF Isaac", "SEMOL Frédéric", "CONRAUX Kylian",
  "KHELIL Yamine", "LANAUD Corentin", "BELABED Samir",
  "DE-OLIVEIRA Gabrielle", "BOUCHERBA Médy",
  "CHERCHARI Samy", "TURAN Theoman"];

/*
   
let bdelete = document.getElementById("ButtonToDelete");


let Prenom = document.getElementsByClassName("prenom");



let smiley = document.getElementsByClassName("smiley")



*/


const Sizer = document.getElementById("sizer");









let Bouton = document.getElementById("BoutonInitialiser");
let Placer = document.getElementById("BoutonPlacer");

let Numselect = document.getElementById("numberSelect");















Numselect.addEventListener('click', () => {

  Bouton.disabled = false;
  Placer.disabled = false;
  Numselect.disabled = true;


},);



Numselect.addEventListener('change', () => {


  if (Numselect.value == "440") {


    alert("440");



  } else if (Numselect.value == "660") {


    alert("660");



  } else if (Numselect.value == "880") {


    alert("880");


  } else if (Numselect.value == "1100") {


    alert("1100");

  } else if (Numselect.value == "1320") {


    alert("1320");

  } else { };


});




ListeApprenants.forEach((cartes) => {



  let Smiley = document.createElement('div');
  Smiley.classList.add("back", "smiley");
  Smiley.style.backgroundImage = 'url("images/smiley/smiley-10.png")';
  Smiley.innerText = cartes;
  




  let fCard = document.createElement('div');
  fCard.classList.add("flipcard", "h", "front");
  fCard.innerHTML = `<div class="front interrogation"> ? </div>`;


  







  Placer.addEventListener('click', () => {

    Bouton.disabled = false;
    Placer.disabled = true;
    Numselect.disabled = false;







  },);




  Bouton.addEventListener('click', () => {

    Bouton.disabled = true;
    Placer.disabled = false;
    Numselect.disabled = false;


 









  },);





 

















/*
  Sizer.appendChild(Smiley);

*/

  Sizer.appendChild(fCard);


});














console.log(ListeApprenants);







