---
sidebar_position: 2
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.plot(kind='hist', y=data_col, bins=the_bins, density=True)</code>

<div className='base'>
    <p><strong>Create a histogram using a DataFrame.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>kind : <em>string</em></dd>
        <dd className='parameter-description'>To create a histogram, use kind='hist'</dd>

        <dd className='parameter'>y : <em>label</em></dd>
        <dd className='parameter-description'>Column to calculate frequency/probability density.</dd>

        <dd className='parameter'>bins : <em>integer or array</em></dd>
        <dd className='parameter-description'>If integer, number of bins to use.</dd>
        <dd className='parameter-description'>If array, specifies the bin edges. </dd>


        <dd className='parameter'>density : <em>boolean, default False</em></dd>
        <dd className='parameter-description'>If False, y-axis plots the number of observations.</dd>
        <dd className='parameter-description'>If True, y-axis plots the probability density.</dd>

        <!-- Include LaTEX for probability density calculation? -->

        <dt className='term'>Returns:</dt>
        <dd>plot - Matplotlib plot created using parameters.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Matplotlib plot</dd>
        
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>In a histogram, only the last bin is inclusive of the right endpoint! [left, right)</li>
                <li>The bins you specity don't have to include all data values; data values not in any bin won't be shown in the histogram.</li>
            </ul>
        </dd>
    </dl>
</div>

---

```python
pets.plot(kind='hist', y='Age', bins=np.arange(0, 15, 3), density=True)
```

![Histogram example 1](/img/histogram/histex1.png)

```python
pets.plot(kind='hist', y='Weight', bins=5, density=True)
```

![Histogram example 2](/img/histogram/histex2.png)