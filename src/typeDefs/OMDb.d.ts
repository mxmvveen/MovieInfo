export interface OMBdSearchMovieResult {
    Title: string;
    Year: string;
    imdbID: string;
    type: string;
    poster: string;
}

export interface OMBdSearchMoviesResult {
    Search: OMBdSearchMovieResult[];
    totalResults: string;
    Response: string;
}