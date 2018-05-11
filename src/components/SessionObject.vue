<template>
   <div>
      <div class="row">
         <div class="col-md-12">
            <QdtComponent :type="viz1.type" :props="viz1.props"  />
         </div>
      </div>
      <div class="row">
         <div class="col-md-12">
            <QdtComponent :type="viz2.type" :props="viz2.props"  />
         </div>
      </div>
      <div class="row">
         <div class="col-md-12">
            <h4>Render in your Template</h4>
            <pre v-highlightjs="disCode.template"><code class="html"></code></pre>
         </div>
      </div>
      <div class="row">
         <div class="col-md-12">
            <h4>Define the props in your code</h4>
            <pre v-highlightjs="disCode.code"><code class="javascript"></code></pre>
         </div>
      </div>
   </div>
</template>

<script>
import QdtComponent from './QdtComponent';

const viz1 = {
  type: 'QdtButton',
  props: {
    type: 'clearSelections', title: 'Clear Selections',
  },
};

const viz2Options = {
  showTitles: true,
  title: 'Custom title',
  subtitle: 'Custom Subtitle',
  footnote: 'Custom Footnote',
  scrollStartPos: 0,
  orientation: 'horizontal',
  dataPoint: {
    showLabels: true,
  },
  qHyperCubeDef: {
    qDimensions: [{
      qDef: {
        qGrouping: 'N',
        qFieldDefs: ['Case Owner Group'],
        qSortCriterias: [{
          qSortByState: 0,
          qSortByFrequency: 0,
          qSortByNumeric: 0,
          qSortByAscii: 1,
          qSortByLoadOrder: 1,
          qSortByExpression: 0,
          qExpression: {
            qv: '',
          },
          qSortByGreyness: 0,
        }],
      },
    }],
    qMeasures: [{
      qDef: {
        qDef: '=Avg([Case Duration Time])',
        qLabel: 'Custom Measure Label',
      },
      qSortBy: {
        qSortByState: 0,
        qSortByFrequency: 0,
        qSortByNumeric: -1,
        qSortByAscii: 0,
        qSortByLoadOrder: 1,
        qSortByExpression: 0,
        qExpression: {
          qv: '',
        },
      },
      qAttributeExpressions: [{
        qExpression: "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
        id: 'colorByExpression',
      }],
    }],
    qInterColumnSortOrder: [
      1,
      0,
    ],
    qSuppressZero: false,
    qSuppressMissing: true,
  },
  color: {
    auto: false,
    mode: 'byExpression',
    expressionIsColor: true,
  },
  legend: {
    show: true,
  },
  dimensionAxis: {
    show: 'labels',
  },
  measureAxis: {
    show: 'labels',
    spacing: 2,
  },
};
const viz2 = {
  type: 'QdtViz',
  props: {
    type: 'barchart', options: viz2Options, height: '300px',
  },
};
const disCode = {
  template: '<QdtComponent :type="viz2.type" :props="viz2.props"  />',
  code: `const viz2Options = {
    showTitles: true,
    title: 'Custom title',
    subtitle: 'Custom Subtitle',
    footnote: 'Custom Footnote',
    scrollStartPos: 0,
    orientation: 'horizontal',
    dataPoint: {
        showLabels: true,
    },
    qHyperCubeDef: {
        qDimensions: [{
        qDef: {
            qGrouping: 'N',
            qFieldDefs: ['Case Owner Group'],
            qSortCriterias: [{
            qSortByState: 0,
            qSortByFrequency: 0,
            qSortByNumeric: 0,
            qSortByAscii: 1,
            qSortByLoadOrder: 1,
            qSortByExpression: 0,
            qExpression: {
                qv: '',
            },
            qSortByGreyness: 0,
            }],
        },
        }],
        qMeasures: [{
        qDef: {
            qDef: '=Avg([Case Duration Time])',
            qLabel: 'Custom Measure Label',
        },
        qSortBy: {
            qSortByState: 0,
            qSortByFrequency: 0,
            qSortByNumeric: -1,
            qSortByAscii: 0,
            qSortByLoadOrder: 1,
            qSortByExpression: 0,
            qExpression: {
            qv: '',
            },
        },
        qAttributeExpressions: [{
            qExpression: "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
            id: 'colorByExpression',
        }],
        }],
        qInterColumnSortOrder: [
        1,
        0,
        ],
        qSuppressZero: false,
        qSuppressMissing: true,
    },
    color: {
        auto: false,
        mode: 'byExpression',
        expressionIsColor: true,
    },
    legend: {
        show: true,
    },
    dimensionAxis: {
        show: 'labels',
    },
    measureAxis: {
        show: 'labels',
        spacing: 2,
    },
    };
    const viz2 = {
    type: 'QdtViz',
    props: {
        type: 'barchart', options: viz2Options, height: '300px',
    },
};`,
};

export default {
  name: 'SessionObject',
  components: {
    QdtComponent,
  },
  data: () => ({
    viz1,
    viz2,
    disCode,
  }),
};
</script>
