 var slicedMovies = movies.slice(130, 140);
 var elCard = document.querySelector("#row-card");

    function renderMovies(array, card){

        card.innerHTML = null;
//        for (let i = 0; i < array.length; i++) {
//     var newCardDiv = document.createElement("div")
//     newCardDiv.classList = "card" 
//     var newImg = document.createElement("img");
//     newImg.classList = "card-img-top";
//     newImg.src = `https://i.ytimg.com/vi/${array[i].ytid}/mqdefault.jpg`;

//     var newCardBody = document.createElement("div")
//     newCardBody.classList = "card-body"
//     var newH3 = document.createElement("h3")
//     newH3.classList = "card-title"
//     var newColCard = document.createElement("div")

//     newColCard.classList = "col-6 my-2";
    
//     newH3.textContent = array[i].Title
//     newCardBody.appendChild(newH3)
//     newCardDiv.appendChild(newImg)
//     newCardDiv.appendChild(newCardBody)
//     newColCard.appendChild(newCardDiv)
    
//     elCard.appendChild(newColCard)
    
    
// }
//   for of bilan 
 for (const item of array) {
    var newCardDiv = document.createElement("div")
    newCardDiv.classList = "card" 
    var newImg = document.createElement("img");
    newImg.classList = "card-img-top";
    newImg.src = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`;

    var newCardBody = document.createElement("div")
    newCardBody.classList = "card-body"
    var newH3 = document.createElement("h3")
    newH3.classList = "card-title"
    var newColCard = document.createElement("div")

    newColCard.classList = "col-6 my-2";
    
    newH3.textContent = item.Title
    newCardBody.appendChild(newH3)
    newCardDiv.appendChild(newImg)
    newCardDiv.appendChild(newCardBody)
    newColCard.appendChild(newCardDiv)
    
    elCard.appendChild(newColCard)
 }
    }
    renderMovies(slicedMovies, elCard)


