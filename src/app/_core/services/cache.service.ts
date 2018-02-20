import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ListParam, List } from '../../interfaces/list';

interface CacheItem {
    key: 'string';
    created: number;
    item: any | any[];
    total?: number;
}

@Injectable()
export class CacheService {

    private lifetime = 30 * 60000; // 30 minutes

    private cache: CacheItem[] = [];

    private find(key: string): CacheItem {
        return this.cache.find(item => item.key === key && this.isActive(item));
    }

    private isActive(item: CacheItem): boolean {
        return item.created < Date.now() - this.lifetime;
    }

    private removeOld(): void {
        const found = this.cache.filter(item => this.isActive(item));
        found.forEach(item => {
            this.cache.splice(this.cache.indexOf(item), 1);
        })
    }

    get(key: string, observable, params: ListParam): Observable<List> | any {
        const cacheItem = this.find(key);
        if (cacheItem) {
            if (cacheItem.total) {
                return of({ items: cacheItem.item, total: cacheItem.total });
            } else {
                return of(cacheItem.item);
            }
        } else {

        }

        // .subscribe(response => {
        //     this.games.push(...response.items);
        //     return of({ items: this.games, total: this.games.length });
        // })
    }



    /*
    

    
    
    */

    /*
    offset=0 limit=20
        games.slice(0, 0 * 20 + 20)

    offset=5 limit=20
        games.slice(5*20, 5*20 + 20)

    offset=2 limit=5
        games.slice(2*5, 2*5 + 5)

    let start = offset * limit;
    games.slice(start, start + limit)

    */

    /*
    offset=0&limit=20
        {1,'a'}
        {2,'b'}
        {3,'c'}
        {5,'e'}
        {7,'h'}

    offset=0&limit=20&sort=+title
        {15,'z'}
        {2,'b'}
        {3,'c'}
        {1,'a'}
        {7,'h'}

    offset=1&limit=20&sort=+title
        {8,'k'}
        {10,'n'}
        {11,'m'}
        {17,'o'}
        {22,'y'}

    */


    constructor() { }



}
