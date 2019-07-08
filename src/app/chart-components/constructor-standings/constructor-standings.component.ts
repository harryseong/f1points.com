import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {TEAM_COLORS_19} from '../../shared/constants/constructor-colors/constructor-colors';
import {BehaviorSubject} from 'rxjs';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.scss'],
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
export class ConstructorStandingsComponent implements OnInit {
  dataset: any[] = [];
  labelset: any[] = [];
  colorset: any[] = [];
  colorset2: any[] = [];
  chartTitle = 'Constructor Standings';
  datatype = 'Points';
  leaders$: BehaviorSubject<any> = new BehaviorSubject([]);
  isLoading = true;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.constructorStandings$.subscribe((rsp: any[]) => {
      if (rsp !== null) {
        const leaders = [];
        rsp.forEach(c => {
          this.dataset.push(c.points);
          this.labelset.push(c.Constructor.name);
          this.colorset.push(TEAM_COLORS_19[c.Constructor.constructorId].color);
          this.colorset2.push(TEAM_COLORS_19[c.Constructor.constructorId].color2);
          if (parseInt(c.position, 10) < 4) {
            leaders.push(c);
          }
        });
        this.leaders$.next(leaders);
        this.isLoading = false;
      }
    });
  }
}
