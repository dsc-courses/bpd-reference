---
sidebar_position: 2
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>df.plot(kind='scatter', x=data_col, y=data_col)</code>

<div className='base'>
    <p><strong>Creates a scatter plot using a DataFrame.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>kind : <em>string</em></dd>
        <dd className='parameter-description'>To create a scatter plot, use kind='scatter'</dd>

        <dd className='parameter'>x : <em>label</em></dd>
        <dd className='parameter-description'>Column for horizontal coordinates of each point.</dd>

        <dd className='parameter'>y : <em>label</em></dd>
        <dd className='parameter-description'>Column for vertical coordinates of each point..</dd>

        <dt className='term'>Returns:</dt>
        <dd>Matplotlib plot created using [parameters](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html).</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Matplotlib plot</dd>
    </dl>
</div>

---

```python
pets.plot(kind='scatter', x='Age', y='Weight')
```

![Scatter plot example 1](/img/scatter-plot/scatex1.png)