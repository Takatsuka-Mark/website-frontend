<template>
  <div>
    <div class="chart" ref="chart">
    </div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

export default {
  name: 'ClassesStankey',
  mounted() {
    const chart = am4core.create(this.$refs.chart, am4charts.SankeyDiagram);
    chart.data = [
      // Grade Points
      { from: 'A' },
      { from: 'A-' },
      { from: 'B' },

      // TODO Actually set these values
      // Base
      // General subject breakdown
      { from: 'All', to: 'CS', value: 10 },
      { from: 'All', to: 'Math', value: 10 },
      { from: 'All', to: 'Other Science', value: 4 },
      { from: 'All', to: 'Humanities', value: 4 },

      // CS Class Breakdown
      { from: 'CS', to: 'A', value: 8 },
      { from: 'CS', to: 'A-', value: 1 },
      { from: 'CS', to: 'B', value: 1 },

      { from: 'Math', to: 'A', value: 8 },
      { from: 'Math', to: 'B', value: 2 },

      { from: 'Other Science', to: 'A', value: 4 },

      { from: 'Humanities', to: 'A', value: 4 },
      // { from: 'CS', to: 'Algo', value: 1 },
      // { from: 'Algo', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Computer Science', value: 1 },
      // { from: 'Computer Science', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Fundamentals of Computer Security', value: 1 },
      // { from: 'Fundamentals of Computer Security', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Mechanics of Programming', value: 1 },
      // { from: 'Mechanics of Programming', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Analysis of Algorithms', value: 1 },
      // { from: 'Analysis of Algorithms', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Computer Science Theory', value: 1 },
      // { from: 'Computer Science Theory', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Data Management', value: 1 },
      // { from: 'Data Management', to: 'B+-', value: 1 },
      //
      // { from: 'CS', to: 'Project Based Software Engineering', value: 1 },
      // { from: 'Project Based Software Engineering', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Concepts of Computer Systems', value: 1 },
      // { from: 'Concepts of Computer Systems', to: 'A', value: 1 },
      //
      // { from: 'CS', to: 'Parallel and Distributed Computing', value: 1 },
      // { from: 'Parallel and Distributed Computing', to: 'A-', value: 1 },
      //
      // { from: 'CS', to: 'Cryptography', value: 1 },
      // { from: 'Cryptography', to: 'A', value: 1 },
    ];

    chart.paddingRight = 30;
    chart.paddingTop = 80;
    chart.paddingBottom = 80;
    chart.nodeAlign = 'bottom';

    chart.minNodeSize = 0.001;

    chart.dataFields.fromName = 'from';
    chart.dataFields.toName = 'to';
    chart.dataFields.value = 'value';
  },
};
</script>

<style src="./ClassesSankey.scss" lang="scss" />
