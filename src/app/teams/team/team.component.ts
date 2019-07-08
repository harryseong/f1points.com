import {Component, Input, OnInit} from '@angular/core';
import {NATION_CODES} from '../../shared/constants/nation-codes/nation-codes';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team;
  nationCodes = NATION_CODES;
  countryFlagsUrl = environment.api.countryflags;

  constructor() { }

  ngOnInit() {
  }

}
