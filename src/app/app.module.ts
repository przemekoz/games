import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryService } from './services/category.service';
import { GameService } from './services/game.service';
import { GameviewComponent } from './components/gameview/gameview.component';
import { GamesListComponent } from './components/gameslist/gameslist.component';
import { AppRoutingModule } from './app-routing.module';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { AppMaterialModule } from './app-material.module';

import { LoggerService } from './core/services/logger.service';
import { BackendService } from './core/services/backend.service';
import { CacheService } from './core/services/cache.service';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        GameviewComponent,
        GamesListComponent,
        GameSearchComponent,
        GamesListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NoopAnimationsModule,
        AppMaterialModule,
        LayoutModule,
        HttpClientModule
    ],
    providers: [CategoryService, GameService, LoggerService, BackendService, CacheService],
    entryComponents: [GamesListComponent],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
