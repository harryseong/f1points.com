import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api/api.service';
import {CONSTRUCTOR_COLORS_2019} from '../shared/constants/constructor-colors/constructor-colors-19';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.scss']
})
export class ConstructorStandingsComponent implements OnInit {
  dataset: any[] = [];
  labelset: any[] = [];
  colorset: any[] = [];
  colorset2: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.constructorStandings$.subscribe((rsp: any[]) => {
      rsp.forEach(c => {
        this.dataset.push(c.points);
        this.labelset.push(c.Constructor.name);
        this.colorset.push(CONSTRUCTOR_COLORS_2019[c.Constructor.constructorId].color);
        this.colorset2.push(CONSTRUCTOR_COLORS_2019[c.Constructor.constructorId].color2);
      });
    });
  }
}
