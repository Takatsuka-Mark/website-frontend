<template>
  <div>
    <div class="chart" ref="chart">
    </div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4timeline from '@amcharts/amcharts4/plugins/timeline';

export default {
  name: 'AmTimeline',
  mounted() {
    const chart = am4core.create(this.$refs.chart, am4timeline.SerpentineChart);
    chart.curveContainer.padding(20, 20, 20, 20);
    chart.levelCount = 8;
    chart.orientation = 'horizontal';
    chart.fontSize = 11;

    const colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.6;

    chart.data = [{
      category: 'Education',
      start: '2018-08-16',
      end: '2022-05-05', // TODO actrually may?
      color: colorSet.getIndex(0),
      task: 'Rochester Institute of Technology (RIT)',
    },
    {
      category: 'Jobs',
      start: '2020-05-14',
      end: '2020-12-18',
      color: colorSet.getIndex(0),
      task: 'BlocWatch - SecureCloudDB',
    }];

    chart.dateFormatter.dateFormat = 'yyyy-MM-dd';
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: 'year' };

    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = '1,4';
    dateAxis.renderer.line.strokeOpacity = 0.7;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
    dateAxis.tooltip.label.paddingTop = 7;

    const labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = 'middle';
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor('background');
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    const categoryAxisLabelTemplate = categoryAxis.renderer.labels.template;
    categoryAxisLabelTemplate.horizontalCenter = 'left';
    // eslint-disable-next-line no-unused-vars
    categoryAxisLabelTemplate.adapter.add('rotation', (rotation, target) => {
      const position = dateAxis.valueToPosition(dateAxis.min);
      return dateAxis.renderer.positionToAngle(position) + 90;
    });

    const series1 = chart.series.push(new am4timeline.CurveColumnSeries());
    series1.columns.template.height = am4core.percent(20);
    series1.columns.template.tooltipText = '{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]';

    series1.dataFields.openDateX = 'start';
    series1.dataFields.dateX = 'end';
    series1.dataFields.categoryY = 'category';
    series1.columns.template.propertyFields.fill = 'color'; // get color from data
    series1.columns.template.propertyFields.stroke = 'color';
    series1.columns.template.strokeOpacity = 0;

    const bullet = new am4charts.CircleBullet();
    series1.bullets.push(bullet);
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = 'color';
    bullet.locationX = 0;

    const bullet2 = new am4charts.CircleBullet();
    series1.bullets.push(bullet2);
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = 'color';
    bullet2.locationX = 1;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = 'center';
    chart.scrollbarX.width = am4core.percent(90);

    const cursor = new am4timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = '1,4';
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;
  },
};
</script>

<style src="./AmTimeline.scss" lang="scss" scoped/>
