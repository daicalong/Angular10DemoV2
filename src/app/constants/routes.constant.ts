import { Routes, Route, RouterModule } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { PlayerListComponent } from '../player-list/player-list.component';

export const AppRoutes: Route[] = [
    {path: '', component: PlayerListComponent, data: {name: 'Home'}},
    {path: 'heroes', component: HeroesComponent, data: {name: 'Heroes'}},
    {path: 'player-list', component: PlayerListComponent, data: {name: 'NFL Players'}}
  ];