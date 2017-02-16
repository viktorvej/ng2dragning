import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ITvShow } from './shared/tv-show.model';
import { TvShowService } from './shared/tv-show.service';

@Component({
  selector: 'add-tv-show',
  template: `
    <div class="container">
      <tv-show-form (saveForm)="addShow($event)"
                    (cancelForm)="cancelAdd()"></tv-show-form>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 80px;
    }
  `]
})
export class AddTvShowComponent {

  constructor(private tvShowService: TvShowService, private route:Router) { }

  addShow(tvShow:ITvShow) {
    this.tvShowService.addShow(tvShow);
    this.route.navigate(['/tv-shows']);
  }

  cancelAdd() {
    this.route.navigate(['/tv-shows']);
  }
}