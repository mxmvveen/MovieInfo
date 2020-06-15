export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface SearchMoviesResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
}