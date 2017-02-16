import { Injectable } from '@angular/core';
import { ITvShow } from './tv-show.model';

@Injectable()
export class TvShowService {
  tvShows : ITvShow[] = [
    {
      id: 1,
      title: "Game of Thrones",
      genre: "Adventure, Drama, Fantasy",
      rating: 9,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
      id: 2,
      title: "Breaking Bad",
      genre: "Crime, Drama, Thriller",
      rating: 9,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SY1000_CR0,0,678,1000_AL_.jpg"
    },
    {
      id: 3,
      title: "New Girl",
      genre: "Comedy",
      rating: 8,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTAyMzEzNzI3OF5BMl5BanBnXkFtZTgwNDkxNjA4OTE@._V1_.jpg"
    },
    {
      id: 4,
      title: "Billions",
      genre: "Drama",
      rating: 8,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MzE3NzkwMV5BMl5BanBnXkFtZTgwMDEzNDA5MDI@._V1_.jpg"
    }
  ];

  getTvShows() {
    return this.tvShows; 
  }

  getTvShow(id:number) {
    return this.tvShows.find(t => t.id === id);
  }

  editShow(editedTvShow:ITvShow) {
    let tvShowIndex = this.tvShows.findIndex(t => t.id === editedTvShow.id);
    if (tvShowIndex < 0)
      return;
    this.tvShows[tvShowIndex] = editedTvShow;
  }

  addShow(tvShow:ITvShow) {
    let maxId = Math.max.apply(null, this.tvShows.map(t => t.id));
    tvShow.id = maxId + 1;
    this.tvShows.push(tvShow);
  }
}