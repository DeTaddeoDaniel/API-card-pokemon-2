function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

async function getDataPokemon(){
    
    console.log("chiamata server API pokemon");

    try{

        let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRndInteger(1,50));
        let data = await res.json();
        
        console.log(data);

        var pokemon = {
            name:data.name,
            image:data.sprites.front_default,
            
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            speed: data.stats[5].base_stat,
            defense: data.stats[3].base_stat,
        };

        console.log(pokemon);

        return data;   

    } catch(e){
        console.log('errore: ' + e);
    }
}


var data = getDataPokemon();
