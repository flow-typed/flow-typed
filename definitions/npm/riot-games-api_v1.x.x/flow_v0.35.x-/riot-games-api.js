

declare module 'riot-games-api' {
					
}

declare module 'Champion' {
		declare interface ChampionDto {
		active: boolean,
		botEnabled: boolean,
		botMmEnabled: boolean,
		freeToPlay: boolean,
		id: number,
		rankedPlayEnabled: boolean
	}

	declare interface ChampionListDto {
		champions: Array<ChampionDto>
	}

			
}

declare module 'ChampionMastery' {
		declare interface ChampionMasteryDto {
		championId: number,
		championLevel: number,
		championPoints: number,
		championPointsSinceLastLevel: number,
		championPointsUntilNextLevel: number,
		chestGranted: boolean,
		highestGrade: string,
		lastPlayTime: number,
		playerId: number
	}

			
}

declare module 'CurrentGame' {
		declare interface CurrentGameInfo {
		bannedChampion: Array<BannedChampion>,
		gameId: number,
		gameLength: number,
		gameMode: number,
		gameQueueConfigId: number,
		gameStartTime: number,
		gameType: string,
		mapId: number,
		observers: Observer,
		participants: Array<CurrentGameParticipant>,
		platformId: string
	}

	declare interface BannedChampion {
		championId: number,
		pickTurn: number,
		teamId: number
	}

	declare interface CurrentGameParticipant {
		bot: boolean,
		championId: number,
		masteries: Array<Mastery>,
		profileIconId: number,
		runes: Array<Rune>,
		spell1Id: number,
		spell2Id: number,
		summonerId: number,
		summonerName: string,
		teamId: number
	}

	declare interface Observer {
		encryptionKey: string
	}

	declare interface Mastery {
		masterId: number,
		rank: number
	}

	declare interface Rune {
		count: number,
		runeId: number
	}

			
}

declare module 'FeaturedGames' {
		declare interface FeaturedGames {
		clientRefreshInterval: number,
		gameList: Array<FeaturedGameInfo>
	}

	declare interface FeaturedGameInfo {
		bannedChampions: Array<BannedChampion>,
		gameId: number,
		gameLength: number,
		gameMode: string,
		gameQueueConfigId: number,
		gameStartTime: number,
		gameType: string,
		mapId: number,
		observers: Observer,
		participants: Array<Participant>,
		plateformId: string
	}

	declare interface Participant {
		bot: boolean,
		championId: number,
		profileIconId: number,
		spell1Id: number,
		spell2Id: number,
		summonerName: string,
		teamId: number
	}

	declare interface BannedChampion {
		championId: number,
		pickTurn: number,
		teamId: number
	}

	declare interface Observer {
		encryptionKey: string
	}

			
}

declare module 'Game' {
		declare interface RecentGamesDto {
		games: Array<GameDto>,
		summonerId: number
	}

	declare interface GameDto {
		championId: number,
		createDate: number,
		fellowPlayers: Array<PlayerDto>,
		gameId: number,
		gameMode: string,
		gameType: string,
		invalid: boolean,
		ipEarned: number,
		level: number,
		mapId: number,
		spell1: number,
		spell2: number,
		stats: RawStatsDto,
		subType: string,
		teamId: number
	}

	declare interface PlayerDto {
		championId: number,
		summonerId: number,
		teamId: number
	}

