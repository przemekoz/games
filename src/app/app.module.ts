import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './services/category.service';
import { GameService } from './services/game.service';
import { GameviewComponent } from './gameview/gameview.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { AppMaterialModule } from './app-material.module';
import { GamesListComponent } from './lists/gameslist.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        GameviewComponent,
        GamelistComponent,
        ListComponent,
        GameSearchComponent,
        GamesListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        AppMaterialModule,
        LayoutModule,
    ],
    providers: [CategoryService, GameService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
