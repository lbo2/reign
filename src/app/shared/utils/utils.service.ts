import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isToday(date: string) {
    const dateMoment = moment(date, moment.ISO_8601).startOf('day');
    return dateMoment.isSame(moment().startOf('day'));
  }

  isYesterday(date: string) {
    const modifiedDate = moment(date, moment.ISO_8601).startOf('day');
    const today = moment().startOf('day');
    return (today.diff(modifiedDate, 'days') === 1 ? true : false);
  }

  formatDisplayDate(date: string){
    if( this.isToday(date) ) {
      return moment(date).format('hh:mm a');
    } else if ( this.isYesterday(date)) {
      return 'yesterday';
    } else {
      return moment(date).format('MMM D');
    }
  }
}
