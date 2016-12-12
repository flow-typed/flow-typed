

declare module 'moviedb' {
			declare function apiKeyAcceptor(key: string): MovieDB.IMovieDB

		declare module.exports: undefined


}

declare module 'npm$namespace$MovieDB' {
		declare export interface IMovieDB {
		searchMovie(
		params: SearchOptions, callback: (err: any, movies: SearchResults) => void
	): void,
		movieInfo(options: InfoOptions, callback: (err: any, curMovie: Movie) => void): void
	}

	declare export interface SearchOptions {
		query: string
	}

	declare export interface InfoOptions {
		id: number
	}

	declare export interface SearchResults {
		page: number,
		results: SearchResult[],
		total_Pages: number,
		total_results: number
	}

	declare export interface SearchResult {
		adult: boolean,
		backdrop_path: string,
		id: number,
		original_title: string,
		release_date: Date,
		poster_path: string,
		popularity: number,
		title: string,
		vote_average: number,
		vote_count: number
	}

	declare export interface Movie {
		adult: boolean,
		backdrop_path: string,
		belongs_to_collection: any,
		budget: number,
		genres: Genre[],
		homepage: string,
		id: number,
		imdb_id: number,
		original_title: string,
		overview: string,
		popularity: number,
		poster_path: string,
		production_companies: ProductionCompany[],
		production_countries: ProductionCountry[],
		release_date: Date,
		revenue: number,
		runtime: number,
		spoken_languages: SpokenLanguage[],
		status: string,
		tagline: string,
		title: string,
		vote_average: number,
		vote_count: number
	}

	declare export interface Genre {
		id: number,
		name: string
	}

	declare export interface ProductionCompany {
		id: number,
		name: string
	}

	declare export interface ProductionCountry {
		iso_3166_1: number,
		name: string
	}

	declare export interface SpokenLanguage {
		iso_639_1: number,
		name: string
	}

			
}