import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ITvShow } from './shared/tv-show.model';

@Component({
  selector: 'tv-show-form',
  templateUrl: 'app/tv-shows/tv-show-form.component.html',
  styles: [`
    .container {
      margin-top: 80px;
    }
  `]
})
export class TvShowFormComponent implements OnInit {
  @Input() tvShow : ITvShow;
  @Output() saveForm = new EventEmitter();
  @Output() cancelForm = new EventEmitter();

  tvShowCopy : ITvShow;

  ngOnInit() {
    if (!this.tvShow) {
      this.tvShow = {
        title: "",
        genre: "",
        rating: 0,
        imgUrl: ""
      }
    }
    this.tvShow = Object.assign({}, this.tvShow);
  }
  save() {
    this.tvShow.rating = +this.tvShow.rating;
    this.saveForm.emit(this.tvShow);
  }

  cancel() {
    this.cancelForm.emit();
  }
}