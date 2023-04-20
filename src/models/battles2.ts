export type Hom = {
  /** HOM Event ID */
  id: string;
  /** Season Name */
  name: string;
  /** Event start time in unix epoch milliseconds */
  start: number;
  /** Event end time in unix epoch milliseconds */
  end: number;
  /** The total number of scores submitted */
  totalScores: number;
  /** URL to leaderboard data */
  leaderboard: string;
};

export type HomLeaderboard = {
  /** The display name for this user */
  displayName: string;
  /** The HoM score */
  score: number;
  /** URL to the players public profile */
  profile: string;
};

export type UserProfile = {
  /** User Display Name */
  displayName: string;
  /** VIP Status */
  is_vip: boolean;
  /** Selected avatar */
  equippedAvatar: string;
  /** Avatar Icon */
  equippedAvatarURL: string;
  /** Selected Banner */
  equippedBanner: string;
  /** Selected Border */
  equippedBorder: string;
  /** User Display Name */
  casualStats: Record<string, unknown>;
  /** User Display Name */
  rankedStats: Record<string, unknown>;

  /** Currently Equpped badges */
  badges_equipped: Record<string, unknown>[];
  /** All Badges */
  badges_all: Record<string, unknown>[];
  /** Pending Chests */
  chests: string[];
  /** Total Chests Opened */
  chestsOpened: number;
  /** The most recent season the user has played in */
  currentSeason: string;
  /** Numerical Representation of Highest Arena Reached */
  currentSeason_highestArenaIndex: number;
  /** Highest Arena Reached during the most recent event */
  currentSeason_highestArena: string;
  /** Current Season Trophies */
  currentSeason_trophies: number;
  /** Numerical Representation of Highest Arena reached across all seasons */
  lifetime_highestArenaIndex: number;
  /** Highest Arena reached across all seasons */
  lifetime_highestArena: string;
  /** Highest Trophies across all seasons */
  lifetime_trophies: number;
  /** Recent match information */
  matches: string;
  /** Recent hom leaderboard scores */
  homs: string;
  /** Bloon Stats */
  _bloonStats: unknown;
  /** Tower Usage Stats */
  _towers: unknown;
};

export type UserMatch = {
  /** Match type */
  gametype: string;
  /** Map Name */
  map: string;
  /** Duration of the match in seconds */
  duration: number;
  /** Round the match ended */
  endRound: number;
  /** Details about the Left Side Player */
  playerLeft: unknown;
  /** Details about the Left Side Player */
  playerRight: unknown;
  /** Map Icon URL */
  mapURL: string;
};

export type UserHomRank = {
  /** HOM Event ID */
  id: string;
  /** HOM Season Name */
  name: string;
  /** HOM Season Index */
  season: string;
  /** The players current rank (1 = top) */
  rank: number;
  /** The users current HoM score */
  score: number;
  /** Total players in the HoM */
  totalScores: number;
  /** URL to the full leaderboard data */
  leaderboard: string;
};
