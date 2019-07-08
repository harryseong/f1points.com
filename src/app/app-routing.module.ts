import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConstructorStandingsComponent} from './chart-components/constructor-standings/constructor-standings.component';
import {DriverStandingsComponent} from './chart-components/driver-standings/driver-standings.component';
import {DriverComponent} from './drivers/driver/driver.component';
import {TeamComponent} from './teams/team/team.component';
import {DriversComponent} from './drivers/drivers.component';
import {TeamsComponent} from './teams/teams.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', component: HomeComponent},
  {path: 'drivers', component: DriversComponent, children: [
      {path: ':driverId', component: DriverComponent},
    ]},
  {path: 'teams', component: TeamsComponent, children: [
      {path: ':teamId', component: TeamComponent},
    ]},
  {path: 'standings', children: [
      {path: 'driver', component: DriverStandingsComponent},
      {path: 'constructor', component: ConstructorStandingsComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
