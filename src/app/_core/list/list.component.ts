import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import ListElement from '../../interfaces/listelement';
import ListParam from '../../interfaces/listparam';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() type: string;
    @Input() elements: ListElement[];

    max: number;
    page: number;
    total: number;
    countOfPage: number;

    loaded: boolean;

    constructor(
        private route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.getElements();
        });
        this.max = 6;
        this.page = 0;
        this.loaded = false;
    }

    ngOnInit() {
        this.getElements();
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
        this.loaded = false;
        const params: ListParam = {
            max: this.max,
            page: this.page,
            sort: ''
        };
        // this.gameService.getGames(params)
        //   .subscribe(result => {
        //     this.loaded = true;
        //     this.elements = result.games;
        //     this.total = result.total;
        //     this.countOfPage = Math.floor(this.total / this.max);
        //   });
    }

}
