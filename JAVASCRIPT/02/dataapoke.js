const pokemonDescription = [
    "Pokemon Front Default",
    "Pokemon Front Female",
    "Pokemon Front Shiny",
    "Pokemon Front Shiny Female",
    "Pokemon Back Default",
    "Pokemon Back Female",
    "Pokemon Back Shiny",
    "Pokemon Back Shiny Female"
]
function updateContent(index){
    let pokemon = data;
    const pokemonImage = [
        pokemon.sprites.front_default,
        pokemon.sprites.front_female,
        pokemon.sprites.front_shiny,
        pokemon.sprites.front_shiny_female,
        pokemon.sprites.back_default,
        pokemon.sprites.back_female,
        pokemon.sprites.back_shiny,
        pokemon.sprites.back_shiny_female];
    document.getElementById("title").innerHTML = pokemon.name;
    document.getElementById("image").src = pokemonImage[index];
    document.getElementById("description").innerHTML = pokemonDescription[index];
}

function loadDataPromise(url){
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onload = function(){
            
            if(this.status == 200 && this.readyState == 4){
                data = JSON.parse(this.responseText);
                resolve(data)
            }
            else{
                reject("No Data")
            }
            
            setTimeout(() => {
                reject("No Data")
                
            }, 3000);
        };
        
        ajax.open("GET", url, true);
        ajax.send();
        
    })
}
let data = {};
let currentIndex = 0;
let index = 25;
let url = `https://pokeapi.co/api/v2/pokemon/${index}`;

loadDataPromise(url)
.then(result =>{
    console.log(result);
    updateContent(currentIndex);
})
.catch( error => console.error(error));

document.getElementById("right").addEventListener("click", () =>{
    if(currentIndex < pokemonDescription.length - 1){
        currentIndex++;
        updateContent(currentIndex)
    }
    else{
        currentIndex = 0;
        updateContent(currentIndex)
    }
})
document.getElementById("left").addEventListener("click", () =>{

    currentIndex--;
    if(currentIndex === -1){
        currentIndex += pokemonDescription.length;
        updateContent(currentIndex)
    }
    updateContent(currentIndex)
})