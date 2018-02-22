import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListAbstract } from '../../core/list/list.abstract.class';
import { LoggerService } from '../../core/services/logger.service';
import { GameService } from '../../services/game.service';

@Component({
    selector: 'app-list',
    templateUrl: './gameslist.component.html',
    styleUrls: ['./gameslist.component.scss']
})
export class GamesListComponent extends ListAbstract implements OnInit {

    constructor(protected route: ActivatedRoute,
        protected logger: LoggerService,
        protected listService: GameService) {
        super(route, logger, listService);
    }

    ngOnInit() {
        this.onInit();
    }
}
