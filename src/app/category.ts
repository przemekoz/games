export class Category {
    slug: string;
    name: string;
    order: number;
    _embedded: Embedded;
}

class Embedded {
    game_categories: any;
}
