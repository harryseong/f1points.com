import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConstructorStandingsComponent} from './chart-components/constructor-standings/constructor-standings.component';
import {DriverStandingsComponent} from './chart-components/driver-standings/driver-standings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
