import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tour of Games';
    isSmallScreen: boolean;

    constructor(private breakpointObserver: BreakpointObserver) { }

    // Mock
    categories = [
        { id: '1', name: 'First Category', order: 2 },
        { id: '2', name: 'Second Category', order: 0 },
        { id: '3', name: 'Third Category', order: 1 },
    ];

    ngOnInit() {
        this.isSmallScreen = this.breakpointObserver
            .isMatched(['(max-width: 901px)']);
    }

    sidenavMode(): string {
        return this.isSmallScreen ? 'over' : 'side';
    }
}
