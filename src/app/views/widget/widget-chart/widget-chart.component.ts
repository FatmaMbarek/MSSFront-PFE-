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
   selector: 'app-widget-chart',
   templateUrl: './widget-chart.component.html',
   styles: [
   ]
})
export class WidgetChartComponent implements OnInit, AfterViewInit {
   @ViewChild("chart") chart: ChartComponent | any;

   public variableColors = getVariableColor();

   public colors = [this.variableColors.primary, this.variableColors.info];

   public widget1: Partial<ChartOptions> | any = {
      chart: {
         height: 80,
         type: "area",
         sparkline: {
            enabled: true,
         },
         group: "sparklines",
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         width: 3,
         curve: "smooth",
      },
      fill: {
         type: "gradient",
         gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
         },
      },

      series: [
         {
            name: "series1",
            data: [60, 15, 50, 30, 70],
         },
      ],
      colors: ["#344ed1"],

      xaxis: {
         type: "datetime",
         categories: [
            "2018-08-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-10-19T02:30:00",
            "2018-11-19T01:30:00",
            "2018-12-19T01:30:00",
         ],
      },

   }

   public widget2: Partial<ChartOptions> | any = {
      chart: {
        height: 80,
        type: "area",
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      series: [
        {
          name: "series1",
          data: [70, 40, 60, 30, 60],
        },
      ],
      colors: ["#d48918"],

      xaxis: {
        type: "datetime",
        categories: [
          "2018-08-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-10-19T02:30:00",
          "2018-11-19T01:30:00",
          "2018-12-19T01:30:00",
        ],
      },
     
    }

   public widget3: Partial<ChartOptions> | any = {
      chart: {
        height: 80,
        type: "area",
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      series: [
        {
          name: "series1",
          data: [60, 40, 60, 40, 70],
        },
      ],
      colors: ["#07750b"],

      xaxis: {
        type: "datetime",
        categories: [
          "2018-08-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-10-19T02:30:00",
          "2018-11-19T01:30:00",
          "2018-12-19T01:30:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: false,
      },
    }
    public widget4: Partial<ChartOptions> | any = {
      chart: {
        height: 80,
        type: "area",
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      series: [
        {
          name: "series1",
          data: [75, 30, 60, 35, 60],
        },
      ],
      colors: ["#b91d12"],

      xaxis: {
        type: "datetime",
        categories: [
          "2018-08-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-10-19T02:30:00",
          "2018-11-19T01:30:00",
          "2018-12-19T01:30:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: false,
      },
    }
    public widget5: Partial<ChartOptions> | any = {
      series: [
        {
          name: "series1",
          data: [25, 27, 24, 26],
        },
      ],
      colors: ["#07750b"],
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    }


    public servicechart1: Partial<ChartOptions> | any = {
      series: [
        {
          name: "series1",
          data: [25, 30, 22, 29],
        },
      ],
      colors: ["#344ed1"],
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    }



    public servicechart2: Partial<ChartOptions> | any = {
      series: [
        {
          name: "series1",
          data: [25, 23, 28, 26],
        },
      ],
      colors: ["#b91d12"],
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    }
    

    public servicechart3: Partial<ChartOptions> | any = {
      series: [
        {
          name: "series1",
          data: [25, 23, 28, 23],
        },
      ],
      colors: ["#d48918"],
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    }

    public servicechart4: Partial<ChartOptions> | any = {
      series: [
        {
          name: "series1",
          data: [25, 27, 24, 26],
        },
      ],
      colors: ["#07750b"],
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    }
    public extrachart: Partial<ChartOptions> | any = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105],
        },
      ],
      chart: {
        type: "bar",
        height: 250,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        curve: "smooth",
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
        colors: ["#EA6A12", "#6410F1"],
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$ " + val + " thousands";
          },
        },
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
