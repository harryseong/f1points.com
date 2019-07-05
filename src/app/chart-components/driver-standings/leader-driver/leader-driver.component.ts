import {Component, Input, OnInit} from '@angular/core';
import {NATION_CODES} from '../../../shared/constants/nation-codes/nation-codes';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-leader-driver',
  templateUrl: './leader-driver.component.html',
  styleUrls: ['./leader-driver.component.scss']
})
export class LeaderDriverComponent implements OnInit {
  @Input() leader;
  nationCodes = NATION_CODES;
  countryFlagsUrl = environment.api.countryflags;

  constructor() { }

  ngOnInit() {
  }

}
