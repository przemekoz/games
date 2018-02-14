import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../../interfaces/game';
import { GameService } from '../../services/game.service';

@Component({
    selector: 'app-gameview',
    templateUrl: './gameview.component.html',
    styleUrls: ['./gameview.component.scss']
})
export class GameviewComponent implements OnInit {

    game: Game;

    constructor(
        private route: ActivatedRoute,
        private gameService: GameService,
        private location: Location
    ) {
        route.params.subscribe(params => {
            this.getGame();
        });
    }

    ngOnInit() {
        this.getGame();
    }

    getGame(): void {
        // Get game from url id
        const id = this.route.snapshot.paramMap.get('id');
        // this.gameService.getGame(id)
        //     .subscribe(game => this.game = game);
    }

    goBack(): void {
        this.location.back();
    }

}
