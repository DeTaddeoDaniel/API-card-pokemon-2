function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

async function getDataPokemon(){
    
    console.log("chiamata server API pokemon");

    try{

        let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRndInteger(1,50));
        // let res2 = await fetch('https://pokeapi.co/api/v2/?limit=60');
        let data = await res.json();
        
        console.log(data);

        return data;   

    } catch(e){
        console.log('errore: ' + e)
    }
}


var data = getDataPokemon();
