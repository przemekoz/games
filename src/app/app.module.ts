import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './category.service';
import { GameService } from './game.service';
import { GameviewComponent } from './gameview/gameview.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GameviewComponent,
    GamelistComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoryService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
