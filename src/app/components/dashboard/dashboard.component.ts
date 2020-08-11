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
  config: any;
  shows: Shows[]=[];
  show: Shows[]
  constructor(private router: Router ,private showsService: ShowsService) { 
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      // totalItems: this.collection.count
    };
  }

  ngOnInit(): void {
    this.showsList();
  }

  showsList(){
      this.showsService.getShows().subscribe(shows=>{
        this.shows=<Shows[]>shows
        // console.log(shows);
        
      })  
    }
  showDetail(movie: Shows):void{
    this.router.navigate(['show-detail',movie.id])
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

}
