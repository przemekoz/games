import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Games';

    constructor() { }

    // Mock
    categories = [
        { id: '1', name: 'First Category', order: 2 },
        { id: '2', name: 'Second Category', order: 0 },
        { id: '3', name: 'Third Category', order: 1 },
    ];

}
