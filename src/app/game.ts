export class Game {
    id: string;
    name: string;
    description: string;
    created_at: Timezone;
    enabled: boolean;
    _embedded: Embedded;
}

export class Timezone {
    date: string;
    timezone_type: number;
    timezone: string;
}

export class GameList {
    games: Game[];
    total: number;
    _embedded: Embedded;
}

class Embedded {
    games: any[];
}
