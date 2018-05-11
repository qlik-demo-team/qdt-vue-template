<template>
  <div>
    <p>QdtComponent</p>
    <p>Type: {{ type }}</p>
    <p>Props: {{ props }}</p>
  </div>
</template>

<script>
import QdtComponents from 'qdt-components';

const options = {
  config: {
    host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '',
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  },
  connections: {
    vizApi: true,
    engineApi: true,
  },
};

const qdtComponents = new QdtComponents(options.config, options.connections);

export default {
  name: 'QdtComponent',
  props: {
    type: String,
    props: Object,
  },
  mounted() {
    qdtComponents.render(this.type, this.props, this.$el);
  },
};
</script>

<style scoped>

</style>
