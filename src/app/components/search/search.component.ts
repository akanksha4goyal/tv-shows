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
query:string
searchList:[]

  constructor(private router: Router ,private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.searchByQuery();

    this.route.params.pipe(switchMap((params: Params) => {
      this.query = params['query'];
      return this.showsService.getSearchByQuery(this.query)
    }))
    .subscribe(shows=>{
      this.searchList=<any>shows})

  }
  searchByQuery():void{
    this.route.params.subscribe(params => {
      // get the username out of the route params
      this.query = params['query'];})
    this.showsService.getSearchByQuery(this.query).subscribe(shows=>{
      this.searchList=<any>shows
      // console.log(this.searchList);
      // console.log(this.query)    
    })  
  }


}
