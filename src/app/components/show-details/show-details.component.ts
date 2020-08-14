import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Shows } from 'src/app/models/shows.model';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show: Shows[]
  display: boolean
  cast: []
  constructor(private showsService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ShowById();
  }

  ShowById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.showsService.getShowById(id).subscribe(show => {
      this.show = <Shows[]>show
      this.display = true;
    })
    this.showsService.getCast(id).subscribe(cast => {
      this.cast = <any>cast
    })
  }
}
