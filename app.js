let cardArea = document.querySelector("section");

let apiURL = "https://hotelbooking.stepprojects.ge/api/Hotels/GetAll";

fetch(apiURL)
    .then((response) => response.json())
    .then((response) => intoHtml(response));


function intoHtml(response) {
    console.log(response);


    response.forEach((info) => {

        cardArea.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${info.featuredImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${info.name}</h5>
        <p class="card-text_1">${info.city}</p>
        <p class="card-text">${info.address}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
    });
}