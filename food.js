// Food Recipe Card Application
// This is an object named recipes that stores several recipes.
// Each recipe ( slata, tajin) is a key with a corresponding object value.
// Each recipe object contains:
// title: The name of the recipe.
// ingredients: A list of ingredients (array of strings).
// image: A path to an image representing the dish.
var  recipes = {
  slata: {
    title: "Slata Mechweya",
    ingredients: [
      "Grilled Tomatoes",
      "Grilled Peppers",
      "Grilled Onions",
      "Salt (1g)",
      "Olive Oil",
      "Grilled Chicken"
    ],
    image: "./img/slata.jpg"
  },
  tajin: {
    title: "Tajin",
    ingredients: [
      "Grilled Chicken",
      "8 Eggs",
      "1/4 cup Olive Oil",
      "50g Grated Cheese"
    ],
    image: "./img/s.jpg"
  },
  borzgen: {
    title: "Borzgen",
    ingredients: [
      "700g Lamb Meat",
      "750g Couscous",
      "Rosemary",
      "1 tbsp Salt",
      "100g Sugar",
      "200g Butter",
      "250ml Milk",
      "500g Dates",
      "250g Peanuts"
    ],
    image: "./img/borzegen.jpeg"
  },
  spaghetti: {
    title: "Spaghetti",
    ingredients: [
      "Spaghetti Pasta (cooked)",
      "Tomato Sauce (cooked)",
      "2g Salt",
      "2g Black Pepper",
      "2 tbsp Olive Oil",
      "7 Garlic Cloves (minced)",
      "400g Minced Meat"
    ],
    image: "./img/coscous.jpeg"
  }
};

// Reference DOM elements
// These lines connect your JavaScript code to HTML elements using their id.

// input: Where users type the recipe name.

// addButton: The "Add Card" button the user clicks.

// container: The section where new recipe cards will appear on the page.
var input = document.getElementById("card-input");
var addButton = document.getElementById("add-card");
var  container = document.getElementById("card-container");

// Handle Add Card button click
addButton.addEventListener("click", function() { // Runs the code when the button is clicked
  // Get the text entered by the user
  var userInput = input.value; //Gets the text the user typed.

  // Remove spaces at the beginning and end
  userInput = userInput.trim(); // Removes extra spaces from the start and end.

  // Change all letters to lowercase
  userInput = userInput.toLowerCase();//Converts all letters to lowercase so it's easier to compare.

  // Match user input to recipe keys
  var recipeKey = null;
  var recipeNames = ["slata", "tajin", "borzgen", "spaghetti"];

// Loop through each recipe name
for (var i = 0; i < recipeNames.length; i++) {
  if (userInput.includes(recipeNames[i])) {
    recipeKey = recipeNames[i];
    break; // Stop the loop once we find a match
  }
}
// Check if a recipe key was found
if (recipeKey !== null) { //Makes sure the user typed a valid recipe name
  // Get the recipe object
  var recipe = recipes[recipeKey];// Accesses the correct recipe from the recipes object

  // Show the recipe card
  addRecipeCard(recipe);//Calls the function to show the recipe on the page

  // Clear the input box
  input.value = "";//Clears the input box after adding the card
} else {
  // If recipe not found, show an alert
  alert("Recipe not found. Try Slata, Tajin, Borzgen or Spaghetti."); //Shows a message if the input didn't match any recipe.
}
});

// Function to create and show a card
function addRecipeCard(recipe) { //This is the start of the function named addRecipeCard.
  //It accepts one parameter: recipe — an object that contains the recipe's title, image path, and a list of ingredients.
  // Create a new div for the recipe card
  var card = document.createElement("div");// Creates a new div element to hold the recipe card
  card.classList.add("card"); // Add a CSS class to the div

  // Create an image element
  var image = document.createElement("img");//A new <img> tag is created to show the recipe's image.
  image.classList.add("card-image");// Adds a CSS class to the image for styling
  image.src = recipe.image; // Sets the source of the image to the path provided in the recipe object
  image.alt = recipe.title;// Sets the alt text of the image to the recipe title for accessibility

  // Create a title (h3 element)
  var title = document.createElement("h3");// Creates a new <h3> tag for the recipe title
  title.classList.add("card-title");// Adds a CSS class to the title for styling
  title.textContent = recipe.title;// Sets the text content of the title to the recipe's title from the recipe object

  // Create a list (ul element) for ingredients
  var list = document.createElement("ul");// Creates a new <ul> tag to hold the list of ingredients
  list.classList.add("card-content");// Adds a CSS class to the list for styling

  // Add each ingredient to the list
  //This for loop goes through each ingredient in the recipe.ingredients array
  for (var i = 0; i < recipe.ingredients.length; i++) {
    var item = document.createElement("li");//Creates a <li> (list item).
    item.textContent = recipe.ingredients[i];//Sets the text to the ingredient's name.
    list.appendChild(item);//Adds it to the <ul> list
  }

  // Add image, title, and list to the card
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(list);

  // Add the card to the container on the page
  container.appendChild(card);
}

