import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GameComponent,
  ScoringComponent,
  SongComponent,
  SongListComponent,
  SongVideoComponent,
} from './components';
import { SongGuard } from './services';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'list',
    component: SongListComponent,
  },
  {
    path: 'song/:name',
    component: SongComponent,
    canActivate: [SongGuard],
    children: [{ path: ':id', component: SongVideoComponent }],
  },
  { path: 'scoring', component: ScoringComponent },
  { path: '**', redirectTo: 'game' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
