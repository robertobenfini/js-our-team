//variabile array
let array = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },

    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },

    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },

    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },

    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    }
];

//stampo in console l'array
console.log(array);

//recupero contenitore dal DOM
let container = document.getElementById('container_cards');

//ciclo for per visualizzare info
for(let i=0; i<array.length; i++){
    let info_card = array[i];

    //stampo in console le info
    console.log(info_card.name);
    console.log(info_card.role);
    console.log(info_card.image);
    
    //variabile per creare un contenitore con le info
    let card = `<div class="col-4">
                    <div class="content bg-light m-3 text-center rounded-bottom-1">
                        <img class="w-100 h-100 rounded-top-1" src="./img/${info_card.image}">
                        <h5 class="pt-3"><strong>${info_card.name}</strong></h5>
                        <p class="pb-3">${info_card.role}</p>
                    </div>
                </div>`;
    
    //stampo le info nel DOM
    container.innerHTML += card;
}