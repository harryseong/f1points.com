import {Component, OnInit} from '@angular/core';
import {ApiService} from './shared/services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'F1 Points';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDriverStandings('current');
    this.apiService.getConstructorStandings('current');
  }
}
