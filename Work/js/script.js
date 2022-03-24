"use strict";

let numberOfFilms;

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start : function() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
  },
  rememberMyFilms : function() {
    for (let i = 0; i < 2; i += 1) {
      let a = prompt('Один из последних просмотренных фильмов?', '');
      let b = prompt('На сколько оцените его?', '');
      if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i -= 1;
      }
    }
  },
  detectPersonalLevel : function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  writeYourGenres : function() {
    for (let i = 0; i < 3; i += 1) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
      if (personalMovieDB.genres[i] === '' || personalMovieDB.genres[i] === null) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
        i -= 1;
      } 
    }
    personalMovieDB.genres.forEach(function(value, index) {
      console.log(`Любимый жанр #${index + 1} - это ${value}`);
    });
  },
  showMyDB : function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisebleMyDB : function(hidden) {
    switch (hidden) {
      case true:
        personalMovieDB.private = false;
        break;
      case false:
        personalMovieDB.private = true;
        break;  
    }
  }
};

personalMovieDB.writeYourGenres();

// rememberMyFilms();

// detectPersonalLevel();

// writeYourGenres();

// showMyDB(personalMovieDB.privat);
