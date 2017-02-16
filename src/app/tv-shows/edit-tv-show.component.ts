import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITvShow } from './shared/tv-show.model';
import { TvShowService } from './shared/tv-show.service';

@Component({
  selector: 'edit-tv-show',
  template: `
    <div class="container">
      <tv-show-form (saveForm)="editShow($event)"
                    (cancelForm)="cancelEdit()"
                    [tvShow]="tvShow"></tv-show-form>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 80px;
    }
  `]
})
export class EditTvShowComponent implements OnInit {
  tvShow : ITvShow;

  constructor(private tvShowService: TvShowService, 
              private router:Router, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tvShow = this.tvShowService.getTvShow(+this.activatedRoute.snapshot.params['id']);
  }

  editShow(editedTvShow:ITvShow) {
    this.tvShowService.editShow(editedTvShow);
    this.router.navigate(['/tv-shows']);
  }

  cancelEdit() {
    this.router.navigate(['/tv-shows']);
  }
}