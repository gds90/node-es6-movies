// Array di film e serie TV
const mediaArray = [
    { title: "Dark", year: 2017, genre: "Thriller", rating: 10, type: "tv", seasons: 3 },
    { title: "Breaking Bad", year: 2008, genre: "Drama", rating: 9.5, type: "tv", seasons: 5 },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 9, type: "movie" },
    { title: "Stranger Things", year: 2016, genre: "Horror", rating: 7.5, type: "tv", seasons: 4 },
    { title: "Game of Thrones", year: 2011, genre: "Fantasy", rating: 8.5, type: "tv", seasons: 8 },
    { title: "Inception", year: 2010, genre: "Action", rating: 8, type: "movie" },
    { title: "The Matrix", year: 1999, genre: "Action", rating: 9, type: "movie" },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9, type: "movie" },
    { title: "Shutter Island", year: 2010, genre: "Thriller", rating: 8.5, type: "movie" },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9, type: "movie" },
    { title: "Peaky Blinders", year: 2013, genre: "Drama", rating: 8.5, type: "tv", seasons: 6 },
    { title: "Chernobyl", year: 2019, genre: "Drama", rating: 9.5, type: "tv", seasons: 1 }
];

// Classe Movie
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    toString() {
        return `${this.title} è un film di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`
    }
}

// Classe TvSerie
class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`
    }
}

// Tramite la funzione .map() creo un nuovo array di istanze delle classi Movie o TvSerie in base al genere di media
const mediaArrayMapped = mediaArray.map((media) => {
    if (media.type === "movie") {
        return new Movie(media.title, media.year, media.genre, media.rating, media.type);
    } else {
        return new TvSerie(media.title, media.year, media.genre, media.rating, media.type, media.seasons);
    }
});

console.log(mediaArrayMapped);

// Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.
function averageRating(mediaArr, genre) {
    const filteredMedia = mediaArr.filter(media => media.genre === genre);
    const rateSum = filteredMedia.reduce((sum, media) => sum + media.rating, 0);
    return rateSum / filteredMedia.length;
}

console.log(averageRating(mediaArray, "Drama"));
