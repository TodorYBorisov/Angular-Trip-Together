import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(dateString: string, ...args: unknown[]): unknown {
    //date from teh created_at trip
    return moment(dateString).fromNow();
  }

}

//не е имплементирано още {{ tirp.created_at | elapsedTime}}