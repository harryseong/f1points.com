import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {ChartService} from '../shared/services/chart/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', {static: false}) private chartRef;
  chart: any;
  @Input() dataset;
  @Input() labelset;
  @Input() colorset;
  @Input() colorset2;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, this.chartService.createChartConfig(this.dataset, this.labelset, this.colorset, this.colorset2));
  }

}
