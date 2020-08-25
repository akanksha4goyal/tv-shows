import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Shows } from 'src/app/models/shows.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  public show: Shows[]
  public display: boolean
  public cast: []
  public seasons: []
  public errShowById: String
  public errCast: String
  public errSeasons: String
  constructor(private showsService: ShowsService, private route: ActivatedRoute, public location: Location) { }

  ngOnInit() {
    this.ShowById();
  }

  public ShowById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.showsService.getShowById(id).subscribe(show => {
      this.show = <Shows[]>show
      this.display = true;
    },error=>{
      this.errShowById=error;
    })
    this.showsService.getCast(id).subscribe(cast => {
      this.cast = <any>cast
    },error=>{
      this.errCast=error;
    })

    this.showsService.getSeasons(id).subscribe(seasons => {
      this.seasons = <any>seasons
    },error=>{
      this.errSeasons=error;
    })
  }

  public goBack() {
    this.location.back();
  }
}
