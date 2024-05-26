import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexLegend, ApexFill } from "ng-apexcharts";
import { getVariableColor } from '../../../utilities/root-var'

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill
};
@Component({
  selector: 'app-apexchart',
  templateUrl: './apexchart.component.html',
  styles: [
  ]
  
})
export class ApexchartComponent implements OnInit, AfterViewInit {

  @ViewChild("chart") chart: ChartComponent | any;

  public variableColors = getVariableColor();

  public colors = [this.variableColors.primary, this.variableColors.info];

  chart1: Partial<ChartOptions> | any = {
    chart: {
      type: 'bar',
      height: 350
    },
    colors: this.colors,
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
      }
    },
    stroke: {
      show: true,
      width: 1,
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
    series: [{
      data: [44, 55, 41, 64, 22, 43, 21]
    }, {
      data: [53, 32, 33, 52, 13, 44, 32]
    }],
  }

  chart2: Partial<ChartOptions> | any = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: this.colors,
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#8A92A6"
        },
        labels: {
          style: {
            colors: "#8A92A6"
          }
        },
        title: {
          text: "Series A",
          style: {
            colors: "#8A92A6",
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          colors: "#8A92A6",
        },
        labels: {
          style: {
            colors: "#8A92A6"
          }
        },
        title: {
          text: "Series B",
          style: {
            colors: "#8A92A6",
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    },
    series: [
      {
        name: "Series A",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: "Series B",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }
    ],
  }

  chart3: Partial<ChartOptions> | any = {
    
      chart: {
        height: 385,
        type: "radialBar",
      },
      colors: this.colors,
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: 'TOTAL'
            }
          }
        }
      },
      labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D'],
    
    series: [67, 84, 97, 61],
  }

  
  chart4: Partial<ChartOptions> | any = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: "pie",
      height: 365,
    },
    colors: this.colors,
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  }
  chart5: Partial<ChartOptions> | any = {
    colors: this.colors,
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    title: {
      text: 'Radar Chart - Multi Series'
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['2011', '2012', '2013', '2014', '2015', '2016']
    },
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }, {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
    },],
  }

  chart6: Partial<ChartOptions> | any = {
   
      fill: {
        opacity: 0.8
      },
      colors: this.colors,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
    
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      height: 365,
      type: 'polarArea',
    },
  }

  
  chart7: Partial<ChartOptions> | any = {
    fill: {
      opacity: 0.8
    },
    colors: this.colors,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
  
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chart: {
    height: 365,
    type: 'polarArea',
  },
}
  
  chart8: Partial<ChartOptions> | any = {
    series: [{
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      colors: this.colors,
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },  
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
          text: "Points"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;

          }
        }
      },
  
   
  }

     
  
  chartShow: boolean = false;

  constructor() { }
  
  showChart() {
    setTimeout(() => {
      this.chartShow = true
    }, 500)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.showChart()
  }

}
