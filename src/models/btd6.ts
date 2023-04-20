type Power = {
  power: string;
  max: number;
};

type Tower = {
  tower: string;
  max: number;
  path1NumBlockedTiers: number;
  path2NumBlockedTiers: number;
  path3NumBlockedTiers: number;
  isHero: boolean;
};

export type Race = {
  /** Race Event ID */
  id: string;
  /** Race Name */
  name: string;
  /** Race start time in unix epoch milliseconds */
  start: number;
  /** Race end time in unix epoch milliseconds */
  end: number;
  /** The total number of scores submitted */
  totalScores: number;
  /** URL to leaderboard data */
  leaderboard: string;
  /** URL to full Race metadata */
  metadata: string;
};

export type RaceLeaderboard = {
  /** The display name for this user */
  displayName: string;
  /** The Race score in milliseconds */
  score: number;
  /** The epoch time in milliseconds when the score was submitted (-1 when not available) */
  submissionTime: number;
  /** URL to the players public profi */
  profile: string;
};

export type EventMetadata = {
  /** Challenge Name */
  name: string;
  /** Challenge creation time in unix epoch milliseconds */
  createdAt: number;
  /** Unique Challenge ID */
  id: string;
  /** URL to the creators profile */
  creator: string;
  /** Version of the game this challenge was created in */
  gameVersion: string;
  /** Map Name */
  map: string;
  /** URL to the map icon */
  mapURL: string;
  /** Game Mode */
  mode: string;
  /** Challenge Difficulty */
  difficulty: string;
  /** true when Double Cash Mode is disabled */
  disableDoubleCash: boolean;
  /** true when Instas are disabled */
  disableInstas: boolean;
  /** true when Monkey Knowledge is disabled */
  disableMK: boolean;
  /** true when Powers are disabled */
  disablePowers: boolean;
  /** true when Selling is disabled */
  disableSelling: boolean;
  /** Starting cash value */
  startingCash: number;
  /** Starting lives */
  lives: number;
  /** Maximum allowed lives */
  maxLives: number;
  /** Maximum towers allowed */
  maxTowers: number;
  /** Maximum paragons allowed */
  maxParagons: number;
  /** Starting round */
  startRound: number;
  /** End Round */
  endRound: number;
  /** Total number of attempts */
  plays: number;
  /** Total number of wins */
  wins: number;
  /** Total number of losses */
  losses: number;
  /** Total number of upvotes */
  upvotes: number;
  /** Total number of unique attempts */
  playsUnique: number;
  /** Total number of unique player wins */
  winsUnique: number;
  /** Total number of unique player losses */
  lossesUnique: number;
  /** Ability Cooldown Multiplier */
  abilityCooldownReductionMultiplier: number;
  /** Least Cash Used Setting */
  leastCashUsed: number;
  /** Least Tier Used */
  leastTiersUsed: number;
  /** Are continues enabled */
  noContinues: number;
  /** The RNG seed */
  seed: number;
  /** Blocker removal cost multiplier */
  removeableCostMultiplier: number;
  /** Bloon Round Information */
  roundSets: string[];
  /** [!] Power restrictions */
  _powers: any[];
  /** [!] Bloon Modifiers */
  _bloonModifiers: {
    speedMultiplier: number;
    moabSpeedMultiplier: number;
    bossSpeedMultiplier: number;
    regrowRateMultiplier: number;
    healthMultipliers: {
      bloons: number;
      moabs: number;
      boss: number;
    };
    allCamo: boolean;
    allRegen: boolean;
  };
  /** [!] Tower restrictions */
  _towers?: Tower[];
};

