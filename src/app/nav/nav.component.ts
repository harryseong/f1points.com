import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

}
