import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GameComponent,
  LinksComponent,
  ScoringPageComponent,
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
  { path: 'scoring', component: ScoringPageComponent },
  { path: 'links', component: LinksComponent },
  { path: '**', redirectTo: 'game' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
