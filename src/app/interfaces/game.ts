export class Game {
    id: string;
    name: string;
    description: string;
    created_at: Timezone;
    enabled: boolean;
}

export class Timezone {
    date: string;
    timezone_type: number;
    timezone: string;
}

export class GameList {
    games: Game[];
    total: number;
}

class Embedded {
    games: any[];
}
