import { Input, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListParam } from '../../interfaces/list';
import { ComponentList } from '../../interfaces/componentList';
import { LoggerService } from '../services/logger.service';

export class ListAbstract {

    max: number;
    page: number;
    total: number;
    totalPages: number;
    items: any[];
    loaded: boolean;

    constructor(
        protected route: ActivatedRoute,
        protected logger: LoggerService,
        protected listService: ComponentList) {
        route.params.subscribe(params => {
            this.getElements();
        });
        this.max = 6;
        this.page = 0;
        this.loaded = false;
    }

    onInit(): void {
        this.getElements();
    }

    first(): void {
        this.page = 0;
        this.getElements();
    }

    prev(): void {
        if (this.page > 0) {
            this.page--;
            this.getElements();
        }
    }

    next(): void {
        if (this.page < this.totalPages) {
            this.page++;
            this.getElements();
        }
    }

    last(): void {
        this.page = this.totalPages;
        this.getElements();
    }

    goToPage(): void {
        if (this.page > -1 && this.page <= this.totalPages) {
            this.getElements();
        } else {
            // show error
        }
    }

    getElements(): void {
        console.log('list.component, getElements', {
            max: this.max,
            page: this.page,
            sort: ''
        });
        this.loaded = false;
        this.listService.getList({
            max: this.max,
            page: this.page,
            sort: ''
        }).subscribe(result => {
            console.log('list.component, getElements ->reponse:', result);
            this.loaded = true;
            this.items = result.items;
            this.total = result.total;
            this.totalPages = Math.ceil(this.total / this.max);
        });
    }
}
