import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gameview',
  templateUrl: './gameview.component.html',
  styleUrls: ['./gameview.component.css']
})
export class GameviewComponent implements OnInit {

  game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    // Get game from url id
    this.game = this.gameService.getGame('kaka');
  }

}
