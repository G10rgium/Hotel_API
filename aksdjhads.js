let cardArea = document.querySelector("section");
let roomsArea = document.querySelector("article");

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
      <div class="card-body" style="background-color: #170A1C; color: #95D7AE;">
        <h5 class="card-title">${info.name}</h5>
        <p class="card-text_1">${info.city}</p>
        <p class="card-text">${info.address}</p>
        <a href="./room.html" class="btn btn-primary">See rooms</a>
      </div>
    </div>
    `;
    });
}

let roomsAPI = "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll";



fetch(roomsAPI)
    .then((data) => data.json())
    .then((data) => htmlshi(data));


function htmlshi(data) {
    console.log(data);


    data.forEach((some) => {

        roomsArea.innerHTML += `
    <div class="card" style="width: 18rem; margin-top: 20px;">
      <img src="${some.images[0].source}" class="card-img-top" alt="...">
      <div class="card-body" style="background-color: #170A1C; color: #95D7AE;">
        <h5 class="card-title">${some.name}</h5>
        <p class="card-text_1">maximumGuests: ${some.maximumGuests}</p>
        <p class="card-text">Price: ${some.pricePerNight}$</p>
        <a href="" class="btn btn-primary">See rooms</a>
      </div>
    </div>
    `;
    });
}