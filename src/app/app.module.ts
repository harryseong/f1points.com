import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './shared/modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import { ChartComponent } from './chart-components/chart/chart.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';
import { DriverComponent } from './driver/driver.component';
import {ApiService} from './shared/services/api/api.service';
import {ChartService} from './shared/services/chart/chart.service';
import { DriverStandingsComponent } from './chart-components/driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './chart-components/constructor-standings/constructor-standings.component';
import { DriverAgeComponent } from './chart-components/driver-age/driver-age.component';
import { StandingsComponent } from './chart-components/standings/standings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChartComponent,
    HomeComponent,
    TeamsComponent,
    TeamComponent,
    DriverComponent,
    DriverStandingsComponent,
    ConstructorStandingsComponent,
    DriverAgeComponent,
    StandingsComponent
  ],
  exports: [
    MaterialModule
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ApiService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
