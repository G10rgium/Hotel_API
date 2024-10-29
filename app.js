const cardArea = document.querySelector('.api');
let cardArea_1 = document.querySelector("article");
let apiURL = "https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/1";

fetch(apiURL)
  .then((response) => response.json())
  .then((response) => intoHtml(response));


function intoHtml(response) {
  console.log(response);


  cardArea.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${response.featuredImage}" class="card-img-top" alt="...">
      <div class="card-body" style="background-color: #170A1C; color: #95D7AE;">
        <h5 class="card-title">${response.name}</h5>
        <p class="card-text_1">${response.city}</p>
        <p class="card-text">${response.address}</p>
        <a href="./bilt.html" class="btn btn-primary">See rooms</a>
      </div>
    </div>
    `;
}



// function intoHtml(response) {
//   console.log(response);


//   response.forEach((some) => {

//     cardArea_1.innerHTML += `
// <div class="card" style="width: 18rem; margin-top: 20px;">
//   <img src="${some.images[0].source}" class="card-img-top" alt="...">
//   <div class="card-body" style="background-color: #170A1C; color: #95D7AE;">
//     <h5 class="card-title">${some.name}</h5>
//     <p class="card-text_1">maximumGuests: ${some.maximumGuests}</p>
//     <p class="card-text">Price: ${some.pricePerNight}$</p>
//     <a href="" class="btn btn-primary">See rooms</a>
//   </div>
// </div>
// `;
//   });
// }