	declare interface RawStatsDto {
		assists: number,
		barracksKilled: number,
		championsKilled: number,
		combatPlayerScore: number,
		consumablesPurchased: number,
		damageDealtPlayer: number,
		doubleKills: number,
		firstBlood: number,
		gold: number,
		goldEarned: number,
		goldSpent: number,
		item0: number,
		item1: number,
		item2: number,
		item3: number,
		item4: number,
		item5: number,
		item6: number,
		itemsPurchased: number,
		killingSprees: number,
		largestCriticalStrike: number,
		largestKillingSpree: number,
		largestMultiKill: number,
		legendaryItemsCreated: number,
		level: number,
		magicDamageDealtPlayer: number,
		magicDamageDealtToChampions: number,
		magicDamageTaken: number,
		minionsDenied: number,
		minionsKilled: number,
		neutralMinionsKilled: number,
		neutralMinionsKilledEnemyJungle: number,
		neutralMinionsKilledYourJungle: number,
		nexusKilled: boolean,
		nodeCapture: number,
		nodeCaptureAssist: number,
		nodeNeutralize: number,
		nodeNeutralizeAssist: number,
		numDeaths: number,
		numItemsBought: number,
		objectivePlayerScore: number,
		pentaKills: number,
		physicalDamageDealtPlayer: number,
		physicalDamageDealtToChampions: number,
		physicalDamageTaken: number,
		playerPosition: number,
		playerRole: number,
		quadraKills: number,
		sightWardsBought: number,
		spell1Cast: number,
		spell2Cast: number,
		spell3Cast: number,
		spell4Cast: number,
		summonSpell1Cast: number,
		summonSpell2Cast: number,
		superMonsterKilled: number,
		team: number,
		teamObjective: number,
		timePlayed: number,
		totalDamageDealt: number,
		totalDamageDealtToChampions: number,
		totalDamageTaker: number,
		totalHeal: number,
		totalPlayerScore: number,
		totalScoreRank: number,
		totalTimeCrowdControlDealt: number,
		totalUnitsHealed: number,
		tripleKills: number,
		trueDamageDealtPlayer: number,
		trueDamageDealtToChampions: number,
		trueDamageTaken: number,
		turrentsKilled: number,
		unrealKills: number,
		victoryPointTotal: number,
		visionWardsBought: number,
		wardKilled: number,
		wardPlaced: number,
		win: boolean
	}

			
}

declare module 'League' {
		declare interface LeagueDto {
		entries: Array<LeagueEntryDto>,
		name: string,
		participantId: string,
		queue: string,
		tier: string
	}

	declare interface LeagueEntryDto {
		division: string,
		isFreshBlood: boolean,
		isHotStreak: boolean,
		isInactive: boolean,
		isVeteran: boolean,
		leaguePoints: number,
		losses: number,
		miniSeries: MiniSeriesDto,
		playerOrTeamId: string,
		playerOrTeamName: string,
		wins: number
	}

	declare interface MiniSeriesDto {
		losses: number,
		progress: string,
		target: number,
		wins: number
	}

			
}

declare module 'LolStaticData' {
		declare interface ChampionListDto {
		data: {
		[str: string]: ChampionDto
	},
		format: string,
		keys: {
		[str: string]: string
	},
		type: string,
		version: string
	}

	declare interface ChampionDto {
		allytips: Array<string>,
		blurb: string,
		enemytips: Array<string>,
		id: number,
		image: ImageDto,
		info: InfoDto,
		key: string,
		lore: string,
		name: string,
		partype: string,
		passive: PassiveDto,
		recommended: Array<RecommendedDto>,
		skins: Array<SkinDto>,
		spells: Array<ChampionSpellDto>,
		stats: StatsDto,
		tags: Array<string>,
		title: string
	}

	declare interface ChampionSpellDto {
		altimages: Array<ImageDto>,
		cooldown: Array<number>,
		cooldownBurn: string,
		cost: Array<number>,
		costBurn: string,
		costType: string,
		description: string,
		effect: Array<Array<number>>,
		effectBurn: Array<string>,
		image: ImageDto,
		key: string,
		leveltip: LevelTipDto,
		maxrank: number,
		name: string,
		range: Array<number> | string,
		rangeBurn: string,
		resource: string,
		sanitizedDescription: string,
		sanitizedTooltip: string,
		tooltip: string,
		vars: Array<SpellVarsDto>
	}

