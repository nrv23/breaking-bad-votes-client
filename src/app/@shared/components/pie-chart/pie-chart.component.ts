import { Character } from './../../../interface/Character';
import { Component, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnChanges {
  @Input() votesData: Character[] = [];

  constructor() {}

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (_: void, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
        'rgba(66, 135, 245, 0.3)',
        'rgba(176, 67, 145, 0.3)',
        'rgba(36, 163, 38)',
        'rgba(181, 127, 53, 0.3)',
        'rgba(42, 245, 245, 0.3)',
        'rgba(145, 62, 181)',
      ],
    },
  ];

  ngOnChanges(changes: any) {
    const {
      votesData: { currentValue },
    } = changes;
    this.votesData = currentValue;

    this.loadData();
  }

  loadData() {
    this.pieChartLabels = [];
    this.pieChartData = [];

    for (const { id, name, votes } of this.votesData as Character[]) {
      this.pieChartLabels.push(name);
      this.pieChartData.push(votes);
    }
  }
}
