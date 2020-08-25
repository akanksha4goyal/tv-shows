import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByRating'
})
export class SortByRatingPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    value = value || []
    return value.sort((a, b) => {
      let x = a.rating.average;
      let y = b.rating.average;
      if (x < y) {
        return 1;
      } else {
        return -1;
      }
    })
  }
}
