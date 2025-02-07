function updateContent(index){
    let info = data[index]
    document.getElementById("title").innerHTML = info.title;
    document.getElementById("image").src = info.imageUrl;
    document.getElementById("description").innerHTML = info.description;
}

let data = [];
let currentIndex = 0;

const ajax = new XMLHttpRequest();
ajax.open("GET", "data.json", true);
ajax.onload = function(){
    data = JSON.parse(this.responseText);
    updateContent(0)
};
ajax.send();

document.getElementById("right").addEventListener("click", () =>{
    if(currentIndex < data.length-1){
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
        currentIndex += data.length;
        updateContent(currentIndex)
    }
    updateContent(currentIndex)
})