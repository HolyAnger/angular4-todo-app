import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(arraySearch: any[], searchValue: string, byKey: string): any {
    if (!arraySearch || !searchValue) {
      return arraySearch;
    }

    return arraySearch.filter((arrayItem) => arrayItem[byKey].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  }
}
