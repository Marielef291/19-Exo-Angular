import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(tableau : string [], order : string): string [] {
    if (order == "asc"){
      return tableau.sort()
    }else if (order == "desc"){
      return tableau.sort().reverse()
    }else{
      return tableau
    }
  }
}
