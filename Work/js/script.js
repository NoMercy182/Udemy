"use strict";

const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for (let i = 0; i < 2; i += 1) {
  let a = prompt('Один из последних просмотренных фильмов?', '');
  let b = prompt('На сколько оцените его?', '');
  if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i -= 1;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);
