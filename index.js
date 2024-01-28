class Movie {
    constructor(title, director, genre, releaseYear, stock) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.stock = stock;
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(title, director, genre, releaseYear, stock) {
        const movie = new Movie(title, director, genre, releaseYear, stock);
        this.movies.push(movie);
    }

    rentMovie(title) {
        const movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            if (movie.stock > 0) {
                movie.stock--;
                console.log(`You have rented "${title}". Enjoy your movie!`);
            } else {
                console.log(`Sorry, "${title}" is out of stock.`);
            }
        } else {
            console.log(`Sorry, "${title}" is not available in the store.`);
        }
    }

    addStock(title, quantity) {
        const movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            movie.stock += quantity;
            console.log(`Added ${quantity} stock to "${title}".`);
        } else {
            console.log(`Sorry, "${title}" is not available in the store.`);
        }
    }

    listMovies() {
        console.log("Movies available in the store:");
        this.movies.forEach(movie => {
            console.log(`${movie.title} - Director: ${movie.director}, Genre: ${movie.genre}, Release Year: ${movie.releaseYear}, Stock: ${movie.stock}`);
        });
    }
}

const movieStore = new MovieStore();

movieStore.addMovie("Inception", "Christopher Nolan", "Sci-Fi", 2010, 5);
movieStore.addMovie("The Shawshank Redemption", "Frank Darabont", "Drama", 1994, 3);
movieStore.addMovie("The Dark Knight", "Christopher Nolan", "Action", 2008, 7);

movieStore.listMovies();

movieStore.rentMovie("Inception");
movieStore.rentMovie("Inception");
movieStore.rentMovie("The Dark Knight");

movieStore.addStock("Inception", 3);

movieStore.listMovies();