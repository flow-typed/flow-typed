

declare module 'spotify-api' {
					
}

declare module 'npm$namespace$SpotifyApi' {
		declare interface SearchForItemParameterObject {
		q?: string,
		type?: string,
		market?: string,
		limit?: number,
		offset?: number
	}

	declare interface RecommendationsOptionsObject {
		limit?: number,
		market?: string,
		max_acousticness?: number,
		max_danceability?: number,
		max_duration_ms?: number,
		max_energy?: number,
		max_instrumentalness?: number,
		max_key?: number,
		max_liveness?: number,
		max_loudness?: number,
		max_mode?: number,
		max_popularity?: number,
		max_speechiness?: number,
		max_tempo?: number,
		max_time_signature?: number,
		max_valence?: number,
		min_acousticness?: number,
		min_danceability?: number,
		min_duration_ms?: number,
		min_energy?: number,
		min_instrumentalness?: number,
		min_key?: number,
		min_liveness?: number,
		min_loudness?: number,
		min_mode?: number,
		min_popularity?: number,
		min_speechiness?: number,
		min_tempo?: number,
		min_time_signature?: number,
		min_valence?: number,
		seed_artists?: string,
		seed_genres?: string,
		seed_tracks?: string,
		target_acousticness?: number,
		target_danceability?: number,
		target_duration_ms?: number,
		target_energy?: number,
		target_instrumentalness?: number,
		target_key?: number,
		target_liveness?: number,
		target_loudness?: number,
		target_mode?: number,
		target_popularity?: number,
		target_speechiness?: number,
		target_tempo?: number,
		target_time_signature?: number,
		target_valence?: number
	}

	declare interface VoidResponse {
		
	}

	declare interface PlaylistSnapshotResponse {
		snapshot_id: string
	}

	declare interface SingleAlbumResponse {
		
	}

	declare interface MultipleAlbumsResponse {
		albums: AlbumObjectFull[]
	}

	declare interface AlbumTracksResponse {
		
	}

	declare interface SingleArtistResponse {
		
	}

	declare interface MultipleArtistsResponse {
		artists: ArtistObjectFull[]
	}

	declare interface ArtistsAlbumsResponse {
		
	}

	declare interface ArtistsTopTracksResponse {
		tracks: TrackObjectFull[]
	}

	declare interface ArtistsRelatedArtistsResponse {
		artists: ArtistObjectFull[]
	}

	declare interface AudioAnalysisResponse {
		
	}

	declare interface AudioFeaturesResponse {
		
	}

	declare interface MultipleAudioFeaturesResponse {
		audio_features: AudioFeaturesObject[]
	}

	declare interface ListOfFeaturedPlaylistsResponse {
		message?: string,
		playlists: PagingObject<PlaylistObjectSimplified>
	}

	declare interface ListOfNewReleasesResponse {
		message?: string,
		albums: PagingObject<AlbumObjectSimplified>
	}

	declare interface MultipleCategoriesResponse {
		categories: PagingObject<CategoryObject>
	}

	declare interface SingleCategoryResponse {
		
	}

	declare interface CategoryPlaylistsReponse {
		playlists: PagingObject<PlaylistObjectSimplified>
	}

	declare interface CurrentUsersProfileResponse {
		
	}

	declare interface UsersFollowedArtistsResponse {
		artists: CursorBasedPagingObject<ArtistObjectFull>
	}

	declare interface FollowArtistsOrUsersResponse {
		
	}

	declare interface UnfollowArtistsOrUsersResponse {
		
	}

	declare interface UserFollowsUsersOrArtistsResponse {
		
	}

	declare interface FollowPlaylistReponse {
		
	}

	declare interface UnfollowPlaylistReponse {
		
	}

	declare interface SaveTracksForUserResponse {
		
	}

	declare interface UsersSavedTracksResponse {
		
	}

	declare interface RemoveUsersSavedTracksResponse {
		
	}

	declare interface CheckUsersSavedTracksResponse {
		
	}

	declare interface SaveAlbumsForUserResponse {
		
	}

	declare interface UsersSavedAlbumsResponse {
		
	}

	declare interface RemoveAlbumsForUserResponse {
		
	}

	declare interface CheckUserSavedAlbumsResponse {
		
	}

	declare interface UsersTopArtistsResponse {
		
	}

	declare interface UsersTopTracksResponse {
		
	}

	declare interface RecommendationsFromSeedsResponse {
		
	}

	declare interface AvailableGenreSeedsResponse {
		genres: string[]
	}

	declare interface AlbumSearchResponse {
		albums: PagingObject<AlbumObjectSimplified>
	}

	declare interface ArtistSearchResponse {
		artists: PagingObject<ArtistObjectFull>
	}

	declare interface PlaylistSearchResponse {
		playlists: PagingObject<PlaylistObjectSimplified>
	}

	declare interface TrackSearchResponse {
		tracks: PagingObject<TrackObjectFull>
	}

	declare interface SingleTrackResponse {
		
	}

	declare interface MultipleTracksResponse {
		tracks: TrackObjectFull[]
	}

	declare interface UserProfileResponse {
		
	}

	declare interface ListOfUsersPlaylistsResponse {
		
	}

	declare interface ListOfCurrentUsersPlaylistsResponse {
		
	}

