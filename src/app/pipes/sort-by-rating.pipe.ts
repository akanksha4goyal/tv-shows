import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByRating'
})
export class SortByRatingPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    value=value || [] // set records to an empty array if undefined
    return value.sort((a,b)=>{
      let x=a.rating.average;
      let y=b.rating.average;
      if(x<y){
        return 1;
      }else{
        return -1;
      }
      return 0;
    })
    return null;
  }

}
