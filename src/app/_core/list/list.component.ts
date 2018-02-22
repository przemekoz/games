import { Component, OnInit, Input, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListParam } from '../../interfaces/list';
import { ComponentList } from '../../interfaces/componentList';
import { COMPONENTS } from '../../lists/listelements.conf';
import { LoggerService } from '../services/logger.service';
import { ListService } from '../../services/list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() componentName: string;

    max: number;
    page: number;
    total: number;
    countOfPage: number;
    items: any[];
    loaded: boolean;
    service: ComponentList;

    constructor(
        private route: ActivatedRoute,
        private logger: LoggerService,
        private listService: ListService) {
        route.params.subscribe(params => {
            this.getElements();
        });
        this.max = 6;
        this.page = 0;
        this.loaded = false;
    }

    ngOnInit() {
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
        if (this.page > 1) {
            this.page--;
            this.getElements();
        }
    }

    next(): void {
        if (this.page < this.countOfPage) {
            this.page++;
            this.getElements();
        }
    }

    last(): void {
        this.page = this.countOfPage;
        this.getElements();
    }

    goToPage(): void {
        if (this.page > -1 && this.page <= this.countOfPage) {
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
                this.countOfPage = Math.floor(this.total / this.max);
            });
        } else {
            this.logger.log(`service for component "${this.componentName}" is not available`);
        }
    }

}
