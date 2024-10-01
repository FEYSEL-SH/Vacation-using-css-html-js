var detailsForm = document.querySelector("#destination_details_form");
detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault(); // Prevent form submission

  // Get the form data
  var destName = e.target.elements["name"].value;
  var destLocation = e.target.elements["location"].value;
  var destPhoto = e.target.elements["photo"].value;
  var destDesc = e.target.elements["description"].value;

  // Clear the form fields
  for (i = 0; i < detailsForm.length; i++) {
    detailsForm.elements[i].value = "";
  }

  // Create the destination card
  var destCard = createDestinationCard(
    destName,
    destLocation,
    destPhoto,
    destDesc
  );

  // Append the card to the destination container
  var wishListContainer = document.getElementById("destinations_container");
  if (wishListContainer.children.length === 0) {
    document.getElementById("title").innerHTML = "My Wish List";
  }

  wishListContainer.appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, description) {
  var card = document.createElement("div");
  card.className = "card";

  // Create and add the image
  var img = document.createElement("img");
  img.setAttribute("alt", name);

  var defaultPhotoURL = "images/signpost.jpg"; // Default image URL
  img.setAttribute("src", photoURL ? photoURL : defaultPhotoURL);
  card.appendChild(img);

  // Create the card body
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Add the card title (name)
  var cardTitle = document.createElement("h3");
  cardTitle.innerText = name;
  cardBody.appendChild(cardTitle);

  // Add the card subtitle (location)
  var cardSubtitle = document.createElement("h4");
  cardSubtitle.innerText = location;
  cardBody.appendChild(cardSubtitle);

  // Add the card text (description)
  if (description.length !== 0) {
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = description;
    cardBody.appendChild(cardText);
  }

  // Add the remove button
  var cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.innerText = "Remove";
  cardDeleteBtn.addEventListener("click", removeDestination);
  cardBody.appendChild(cardDeleteBtn);

  card.appendChild(cardBody);
  return card;
}

function removeDestination(e) {
  var card = e.target.parentElement.parentElement;
  card.remove();
}
