import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor() { }

  static getDriverAge(dob) {
    return moment.duration(moment().diff(moment(dob, 'YYYY-MM-DD'))).as('years');
  }

  static getDriverFullName(driver) {
    return driver.givenName + ' ' + driver.familyName;
  }
}
