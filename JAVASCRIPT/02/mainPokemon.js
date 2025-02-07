function updateContent() {
    let pokemon = data;
    document.getElementById("title").innerHTML = pokemon.name;
    document.getElementById("image").src = pokemon.sprites.front_default;
    // document.getElementById("description").innerHTML = pokemonDescription[index];
}

function loadDataPromise(url) {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onload = function() {
            if (this.status == 200 && this.readyState == 4) {
                data = JSON.parse(this.responseText);
                resolve(data);
            } else {
                reject("No Data");
            }
        };

        setTimeout(() => {
            reject("No Data");
        }, 3000);

        ajax.open("GET", url, true);
        ajax.send();
    });
}

let data = {};
let currentIndex = 1;

let url = `https://pokeapi.co/api/v2/pokemon/${currentIndex}`;
loadDataPromise(url)
        .then(result => {
            console.log(result);
            updateContent();
        })
        .catch(error => console.error(error));

document.getElementById("right").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex++;
        loadDataPromise(url)
        .then(result => {
            console.log(result);
            updateContent();
        })
        .catch(error => console.error(error));
    }
});

document.getElementById("left").addEventListener("click", () => {
    if (currentIndex > 1) { 
        currentIndex--;
        loadDataPromise(url)
        .then(result => {
            console.log(result);
            updateContent();
        })
        .catch(error => console.error(error));
    }
});
