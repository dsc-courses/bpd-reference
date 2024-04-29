---
sidebar_position: 4
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.plot(kind='line', x = data_col, y=data_col)</code>

<div className='base'>
    <p><strong>Create a line plot using a DataFrame.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>kind : <em>string</em></dd>
        <dd className='parameter-description'>To create a scatter plot, use kind='line'</dd>

        <dd className='parameter'>x : <em>label</em></dd>
        <dd className='parameter-description'>Column for horizontal coordinates of each point.</dd>

        <dd className='parameter'>y : <em>label</em></dd>
        <dd className='parameter-description'>Column for vertical coordinates of each point..</dd>

        <dt className='term'>Returns:</dt>
        <dd>plot - Matplotlib plot created using [parameters](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html).</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Matplotlib plot</dd>
    </dl>
</div>

---

```python
pets.sort_values(by='Age').plot(kind='line', x='Age', y='Weight')
```

![Line plot example 1](/img/line-plot/lineex1.png)