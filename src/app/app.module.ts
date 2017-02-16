import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TvShowsListComponent } from './tv-shows/tv-shows-list.component';
import { NavComponent } from './nav/nav.component';
import { TvShowFormComponent } from './tv-shows/tv-show-form.component';
import { AddTvShowComponent } from './tv-shows/add-tv-show.component';
import { EditTvShowComponent } from './tv-shows/edit-tv-show.component';

import { TvShowService } from './tv-shows/shared/tv-show.service';
import { appRoutes } from './routes';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    TvShowsListComponent,
    NavComponent,
    AddTvShowComponent,
    TvShowFormComponent,
    EditTvShowComponent
  ],
  providers: [
    TvShowService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
