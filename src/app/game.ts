export class Game {
    id: string;
    slug: string;
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
