<template>
   <div>
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

// const viz1 = {
//   type: 'QdtSelectionToolbar',
//   props: {
//     type: 'QdtSelectionToolbar',
//     title: 'MY SELECTIONS',
//     btnText: 'Clear Selections',
//   },
// };
const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'scatterplotImage',
    cols: ['Case Owner', '=Avg([Case Duration Time])', '=Count( {$<Status -={\'Closed\'} >} Distinct %CaseId )'],
    options: {
      noLegend: true, href: 'https://webapps.qlik.com/qdt-components/plain-html/emoji_smiley.png', imageWidth: 32, imageHeight: 32,
    },
    outerHeight: 300,
  },
};
const disCode = {
  template: '<QdtComponent :type="viz2.type" :props="viz2.props"  />',
  code: `const viz2 = {
    type: 'QdtPicasso',
    props: {
        type: 'scatterplotImage',
        cols: ['Case Owner', '=Avg([Case Duration Time])', '=Count( {$<Status -={"Closed"} >} Distinct %CaseId )'],
        options: {
        noLegend: true, href: 'https://webapps.qlik.com/qdt-components/plain-html/emoji_smiley.png', imageWidth: 32, imageHeight: 32,
        },
        outerHeight: 300,
    },
};`,
};

export default {
  name: 'PicassoScatterplotWithImages',
  components: {
    QdtComponent,
  },
  data: () => ({
    viz2,
    disCode,
  }),
};
</script>
