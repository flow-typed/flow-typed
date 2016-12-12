

declare module 'riot-api-nodejs' {
				declare export class API  {
		constructor(ApiKeys: string[]): this;
		getJSON(url: string, method: string, data: any): Promise<any>;
		request(url: string, method: string, data: any, prop?: string): Promise<any>;
		getCurrentApiKey(): string;
		setApikeys(ApiKeys: string[]): void
	}

	declare export class TournamentAPI extends API {
		constructor(...apiKeys: string[]): this;
		createTournamentCodes(
		tournamentId: number, count: number, params: RiotGamesAPI.TournamentProvider.TournamentCodeParameters
	): Promise<number[]>;
		getTournamentByCode(
		tournamentCode: string
	): Promise<RiotGamesAPI.TournamentProvider.TournamentCodeDto>;
		editTournamentByCode(
		tournamentCode: string, params: RiotGamesAPI.TournamentProvider.TournamentCodeUpdateParameters
	): Promise<() => void>;
		getLobbyEventByCode(tournamentCode: string): Promise<RiotGamesAPI.TournamentProvider.LobbyEventDto>;
		registerProvider(region: region_e, url: string): Promise<number>;
		registerTournament(name: string, providerId: number): Promise<number>
	}

	declare export class ClassicAPI extends API {
		constructor(ApiKeys: string[], region: region_e): this;
		parseURL(unparsedURL: string): string;
		getRegion(): region_e;
		setRegion(region: region_e): void;
		getChampions(): Promise<RiotGamesAPI.Champion.ChampionListDto>;
		getChampionById(id: number): Promise<RiotGamesAPI.Champion.ChampionDto>;
		getFreeToPlayChampions(): Promise<RiotGamesAPI.Champion.ChampionListDto>;
		getChampionMastery(
		summonerId: number, championId: number
	): Promise<RiotGamesAPI.ChampionMastery.ChampionMasteryDto>;
		getChampionMasteryBySummoner(summonerId: number): Promise<[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]>;
		getChampionMasteryScore(summonerId: number): Promise<number>;
		getTopChampionMastery(summonerId: any): Promise<[RiotGamesAPI.ChampionMastery.ChampionMasteryDto]>;
		getCurrentGame(summonerId: number): Promise<RiotGamesAPI.CurrentGame.CurrentGameInfo>;
		getFeaturedGame(): Promise<RiotGamesAPI.FeaturedGames.FeaturedGames>;
		getRecentGames(summonerId: number): Promise<RiotGamesAPI.Game.RecentGamesDto>;
		getLeagueBySummonerId(summonerId: number): Promise<RiotGamesAPI.League.LeagueDto[]>;
		getLeagueBySummonerIdEntry(summonerId: number): Promise<RiotGamesAPI.League.LeagueDto[]>;
		getLeagueByTeamId(teamId: string): Promise<RiotGamesAPI.League.LeagueDto[]>;
		getLeagueByTeamIdEntry(teamId: string): Promise<RiotGamesAPI.League.LeagueDto[]>;
		getChallengers_SOLO(): Promise<RiotGamesAPI.League.LeagueDto>;
		getChallengers_3x3(): Promise<RiotGamesAPI.League.LeagueDto>;
		getChallengers_5x5(): Promise<RiotGamesAPI.League.LeagueDto>;
		getMasters_SOLO(): Promise<RiotGamesAPI.League.LeagueDto>;
		getMasters_3x3(): Promise<RiotGamesAPI.League.LeagueDto>;
		getMasters_5x5(): Promise<RiotGamesAPI.League.LeagueDto>;
		staticDataChampions(): Promise<RiotGamesAPI.LolStaticData.ChampionListDto>;
		staticDataChampionById(championsId: number): Promise<RiotGamesAPI.LolStaticData.ChampionDto>;
		staticDataItems(): Promise<RiotGamesAPI.LolStaticData.ItemListDto>;
		staticDataItemById(itemId: number): Promise<RiotGamesAPI.LolStaticData.ItemDto>;
		staticDataLanguagesStrings(): Promise<RiotGamesAPI.LolStaticData.LanguageStringsDto>;
		staticDataLanguages(): Promise<string[]>;
		staticDataMap(): Promise<RiotGamesAPI.LolStaticData.MapDataDto>;
		staticDataMastery(): Promise<RiotGamesAPI.LolStaticData.MasteryListDto>;
		staticDataMasteryById(masteryId: number): Promise<RiotGamesAPI.LolStaticData.MasteryDto>;
		staticDataRealm(): Promise<RiotGamesAPI.LolStaticData.RealmDto>;
		staticDataRunes(): Promise<RiotGamesAPI.LolStaticData.RuneListDto>;
		staticDataRuneById(runeId: number): Promise<RiotGamesAPI.LolStaticData.RuneDto>;
		staticDataSummonerSpells(): Promise<RiotGamesAPI.LolStaticData.SummonerSpellListDto>;
		staticDataSummonSpellById(summonerSpellId: number): Promise<RiotGamesAPI.LolStaticData.SummonerSpellDto>;
		staticDataVersion(): Promise<string[]>;
		getStatus(): Promise<RiotGamesAPI.LolStatus.Shard[]>;
		getStatusByRegion(region: region_e): Promise<RiotGamesAPI.LolStatus.Shard>;
		getMatch(matchId: number): Promise<RiotGamesAPI.Match.MatchDetail>;
		getMatchIdsByTournamentCode(tournamentCode: string): Promise<number[]>;
		getMatchForTournament(matchId: number): Promise<RiotGamesAPI.Match.MatchDetail>;
		getMatchList(summonerId: number): Promise<RiotGamesAPI.MatchList.MatchList>;
		getStatsRanked(summonerId: number): Promise<RiotGamesAPI.Stats.RankedStatsDto>;
		getStatsSummary(summonerId: number): Promise<RiotGamesAPI.Stats.PlayerStatsSummaryListDto>;
		getSummonerByName(summonerName: string): Promise<RiotGamesAPI.Summoner.SummonerDto>;
		getSummonerById(summonerId: number): Promise<RiotGamesAPI.Summoner.SummonerDto>;
		getSummonerMasteries(summonerId: number): Promise<RiotGamesAPI.Summoner.MasteryPagesDto>;
		getSummonerName(summonerId: number): Promise<string>;
		getSummonerRunes(summonerId: number): Promise<RiotGamesAPI.Summoner.RunePagesDto>;
		getTeamsBySummoner(summonerId: number): Promise<RiotGamesAPI.Team.TeamDto[]>;
		getTeamById(teamId: string): Promise<RiotGamesAPI.Team.TeamDto>
	}

	
}