	declare interface ImageDto {
		full: string,
		group: string,
		h: number,
		sprite: string,
		w: number,
		x: number,
		y: number
	}

	declare interface InfoDto {
		attack: number,
		defense: number,
		difficulty: number,
		magic: number
	}

	declare interface PassiveDto {
		description: string,
		image: ImageDto,
		name: string,
		sanitizedDescription: string
	}

	declare interface RecommendedDto {
		block: Array<BlockDto>,
		champion: string,
		map: string,
		mode: string,
		priority: boolean,
		title: string,
		type: string
	}

	declare interface SkinDto {
		id: number,
		name: string,
		num: number
	}

	declare interface StatsDto {
		armor: number,
		armorperlevel: number,
		attackdamage: number,
		attackdamageperlevel: number,
		attackrange: number,
		attackspeedoffset: number,
		attackspeedperlevel: number,
		crit: number,
		critperlevel: number,
		hp: number,
		hpperlevel: number,
		hpregen: number,
		hpregenperlevel: number,
		movespeed: number,
		mp: number,
		mpperlevel: number,
		mpregen: number,
		mpregenperlevel: number,
		spellblock: number,
		spellblockperlevel: number
	}

	declare interface LevelTipDto {
		effect: Array<string>,
		label: Array<string>
	}

	declare interface SpellVarsDto {
		coeff: Array<number>,
		dyn: string,
		key: string,
		link: string,
		ranksWith: string
	}

	declare interface BlockDto {
		items: Array<BlockItemDto>,
		recMath: boolean,
		type: string
	}

	declare interface BlockItemDto {
		count: number,
		id: number
	}

	declare interface ItemListDto {
		basic: BasicDataDto,
		data: Array<{
		[str: string]: ItemDto
	}>,
		groups: Array<GroupDto>,
		tree: Array<ItemTreeDto>,
		type: string,
		version: string
	}

	declare interface BasicDataDto {
		colloq: string,
		consumeOnFull: boolean,
		consumed: boolean,
		depth: number,
		description: string,
		from: Array<string>,
		gold: GoldDto,
		group: string,
		hideFromAll: boolean,
		id: number,
		image: ImageDto,
		inStore: boolean,
		into: Array<string>,
		maps: Array<{
		[str: string]: boolean
	}>,
		name: string,
		plaintext: string,
		requiredChampion: string,
		rune: MetaDataDto,
		sanitizedDescription: string,
		specialRecipe: number,
		stacks: number,
		stats: BasicDataStatsDto,
		tags: Array<string>
	}

	declare interface GroupDto {
		MaxGroupOwnable: string,
		key: string
	}

	declare interface ItemDto {
		colloq: string,
		consumeOnFull: boolean,
		consumed: boolean,
		depth: number,
		description: string,
		effect: Array<{
		[str: string]: string
	}>,
		from: Array<string>,
		gold: GoldDto,
		group: string,
		hideFromAll: boolean,
		id: number,
		image: ImageDto,
		inStore: boolean,
		into: Array<string>,
		maps: Array<{
		[str: string]: boolean
	}>,
		name: string,
		plaintext: string,
		requiredChampion: string,
		rune: MetaDataDto,
		sanitizedDescription: string,
		specialRecipe: number,
		stacks: number,
		stats: BasicDataStatsDto,
		tags: Array<string>
	}

	declare interface ItemTreeDto {
		header: string,
		tags: Array<string>
	}

