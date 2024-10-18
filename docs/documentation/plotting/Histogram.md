---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>df.plot(kind='hist', y=data_col, bins=the_bins, density=True, ec='w')</code>

<div className='base'>
    <p><strong>Creates a histogram using a DataFrame.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>kind : <em>string</em></dd>
        <dd className='parameter-description'>To create a histogram, use kind='hist'</dd>

        <dd className='parameter'>y : <em>label</em></dd>
        <dd className='parameter-description'>Column to calculate frequency/probability density.</dd>

        <dd className='parameter'>bins : <em>integer or array, default None</em></dd>
        <dd className='parameter-description'>If integer, number of bins to use.</dd>
        <dd className='parameter-description'>If array, specifies the bin edges. </dd>
        <dd className='parameter-description'>If not specified, matplotlib tries to calculate the optimal number of bins.  </dd>

        <dd className='parameter'>density : <em>boolean, default False</em></dd>
        <dd className='parameter-description'>If False, y-axis plots the number of observations.</dd>
        <dd className='parameter-description'>If True, y-axis plots the probability density.</dd>

        <dd className='parameter'>ec : <em>string</em></dd>
        <dd className='parameter-description'>Color for histogram bin outlines, use ec='w' for a white outline.</dd>

        <!-- Include LaTEX for probability density calculation? -->

        <dt className='term'>Returns:</dt>
        <dd>Matplotlib plot created using [parameters](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html).</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Matplotlib plot</dd>
        
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>In a histogram, only the last bin is inclusive of the right endpoint! [left, right)</li>
                <li>The bins you specify don't have to include all data values; data values not in any bin won't be shown in the histogram.</li>
            </ul>
        </dd>
    </dl>
</div>

---

```python
pets.plot(kind='hist', y='Age', bins=np.arange(0, 15, 3), density=True, ec='w')
```

![Histogram example 1](/img/histogram/histex1.png)

```python
pets.plot(kind='hist', y='Weight', bins=5, density=True, ec='w')
```

![Histogram example 2](/img/histogram/histex2.png)

```python
# DataFrame with weights of only cats and dogs.
cats_dogs = bpd.DataFrame().assign(
    cats=np.array(pets[pets.get('Species') == 'cat'].get('Weight')),
    dogs=np.array(pets[pets.get('Species') == 'dog'].get('Weight')),
)

# Overlaid histogram.
bins = np.arange(0, 40, 15)
cats_dogs.plot(kind='hist', alpha=0.65, density=True, ec='w', bins=bins)
```

![Histogram example 3](/img/histogram/histex3.png)

```python
# Without the `bins` parameter.
pets.plot(kind='hist', y='Weight', density=True, ec='w')
```

![Histogram example 4](/img/histogram/histex4.png)