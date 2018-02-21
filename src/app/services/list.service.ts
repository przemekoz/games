import { Injectable } from '@angular/core';
import { GameService } from '../services/game.service';
import { ListServiceMap } from '../interfaces/list';
import { LoggerService } from '../_core/services/logger.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ListService {

    private servicesMap: ListServiceMap[] = [];

    constructor(
        private logger: LoggerService,
        private gameService: GameService
    ) {
        this.servicesMap.push({ name: 'game', service: this.gameService });
    }

    get(name): any {
        const elem = this.servicesMap.find(item => item.name === name);
        if (elem) {
            return elem.service;
        } else {
            this.logger.log(`ListService - Can't find service for name: ${name}`);
            return null;
        }
    }
}