	declare interface BasicDataStatsDto {
		FlatArmorMod: number,
		FlatAttackSpeedMod: number,
		FlatBlockMod: number,
		FlatCritChanceMod: number,
		FlatCritDamageMod: number,
		FlatEXPBonus: number,
		FlatEnergyPoolMod: number,
		FlatEnergyRegenMod: number,
		FlatHPPoolMod: number,
		FlatHPRegenMod: number,
		FlatMPPoolMod: number,
		FlatMPRegenMod: number,
		FlatMagicDamageMod: number,
		FlatMovementSpeedMod: number,
		FlatPhysicalDamageMod: number,
		FlatSpellBlockMod: number,
		PercentArmorMod: number,
		PercentAttackSpeedMod: number,
		PercentBlockMod: number,
		PercentCritChanceMod: number,
		PercentCritDamageMod: number,
		PercentDodgeMod: number,
		PercentEXPBonus: number,
		PercentHPPoolMod: number,
		PercentHPRegenMod: number,
		PercentLifeStealMod: number,
		PercentMPPoolMod: number,
		PercentMPRegenMod: number,
		PercentMagicDamageMod: number,
		PercentMovementSpeedMod: number,
		PercentPhysicalDamageMod: number,
		PercentSpellBlockMod: number,
		PercentSpellVampMod: number,
		rFlatArmorModPerLevel: number,
		rFlatArmorPenetrationMod: number,
		rFlatArmorPenetrationModPerLevel: number,
		rFlatCritChanceModPerLevel: number,
		rFlatCritDamageModPerLevel: number,
		rFlatDodgeMod: number,
		rFlatDodgeModPerLevel: number,
		rFlatEnergyModPerLevel: number,
		rFlatEnergyRegenModPerLevel: number,
		rFlatGoldPer10Mod: number,
		rFlatHPModPerLevel: number,
		rFlatHPRegenModPerLevel: number,
		rFlatMPModPerLevel: number,
		rFlatMPRegenModPerLevel: number,
		rFlatMagicDamageModPerLevel: number,
		rFlatMagicPenetrationMod: number,
		rFlatMagicPenetrationModPerLevel: number,
		rFlatMovementSpeedModPerLevel: number,
		rFlatPhysicalDamageModPerLevel: number,
		rFlatSpellBlockModPerLevel: number,
		rFlatTimeDeadMod: number,
		rFlatTimeDeadModPerLevel: number,
		rPercentArmorPenetrationMod: number,
		rPercentArmorPenetrationModPerLevel: number,
		rPercentAttackSpeedModPerLevel: number,
		rPercentCooldownMod: number,
		rPercentCooldownModPerLevel: number,
		rPercentMagicPenetrationMod: number,
		rPercentMagicPenetrationModPerLevel: number,
		rPercentMovementSpeedModPerLevel: number,
		rPercentTimeDeadMod: number,
		rPercentTimeDeadModPerLevel: number
	}

	declare interface GoldDto {
		base: number,
		purchasable: boolean,
		sell: number,
		total: number
	}

	declare interface MetaDataDto {
		isRune: boolean,
		tier: string,
		type: string
	}

	declare interface LanguageStringsDto {
		data: Array<{
		[str: string]: string
	}>,
		type: string,
		version: string
	}

	declare interface MapDataDto {
		data: Array<{
		[str: string]: MapDetailsDto
	}>,
		type: string,
		version: string
	}

	declare interface MapDetailsDto {
		image: ImageDto,
		mapId: number,
		mapName: string,
		unpurchasableItemList: Array<number>
	}

	declare interface MasteryListDto {
		data: Array<{
		[str: string]: MasteryDto
	}>,
		tree: MasteryTreeDto,
		type: string,
		version: string
	}

	declare interface MasteryDto {
		description: Array<string>,
		id: number,
		image: ImageDto,
		masteryTree: string,
		name: string,
		prereq: string,
		ranks: number,
		sanitizedDescription: Array<string>
	}

	declare interface MasteryTreeDto {
		Defense: Array<MasteryTreeListDto>,
		Offense: Array<MasteryTreeListDto>,
		Utility: Array<MasteryTreeListDto>
	}

	declare interface MasteryTreeListDto {
		masteryTreeItems: Array<MasteryTreeItemDto>
	}

	declare interface MasteryTreeItemDto {
		masteryId: number,
		prereq: string
	}

