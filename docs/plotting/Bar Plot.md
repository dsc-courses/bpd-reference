---
sidebar_position: 3
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.plot(kind='bar', x=data_col, y=data_col)</code>

<div className='base'>
    <p><strong>Create a bar plot using a DataFrame.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>kind : <em>string</em></dd>
        <dd className='parameter-description'>To create a bar plot, use kind='bar'</dd>
        <dd className='parameter-description'>To create a <em>horizontal</em> bar plot, use kind='barh'</dd>

        <dd className='parameter'>x : <em>label</em></dd>
        <dd className='parameter-description'>Column containing categorical data for group labels.</dd>

        <dd className='parameter'>y : <em>label</em></dd>
        <dd className='parameter-description'>Column containing numerical data for the groups in x.</dd>

        <dt className='term'>Returns:</dt>
        <dd>plot - Matplotlib plot created using [parameters](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html).</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Matplotlib plot</dd>
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>When kind='bar', you can sort your DataFrame in <em>descending</em> order by your y column before plotting to create a <em>vertical</em> bar plot that goes from tall to short from left to right.</li>
                <li>When kind='barh', you can sort your DataFrame in <em>ascending</em> order by your y column before plotting to create a <em>horizontal</em> bar plot that goes from tall to short from top to bottom.</li>
            </ul>
        </dd>
    </dl>
</div>

---

```python
# Creating a DataFrame to use for bar plots below
avg_species_weights = pets.get(['Species', 'Weight']).groupby('Species').mean().reset_index()
avg_species_weights
```
<DataFrameComponent data={'{"columns":["Species","Weight"],"index":[0,1,2],"data":[["cat",8.8333333333],["dog",48.3333333333],["hamster",0.625]]}'} />

```python
avg_species_weights.sort_values(by='Weight', ascending=False).plot(kind='bar', x='Species', y='Weight')
```

![Bar plot example 1](/img/bar-plot/barex1.png)

```python
avg_species_weights.sort_values(by='Weight', ascending=True).plot(kind='barh', x='Species', y='Weight')
```

![Bar plot example 2](/img/bar-plot/barex2.png)