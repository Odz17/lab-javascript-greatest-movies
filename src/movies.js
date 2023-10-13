// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsList = moviesArray.map( (item) => {
        return item.director;
    }); 
    return directorsList;
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (movies.length === 0) {
       return 0;
    }
        const SpielbergDramas = moviesArray.filter((item) => {
        if ('Steven Spielberg' === item.director && item.genre.includes ("Drama")) {
        return item;
        }
          
    });
    return SpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

  const scores = moviesArray.filter(movie => typeof movie.score === ("number")).map(movie => movie.score);
    if (scores.length === 0) {
        return 0;
    }    
    
  const average = scores.reduce((total, score) => total + score, 0) / scores.length;
    return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
   const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
      
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    return [...moviesArray].sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    return moviesArray.map(movie => moviesArray.title).sort().slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const durationParts = movie.duration.split(' ');
        let totalMinutes = 0;
        for (const part of durationParts) {
          if (part.includes('h')) {
            totalMinutes += parseInt(part) * 60;
          } else if (part.includes('min')) {
            totalMinutes += parseInt(part);
          }
        }
        return { ...movie, duration: totalMinutes };
      });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) return null;
  
  const years = [...new Set(movies.map(movie => movie.year))];
  let bestYear = years[0];
  let bestAverage = -1;

  for (const year of years) {
    const yearMovies = movies.filter(movie => movie.year === year);
    const average = scoresAverage(yearMovies);
    
    if (average > bestAverage || (average === bestAverage && year < bestYear)) {
      bestYear = year;
      bestAverage = average;
    }
  }
  
  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}