	declare interface RealmDto {
		cdn: string,
		css: string,
		dd: string,
		l: string,
		lg: string,
		n: Array<{
		[str: string]: string
	}>,
		profileiconmax: number,
		storage: string,
		v: string
	}

	declare interface RuneListDto {
		basic: BasicDataDto,
		data: Array<{
		[str: string]: RuneDto
	}>,
		type: string,
		version: string
	}

	declare interface RuneDto {
		colloq: string,
		consumeOnFull: boolean,
		consumed: boolean,
		depth: number,
		description: string,
		from: Array<string>,
		group: string,
		hideFromAll: boolean,
		id: number,
		image: ImageDto,
		inStore: boolean,
		into: Array<string>,
		maps: Array<{
		[str: string]: boolean
	}>,
		name: string,
		plaintext: string,
		requiredChampion: string,
		rune: MetaDataDto,
		sanitizedDescription: string,
		specialRecipe: number,
		stacks: number,
		stats: BasicDataStatsDto,
		tags: Array<string>
	}

	declare interface SummonerSpellListDto {
		data: Array<{
		[str: string]: SummonerSpellDto
	}>,
		type: string,
		version: string
	}

	declare interface SummonerSpellDto {
		cooldown: Array<number>,
		cooldownBurn: string,
		cost: Array<number>,
		costBurn: string,
		costType: string,
		description: string,
		effect: Array<Array<number>>,
		effectBurn: Array<string>,
		id: number,
		image: ImageDto,
		key: string,
		leveltip: LevelTipDto,
		maxrank: number,
		modes: Array<string>,
		name: string,
		range: Array<number> | string,
		rangeBurn: string,
		resource: string,
		sanitizedDescription: string,
		sanitizedTooltip: string,
		summonerLevel: number,
		tooltip: string,
		vars: Array<SpellVarsDto>
	}

			
}

declare module 'LolStatus' {
		declare interface Shard {
		hostname: string,
		locales: Array<string>,
		name: string,
		region_tag: string,
		slug: string
	}

	declare interface ShardStatus {
		hostname: string,
		locales: Array<string>,
		name: string,
		region_tag: string,
		services: Array<Service>,
		slug: string
	}

	declare interface Service {
		incidents: Array<Incident>,
		name: string,
		slug: string,
		status: string
	}

	declare interface Incident {
		active: boolean,
		created_at: string,
		id: number,
		updates: Array<Message>
	}

	declare interface Message {
		author: string,
		content: string,
		created_at: string,
		id: number,
		severity: string,
		translations: Array<Translation>,
		updated_at: string
	}

	declare interface Translation {
		content: string,
		locale: string,
		updated_at: string
	}

			
}

declare module 'Match' {
		declare interface MatchDetail {
		mapId: number,
		matchCreation: number,
		matchId: number,
		matchMode: string,
		matchType: string,
		matchVersion: string,
		participantIdentities: Array<ParticipantIdentity>,
		participants: Array<Participant>,
		plateformId: string,
		queueType: string,
		region: string,
		season: string,
		teams: Array<Team>,
		timeline: Timeline
	}

	declare interface Participant {
		championId: number,
		highestAchievedSeasonTier: string,
		masteries: Array<Mastery>,
		participantId: number,
		runes: Array<Rune>,
		spell1Id: number,
		spell2Id: number,
		stats: ParticipantStats,
		teamId: number,
		timeline: ParticipantTimeline
	}

	declare interface ParticipantIdentity {
		participantId: number,
		player: Player
	}

	declare interface Team {
		bans: Array<BannedChampion>,
		baronKills: number,
		dominionVictoryScore: number,
		dragonKills: number,
		firstBaron: boolean,
		firstBlood: boolean,
		firstDragon: boolean,
		firstInhibitor: boolean,
		firstTower: boolean,
		inhibitorKills: number,
		teamId: number,
		towerKills: number,
		vilemawKills: number,
		winner: boolean
	}

