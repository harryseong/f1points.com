import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  teams$: BehaviorSubject<any> = new BehaviorSubject([]);
  constructorStandings$: BehaviorSubject<any> = new BehaviorSubject(null);
  driverStandings$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  getDriverStandings(season: string) {
    this.http.get(environment.api.ergast + '/' + season + '/driverStandings.json')
      .subscribe((rsp: any) => {
        this.driverStandings$.next(rsp.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      });
  }

  getConstructorStandings(season: string) {
    this.http.get(environment.api.ergast + '/' + season + '/constructorStandings.json')
      .subscribe((rsp: any) => {
        this.constructorStandings$.next(rsp.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
      });
  }

  getTeams(season: string) {
    this.http.get(environment.api.ergast + '/' + season + '/constructors.json')
      .subscribe(rsp => this.teams$.next(rsp));
  }

  getTeamDrivers(season: string, constructorId: string) {
    this.http.get(environment.api.ergast + '/' + season + '/constructors/' + constructorId + 'drivers.json');
  }
}
