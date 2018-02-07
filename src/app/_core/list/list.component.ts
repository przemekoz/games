import { Component, OnInit, Input, Type, ErrorHandler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListElement } from '../../interfaces/listelement';
import { ListParam } from '../../interfaces/listparam';
import { ComponentListService } from '../../interfaces/componentListService';
import { COMPONENTS } from '../../lists/listelements.conf';

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
    elements: ListElement[];
    loaded: boolean;
    service: ComponentListService;

    constructor(
        private route: ActivatedRoute,
        private errorHandler: ErrorHandler) {
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
            if (element && element.service) {
                this.service = new element.service;
                this.getElements();
            }
            else {
                this.errorHandler.handleError(`Can't find element ${this.componentName} in listelements.conf`);
            }
        }
        else {
            this.errorHandler.handleError(`this.componentName is not set`);
        }
    }

    first(): void {
        if (this.page > 0) {
            this.page = 0;
            this.getElements();
        }
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
        if (this.page < this.countOfPage) {
            this.page = this.countOfPage;
            this.getElements();
        }
    }

    goToPage(): void {
        if (this.page < 0 || this.page > this.countOfPage) {
            this.page = 0;
        }
        this.getElements();
    }

    getElements(): void {
        if (this.service) {
            this.loaded = false;
            this.service.getList({
                max: this.max,
                page: this.page,
                sort: ''
            })
                .subscribe(result => {
                    this.loaded = true;
                    this.elements = result.items;
                    this.total = result.total;
                    this.countOfPage = Math.floor(this.total / this.max);
                });
        } else {
            // log
            this.errorHandler.handleError(`service for component "${this.componentName}" is not available`);
        }
    }

}
