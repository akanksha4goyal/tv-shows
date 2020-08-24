import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Shows } from 'src/app/models/shows.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public query: string
  public searchList: []
  public searchedShows: Shows[];
  constructor(private router: Router, private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      this.query = params['query'];
      return this.showsService.getSearchByQuery(this.query)
    }))
      .subscribe(shows => {
        this.searchedShows = [];
        shows.forEach(tvShow => {
          if (tvShow.show.name && tvShow.show.image && tvShow.show.image.medium)
            this.searchedShows.push(tvShow)
        })
      })
  }
}
