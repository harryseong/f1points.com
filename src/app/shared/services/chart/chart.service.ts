import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  createChartConfig(dataset, labelset, colorset, colorset2, datatype): any {
    return {
      type: 'horizontalBar',
      data: {
        labels: labelset,
        datasets: [
          {
            label: datatype,
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
            color: '#000000',
            font: {
              weight: '500'
            }
          }
        },
        title: {
          display: false,
          text: '',
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
                display: false,
                labelString: datatype
              },
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: '#00000010'
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
                color: '#00000010'
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
