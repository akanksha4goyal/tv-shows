import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Shows } from 'src/app/models/shows.model';
import {NgxPaginationModule} from 'ngx-pagination'
import { Router } from '@angular/router';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
shows: Shows[]
show: Shows[]

config: any
genre: String


  constructor(private router: Router ,private showsService: ShowsService, private route: ActivatedRoute) {
    this.config={
      itemsPerPage:4,
      currentPage:1
    }
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
    // this.showsList();
    // this.showById();
    this.ShowByGenre();
  }

  // showsList(){
  //   this.showsService.getShows().subscribe(shows=>{
  //     this.shows=<Shows[]>shows
  //     console.log(shows);
      
  //   })  
  // }

  // showById(){
  //   this.showsService.getShowById(7).subscribe(show=>{
  //     this.show=<Shows[]>show
  //     console.log(show);
      
  //   })
  // }

  showDetail(movie: Shows):void{
    this.router.navigate(['show-detail',movie.id])
  }

  ShowByGenre():void{
    // const genre=+this.route.snapshot.paramMap.get('genre');
    // this.show=this.showsService.getShowById(id); 
    this.route.params.subscribe(params => {
      // get the username out of the route params
      this.genre = params['genre'];})
    this.showsService.getShows().subscribe(shows=>{
      this.shows=<Shows[]>shows
      // console.log(shows);
      // console.log(this.genre)
      
    })  
  }
}