	declare interface Timeline {
		frameInverval: number,
		frames: Array<Frame>
	}

	declare interface Mastery {
		masteryId: number,
		rank: number
	}

	declare interface ParticipantStats {
		assists: number,
		champLevel: number,
		combatPlayerScore: number,
		deaths: number,
		doubleKills: number,
		firstBloodAssist: boolean,
		firstBloodKill: boolean,
		firstInhibitorAssist: boolean,
		firstInhibitorKill: boolean,
		firstTowerAssist: boolean,
		firstTowerKill: boolean,
		goldEarned: number,
		goldSpent: number,
		inhibitorKills: number,
		item0: number,
		item1: number,
		item2: number,
		item3: number,
		item4: number,
		item5: number,
		item6: number,
		killingSprees: number,
		kills: number,
		largestCriticalStrike: number,
		largestKillingSpree: number,
		largestMultiKill: number,
		magicDamageDealt: number,
		magicDamageDealtToChampions: number,
		magicDamageTaken: number,
		minionsKilled: number,
		neutralMinionsKilled: number,
		neutralMinionsKilledEnemyJungle: number,
		neutralMinionsKilledTeamJungle: number,
		nodeCapture: number,
		nodeCaptureAssist: number,
		nodeNeutralize: number,
		nodeNeutralizeAssist: number,
		objectivePlayerScore: number,
		pentaKills: number,
		physicalDamageDealt: number,
		physicalDamageDealtToChampions: number,
		physicalDamageTaken: number,
		quadraKills: number,
		sightWardsBoughtInGame: number,
		teamObjective: number,
		totalDamageDealt: number,
		totalDamageDealtToChampions: number,
		totalDamageTaken: number,
		totalHeal: number,
		totalPlayerScore: number,
		totalScoreRank: number,
		totalTimeCrowdControlDealt: number,
		totalUnitsHealed: number,
		towerKills: number,
		tripleKills: number,
		trueDamageDealt: number,
		trueDamageDealtToChampions: number,
		trueDamageTaken: number,
		unrealKills: number,
		visionWardsBoughtInGame: number,
		wardsKilled: number,
		wardsPlaced: number,
		winner: boolean
	}

	declare interface ParticipantTimeline {
		ancientGolemAssistsPerMinCounts: ParticipantTimelineData,
		ancientGolemKillsPerMinCounts: ParticipantTimelineData,
		assistedLaneDeathsPerMinDeltas: ParticipantTimelineData,
		assistedLaneKillsPerMinDeltas: ParticipantTimelineData,
		baronAssistsPerMinCounts: ParticipantTimelineData,
		baronKillsPerMinCounts: ParticipantTimelineData,
		creepsPerMinDeltas: ParticipantTimelineData,
		csDiffPerMinDeltas: ParticipantTimelineData,
		damageTakenDiffPerMinDeltas: ParticipantTimelineData,
		damageTakenPerMinDeltas: ParticipantTimelineData,
		dragonAssistsPerMinCounts: ParticipantTimelineData,
		dragonKillsPerMinCounts: ParticipantTimelineData,
		elderLizardAssistsPerMinCounts: ParticipantTimelineData,
		elderLizardKillsPerMinCounts: ParticipantTimelineData,
		goldPerMinDeltas: ParticipantTimelineData,
		inhibitorAssistsPerMinCounts: ParticipantTimelineData,
		inhibitorKillsPerMinCounts: ParticipantTimelineData,
		lane: string,
		role: string,
		towerAssistsPerMinCounts: ParticipantTimelineData,
		towerKillsPerMinCounts: ParticipantTimelineData,
		towerKillsPerMinDeltas: ParticipantTimelineData,
		vilemawAssistsPerMinCounts: ParticipantTimelineData,
		vilemawKillsPerMinCounts: ParticipantTimelineData,
		wardsPerMinDeltas: ParticipantTimelineData,
		xpDiffPerMinDeltas: ParticipantTimelineData,
		xpPerMinDeltas: ParticipantTimelineData
	}

