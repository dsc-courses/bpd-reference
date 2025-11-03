import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/bpd-reference/blog',
    component: ComponentCreator('/bpd-reference/blog', '70d'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/archive',
    component: ComponentCreator('/bpd-reference/blog/archive', '2ac'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/first-blog-post',
    component: ComponentCreator('/bpd-reference/blog/first-blog-post', '99b'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/long-blog-post',
    component: ComponentCreator('/bpd-reference/blog/long-blog-post', '521'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/mdx-blog-post',
    component: ComponentCreator('/bpd-reference/blog/mdx-blog-post', '7ea'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/tags',
    component: ComponentCreator('/bpd-reference/blog/tags', '2ec'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/tags/docusaurus',
    component: ComponentCreator('/bpd-reference/blog/tags/docusaurus', '961'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/tags/facebook',
    component: ComponentCreator('/bpd-reference/blog/tags/facebook', '93a'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/tags/hello',
    component: ComponentCreator('/bpd-reference/blog/tags/hello', 'f98'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/tags/hola',
    component: ComponentCreator('/bpd-reference/blog/tags/hola', '16f'),
    exact: true
  },
  {
    path: '/bpd-reference/blog/welcome',
    component: ComponentCreator('/bpd-reference/blog/welcome', '3c3'),
    exact: true
  },
  {
    path: '/bpd-reference/search',
    component: ComponentCreator('/bpd-reference/search', 'ec9'),
    exact: true
  },
  {
    path: '/bpd-reference/docs',
    component: ComponentCreator('/bpd-reference/docs', 'd32'),
    routes: [
      {
        path: '/bpd-reference/docs',
        component: ComponentCreator('/bpd-reference/docs', '4f1'),
        routes: [
          {
            path: '/bpd-reference/docs/tags',
            component: ComponentCreator('/bpd-reference/docs/tags', 'eb7'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/bootstrapping',
            component: ComponentCreator('/bpd-reference/docs/tags/bootstrapping', '729'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/chebyshevs-inequality',
            component: ComponentCreator('/bpd-reference/docs/tags/chebyshevs-inequality', '107'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/confidence-intervals',
            component: ComponentCreator('/bpd-reference/docs/tags/confidence-intervals', '2bc'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/correlation',
            component: ComponentCreator('/bpd-reference/docs/tags/correlation', 'af5'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/for-loop',
            component: ComponentCreator('/bpd-reference/docs/tags/for-loop', '122'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/functions',
            component: ComponentCreator('/bpd-reference/docs/tags/functions', '364'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/histogram',
            component: ComponentCreator('/bpd-reference/docs/tags/histogram', '75f'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/hypothesis-test',
            component: ComponentCreator('/bpd-reference/docs/tags/hypothesis-test', 'a61'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/normal-distributions',
            component: ComponentCreator('/bpd-reference/docs/tags/normal-distributions', '225'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/permutation-test',
            component: ComponentCreator('/bpd-reference/docs/tags/permutation-test', 'f4c'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/querying',
            component: ComponentCreator('/bpd-reference/docs/tags/querying', 'f82'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/regression',
            component: ComponentCreator('/bpd-reference/docs/tags/regression', 'bf9'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/standard-deviation',
            component: ComponentCreator('/bpd-reference/docs/tags/standard-deviation', '9dd'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/standard-units',
            component: ComponentCreator('/bpd-reference/docs/tags/standard-units', '63b'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/the-central-limit-theorem',
            component: ComponentCreator('/bpd-reference/docs/tags/the-central-limit-theorem', 'df0'),
            exact: true
          },
          {
            path: '/bpd-reference/docs/tags/the-standard-normal-distribution',
            component: ComponentCreator('/bpd-reference/docs/tags/the-standard-normal-distribution', 'd13'),
            exact: true
          },
          {
            path: '/bpd-reference/docs',
            component: ComponentCreator('/bpd-reference/docs', 'b2a'),
            routes: [
              {
                path: '/bpd-reference/docs/category/if-statements',
                component: ComponentCreator('/bpd-reference/docs/category/if-statements', '84b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/category/querying',
                component: ComponentCreator('/bpd-reference/docs/category/querying', 'ff8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/', '764'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/df.columns',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/df.columns', '336'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/df.get()',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/df.get()', '8a5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/df.index',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/df.index', '92f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/df.shape',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/df.shape', '16f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/df.take()',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/df.take()', 'c4a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/ser.iloc[]',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/ser.iloc[]', '22f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/accessing-data/ser.loc[]',
                component: ComponentCreator('/bpd-reference/docs/documentation/accessing-data/ser.loc[]', '810'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/', '3d6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/arr[]',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/arr[]', '82e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/np.append()',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/np.append()', '851'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/np.arange()',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/np.arange()', '376'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/np.count_nonzero()',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/np.count_nonzero()', '0f6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/np.percentile()',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/np.percentile()', '68b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/np.repeat()',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/np.repeat()', '1bf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/np.round()',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/np.round()', 'b0e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/arrays-and-numpy/np.unique()',
                component: ComponentCreator('/bpd-reference/docs/documentation/arrays-and-numpy/np.unique()', '37c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/', 'aa2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/bpd.DataFrame()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/bpd.DataFrame()', '184'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/bpd.read_csv()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/bpd.read_csv()', '68e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/df.assign()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/df.assign()', '2bf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/df.drop()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/df.drop()', 'bfc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/df.merge()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/df.merge()', 'ea1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/df.reset_index()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/df.reset_index()', 'ffd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/df.set_index()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/df.set_index()', '956'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/building-organizing/df.sort_values()',
                component: ComponentCreator('/bpd-reference/docs/documentation/building-organizing/df.sort_values()', 'c18'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/data-format-conversion/',
                component: ComponentCreator('/bpd-reference/docs/documentation/data-format-conversion/', '9b7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/data-format-conversion/list()',
                component: ComponentCreator('/bpd-reference/docs/documentation/data-format-conversion/list()', 'bd2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/data-format-conversion/np.array()',
                component: ComponentCreator('/bpd-reference/docs/documentation/data-format-conversion/np.array()', 'c0e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/for-loops/',
                component: ComponentCreator('/bpd-reference/docs/documentation/for-loops/', '57d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Functions/Applying Functions',
                component: ComponentCreator('/bpd-reference/docs/documentation/Functions/Applying Functions', '054'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Functions/Writing Functions',
                component: ComponentCreator('/bpd-reference/docs/documentation/Functions/Writing Functions', 'a88'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Grouping/aggregation/count()',
                component: ComponentCreator('/bpd-reference/docs/documentation/Grouping/aggregation/count()', 'c02'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Grouping/aggregation/max()',
                component: ComponentCreator('/bpd-reference/docs/documentation/Grouping/aggregation/max()', '32f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Grouping/aggregation/mean()',
                component: ComponentCreator('/bpd-reference/docs/documentation/Grouping/aggregation/mean()', '278'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Grouping/aggregation/median()',
                component: ComponentCreator('/bpd-reference/docs/documentation/Grouping/aggregation/median()', '4fe'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Grouping/aggregation/min()',
                component: ComponentCreator('/bpd-reference/docs/documentation/Grouping/aggregation/min()', '7ad'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Grouping/aggregation/sum()',
                component: ComponentCreator('/bpd-reference/docs/documentation/Grouping/aggregation/sum()', 'c41'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/Grouping/groupby',
                component: ComponentCreator('/bpd-reference/docs/documentation/Grouping/groupby', '716'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/if-statements/if-elif-else',
                component: ComponentCreator('/bpd-reference/docs/documentation/if-statements/if-elif-else', 'c17'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/if-statements/in  ⁄ not in',
                component: ComponentCreator('/bpd-reference/docs/documentation/if-statements/in  ⁄ not in', 'b7e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/if-statements/Logical Operators',
                component: ComponentCreator('/bpd-reference/docs/documentation/if-statements/Logical Operators', '690'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/intro',
                component: ComponentCreator('/bpd-reference/docs/documentation/intro', 'c28'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/plotting/',
                component: ComponentCreator('/bpd-reference/docs/documentation/plotting/', 'f0f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/plotting/Bar Plot',
                component: ComponentCreator('/bpd-reference/docs/documentation/plotting/Bar Plot', '0f6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/plotting/Histogram',
                component: ComponentCreator('/bpd-reference/docs/documentation/plotting/Histogram', 'e59'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/plotting/Line Plot',
                component: ComponentCreator('/bpd-reference/docs/documentation/plotting/Line Plot', '18b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/plotting/Scatter Plot',
                component: ComponentCreator('/bpd-reference/docs/documentation/plotting/Scatter Plot', 'a24'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/querying/df[]',
                component: ComponentCreator('/bpd-reference/docs/documentation/querying/df[]', '2c6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/', 'e90'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.count()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.count()', 'a99'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.max()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.max()', 'd33'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.mean()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.mean()', 'ead'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.median()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.median()', '2fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.min()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.min()', '64b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.capitalize()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.capitalize()', '6e1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.contains()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.contains()', '5d2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.len()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.len()', 'bf0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.lower()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.lower()', '85b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.replace()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.replace()', 'b28'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.split()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.split()', '5f1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.strip()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.strip()', '80a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.title()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.title()', 'c65'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.str.upper()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.str.upper()', '1ee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.sum()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.sum()', '786'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/series-methods/ser.unique()',
                component: ComponentCreator('/bpd-reference/docs/documentation/series-methods/ser.unique()', '877'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/', 'dfc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.count()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.count()', '4e7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.join()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.join()', '67a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.lower()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.lower()', '089'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.replace()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.replace()', 'b9b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.split()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.split()', '096'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.strip()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.strip()', 'd78'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.title()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.title()', '4b0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/documentation/string-methods/str.upper()',
                component: ComponentCreator('/bpd-reference/docs/documentation/string-methods/str.upper()', 'a82'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/bootstrapping',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/bootstrapping', '81d'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/central_limit_theorem',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/central_limit_theorem', '899'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/concept check/bootstrapping_vs_the_CLT',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/concept check/bootstrapping_vs_the_CLT', '141'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/concept check/hypothesis_vs_permutation',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/concept check/hypothesis_vs_permutation', '0bc'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/hypothesis_test',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/hypothesis_test', 'db9'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/intro',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/intro', '85c'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/null_and_alt',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/null_and_alt', '14d'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/obs_and_test_stats',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/obs_and_test_stats', 'de6'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/p_value',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/p_value', '96f'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/parameters-and-statistics',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/parameters-and-statistics', '90f'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/permutation_test',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/permutation_test', '39d'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/random sampling/df.sample()',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/random sampling/df.sample()', 'c54'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/random sampling/np.random.choice()',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/random sampling/np.random.choice()', 'f00'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/random sampling/np.random.multinomial()',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/random sampling/np.random.multinomial()', '6e8'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/random sampling/np.random.permutation()',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/random sampling/np.random.permutation()', 'a4e'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/random sampling/sampling',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/random sampling/sampling', 'f3e'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/spread_of_a_distribution',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/spread_of_a_distribution', '750'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/standard_normal_distribution',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/standard_normal_distribution', 'c60'),
                exact: true,
                sidebar: "statsSidebar"
              },
              {
                path: '/bpd-reference/docs/statistical-inference/standard_units',
                component: ComponentCreator('/bpd-reference/docs/statistical-inference/standard_units', '7f5'),
                exact: true,
                sidebar: "statsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bpd-reference/',
    component: ComponentCreator('/bpd-reference/', 'eff'),
    exact: true
  },
  {
    path: '/bpd-reference/',
    component: ComponentCreator('/bpd-reference/', '173'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
