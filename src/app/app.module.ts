import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './category.service';
import { GameService } from './game.service';
import { GameviewComponent } from './gameview/gameview.component';
import { GamelistComponent } from './gamelist/gamelist.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GameviewComponent,
    GamelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CategoryService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