	declare interface SinglePlaylistResponse {
		
	}

	declare interface PlaylistTrackResponse {
		
	}

	declare interface CreatePlaylistResponse {
		
	}

	declare interface ChangePlaylistDetailsReponse {
		
	}

	declare interface AddTracksToPlaylistResponse {
		
	}

	declare interface RemoveTracksFromPlaylistResponse {
		
	}

	declare interface ReorderPlaylistTracksResponse {
		
	}

	declare interface ReplacePlaylistTracksResponse {
		
	}

	declare interface UsersFollowPlaylistReponse {
		
	}

	declare interface AlbumObjectFull {
		artists: ArtistObjectSimplified[],
		copyrights: CopyrightObject[],
		external_ids: ExternalIdObject,
		genres: string[],
		popularity: number,
		release_date: string,
		release_date_precision: string,
		tracks: PagingObject<TrackObjectSimplified>
	}

	declare interface AlbumObjectSimplified {
		album_type: string,
		available_markets?: string[],
		external_urls: ExternalUrlObject,
		href: string,
		id: string,
		images: ImageObject[],
		name: string,
		type: "album",
		uri: string
	}

	declare interface ArtistObjectFull {
		followers: FollowersObject,
		genres: string[],
		images: ImageObject[],
		popularity: number
	}

	declare interface ArtistObjectSimplified {
		external_urls: ExternalUrlObject,
		href: string,
		id: string,
		name: string,
		type: "artist",
		uri: string
	}

	declare interface AudioFeaturesObject {
		acousticness: number,
		analysis_url: string,
		danceability: number,
		duration_ms: number,
		energy: number,
		id: string,
		instrumentalness: number,
		key: number,
		liveness: number,
		loudness: number,
		mode: number,
		speechiness: number,
		tempo: number,
		time_signature: number,
		track_href: string,
		type: "audio_features",
		uri: string,
		valence: number
	}

	declare interface CategoryObject {
		href: string,
		icons: ImageObject[],
		id: string,
		name: string
	}

	declare interface CopyrightObject {
		text: string,
		type: "C" | "P"
	}

	declare interface CursorObject {
		after: string
	}

	declare interface ErrorObject {
		status: number,
		message: string
	}

	declare interface ExternalIdObject {
		isrc?: string,
		ean?: string,
		upc?: string
	}

	declare interface ExternalUrlObject {
		spotify: string
	}

	declare interface FollowersObject {
		href: string,
		total: number
	}

	declare interface ImageObject {
		height?: number,
		url: string,
		width?: number
	}

	declare interface PagingObject<T> {
		href: string,
		items: T[],
		limit: number,
		next: string,
		offset: number,
		previous: string,
		total: number
	}

	declare interface CursorBasedPagingObject<T> {
		href: string,
		items: T[],
		limit: number,
		next: string,
		cursors: CursorObject,
		total: number
	}

	declare interface PlaylistBaseObject {
		collaborative: boolean,
		external_urls: ExternalUrlObject,
		href: string,
		id: string,
		images: ImageObject[],
		name: string,
		owner: UserObjectPublic,
		public: boolean,
		snapshot_id: string,
		type: "playlist",
		uri: string
	}

	declare interface PlaylistObjectFull {
		description: string,
		followers: FollowersObject,
		tracks: PagingObject<PlaylistTrackObject>
	}

	declare interface PlaylistObjectSimplified {
		tracks: {
		href: string,
		total: number
	}
	}

	declare interface PlaylistTrackObject {
		added_at: string,
		added_by: UserObjectPublic,
		is_local: boolean,
		track: TrackObjectFull
	}

	declare interface RecommendationsObject {
		seeds: RecommendationsSeedObject[],
		tracks: TrackObjectSimplified[]
	}

	declare interface RecommendationsSeedObject {
		afterFilteringSize: number,
		afterRelinkingSize: number,
		href: string,
		id: string,
		initialPoolSize: number,
		type: "artist" | "track" | "genre"
	}

	declare interface SavedTrackObject {
		added_at: string,
		track: TrackObjectFull
	}

	declare interface SavedAlbumObject {
		added_at: string,
		album: AlbumObjectFull
	}

	declare interface TrackObjectFull {
		album: AlbumObjectSimplified,
		external_ids: ExternalIdObject,
		popularity: number
	}

	declare interface TrackObjectSimplified {
		artists: ArtistObjectSimplified[],
		available_markets?: string[],
		disc_number: number,
		duration_ms: number,
		explicit: boolean,
		external_urls: ExternalUrlObject,
		href: string,
		id: string,
		is_playable?: boolean,
		linked_from?: TrackLinkObject,
		name: string,
		preview_url: string,
		track_number: number,
		type: "track",
		uri: string
	}

	declare interface TrackLinkObject {
		external_urls: ExternalUrlObject,
		href: string,
		id: string,
		type: "track",
		uri: string
	}

	declare interface UserObjectPrivate {
		birthdate: string,
		country: string,
		email: string,
		product: string
	}

	declare interface UserObjectPublic {
		display_name?: string,
		external_urls: ExternalUrlObject,
		followers?: FollowersObject,
		href: string,
		id: string,
		images?: ImageObject[],
		type: "user",
		uri: string
	}

			
}