import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Shows } from 'src/app/models/shows.model';
import { Router } from '@angular/router';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  public shows: Shows[]
  public show: Shows[]
  public genre: string
  public genreShows: Shows[] = [];

  constructor(private router: Router, private showsService: ShowsService, private route: ActivatedRoute) {
  }

  // ngOnInit(){
  //   this.ShowByGenre()
  // }
  // public ShowByGenre(): void { 
  //   this.route.params.subscribe(params => {
  //     this.genre = params['genre'];
  //   })
  //   this.showsService.getShows().subscribe(shows => {
  //     this.shows = <Shows[]>shows
  //   })
  // }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      this.genreShows = [];
      this.genre = params['genre'];
      return this.ShowByGenre(this.genre)
    }))
      .subscribe(tvShows => this.genreShows = tvShows)
  }

  public ShowByGenre(genre: string): Observable<Shows[]> {
    let genreShows: Shows[] = [];
    this.showsService.getShows().subscribe(tvShows => {
      tvShows.forEach((eachTvShow) => {
        if (eachTvShow.genres.includes(genre)) {
          genreShows.push(eachTvShow)
        }
      })
    })
    return of(genreShows);
  }
}
