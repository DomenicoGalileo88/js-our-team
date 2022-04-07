/* 
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.

Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva

BONUS 2 (solo se non sei giá fuso):
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

stampare su console le informazioni di nome, ruolo e la stringa della foto */

//creo un ciclo for che itera fino a quando la i non raggiunge la lunghezza dell'array team
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
    console.log(member);

    /* MILESTONE 2
    
    stampare le stesse informazioni su DOM sottoforma di stringhe */

    /* BONUS 1

trasformare la stringa foto in una immagine effettiva */
    let div = document.querySelector('.row');

    let card = `<div class="col-4">
                    <img src='./assets/img/${member.image}' alt="">
                    <h5 class="title_img">${member.name}</h5>
                    <p class="text_img">${member.role}</p>
                </div>`;
    div.insertAdjacentHTML('beforeend', card);
};




