let apiKey = 'FBC04834-43BE-4702-943C-AFDC9A310F9F'; 
let data = {};
let currentIndex = 0;

const cryptos = [
    { name: "Bitcoin", symbol: "BTC", image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" },
    { name: "Ethereum", symbol: "ETH", image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" },
    { name: "Litecoin", symbol: "LTC", image: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" }
];

function updateContent() {
    let crypto = cryptos[currentIndex];
    document.getElementById("title").innerHTML = crypto.name;
    document.getElementById("image").src = crypto.image;
    document.getElementById("price").innerHTML = `Price: ${data.rate} USD`;
}

function loadDataPromise(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            headers: {
                'X-CoinAPI-Key': apiKey
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                reject("No Data");
            }
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

function loadAndUpdate() {
    let crypto = cryptos[currentIndex];
    let url = `https://rest.coinapi.io/v1/exchangerate/${crypto.symbol}/USD`;
    loadDataPromise(url)
        .then(result => {
            console.log(result);
            data = result;
            updateContent();
        })
        .catch(error => console.error(error));
}

loadAndUpdate();
document.getElementById("right").addEventListener("click", () => {
    if (currentIndex < cryptos.length - 1) {
        currentIndex++;
        console.log(currentIndex);
        loadAndUpdate();
    }
});

document.getElementById("left").addEventListener("click", () => {
    if (currentIndex > 0) { 
        currentIndex--;
        console.log(currentIndex);
        loadAndUpdate();
    }
});

