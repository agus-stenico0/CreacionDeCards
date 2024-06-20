//console.log(pokemons);

let contenedorCards = document.getElementById("contenedor_cards");
let cardsHTML = "";


for(let pokemon in pokemons){
   // console.log(pokemons[pokemon])
    cardsHTML += crearCards(pokemon);
}
//console.log(cardsHTML)
contenedorCards.innerHTML = cardsHTML;

function crearCards(pokemon){
    
    let cards = document.createElement('div');
    cards.classList.add('card');

    let id = document.createElement('div');
    let name = document.createElement('p');
    let image = document.createElement('img')

    id.innerText = pokemons[pokemon].id;
    name.innerText = pokemons[pokemon].name;
    image.src = pokemons[pokemon].image;

    cards.append(id, name, image);

    return cards.outerHTML;
}