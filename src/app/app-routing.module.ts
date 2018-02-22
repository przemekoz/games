import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameviewComponent } from './components/gameview/gameview.component';
import { GamesListComponent } from './components/gameslist/gameslist.component';

const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'list/:slug', component: GamesListComponent },
    { path: 'game/:id', component: GameviewComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
