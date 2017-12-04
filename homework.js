Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// "My name is Keith"


Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// score was reassigned to 3 before it was returned.
// output is 3


Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// myAnimals was reassigned before the loop
// 0: Ducks
// 1: Dogs
// 2: Lions


Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// suspectThree was reassigned to 'Harvey' before the allSuspects console.log
// reassignment of suspectThree is within scope of allSuspects
// last console.log will display 'Keith' instead.
// "Suspects include: Jay, Val, Harvey, Rick
// "Suspect three is: Keith"


Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// detective's name was reassigned before printName was called
// "Poirot"


Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// murdered was reassigned in outerFunction and then again in innerFunction.
// the final murdered is valerie.
// "The murdered is valerie"


Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the
// rest of the class will work out together what happened and
// what the output will be.
