<template>
   <div class="selection-toolbar">
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
    type: 'QdtSelectionToolbar',
    title: 'MY SELECTIONS',
    btnText: 'Clear Selections',
  },
};
const viz2 = {
  type: 'QdtViz',
  props: {
    type: 'QdtViz', id: 'ycppXj', height: '300px',
  },
};
const disCode = {
  template: '<QdtComponent :type="viz1.type" :props="viz1.props"  />',
  code: `const viz1 = {
    type: 'QdtSelectionToolbar',
    props: {
        type: 'QdtSelectionToolbar',
        title: 'MY SELECTIONS',
        btnText: 'Clear Selections',
    },
};`,
};

export default {
  name: 'SelectionToolbar',
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