	declare interface Rune {
		rank: number,
		runeId: number
	}

	declare interface Player {
		matchHistoryUri: string,
		profileIcon: number,
		summonerId: number,
		summonerName: string
	}

	declare interface BannedChampion {
		championId: number,
		pickTurn: number
	}

	declare interface Frame {
		events: Array<Event>,
		participanFrames: Array<{
		[str: string]: ParticipantFrame
	}>,
		timestamp: number
	}

	declare interface ParticipantTimelineData {
		tenToTwenty: number,
		thirtyToEnd: number,
		twentyToThirty: number,
		zeroToTen: number
	}

	declare interface Event {
		ascendedType: string,
		assistingParticipantIds: Array<number>,
		buildingType: string,
		creatorId: number,
		eventType: string,
		itemAfter: number,
		itemBefore: number,
		itemId: number,
		killerId: number,
		laneType: string,
		levelUpType: string,
		monsterType: string,
		participantId: number,
		pointCaptured: string,
		position: Position,
		skillSlot: number,
		teamId: number,
		timestamp: number,
		towerType: string,
		victimId: number,
		wardType: string
	}

	declare interface ParticipantFrame {
		currentGold: number,
		dominionScore: number,
		jungleMinionsKilled: number,
		level: number,
		minionsKilled: number,
		participantId: number,
		position: Position,
		teamScore: number,
		totalGold: number,
		xp: number
	}

	declare interface Position {
		x: number,
		y: number
	}

			
}

declare module 'MatchList' {
		declare interface MatchList {
		endIndex: number,
		matches: Array<MatchReference>,
		startIndex: number,
		totalGames: number
	}

	declare interface MatchReference {
		champion: number,
		lane: string,
		matchId: number,
		plateformId: string,
		queue: string,
		region: string,
		role: string,
		season: string,
		timestamp: number
	}

			
}

declare module 'Stats' {
		declare interface RankedStatsDto {
		champions: Array<ChampionStatsDto>,
		modifyDate: number,
		summonerId: number
	}

	declare interface ChampionStatsDto {
		id: number,
		stats: AggregatedStatsDto
	}

	declare interface AggregatedStatsDto {
		averageAssists: number,
		averageChampionsKilled: number,
		averageCombatPlayerScore: number,
		averageNodeCapture: number,
		averageNodeCaptureAssist: number,
		averageNodeNeutralize: number,
		averageNodeNeutralizeAssist: number,
		averageNumDeaths: number,
		averageObjectivePlayerScore: number,
		averageTeamObjective: number,
		averageTotalPlayerScore: number,
		botGamesPlayed: number,
		killingSpree: number,
		maxAssists: number,
		maxChampionsKilled: number,
		maxCombatPlayerScore: number,
		maxLargestCriticalStrike: number,
		maxLargestKillingSpree: number,
		maxNodeCapture: number,
		maxNodeCaptureAssist: number,
		maxNodeNeutralize: number,
		maxNodeNeutralizeAssist: number,
		maxNumDeaths: number,
		maxObjectivePlayerScore: number,
		maxTeamObjective: number,
		maxTimePlayed: number,
		maxTimeSpentLiving: number,
		maxTotalPlayerScore: number,
		mostChampionKillsPerSession: number,
		mostSpellsCast: number,
		normalGamesPlayed: number,
		rankedPremadeGamesPlayed: number,
		rankedSoloGamesPlayed: number,
		totalAssists: number,
		totalChampionKills: number,
		totalDamageDealt: number,
		totalDamageTaken: number,
		totalDeathsPerSession: number,
		totalDoubleKills: number,
		totalFirstBlood: number,
		totalGoldEarned: number,
		totalHeal: number,
		totalMagicDamageDealt: number,
		totalMinionsKills: number,
		totalNeutralMinionsKilled: number,
		totalNodeCapture: number,
		totalNodeNeutralize: number,
		totalPentaKills: number,
		totalPhysicalDamageDealt: number,
		totalQuadraKills: number,
		totalSessionsLost: number,
		totalSessionsPlayed: number,
		totalSessionsWon: number,
		totalTripleKills: number,
		totalTurretsKilleds: number,
		totalUnrealKills: number
	}

