import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent, SongComponent, SongListComponent } from './components';
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
  { path: 'song/:id', component: SongComponent, canActivate: [SongGuard] },
  { path: '**', redirectTo: 'game' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
