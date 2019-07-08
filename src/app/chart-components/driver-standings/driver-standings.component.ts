import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {TEAM_COLORS_19} from '../../shared/constants/constructor-colors/constructor-colors';
import {BehaviorSubject} from 'rxjs';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        query('.stagger', [
          style({ opacity: 0, transform: 'translateY(5px)'}),
          stagger('0.2s', [
            animate('0.75s ease', style({ opacity: 1, transform: 'translateY(0)' })),
          ])
        ]),
      ]),
    ]),
  ]
})
export class DriverStandingsComponent implements OnInit {
  dataset: any[] = [];
  labelset: any[] = [];
  colorset: any[] = [];
  colorset2: any[] = [];
  chartTitle = 'Driver Standings';
  datatype = 'Points';
  leaders$: BehaviorSubject<any> = new BehaviorSubject(null);
  isLoading = true;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.driverStandings$.subscribe((rsp: any[]) => {
      if (rsp !== null) {
        const leaders = [];
        rsp.forEach(d => {
          this.dataset.push(d.points);
          this.labelset.push(d.Driver.givenName + ' ' + d.Driver.familyName);
          this.colorset.push(TEAM_COLORS_19[d.Constructors[0].constructorId].color);
          this.colorset2.push(TEAM_COLORS_19[d.Constructors[0].constructorId].color2);

          if (parseInt(d.position, 10) < 4) {
            leaders.push(d);
          }
        });
        this.leaders$.next(leaders);
        this.isLoading = false;
      }
    });
  }
}
