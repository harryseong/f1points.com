import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {TEAM_COLORS_19} from '../../shared/constants/constructor-colors/constructor-colors';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss']
})
export class DriverStandingsComponent implements OnInit {
  dataset: any[] = [];
  labelset: any[] = [];
  colorset: any[] = [];
  colorset2: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.driverStandings$.subscribe((rsp: any[]) => {
      rsp.forEach(d => {
        this.dataset.push(d.points);
        this.labelset.push(d.Driver.givenName + ' ' + d.Driver.familyName);
        this.colorset.push(TEAM_COLORS_19[d.Constructors[0].constructorId].color);
        this.colorset2.push(TEAM_COLORS_19[d.Constructors[0].constructorId].color2);
      });
    });
  }
}
