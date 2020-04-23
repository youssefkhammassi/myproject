import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(value: number, ...arg: any): string {
    if (value > 100) {
      return 'Expensive';
    } else if (value > 30) {
      return 'Average';
    } else {
      return 'Cheap';
    }
    return null;
  }

}
