import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  games: Game[];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService) {
      route.params.subscribe(params => {
        // this.paramsChanged(params['slug']);
        console.log(params['slug'])
      });
  }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log('Component list: ' + slug);
    this.gameService.getGames(slug)
      .subscribe(games => this.games = games);
  }

}
