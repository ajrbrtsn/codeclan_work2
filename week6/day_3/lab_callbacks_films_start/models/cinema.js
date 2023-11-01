const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  const litsOfTitles = this.films.map((film)=>{
    return film.title
  })
   return litsOfTitles
}

Cinema.prototype.filmByTitle = function(title){
  const findFilm = this.films.find((film) => {
    return film.title === ('Moonlight')
  })
    return findFilm
}
Cinema.prototype.filterByGenre = function(genre){
  const actual = this.films.filter((film) => {
    return film.genre == genre
  })
    return actual
}
Cinema.prototype.filmByYear = function(year){
  const actual = this.films.filter((film) => {
    return film.year == year
  })
    return actual
}



Cinema.prototype.filmsByProperty = function(property, value){
  return this.films.filter((film) => {
    return film[property] == value
  })
}


module.exports = Cinema;
