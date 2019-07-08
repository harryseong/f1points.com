import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api/api.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams$: BehaviorSubject<any> = new BehaviorSubject(null);
  teamIds = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.driverStandings$.subscribe(rsp => {
      if (rsp !== null) {
        const teams = {};
        rsp.forEach(standing => {
          const driver = standing.Driver;
          const team = standing.Constructors[0];

          if (teams[team.constructorId] === undefined) {
            this.teamIds.push(team.constructorId);
            teams[team.constructorId] = {team, drivers: [driver]};
          } else {
            teams[team.constructorId].drivers.push(driver);
          }
        });
        this.teamIds.sort();
        this.teams$.next(teams);

        console.log(JSON.stringify(this.teamIds));
      }
    });
  }

}
