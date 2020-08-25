import { Component, OnInit } from '@angular/core';
import { Shows } from 'src/app/models/shows.model';
import { Router } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public shows: Shows[] = [];
  public show: Shows[];
  public genres: any[];
  public display: boolean = false;
  public errAllShows: string;
  constructor(private showsService: ShowsService) {
    this.genres = ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Espionage', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science-Fiction', 'Supernatural', 'Thriller', 'War']
  }

  ngOnInit(): void {
    this.showsList();
  }

  public showsList() {
    this.showsService.getShows().subscribe(shows => {
      this.shows = <Shows[]>shows
      this.display = true;
    }, error => {
      this.errAllShows = error
    })
  }

  public showByGenre(genre) {
    let showByGenre: Shows[] = []
    this.shows.forEach((eachTvShow) => {
      if (eachTvShow.genres.includes(genre)) {
        showByGenre.push(eachTvShow);
      }
    })
    return showByGenre;
  }
}
