import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexLegend, ApexFill } from "ng-apexcharts";
import { getVariableColor } from '../../utilities/root-var'


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
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None

})
export class AnalyticsDashboardComponent implements AfterViewInit {

  @ViewChild("chart") chart: ChartComponent | any;

  public variableColors = getVariableColor();

  public colors = [this.variableColors.secondary, this.variableColors.tertiray, this.variableColors.primary];

  public analyticsChart1: Partial<ChartOptions> | any = {
    series: [{
      name: 'Avg.Session',
      data: [11, 5, 32, 20, 33, 15, 25, 45, 10 ,25, 15, 30]
    }, {
      name: 'Conversion Rate',
      data: [20, 25, 15, 30, 35, 40, 25, 42, 28, 45, 15, 20]
    },
    { name: 'Avg. Session Durations',
    data: [22, 17, 20, 25, 15, 15, 10, 25, 18, 25, 35, 45]
    }],
    chart: {
      height: 400,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: this.colors,
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true,
      strokeDashArray: 7,
      padding: {
        right: 0
      }
    },
    stroke: {
      curve: 'smooth',
      width:2
    },
    legend: {
     show:false,
    },
    yaxis: {
      labels:{
        minWidth: 20,
        maxWidth: 20
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nove', 'Dec'],
      labels:{
        minHeight: 20,
        maxHeight: 20
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }

  public analyticscolors = [this.variableColors.primary, this.variableColors.secondary];

  public analyticsChart2: Partial<ChartOptions> | any = {
    series: [{
      data: [800, 780, 610, 410, 350, 200,110,80]
    }],
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false,
      },
      },
    colors: this.analyticscolors,
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,      
  },
    grid: {
      show: true,
      strokeDashArray: 7,
    },
    dataLabels: {
      enabled: false,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      dropShadow: {
        enabled: true
      }
    },
    xaxis: {
      categories: ['Korrea', 'India', 'Spain', 'UAE', 'USA', 'Japan', 'Italy', 'Greece'],
    },

    yaxis: {
      labels: {
        show: true,
        minWidth: 20,
        maxWidth: 20
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
  
  }

  public colorsChart3 = [this.variableColors.primary, this.variableColors.secondary, this.variableColors.tertiray ];

  public analyticsChart3: Partial<ChartOptions> | any = {
    series: [{
      name: 'High',
      data: [44, 55, 41 ]
    }, {
      name: 'Medium',
      data: [53, 32,48]
    }, {
      name: 'Low',
      data: [43,55,40]
    }],
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false,
      },
    },
    colors: this.colorsChart3,
    legend: {
      show: true,
      position:'bottom',
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    dataLabels: {
      enabled: false,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      colors: ['transparent']
    },
    
    xaxis: {
      categories: ['USA', 'Russia', 'Brazil', 'India', 'UK', 'Canada'],
      labels:{
        minHeight: 20,
        maxHeight: 20
      }
    },
    grid: {
      show:false,
    },
    yaxis: {
      labels: {
        show: true,
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
  
  }

  public colorsChart4 = [this.variableColors.primary, this.variableColors.secondary, this.variableColors.tertiray];


  public analyticsChart4: Partial<ChartOptions> | any = {
    series: [44, 55, 41],
      chart: {
      type: 'donut',
      height: 340,
    },
    colors: this.colorsChart4,
    plotOptions: {
      pie: {
        startAngle: -120,
        endAngle: 120,
      }
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show:false
    },
    grid: {
      padding: {
        bottom: -80
      }
    },
    responsive: [{
      breakpoint: 1400,
      options: {
        chart: {
          width: 290,
          height: 300
        },
        
      },
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        
      }
    }
  ]
  }



  constructor() { }

  chartShow: boolean = false;

  showChart() {
    setTimeout(() => {
      this.chartShow = true
    }, 500)
  }

  ngAfterViewInit(): void {
    this.showChart()
  }
}
