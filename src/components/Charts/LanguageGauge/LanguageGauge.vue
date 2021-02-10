<template>
  <div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export default {
  name: 'LanguageGauge',
  mounted() {
    const chart = am4core.create(this.$refs.chart, am4charts.RadarChart);

    // Another option: https://www.amcharts.com/demos/radar-with-date-axis/
    // Assume:
    //    Java start = 09/2014
    //    C, C++, C# start = 09/2016
    //    Python start = 09/2017
    //    Go Start = 10/2019
    //    VueJS Start = 03/2020
    const vueStart = new Date(2020, 3, 1, 0, 0, 0);
    const goStart = new Date(2019, 10, 1, 0, 0, 0);
    const pythonStart = new Date(2017, 9, 1, 0, 0, 0);
    const cStart = new Date(2016, 9, 1, 0, 0, 0);
    const javaStart = new Date(2014, 9, 1, 0, 0, 0);
    // Times calculated from: 11/2020
    chart.data = [{
      category: 'Vue JS',
      value: this.getMonthsSince(vueStart),
      full: 4,
    }, {
      category: 'Go',
      value: this.getMonthsSince(goStart),
      full: 4,
    }, {
      category: 'Python',
      value: this.getMonthsSince(pythonStart),
      full: 4,
    }, {
      category: 'C / C++ / C#',
      value: this.getMonthsSince(cStart),
      full: 4,
    }, {
      category: 'Java',
      value: this.getMonthsSince(javaStart),
      full: 4,
    }];

    chart.startAngle = -90;
    chart.endAngle = 200;
    chart.innerRadius = am4core.percent(20);

    chart.colors.list = [
      am4core.color('#29BE98'), // VueJS 41B883
      am4core.color('#29BeB0'), // Go 29BeB0
      am4core.color('#29B9Be'), // Python FFD43B
      am4core.color('#29B0BE'), // C 662079
      am4core.color('#29A5BE'), // Java ED1D25
    ];

    chart.numberFormatter.numberFormat = '#\'';

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add('fill', (fill, target) => ((target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill));
    categoryAxis.renderer.minGridDistance = 10;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = this.getMonthsSince(javaStart);
    valueAxis.strictMinMax = true;

    // Create series
    const series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = 'full';
    series1.dataFields.categoryY = 'category';
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    const series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = 'value';
    series2.dataFields.categoryY = 'category';
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = '{category}: [bold]{value}[/]';
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add('fill', (fill, target) => chart.colors.getIndex(target.dataItem.index));

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
  },
  methods: {
    getMonthsSince(date) {
      const now = new Date();
      let months = (now.getFullYear() - date.getFullYear()) * 12;
      months -= date.getMonth();
      months += now.getMonth();
      return months <= 0 ? 0 : months;
    },
  },
};
</script>

<style scoped>
.chart {
  position: relative;
  margin: (-$widget-padding-vertical) (-$widget-padding-horizontal) 0;
  width: 100%;
  height: 50vh;
}
</style>
