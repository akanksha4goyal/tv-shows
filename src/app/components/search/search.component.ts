import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string
  searchList: []

  constructor(private router: Router, private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      this.query = params['query'];
      return this.showsService.getSearchByQuery(this.query)
    }))
      .subscribe(shows => {
        this.searchList = <any>shows
      })
  }
}