export type Boss = {
  /** Boss Event ID */
  id: string;
  /** Boss Name */
  name: string;
  /** Boss start time in unix epoch milliseconds */
  start: number;
  /** Boss end time in unix epoch milliseconds */
  end: number;
  /** The name of the Boss */
  bossType: 'vortex' | 'dreadbloon' | 'bloonarius' | 'lych' | string;
  /** Boss Icon */
  bossTypeURL: string;
  /** Total scores in the Standard leaderboard */
  totalScores_standard: number;
  /** Total scores in the Elite leaderboard */
  totalScores_elite: number;
  /** URL to Elite Difficulty Single Player leaderboard data */
  leaderboard_standard_players_1: string;
  /** URL to Elite Difficulty Single Player leaderboard data */
  leaderboard_elite_players_1: string;
  /** URL to full metadata for Standard Mode */
  metadataStandard: string;
  /** URL to full metadata for Elite Mode */
  metadataElite: string;
};

export type BossLeaderboard = {
  /** The display name for this user */
  displayName: string;
  /** The Boss score in milliseconds (lower is better) */
  score: number;
  /** The epoch time in milliseconds */
  submissionTime: number;
  /** URL to the players public profile */
  profile: string;
};

export type UserProfile = {
  /** Current User Display Name */
  displayName: string;
  /** Player Rank */
  rank: number;
  /** Player Veteran Rank */
  veteranRank: number;
  /** Number of achievements unlocked */
  achievements: string;
  /** Most Experienced Monkey */
  mostExperiencedMonkey: string;
  /** [Deprected] Use gameplay.highestRound */
  highestRound: number;
  /** User avatar icon */
  avatar: string;
  /** User banner icon */
  banner: string;
  /** URL to avatar icon */
  avatarURL: string;
  /** URL to banner icon */
  bannerURL: string;
  /** Number of followers */
  followers: number;
  /** Bloon Pop Stats */
  bloonsPopped: {
    badsPopped: number;
    bfbsPopped: number;
    bloonsPopped: number;
    bloonsLeaked: number;
    camosPopped: number;
    ceramicsPopped: number;
    coopBloonsPopped: number;
    goldenBloonsPopped: number;
    leadsPopped: number;
    moabsPopped: number;
    necroBloonsReanimated: number;
    transformingTonicsUsed: number;
    purplesPopped: number;
    regrowsPopped: number;
    zomgsPopped: number;
  } & Record<string, number>;
  /** Gameplay Stats */
  gameplay: {
    cashEarned: number;
    challengesCompleted: number;
    collectionChestsOpened: number;
    coopCashGiven: number;
    dailyRewards: number;
    gameCount: number;
    gamesWon: number;
    highestRound: number;
    highestRoundCHIMPS: number;
    highestRoundDeflation: number;
    instaMonkeyCollection: number;
    monkeyTeamsWins: number;
    powersUsed: number;
    totalOdysseysCompleted: number;
    totalOdysseyStars: number;
    totalTrophiesEarned: number;
    damageDoneToBosses: number;
  } & Record<string, number>;
  /** Hero Stats */
  heroesPlaced: {
    AdmiralBrickell: number;
    Adora: number;
    Benjamin: number;
    Etienne: number;
    Geraldo: number;
    Gwendolin: number;
    ObynGreenfoot: number;
    PatFusty: number;
    Psi: number;
    Quincy: number;
    Sauda: number;
    StrikerJones: number;
    Ezili: number;
    CaptainChurchill: number;
  } & Record<string, number>;
  /** [!] Single Player Medals */
  _medalsSinglePlayer: {
    'CHIMPS-BLACK': number;
    Easy: number;
    Medium: number;
    Hard: number;
    PrimaryOnly: number;
    Deflation: number;
    MilitaryOnly: number;
    Apopalypse: number;
    Reverse: number;
    MagicOnly: number;
    HalfCash: number;
    DoubleMoabHealth: number;
    AlternateBloonsRounds: number;
    Impoppable: number;
    Clicks: number;
  } & Record<string, number>;
  /** [!] Multiplayer Medals */
  _medalsMultiplayer: {
    'CHIMPS-BLACK': number;
    Easy: number;
    Medium: number;
    Hard: number;
    PrimaryOnly: number;
    Deflation: number;
    MilitaryOnly: number;
    Apopalypse: number;
    Reverse: number;
    MagicOnly: number;
    HalfCash: number;
    DoubleMoabHealth: number;
    AlternateBloonsRounds: number;
    Impoppable: number;
    Clicks: number;
  } & Record<string, number>;
  /** [!] Boss Medals */
  _medalsBoss: Record<string, number>;
  /** [!] Elite Boss Medals */
  _medalsBossElite: Record<string, number>;
  /** [!] CT Local Medals */
  _medalsCTLocal: {
    GoldDiamond: number;
    BlackDiamond: number;
    DoubleGold: number;
    Silver: number;
  } & Record<string, number>;
  /** [!] CT Global Medals */
  _medalsCTGlobal: {
    DoubleSilver: number;
    GoldSilver: number;
    Bronze: number;
  } & Record<string, number>;
  /** [!] Race Medals */
  _medalsRace: {
    Bronze: number;
  } & Record<string, number>;
};

