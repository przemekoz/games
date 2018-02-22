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

    private lifetime = 5 * 60000; // 5 minutes

    private cache: CacheItem[] = [];

    private find(key: string, params: ListParam | string): CacheItem {
        return this.cache.find(item =>
            item.key === key &&
            this.isActive(item) &&
            item.id === this.getId(params)
        );
    }

    private isActive(item: CacheItem): boolean {
        return item.created + this.lifetime > Date.now();
    }

    private removeOld(): void {
        const found = this.cache.filter(item => this.isActive(item) === false);
        found.forEach(item => {
            this.cache.splice(this.cache.indexOf(item), 1);
        });
        console.log('cache.service: removeOld: cache:', found, this.cache)
    }

    private getResult(cacheItem: CacheItem): List | any {
        if (cacheItem.total) {
            return { items: cacheItem.item, total: cacheItem.total };
        } else {
            return cacheItem.item;
        }
    }

    get(key: string, observable, params: ListParam | string): Observable<List> | any {
        let cacheItem = this.find(key, params);
        if (cacheItem) {
            console.log('cache.service: found: ', cacheItem, params)
            return of(this.getResult(cacheItem));
        } else {
            console.log('cache.service: ->request...')
            observable.subscribe(response => {
                this.removeOld();
                cacheItem = this.prepare(key, this.getId(params), response);
                console.log('cache.service: prepared item: ', response, cacheItem)
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
            item: result.items ? result.items : result.item,
            total: result.total ? result.total : null
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
        return 'page=' + params.page +
            ',max=' + params.max +
            ',sort' + params.sort;
    }

    constructor() { }
}
