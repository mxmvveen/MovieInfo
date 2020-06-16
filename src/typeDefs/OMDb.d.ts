export interface OMDbMovie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface OMDbSearchMoviesResponse {
    Search: OMDbMovie[];
    totalResults: string;
    Response: string;
}