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
  // id:number
  display: boolean
  cast:[]
  constructor(private showsService: ShowsService, private route: ActivatedRoute) {
    // this.route.params.subscribe(params=>
    //   {this.id= params[this.id];});
    // this.id=this.route.snapshot.params[this.id]
   }

  ngOnInit() {
    this.ShowById();
    // this.route.params.pipe(switchMap((params:Params)=>{
    //   this.show=[];
    //   this.id=params['id']
    //   return this.showsService.getShowById(params['id']).subscribe(show=>{
    //     this.show=<Shows[]>show
    //   })
    // }))
    // this.showsService.getShowById(this.id).subscribe(show=>{
    //   this.show=<Shows[]>show})
  }
  // showById(id:number){
  //   this.showsService.getShowById(id).subscribe(show=>{
  //     this.show=<Shows[]>show
  //     console.log(show);
      
  //   })
  // }

  ShowById():void{
    const id=+this.route.snapshot.paramMap.get('id');
    // this.show=this.showsService.getShowById(id); 
       this.showsService.getShowById(id).subscribe(show=>{
          this.show=<Shows[]>show
          // console.log(show);
          this.display=true;
       })
       this.showsService.getCast(id).subscribe(cast=>{
         this.cast=<any>cast
        //  console.log(cast)
       })
  }
}
