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
import * as am4bullets from '@amcharts/amcharts4/plugins/bullets';

export default {
  name: 'AboutMeTimeline',
  mounted() {
    const chart = am4core.create(this.$refs.chart, am4timeline.SerpentineChart);
    chart.curveContainer.padding(50, 20, 50, 20);
    chart.levelCount = 4;
    chart.yAxisRadius = am4core.percent(25);
    chart.yAxisInnerRadius = am4core.percent(-25);
    chart.maskBullets = false;

    const colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chart.data = [{
      category: 'Education',
      start: '2016-09',
      end: '2018-06',
      color: colorSet.getIndex(0),
      task: 'EDCC',
    }, {
      category: 'Education',
      start: '2018-08',
      end: '2019-08',
      color: colorSet.getIndex(0),
      task: 'RIT - (B.S. Computer Security)',
    }, {
      category: 'Education',
      start: '2019-08',
      end: '2022-05',
      color: colorSet.getIndex(0),
      task: 'RIT - (B.S. Computer Science)',
    }, {
      category: 'Extracurriculars',
      start: '2014-09',
      end: '2018-08',
      color: colorSet.getIndex(5),
      task: 'FRC Member',
    }, {
      category: '',
    }, {
      category: 'Module #3',
      start: '2019-01-01',
      end: '2019-01-19',
      color: colorSet.getIndex(9),
      task: 'Gathering requirements',
    }, {
      category: 'Module #3',
      start: '2019-04-20',
      end: '2019-04-30',
      color: colorSet.getIndex(9),
      task: 'Testing and QA',
      disabled2: false,
      image2: '/wp-content/uploads/assets/timeline/rachel.jpg',
      location: 0,
    }, {
      category: 'Module #4',
      start: '2019-01-15',
      end: '2019-02-12',
      color: colorSet.getIndex(15),
      task: 'Gathering requirements',
      disabled1: false,
      image1: '/wp-content/uploads/assets/timeline/monica.jpg',
    }];

    chart.dateFormatter.dateFormat = 'yyyy-MM-dd';
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
    chart.fontSize = 11;

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = {
      count: 1,
      timeUnit: 'day',
    };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = '1,4';
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
    dateAxis.tooltip.label.paddingTop = 7;

    const labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = 'middle';
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor('background');
    labelTemplate.background.fillOpacity = 0.2;
    labelTemplate.padding(7, 7, 7, 7);

    const series = chart.series.push(new am4timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(20);
    series.columns.template.tooltipText = '{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]';

    series.dataFields.openDateX = 'start';
    series.dataFields.dateX = 'end';
    series.dataFields.categoryY = 'category';
    series.columns.template.propertyFields.fill = 'color'; // get color from data
    series.columns.template.propertyFields.stroke = 'color';
    series.columns.template.strokeOpacity = 0;

    const bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = 'color';
    bullet.locationX = 0;

    const bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = 'color';
    bullet2.locationX = 1;

    const eventSeries = chart.series.push(new am4timeline.CurveLineSeries());
    eventSeries.dataFields.dateX = 'eventDate';
    eventSeries.dataFields.categoryY = 'category';
    // eventSeries.data = [
    //   {
    //     category: '', eventDate: '2019-01-15',
    //     letter: 'A', description: 'Something happened here',
    //   },
    //   {
    //     category: '', eventDate: '2019-01-23',
    //     letter: 'B', description: 'Something happened here',
    //   },
    //   {
    //     category: '', eventDate: '2019-02-10',
    //     letter: 'C', description: 'Something happened here',
    //   },
    //   {
    //     category: '', eventDate: '2019-02-29',
    //     letter: 'D', description: 'Something happened here',
    //   },
    //   {
    //     category: '', eventDate: '2019-03-06',
    //     letter: 'E', description: 'Something happened here',
    //   },
    //   {
    //     category: '', eventDate: '2019-03-12',
    //     letter: 'F', description: 'Something happened here',
    //   },
    //   {
    //     category: '', eventDate: '2019-03-22',
    //     letter: 'G', description: 'Something happened here',
    //   }];
    eventSeries.data = [
      {
        category: 'Education',
        eventDate: '2019-08',
        letter: '!',
        description: 'Changed Majors from Computer Security to Computer Science',
      },
    ];
    eventSeries.strokeOpacity = 0.5;

    const flagBullet = eventSeries.bullets.push(new am4bullets.FlagBullet());
    flagBullet.label.propertyFields.text = 'letter';
    flagBullet.locationX = 0;
    flagBullet.tooltipText = '{description}';

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = 'center';
    chart.scrollbarX.width = am4core.percent(85);

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

<style scoped>
.chart {
  width: 100%;
  height: 600px;
}
</style>
