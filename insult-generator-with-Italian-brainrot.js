// THE INSULT GENERATOR

// Body parts array: a list of different body parts to use in the insult
var randomBodyParts = ["Face", "Nose", "Hair", "Arms", "Legs", "Feet", "Hands"];

// Adjectives array: descriptive words, usually mean or silly
var randomAdjectives = ["Smelly", "Boring", "Stupid", "Nasty", "Absurd", "Unreliable"];

// Array for random words: funny, weird, or nonsense words to make the insult silly
var randomWords = [
  "Fly",
  "Marmot",
  "Stick",
  "Monkey",
  "Rat",
  "Roadkill",
  "Tung tung tung tung tung tung tung tung tung tung tung tung tung tung tung tung sahur",
  "Tralaleo tralala",
  "Pot Hotspot",
  "Garamararamararaman dan Madudungdung tak tuntung perkuntung",
  "Trippa Troppa Tralala Lirilì Rilà Tung Tung Sahur Boneca Tung Tung Tralalelo Trippi Troppa Crocodina",
  "Tung Tung Tung Tung Tung Tung Tung Tung Tung Assassino Boneca"
];

// Pick a random body part from the randomBodyParts array
// Math.random() gives a number between 0 and 1
// Math.random() * 7 gives a number between 0 and just under 7
// Math.floor(...) rounds that down to a whole number from 0 to 6
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 7)];

// Pick a random adjective from the randomAdjectives array
// Math.floor(Math.random() * 6) gives a number from 0 to 5
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 6)];

// Pick a random word from the randomWords array
// Math.floor(Math.random() * 12) gives a number from 0 to 11
var randomWord = randomWords[Math.floor(Math.random() * 12)];

// Join all the random strings into a sentence
// The result will look something like:
// "Your Nose is like a Stupid Monkey!!!"
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

// Show the insult using an alert popup box
alert(randomInsult);
