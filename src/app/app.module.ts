import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './shared/modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChartComponent } from './chart-components/chart/chart.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';
import { DriverComponent } from './drivers/driver/driver.component';
import {ApiService} from './shared/services/api/api.service';
import {ChartService} from './shared/services/chart/chart.service';
import { DriverStandingsComponent } from './chart-components/driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './chart-components/constructor-standings/constructor-standings.component';
import { DriverAgeComponent } from './chart-components/driver-age/driver-age.component';
import { StandingsComponent } from './chart-components/standings/standings.component';
import { LeaderDriverComponent } from './chart-components/driver-standings/leader-driver/leader-driver.component';
import { LeaderConstructorComponent } from './chart-components/constructor-standings/leader-constructor/leader-constructor.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DriversComponent } from './drivers/drivers.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HomeComponent,
    TeamsComponent,
    TeamComponent,
    DriverComponent,
    DriverStandingsComponent,
    ConstructorStandingsComponent,
    DriverAgeComponent,
    StandingsComponent,
    LeaderDriverComponent,
    LeaderConstructorComponent,
    ProgressSpinnerComponent,
    NavComponent,
    DriversComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    ApiService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
