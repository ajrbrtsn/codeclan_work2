// var sports = [];
// var sports = ["Football", "Tennis", "Hockey"];
// console.log(sports.length);

// var firstSport = sports[1]
// console.log(firstSport);

// sports.push("Curling")
// sports.push("Snooker")

// console.log(sports);

// sports.pop();
// console.log(sports);

// sports.unshift("Basketball")
// console.log(sports);
// sports.shift();
// console.log(sports);

// var removeSport = sports.splice(2, 1)
// console.log(sports);

// for (var currentSport of sports){
//     var uppercasedSport = currentSport.toUpperCase()
//     console.log(uppercasedSport);
// }

// // for( var i = 0; i < sports.length; i++){
// //     var currentSport = sports[i]
// //     var uppercasedSport = currentSport.toUpperCase()
// //     console.log(uppercasedSport);
// //     console.log("index", i)
// // }

// var numbers = [1,2,3,3,4,5]
// for (var i = 0; i < numbers.length; i++){
//     if (numbers[i] == numbers[i - 1]){
//         console.log("Found it");
//     }
// }

var movie = {
    title: "It\'s a wonderful life",
    year: 1946,
    language: "Spanish"
}

var title = movie.title

movie.cast = [ "James Stewart", "Donna Reed"]

movie.language = 'English'

movie['language'] = "French";

movie['rating'] = 4

movie['subtitle-language'] = 'German'

var propertyToAcess = 'subtitle-language'
console.log(movie[propertyToAcess]);

delete movie.year 


movie.ratings = {
    critic: 94,
    audience: 95
}
console.log("movie:", movie);

for(var key in movie){
    var value = movie[key]
    console.log(`The ${key} is ${value}`);
}

var keys = Object.keys(movie)
console.log('keys', keys);