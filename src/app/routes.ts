import { Routes } from '@angular/router';

import { TvShowsListComponent } from './tv-shows/tv-shows-list.component';
import { AddTvShowComponent } from './tv-shows/add-tv-show.component';
import { EditTvShowComponent } from './tv-shows/edit-tv-show.component';

export const appRoutes:Routes = [
  { path: 'tv-shows', component: TvShowsListComponent },
  { path: 'tv-shows/add', component: AddTvShowComponent },
  { path: 'tv-shows/:id', component: EditTvShowComponent },
  { path: '', redirectTo: '/tv-shows', pathMatch: 'full'}
];