import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {TEAM_COLORS_19} from '../../shared/constants/constructor-colors/constructor-colors';
import {DriverService} from '../../shared/services/driver/driver.service';

@Component({
  selector: 'app-driver-age',
  templateUrl: './driver-age.component.html',
  styleUrls: ['./driver-age.component.scss']
})
export class DriverAgeComponent implements OnInit {
  dataset: any[] = [];
  labelset: any[] = [];
  colorset: any[] = [];
  colorset2: any[] = [];
  datatype = 'Age';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.driverStandings$.subscribe((rsp: any[]) => {
      const drivers = [];

      rsp.forEach(d => {
        const name = DriverService.getDriverFullName(d.Driver);
        const age = DriverService.getDriverAge(d.Driver.dateOfBirth);
        const color = TEAM_COLORS_19[d.Constructors[0].constructorId].color;
        const color2 = TEAM_COLORS_19[d.Constructors[0].constructorId].color2;
        drivers.push({name, age, color, color2});
      });

      drivers.sort((a, b) => a.age - b.age);
      drivers.forEach(d => {
        this.dataset.push(Math.floor(d.age));
        this.labelset.push(d.name);
        this.colorset.push(d.color);
        this.colorset2.push(d.color2);
      });
    });
  }
}
