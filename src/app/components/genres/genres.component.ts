import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Shows } from 'src/app/models/shows.model';
import { NgxPaginationModule } from 'ngx-pagination'
import { Router } from '@angular/router';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  public shows: Shows[]
  public show: Shows[]
  public genre: String

  constructor(private router: Router, private showsService: ShowsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ShowByGenre();
  }

  public ShowByGenre(): void { 
    this.route.params.subscribe(params => {
      this.genre = params['genre'];
    })
    this.showsService.getShows().subscribe(shows => {
      this.shows = <Shows[]>shows

    })
  }
}
