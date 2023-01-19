import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as components from './components';

@NgModule({
  declarations: [
    AppComponent,
    components.GameComponent,
    components.SongComponent,
    components.VideoPlayerComponent,
    components.SongListComponent,
    components.SongVideoComponent,
    components.AnswerComponent,
    components.GridComponent,
    components.ScoringPageComponent,
    components.ScoreEditorComponent,
    components.CheckboxComponent,
    components.PlayerRowComponent,
    components.RoutingTabsComponent,
    components.LinksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
