import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SelectionToolbar from '@/components/SelectionToolbar';
import EmbedObject from '@/components/EmbedObject';
import SessionObject from '@/components/SessionObject';
import CurrentSelections from '@/components/CurrentSelections';
import Search from '@/components/Search';
import PicassoHorizontalBarchart from '@/components/PicassoHorizontalBarchart';
import PicassoVerticalBarchart from '@/components/PicassoVerticalBarchart';
import PicassoPieChart from '@/components/PicassoPieChart';
import PicassoScatterplot from '@/components/PicassoScatterplot';
import PicassoScatterplotWithImages from '@/components/PicassoScatterplotWithImages';
import PicassoLineChart from '@/components/PicassoLineChart';
import PicassoMultiLineChart from '@/components/PicassoMultiLineChart';
import PicassoComboLineBarchart from '@/components/PicassoComboLineBarchart';
import PicassoStackedBarchart from '@/components/PicassoStackedBarchart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/selection-toolbar',
      name: 'SelectionToolbar',
      component: SelectionToolbar,
    },
    {
      path: '/embed-object',
      name: 'EmbedObject',
      component: EmbedObject,
    },
    {
      path: '/session-object',
      name: 'SessionObject',
      component: SessionObject,
    },
    {
      path: '/current-selections',
      name: 'CurrentSelections',
      component: CurrentSelections,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/picasso-horizontal-barchart',
      name: 'PicassoHorizontalBarchart',
      component: PicassoHorizontalBarchart,
    },
    {
      path: '/picasso-vertical-barchart',
      name: 'PicassoVerticalBarchart',
      component: PicassoVerticalBarchart,
    },
    {
      path: '/picasso-pie-chart',
      name: 'PicassoPieChart',
      component: PicassoPieChart,
    },
    {
      path: '/picasso-scatterplot',
      name: 'PicassoScatterplot',
      component: PicassoScatterplot,
    },
    {
      path: '/picasso-scatterplot-with-images',
      name: 'PicassoScatterplotWithImages',
      component: PicassoScatterplotWithImages,
    },
    {
      path: '/picasso-line-chart',
      name: 'PicassoLineChart',
      component: PicassoLineChart,
    },
    {
      path: '/picasso-multi-line-chart',
      name: 'PicassoMultiLineChart',
      component: PicassoMultiLineChart,
    },
    {
      path: '/picasso-combo-line-barchart',
      name: 'PicassoComboLineBarchart',
      component: PicassoComboLineBarchart,
    },
    {
      path: '/picasso-stacked-barchart',
      name: 'PicassoStackedBarchart',
      component: PicassoStackedBarchart,
    },
  ],
});
