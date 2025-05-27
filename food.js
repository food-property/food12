   // Recipe factories

    function MakeSlatamechweya(tomato, grilledPepper, onions, salt, oliveOil, chicken) {
      var instance = {};
      instance.tomato = tomato;
      instance.grilledPepper = grilledPepper;
      instance.onions = onions;
      instance.salt = salt;
      instance.oliveOil = oliveOil;
      instance.chicken = chicken;
      instance.grilledTomato = tomato;
      instance.grilledOnion = onions;
      instance.putSalt = salt;
      instance.addGrilledSalad = addGrilledSalad;
      return instance;
    }
      // Methods for Slatamechweya
      var grilledTomato = function() {
        if (this.tomato === 'grilled') {
          console.log("Tomato is ready to make grilled salad");
        }
      };
      var grilledOnion = function() {
        if (this.onions === 'grilled') {
          console.log("Onion is ready to make grilled salad");
        }
      };
      var grilledPepper = function() {
        if (this.grilledPepper === 'grilled') {
          console.log("Pepper is ready to make grilled salad");
        }
      };
      var putSalt = function() {
        if (this.salt === '1g') {
          console.log("Salt is ready to put in slata mechweya");
        }
      };
      var addGrilledSalad = function() {
        console.log("Adding grilled salad ingredients together.");
      };
      var myTajin = MakeTajin('grilled',  '1/4cup', '50g');
  myTajin.makeChicken();
  myTajin.makeEggs();
  myTajin.makeGratedCheese();
  myTajin.makeOliveOil();
  myTajin.addTajin();


    function MakeTajin(chicken, eggs ,oliveOil, gratedCheese) {
      var instance = {};
      instance.chicken = chicken;
      instance.eggs = eggs;
      instance.oliveOil = oliveOil;
      instance.gratedCheese = gratedCheese;
      instance.makeChicken = chicken;
      instance.makeEggs = eggs;
      instance.makeGratedCheese = gratedCheese;
      return instance;}
      // Methods for Tajin
      var makeChicken = function() {
        if (this.chicken === 'grilled') {
          console.log("Chicken is ready to make Tajin");
        }
      };
      var makeEggs = function() {
        if (this.eggs === 8) {
          console.log("Eggs are ready to make Tajin");
        }
      };
      var makeGratedCheese = function() {
        if (this.gratedCheese === '50g') {
          console.log("Grated cheese is ready to make Tajin");
        }
      };
      var makeOliveOil = function() {
        if (this.oliveOil === '1/4cup') {
          console.log("Olive oil is ready to make Tajin");
        }
      };
      var addTajin = function() {
        console.log("Adding Tajin ingredients together.");
      };
      var myTajin = MakeTajin('grilled', 8, '1/4cup', '50g');
  myTajin.makeChicken();
  myTajin.makeEggs();
  myTajin.makeGratedCheese();
  myTajin.makeOliveOil();
  myTajin.addTajin();

function MakeSpaghetti(spaghetti, tomatoSauce, salt, blackPepper, oliveOil, clovesGarlicMinced, minceMeat, pat) {
  var instance = {};
  instance.spaghetti = spaghetti;
  instance.tomatoSauce = tomatoSauce;
  instance.salt = salt;
  instance.blackPepper = blackPepper;
  instance.oliveOil = oliveOil;
  instance.clovesGarlicMinced = clovesGarlicMinced;
  instance.minceMeat = minceMeat;
  instance.pat = pat;
  instance.putSalt = PutSalt;
  instance.makeBlackPepper = MakeBlackPepper;
  instance.makeOliveOil = MakeOliveOil;
  instance.makeGarlic = MakeClovesGarlicMinced;
  instance.makeMinceMeat = MakeMinceMeat;
  instance.makeTomatoSauce = MakeTomatoSauce;
  instance.makePat = MakePat;
  instance.addSpaghetti = AddSpaghetti;

  return instance;
}

// Methods
var PutSalt = function () {
  if (this.salt === '2gr') {
    console.log("Salt is ready to make spaghetti");
  }
};

var MakeBlackPepper = function () {
  if (this.blackPepper === '2gr') {
    console.log("Black pepper is ready to make spaghetti");
  }
};

var MakeOliveOil = function () {
  if (this.oliveOil === '2 tablespoons') {
    console.log("Olive Oil is ready to make spaghetti");
  }
};

var MakeClovesGarlicMinced = function () {
  if (this.clovesGarlicMinced === 7) {
    console.log("Garlic cloves (minced) are ready to make spaghetti");
  }
};

var MakeMinceMeat = function () {
  if (this.minceMeat === '400gr') {
    console.log("Mince meat is ready to make spaghetti");
  }
};

var MakeTomatoSauce = function () {
  if (this.tomatoSauce === 'cooked') {
    console.log("Tomato sauce is ready to make spaghetti");
  }
};

var MakePat = function () {
  if (this.pat === 'cooked') {
    console.log("Spaghetti pasta is ready to be used");
  }
};

var AddSpaghetti = function () {
  console.log("Combining all spaghetti ingredients...");
};
var mySpaghetti = MakeSpaghetti(
  'spaghetti',
  'cooked',
  '2gr',
  '2gr',
  '2 tablespoons',
  7,
  '400gr',
  'cooked'
);

