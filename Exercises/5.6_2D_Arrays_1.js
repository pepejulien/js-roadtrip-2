// Video 5.1 accompanies this exercise

// Check out the code below. Enter a line of code that declares a variable
// called infant and accesses the word "Baby" from eightiesMovies without
// making any changes to either element inside the array. Then log infant
// to the console to check our answer.

const movie1 = [16, "Candles"];
const movie2 = [3, "Men", "and", "a", "Baby"];
const eightiesMovies = [movie1, movie2];

const infant = eightiesMovies[1][4]

console.log(infant);
