// Video 5.1 accompanies this exercise

// Now alert a string with the full title of the first movie in the
// eightiesMovies array, but only using the eightiesMovies variable to access
// the correct values. Use the concatenation operator to unite the words into
// one string, and remember to be attentive to necessary whitespace!

const movie1 = [16, "Candles"];
const movie2 = [3, "Men", "and", "a", "Baby"];
const eightiesMovies = [movie1, movie2];

const first = eightiesMovies[1][0]
const second = eightiesMovies[1][1]
const third= eightiesMovies[1][2]
const fourth = eightiesMovies[1][3]
const fifth = eightiesMovies[1][4]

const title = `${first} ${second} ${third} ${fourth} ${fifth}`
console.log(title);
