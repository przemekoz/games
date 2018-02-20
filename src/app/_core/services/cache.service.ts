import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ListParam, List } from '../../interfaces/list';

interface CacheItem {
    key: string;
    id: string;
    created: number;
    item: any | any[];
    total?: number;
}

@Injectable()
export class CacheService {

    private lifetime = 30 * 60000; // 30 minutes

    private cache: CacheItem[] = [];

    private find(key: string, params: ListParam | string): CacheItem {
        return this.cache.find(item => item.key === key && this.isActive(item));
    }

    private isActive(item: CacheItem): boolean {
        return item.created < Date.now() - this.lifetime;
    }

    private removeOld(): void {
        const found = this.cache.filter(item => this.isActive(item));
        found.forEach(item => {
            this.cache.splice(this.cache.indexOf(item), 1);
        });
    }

    private getResult(cacheItem: CacheItem) {
        //     return of({ items: this.games, total: this.games.length });
        return cacheItem.item;
    }

    get(key: string, observable, params: ListParam | string): Observable<List> | any {
        let cacheItem = this.find(key, params);
        if (cacheItem) {
            return of(this.getResult(cacheItem));
        } else {
            observable.subscribe(response => {
                cacheItem = this.prepare(key, this.getId(params), response);
                this.removeOld();
                this.cache.push(cacheItem);
                return of(this.getResult(cacheItem));
            });
        }
    }

    private prepare(key: string, id: string, result: any): CacheItem {
        return {
            key: key,
            id: id,
            created: Date.now(),
            item: result.item
        };
    }

    private getId(params: ListParam | string): string {
        if (typeof params === 'string') {
            return params;
        } else {
            return this.parseListParams(params);
        }
    }

    private parseListParams(params: ListParam): string {
        return 'some of string';
    }

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
