import { Component, OnInit } from '@angular/core';

export enum StandingType {
  DRIVER = 'driver',
  CONSTRUCTOR = 'constructor'
}

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  standingType: StandingType = StandingType.DRIVER;

  constructor() { }

  ngOnInit() {}

  showDrivers() {
    this.standingType = StandingType.DRIVER;
  }

  showConstructors() {
    this.standingType = StandingType.CONSTRUCTOR;
  }

}
