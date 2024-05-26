import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexLegend, ApexFill} from "ng-apexcharts";
import { getVariableColor } from '../../../utilities/root-var'

// @ts-ignore
const fslightBox = () => import('fslightbox')

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
  selector: 'app-fslightbox',
  templateUrl: './fslightbox.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class FslightboxComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | any;

  public variableColors = getVariableColor();

  public colors = [this.variableColors.primary, this.variableColors.info];

  public grossVolume: Partial<ChartOptions> | any = {
    series: [
      {
        name: "Successful deals",
        data: [30, 50, 35, 60, 40, 60, 60],
      },
      {
        name: "Failed deals",
        data: [40, 50, 55, 50, 30, 80, 30],
      },
    ],
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
  }

  public netVolumeSale: Partial<ChartOptions> | any = {
    series: [
      {
        name: 'Sales',
        data: [10, 82, 75, 68, 47, 60, 49, 91, 108]
      },
      {
        name: 'app',
        data: [15, 75, 65, 45, 35, 60, 49, 80, 112]
      }
    ],
    chart: {
      height: 335,
      type: 'line',
      toolbar: {
        show: false
      }
    },
  }
  

  constructor() {
  }

  ngOnInit(): void {
    fslightBox()

  }

}
