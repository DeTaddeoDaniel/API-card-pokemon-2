function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

async function getDataPokemon(){
    
    console.log("chiamata server API pokemon");

    try{

        let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRndInteger(1,50));
        let data = await res.json();
        
        console.log(data);

        var pokemon = creaPokemon(data);

        console.log(pokemon);

        creaCarta(pokemon);  

    } catch(e){
        console.log('errore: ' + e);
    }
}

var data = getDataPokemon();

function creaPokemon(data){

    var pokemon = {
        name:data.name,
        image:data.sprites.other.dream_world.front_default,
            
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        speed: data.stats[5].base_stat,       
        defense: data.stats[3].base_stat,
    };

    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return pokemon;
}

function creaCarta(pokemon){

    // // test ingresso
    // console.log(pokemon);
    // // // dove lo metto
    // const flex = document.querySelector('.container');
    // // console.log(flex);
    // // // cattura del template
    // // console.log(document.querySelector('.card'));
    // const template = document.querySelector('.card');
    // // // clona template
    // const clone = template.cloneNode(true);
    // console.log(clone);
    // // // fare un fragment
    // const fragment = document.createDocumentFragment();

    // //================================================
    // clone.querySelector('.card-body img').setAttribute('src', pokemon.imagen);
    // console.log(clone.getElementsByClassName('.card-body'));
    // clone.querySelector('.card-body-title-nombre').innerHTML = pokemon.nombre;
    // clone.querySelector('.card-body-title-hp').innerHTML = pokemon.hp + ' hp'; 
    // clone.querySelector('.card-body-text').textContent = pokemon.experiencia + " exp"; 
    
    // clone.querySelector('.card-footer-info-attaco').textContent = pokemon.ataque + 'k'; 
    // clone.querySelector('.card-footer-info-speciale').textContent = pokemon.especial + 'k';
    // clone.querySelector('.card-footer-info-difesa').textContent = pokemon.difesa + 'k';

    // fragment.appendChild(clone);

    // flex.appendChild(fragment);

    $(".intro, .demo, .end")
    var v = $('card-footer-value-number, .attack').text(pokemon.attack);
    var v = $('card-footer-value-number, .defeat').text(pokemon.defense);
    var v = $('card-footer-value-number, .speed').text(pokemon.speed);
    var v = $('.card-main-info-name').text(pokemon.name);
    var v = $('.card-main-esperienza').text(pokemon.hp + ' hp');
    var v = $('.card-main-photo img').attr('src',pokemon.image);

    console.log(v);
}