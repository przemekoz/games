import { Component } from '@angular/core';
import { Game } from '../interfaces/game';

@Component({
    template: `
    List: <app-list componentName="gamelist" [elements]="items"></app-list>
  `
})
export class GamesListComponent {

    items: Game[] = [
        {
            id: 'gamekey-832983492',
            name: 'Game one',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            enabled: true
        },
        {
            id: 'gamekey-123123',
            name: 'Game two',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            enabled: true
        },
        {
            id: 'gamekey-3123123',
            name: 'Game three',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            enabled: true
        },
        {
            id: 'gamekey-5678678678',
            name: 'Game four',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            enabled: true
        },
        {
            id: 'gamekey-8678678',
            name: 'Game five',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            enabled: true
        }
    ];

}