	declare interface PlayerStatsSummaryListDto {
		playerStatSummaries: Array<PlayerStatsSummaryDto>,
		summonerId: number
	}

	declare interface PlayerStatsSummaryDto {
		aggregatedStats: AggregatedStatsDto,
		losses: number,
		modifyDate: number,
		playerStatSummaryType: string,
		wins: number
	}

			
}

declare module 'Summoner' {
		declare interface SummonerDto {
		id: number,
		name: string,
		profileIconId: number,
		revisionDate: number,
		summonerLevel: number
	}

	declare interface MasteryPagesDto {
		pages: Array<MasteryPageDto>,
		summonerId: number
	}

	declare interface MasteryPageDto {
		current: boolean,
		id: number,
		masteries: Array<MasteryDto>,
		name: string
	}

	declare interface MasteryDto {
		id: number,
		rank: number
	}

	declare interface RunePagesDto {
		pages: Array<RunePageDto>,
		summonerId: number
	}

	declare interface RunePageDto {
		current: boolean,
		id: number,
		name: string,
		slots: Array<RuneSlotDto>
	}

	declare interface RuneSlotDto {
		runeId: number,
		runeSlotId: number
	}

			
}

declare module 'Team' {
		declare interface TeamDto {
		createDate: number,
		fullId: string,
		lastGameDate: number,
		lastJoinDate: number,
		lastJoinedRankedTeamQueueDate: number,
		matchHistory: Array<MatchHistorySummaryDto>,
		modifyDate: number,
		name: string,
		roster: RosterDto,
		secondLastJoinDate: number,
		status: string,
		tag: string,
		teamStatDetails: Array<TeamStatDetailDto>,
		thirdLastJoinDate: number
	}

	declare interface MatchHistorySummaryDto {
		assists: number,
		date: number,
		deaths: number,
		gameId: number,
		gameMode: string,
		invalid: boolean,
		kills: number,
		mapId: number,
		opposingTeamKills: number,
		opposingTeamName: string,
		win: boolean
	}

	declare interface RosterDto {
		memberList: Array<TeamMemberInfoDto>,
		ownerId: number
	}

	declare interface TeamStatDetailDto {
		averageGamesPlayed: number,
		losses: number,
		teamStatType: string,
		wins: number
	}

	declare interface TeamMemberInfoDto {
		inviteDate: number,
		joinDate: number,
		playerId: number,
		status: string
	}

			
}

declare module 'TournamentProvider' {
		declare interface TournamentCodeParameters {
		allowedSummonerIds: SummonerIdParams,
		mapType: string,
		metadata: string,
		pickType: string,
		spectatorType: string,
		teamSize: number
	}

	declare interface SummonerIdParams {
		participants: number[]
	}

	declare interface TournamentCodeDto {
		code: string,
		id: number,
		lobbyName: string,
		map: string,
		metaData: string,
		participants: number[],
		password: string,
		pickType: string,
		providerId: number,
		region: string,
		spectators: string,
		teamSize: number,
		tournamentId: number
	}

	declare interface TournamentCodeUpdateParameters {
		allowedParticipants: string,
		mapType: string,
		pickType: string,
		spectatorType: string
	}

	declare interface LobbyEventDtoWrapper {
		eventList: LobbyEventDto[]
	}

	declare interface LobbyEventDto {
		eventType: string,
		summonerId: string,
		timestamp: string
	}

	declare interface ProviderRegistrationParameters {
		region: string,
		url: string
	}

	declare interface TournamentRegistrationParameters {
		name: string,
		providerId: number
	}

			
}