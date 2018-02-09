import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/game';
import { ListElement } from '../../interfaces/list';

@Component({
    templateUrl: './gamelist.component.html',
    styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements ListElement {

    @Input() data: any;

    constructor() { }

}
