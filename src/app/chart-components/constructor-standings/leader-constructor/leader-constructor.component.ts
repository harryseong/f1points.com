import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-leader-constructor',
  templateUrl: './leader-constructor.component.html',
  styleUrls: ['./leader-constructor.component.scss']
})
export class LeaderConstructorComponent implements OnInit {
  @Input() leader;

  constructor() { }

  ngOnInit() {
  }

}
