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
    console.log(info_card);
    
    //variabile per creare un contenitore con le info
    let card = `<div>
                    <p>${info_card.image}</p>
                    <p>${info_card.name}</p>
                    <p>${info_card.role}</p>
                </div>`;
    
    //stampo le info nel DOM
    container.innerHTML += card;
}


