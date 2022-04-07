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

/* MILESTONE 1

Stampare su console le informazioni di nome, ruolo e la stringa della foto */

//Creo un ciclo for che itera fino a quando la i non raggiunge la lunghezza dell'array team
for (let i = 0; i < team.length; i++) {
    //conservo ogni singolo membro in una variabile
    const member = team[i];
    //stampo in console i valori di ogni membro
    /* console.log('Member:');
    console.log('');
    console.log(member['name']);
    console.log(member.role);
    console.log(member.image);
    console.log(''); */
    //console.log(member);

/* MILESTONE 2
    
stampare le stesse informazioni su DOM sottoforma di stringhe */

    /* BONUS 1

    Trasformare la stringa foto in una immagine effettiva */

    /* BONUS 2

    Organizzare i singoli membri in card/schede */

    //Richiamo attraverso il querySelector il mio elemento nella dom al quale voglio assegnare le mie card
    let div = document.querySelector('.row');
    //Assegno ad una variabile il mio codice html da inserire
    let card = `<div class="card p-0 m-1 mb-3">
                    <img src="./assets/img/${member.image}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.role}</p>
                </div>`;
    // Inserisco il codice assegnato nella variabile card dentro l'elemento della dom richiamato 
    div.insertAdjacentHTML('beforeend', card);
};




