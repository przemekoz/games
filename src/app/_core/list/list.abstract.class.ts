import { Input, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListParam } from '../../interfaces/list';
import { ComponentList } from '../../interfaces/componentList';
import { COMPONENTS } from '../../lists/listelements.conf';
import { LoggerService } from '../services/logger.service';
import { ListService } from '../../services/list.service';

export class ListAbstract {

    @Input() componentName: string;

    max: number;
    page: number;
    total: number;
    totalPages: number;
    items: any[];
    loaded: boolean;
    service: ComponentList;

    constructor(
        protected route: ActivatedRoute,
        protected logger: LoggerService,
        protected listService: ListService) {
        route.params.subscribe(params => {
            this.getElements();
        });
        this.max = 6;
        this.page = 0;
        this.loaded = false;
    }

    onInit(): void {
        if (this.componentName) {
            const element = COMPONENTS.find(item => item.name === this.componentName);
            if (element) {
                this.service = this.listService.get(element.name);
                this.getElements();
            } else {
                this.logger.log(`Can't find element ${this.componentName} in listelements.conf`);
            }
        } else {
            this.logger.log(`this.componentName is not set`);
        }
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
        if (this.service) {
            console.log('list.component, getElements', {
                max: this.max,
                page: this.page,
                sort: ''
            })
            this.loaded = false;
            this.service.getList({
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
        } else {
            this.logger.log(`service for component "${this.componentName}" is not available`);
        }
    }
}
