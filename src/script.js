function citySearch(event) {

  event.preventDefault();

  let searchInput = document.querySelector("#formInput");
  
  let city = document.querySelector("#city");

  city.innerHTML = searchInput.value;
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", citySearch);
