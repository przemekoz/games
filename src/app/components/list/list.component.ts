import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListAbstract } from '../../core/list/list.abstract.class';
import { LoggerService } from '../../core/services/logger.service';
import { ListService } from '../../services/list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent extends ListAbstract implements OnInit {

    constructor(protected route: ActivatedRoute,
        protected logger: LoggerService,
        protected listService: ListService) {
        super(route, logger, listService);
    }

    ngOnInit() {
        this.onInit();
    }
}
