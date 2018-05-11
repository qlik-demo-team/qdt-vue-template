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
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};
const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'horizontalBarchart',
    cols: ['Case Owner Group', '=Num(Avg([Case Duration Time]), "##")'],
    outerHeight: 300,
  },
};
const disCode = {
  template: '<QdtComponent :type="viz2.type" :props="viz2.props"  />',
  code: `const viz2 = {
    type: 'QdtPicasso',
    props: {
        type: 'horizontalBarchart',
        cols: ['Case Owner Group', '=Num(Avg([Case Duration Time]), "##")'],
        outerHeight: 300,
    },
};`,
};

export default {
  name: 'PicassoHorizontalBarchart',
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
