/* 
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1
trasformare la stringa foto in una immagine effettiva

BONUS 2
organizzare i singoli membri in card/schede
*/

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/**
 *  Funzione che genera elementi della dom a partire da un array di oggetti
 * @param {object} object_list Array di oggetti da stampare
 * @param {*} css_selector Selettore css che corrisponde a elemento DOM
 */
function generateCardTeam(object_list, css_selector) {
  //Creo un ciclo for che itera fino a quando la i non raggiunge la lunghezza dell'array team
  for (let i = 0; i < object_list.length; i++) {
    //conservo ogni singolo membro in una variabile
    const member = object_list[i];
    //Richiamo attraverso il querySelector il mio elemento nella dom al quale voglio assegnare le mie card
    let carsElement = document.querySelector(css_selector);
    //Assegno ad una variabile il mio codice html da inserire
    let card = generateMarckupMember(member);
    // Inserisco il codice assegnato nella variabile card dentro l'elemento della dom richiamato
    carsElement.insertAdjacentHTML("beforeend", card);
  }
};

generateCardTeam(team, '.row');

/**
 * Funzione che mi genera il marckup dei membri contenuti nell'oggetto team (name, role, image)
 * @param {object} member_object member object
 * @returns 
 */
function generateMarckupMember(member_object) {
    return `
 <div class="card p-0 m-1 mb-3">
     <img src="./assets/img/${member_object.image}"class="card-img-top" alt="...">
     <div class="card-body text-center">
     <h5 class="card-title">${member_object.name}<h5>
     <p class="card-text fs_15">${member_object.role}</p>
 </div>`;
}

/*
Compilare il form e prendere i valori inseriti e
creare un nuovo oggetto da stampare a schermo con gli altri.
*/

// Selzionare il form
const form_data = document.querySelector('.form_data');
// aggiungi event listener
form_data.addEventListener('submit', function (event) {
  // previenire refresh della pagina
  event.preventDefault();
  // prendere i valori dei campi compilati
  console.log(event);
  let nameValue = event.target[0].value;
  //console.log(nameValue);
  let roleValue = event.target[1].value;
  let imageValue = event.target[2].value;
  //console.log(nameValue, roleValue, imageValue);
  // usare i valori presi sopra per creare nuovo oggetto
  const newMember = {
    name: nameValue,
    role: roleValue,
    image: imageValue,
  };

  //pulire la Dom e aggiungere la dom con il nuovo elemento
  //seleziono elento della dom che voglio pulire
  const cleanElement = document.querySelector(".row");
  cleanElement.innerHTML = "";
  //pulire i valori degli input
  document.querySelector(".image").value = "";
  document.querySelector(".role").value = "";
  document.querySelector(".name").value = "";
  // pushare il nuovo oggetto nell'array team
  team.push(newMember);
  //console.log(team);
  //richiamo la mia funzione che genera una card
  generateCardTeam(team, ".row");

  // Mostra un alerta che scompare da sola dopo 2s
  const form_confirmed = document.querySelector(".alert_confirmed");
  form_confirmed.innerHTML = `Hai inserito un nuovo membro con successo!`;
  form_confirmed.style.cssText = "display: block;";

  setTimeout(() => {
  form_confirmed.style.cssText = "display: none;";
  }, 2000);
});


// nome img : new-team-member-02.jpg