mySpaghetti.putSalt();
mySpaghetti.makeBlackPepper();
mySpaghetti.makeOliveOil();
mySpaghetti.makeGarlic();
mySpaghetti.makeMinceMeat();
mySpaghetti.makeTomatoSauce();
mySpaghetti.makePat();
mySpaghetti.addSpaghetti();

function MakeBorzgen(lambmeat, couscous, rosemary, salt, sugar, butter, milk, dates, peanuts) {
  var instance = {};
  instance.lambmeat = lambmeat;
  instance.couscous = couscous;
  instance.rosemary = rosemary;
  instance.salt = salt;
  instance.sugar = sugar;
  instance.butter = butter;
  instance.milk = milk;
  instance.dates = dates;
  instance.peanuts = peanuts;

  // Methods
  instance.makeLambMeat = MakeLambMeat;
  instance.makeCouscous = MakeCouscous;
  instance.makeSalt = MakeSalt;
  instance.makeSugar = MakeSugar;
  instance.makeButter = MakeButter;
  instance.makeMilk = MakeMilk;
  instance.makeDates = MakeDates;
  instance.makePeanuts = MakePeanuts;
  instance.addBorzgen = AddBorzgen;

  return instance;
}

// Ingredient check functions
var MakeLambMeat = function () {
  if (this.lambmeat === "700gr") {
    console.log("Lamb meat is ready to make Borzgen");
  }
};
var MakeCouscous = function () {
  if (this.couscous === "750gr") {
    console.log("Couscous is ready to make Borzgen");
  }
};
var MakeSalt = function () {
  if (this.salt === "1tbsp") {
    console.log("Salt is ready to make Borzgen");
  }
};
var MakeSugar = function () {
  if (this.sugar === "100gr") {
    console.log("Sugar is ready to make Borzgen");
  }
};
var MakeButter = function () {
  if (this.butter === "200gr") {
    console.log("Butter is ready to make Borzgen");
  }
};
var MakeMilk = function () {
  if (this.milk === "250ml") {
    console.log("Milk is ready to make Borzgen");
  }
};
var MakeDates = function () {
  if (this.dates === "500gr") {
    console.log("Dates are ready to make Borzgen");
  }
};
var MakePeanuts = function () {
  if (this.peanuts === "250gr") {
    console.log("Peanuts are ready to make Borzgen");
  }
};

var AddBorzgen = function () {
  console.log("All ingredients are combined to make Borzgen!");
};
var myBorzgen = MakeBorzgen(
  "700gr", "750gr", "some", "1tbsp", "100gr", "200gr", "250ml", "500gr", "250gr"
);

myBorzgen.makeLambMeat();
myBorzgen.makeCouscous();
myBorzgen.makeSalt();
myBorzgen.makeSugar();
myBorzgen.makeButter();
myBorzgen.makeMilk();
myBorzgen.makeDates();
myBorzgen.makePeanuts();
myBorzgen.addBorzgen();
    // DOM elements
    var cardContainer = document.getElementById('card-container');
    var addButton = document.getElementById('add-card');
    var cardTextInput = document.getElementById('card-text');

    addButton.addEventListener('click', function() {
      var text = cardTextInput.value.trim().toLowerCase();
       console.log("You entered:", text);
      // Validate input


      if (text === '') {
        alert('Please enter a recipe name.');
        return;
      }

      var recipeInstance;
      var cardContentText = '';

      if (text === 'slatamechweya') {
        recipeInstance = MakeSlatamechweya('grilled', 'grilled', 'grilled', '1g', 'olive oil',  'chicken');
        cardContentText = 'A delicious grilled salad with tomato, pepper, onion, eggs, and chicken.';
      } else if (text === 'tajin') {
        recipeInstance = MakeTajin('grilled', 8, '1/4cup', '50g');
        cardContentText = 'Traditional Tajin with grilled chicken, eggs, olive oil and cheese.';
      } else {
        cardContentText = 'Recipe details not available.';
      }

      // Create card
      var newCard = document.createElement('div');
      newCard.className = 'card';
      newCard.innerHTML = `
        <h3 class="card-title">${text.charAt(0).toUpperCase() + text.slice(1)}</h3>
        <p class="card-content">${cardContentText}</p>
      `;
      cardContainer.appendChild(newCard);

      cardTextInput.value = '';

      // Toggle selected and text on click
      newCard.addEventListener('click', function() {
        newCard.classList.toggle('selected');
        var content = newCard.querySelector('.card-content');
        if (content) {
          content.textContent = newCard.classList.contains('selected') ? 'Card Selected!' : cardContentText;
        }
      });

      // Call recipe methods for console output (optional)
      if (recipeInstance) {
        if (recipeInstance.grilledTomato) recipeInstance.grilledTomato();
        if (recipeInstance.grilledOnion) recipeInstance.grilledOnion();
        if (recipeInstance.grilledPepper) recipeInstance.grilledPepper();
        if (recipeInstance.makeEggs) recipeInstance.makeEggs();
        if (recipeInstance.putSalt) recipeInstance.putSalt();
        if (recipeInstance.addGrilledSalad) recipeInstance.addGrilledSalad();

        if (recipeInstance.makeChicken) recipeInstance.makeChicken();
        if (recipeInstance.makeGratedCheese) recipeInstance.makeGratedCheese();
        if (recipeInstance.makeOliveOil) recipeInstance.makeOliveOil();
        if (recipeInstance.addTajin) recipeInstance.addTajin();
      }
    });
