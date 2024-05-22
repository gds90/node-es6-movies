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
    #title;
    #year;
    #genre;
    #rating;
    #type;

    constructor(title, year, genre, rating, type) {
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
        this.#type = type;
    }

    // Getter
    get title() {
        return this.#title;
    }
    get year() {
        return this.#year;
    }
    get genre() {
        return this.#genre;
    }
    get rating() {
        return this.#rating;
    }
    get type() {
        return this.#type;
    }

    // Setter
    set title(newTitle) {
        this.#title = newTitle;
    }
    set year(newYear) {
        this.#year = newYear;
    }
    set genre(newGenre) {
        this.#genre = newGenre;
    }
    set rating(newRating) {
        this.#rating = newRating;
    }
    set type(newType) {
        this.#type = newType;
    }

    toString() {
        return `${this.#title} è un film di genere ${this.#genre}. È stato rilasciato nel ${this.#year} ed ha un voto di ${this.#rating}.`
    }
}

// Classe TvSerie
class TvSerie extends Movie {
    #title;
    #year;
    #genre;
    #rating;
    #type;
    #seasons;

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.#seasons = seasons;
    }

    // Getter
    get title() {
        return this.#title;
    }
    get year() {
        return this.#year;
    }
    get genre() {
        return this.#genre;
    }
    get rating() {
        return this.#rating;
    }
    get type() {
        return this.#type;
    }
    get seasons() {
        return this.#seasons;
    }

    // Setter
    set title(newTitle) {
        this.#title = newTitle;
    }
    set year(newYear) {
        this.#year = newYear;
    }
    set genre(newGenre) {
        this.#genre = newGenre;
    }
    set rating(newRating) {
        this.#rating = newRating;
    }
    set type(newType) {
        this.#type = newType;
    }
    set seasons(newSeasons) {
        this.#seasons = newSeasons;
    }

    toString() {
        return `${this.#title} è una serie tv di genere ${this.#genre}. La prima stagione è stata rilasciata nel ${this.#year} ed in totale sono state prodotte ${this.#seasons} stagioni. Ha un voto di ${this.#rating}.`
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

// Funzione che restituisca la media dei voti di tutti i film per un determinato genere. 
function averageRating(mediaArr, genre) {
    const filteredMedia = mediaArr.filter(media => media.genre === genre);
    const rateSum = filteredMedia.reduce((sum, media) => sum + media.rating, 0);
    return rateSum / filteredMedia.length;
}

console.log(averageRating(mediaArray, "Drama"));

// Funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
function genresList(mediaArr) {
    const genres = [];
    mediaArr.forEach((item) => {
        if (!genres.includes(item.genre)) {
            genres.push(item.genre);
        }
    });
    return genres;
}

console.log(genresList(mediaArray));

// Funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all'interno il risultato della funzione toString() di ogni film.
function filteredMediaByGenre(mediaArr, genre) {
    const filteredMedia = mediaArr.filter(media => media.genre === genre);
    const filteredMediaToString = filteredMedia.map(media => media.toString());
    return filteredMediaToString;
}

console.log(filteredMediaByGenre(mediaArrayMapped, "Action"));

// Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99
class Cart {
    constructor() {
        this.cart = [];
    }

    addMovie(movie) {
        this.cart.push(movie);
    }

    removeMovie(movie) {
        const index = this.cart.indexOf(movie);
        if (index > -1) {
            this.cart.splice(index, 1);
        } else {
            console.log("Film non trovato");
        }
    }

    totalCost() {
        let total = 0;
        this.cart.forEach(() => {
            total += 3.99;
        });
        return (total + '€');
    }
}

const cart = new Cart();
cart.addMovie(mediaArray[0]);
cart.addMovie(mediaArray[1]);
cart.addMovie(mediaArray[1]);
cart.addMovie(mediaArray[2]);
console.log(cart);
console.log(cart.totalCost());
cart.removeMovie(mediaArray[0]);
console.log(cart);
cart.removeMovie(mediaArray[4]);
console.log(cart);
console.log(cart.totalCost());
cart.removeMovie(mediaArray[2]);
console.log(cart.totalCost());

