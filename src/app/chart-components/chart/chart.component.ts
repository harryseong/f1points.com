import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import 'chartjs-plugin-datalabels';
import {ChartService} from '../../shared/services/chart/chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', {static: false}) private chartRef;
  chart: any;
  @Input() chartTitle;
  @Input() dataset;
  @Input() labelset;
  @Input() colorset;
  @Input() colorset2;
  @Input() datatype;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    Chart.defaults.global.defaultFontColor = 'rgb(0,0,0)';
    Chart.defaults.global.defaultFontFamily = 'Montserrat';
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement,
      this.chartService.createChartConfig(
        this.dataset,
        this.labelset,
        this.colorset,
        this.colorset2,
        this.datatype
      ));
  }

}
