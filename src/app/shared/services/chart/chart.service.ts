import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  createChartConfig(dataset, labelset, colorset, colorset2) {
    return {
      type: 'horizontalBar',
      data: {
        labels: labelset,
        datasets: [
          {
            label: 'Points',
            data: dataset,
            backgroundColor: colorset2,
            borderColor: colorset,
            borderWidth: 1
          }
        ],
        xAxisID: 'points',
        yAxisID: 'constructors'
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: '#ffffff',
            font: {
              weight: '700'
            }
          }
        },
        title: {
          display: false,
          text: 'Constructor Standings',
          fontSize: 14
        },
        legend: {
          display: false
        },
        elements: {
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Points'
              },
              gridLines: {
                color: '#ffffff20'
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: false
              },
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: '#ffffff20'
              }
            }
          ]
        },
        tooltips: {
          enabled: true,
          mode: 'nearest',
          intersect: false
        }
      }
    };
  };

}
