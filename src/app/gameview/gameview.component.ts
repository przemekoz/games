import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-gameview',
  templateUrl: './gameview.component.html',
  styleUrls: ['./gameview.component.css']
})
export class GameviewComponent implements OnInit {

  game: Game;

  constructor() { }

  ngOnInit() {
    // Get game from url id
    this.game = {
      id: 'microgaming-thunderstruck-ii',
      name: 'Thunderstruck II',
      slug: 'thunderstruck-ii',
      enabled: true,
      description: 'Thunderstruck II ...',
      created_at: {
        date: '2013-08-06 14:01:58.000000',
        timezone_type: 1,
        timezone: '+00:00'
      }
    };
  }

}
