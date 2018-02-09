export interface ListElement {
    data: any;
}

export interface ListParam {
    max: number;
    page: number;
    sort: string;
}

export interface List {
    total: number;
    items: any[];
}
