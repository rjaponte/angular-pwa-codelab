import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

function fuzzify(date: Date): string {
  const momentDate = moment(date);

  return momentDate.fromNow();
}

@Pipe({
  name: 'fuzzytime'
})
export class FuzzyTimePipe implements PipeTransform {

  transform = (value: string) => {
    const conversion = Number(value);
    let date: Date;
    if (!isNaN(conversion)) {
      date = new Date(conversion);
    } else {
      date = new Date(value);
    }
    return fuzzify(date);
  }
}
