import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../game';
import { ListParam } from '../listparam';
import { GameService } from '../game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  games: Game[];

  max: number;
  page: number;
  total: number;
  countOfPage: number;

  loaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService) {
    route.params.subscribe(params => {
      this.getGames();
    });
    this.max = 6;
    this.page = 0;
    this.loaded = false;
  }

  ngOnInit() {
    this.getGames();
  }

  first(): void {
    if (this.page > 0) {
      this.page = 0;
      this.getGames();
    }
  }

  prev(): void {
    if (this.page > 1) {
      this.page--;
      this.getGames();
    }
  }

  next(): void {
    if (this.page < this.countOfPage) {
      this.page++;
      this.getGames();
    }
  }

  last(): void {
    if (this.page < this.countOfPage) {
      this.page = this.countOfPage;
      this.getGames();
    }
  }

  goToPage(): void {
    if (this.page < 0 || this.page > this.countOfPage) {
      this.page = 0;
    }
    this.getGames();
  }

  getGames(): void {
    this.loaded = false;
    const categorySlug = this.route.snapshot.paramMap.get('slug');
    const params: ListParam = {
      categorySlug: categorySlug,
      max: this.max,
      page: this.page
    };
    this.gameService.getGames(params)
      .subscribe(result => {
        this.loaded = true;
        this.games = result.games;
        this.total = result.total;
        this.countOfPage = Math.floor(this.total / this.max);
      });
  }

}
