import {Component, Input, OnInit} from '@angular/core';
import {NATION_CODES} from '../../../shared/constants/nation-codes/nation-codes';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-leader-constructor',
  templateUrl: './leader-constructor.component.html',
  styleUrls: ['./leader-constructor.component.scss']
})
export class LeaderConstructorComponent implements OnInit {
  @Input() leader;
  nationCodes = NATION_CODES;
  countryFlagsUrl = environment.api.countryflags;

  constructor() { }

  ngOnInit() {
  }

}