export type Challenge = {
  /** Challenge Filter Name */
  name: string;
  /** Challenge creation time in unix epoch milliseconds */
  createdAt: number;
  /** Unique Challenge ID */
  id: string;
  /** URL to the creators profile */
  creator?: string;
  /** URL to the full challenge informatio */
  metadata: string;
};

export type ChallangeFilter = {
  /** Challenge Filter Name */
  type: 'newest' | 'trending' | 'daily' | string;
  /** URL to view challenges with this filter */
  challenges: string;
};

export type CT = {
  /** CT Event ID */
  id: string;
  /** Event start time in unix epoch milliseconds */
  start: number;
  /** Event end time in unix epoch millisecond */
  end: number;
  /** Total scores in the Player leaderboard */
  totalScores_player: number;
  /** Total scores in the Team leaderboard */
  totalScores_team: number;
  /** URL to Top Player leaderboard */
  leaderboard_player: string;
  /** URL to Top Team leaderboard */
  leaderboard_team: string;
};

export type CTLeaderboardPlayer = {
  /** The display name for this user */
  displayName: string;
  /** The CT score */
  score: number;
  /** URL to the players public profile */
  profile: string;
};

export type CTLeaderboardTeam = {
  /** The display name for this Team */
  displayName: string;
  /** The CT score */
  score: number;
  /** URL to the team public profile */
  profile: string;
};

export type GuildProfile = {
  /** Guild Name */
  name: string;
  /** URL to the Owners public profile */
  owner: string;
  /** Number of players in Team */
  numMembers: number;
  /** Status of the Team (OPEN, FILTERED, DISBANDED, CLOSED) */
  status: string;
  /** Banner Icon Name */
  banner: string;
  /** Frame Icon Name */
  frame: string;
  /** Team Icon Name */
  icon: string;
  /** URL to banner icon */
  bannerURL: string;
  /** URL to frame icon */
  frameURL: string;
  /** URL to icon */
  iconURL: string;
};

export type Odyssey = {
  id: string;
  name: string;
  start: number;
  end: number;
  metadata_easy: string;
  metadata_medium: string;
  metadata_hard: string;
};

export type OdysseyMetadata = {
  /** Odyssey Event ID */
  id: string;
  /** True when the Odyssey is extreme */
  isExtreme: boolean;
  /** Maximum seats on the boat */
  maxMonkeySeats: number;
  /** Maximum towers */
  maxMonkeysOnBoat: number;
  /** Maximum number of powers */
  maxPowerSlots: number;
  /** Voyage starting health */
  startingHealth: number;
  /** [!] Rewards list */
  _rewards: string[];
  /** [!] Powers that can be chosen */
  _availablePowers: Power[];
  /** [!] Towers that can be chosen */
  _availableTowers: Tower[];
  /** [!] Default event powers */
  _defaultPowers: Power[];
  /** [!] Defauly Towers */
  _defaultTowers: Tower[];
  /** URL to map information */
  maps: string;
};
