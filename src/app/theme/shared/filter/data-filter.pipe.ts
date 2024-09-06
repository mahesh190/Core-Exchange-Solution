import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
  
  transform(array: any, query: string) {
    if (query) {
      return _.filter(array, (row: { name: string }) => row.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
    return array;
  }
}
