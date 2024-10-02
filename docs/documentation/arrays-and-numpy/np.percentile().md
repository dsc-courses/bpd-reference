---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>np.percentile(arr, p)</code>

<div className='base'>
    <p><strong>Returns the p-th percentile of the numbers in `arr`.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>array</em></dd>
        <dd className='parameter-description'>The array to calculate the percentile of.</dd>
        <dd className='parameter'>p : <em>float or array of floats</em></dd>
        <dd className='parameter-description'>Percentile or sequence of percentiles to compute, all of which must be between 0 and 100 inclusive.</dd>

        <dt className='term'>Returns:</dt>
        <dd>The p-th percentile of the array values.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>float or ndarray</dd>
        <dd className='return-description'>The result is a single float if `p` is a single percentile or an ndarray if multiple percentiles are given.</dd>
    </dl>
</div>

---

```python
weight_ser = pets.get('Weight')
weight_ser
```

<SeriesComponent data={'{"name":"Weight","dtype":"float64","index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002"],"data":[40.0,15.0,20.0,80.0,25.0,1.0,0.25]}'} />

```python
weight_arr = np.array(weight_ser)
weight_arr
```
array([40.  , 15.  , 20.  , 80.  , 25.  ,  1.  ,  0.25])

```python
np.percentile(weight_arr, 50)
```
12.5
