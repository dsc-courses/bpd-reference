---
sidebar_position: 1
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>np.round(arr, decimals)</code>

<div className='base'>
    <p><strong>Rounds each element of an array to a specified number of decimal places.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>array_like</em></dd>
        <dd className='parameter-description'>Input data, array-like structure containing numerical data to be rounded.</dd>
        <dd className='parameter'>decimals : <em>int, optional (default=0)</em></dd>
        <dd className='parameter-description'>Number of decimal places to round to. If omitted, defaults to 0, meaning rounding to the nearest integer.</dd>

        <dt className='term'>Returns:</dt>
        <dd>rounded_array - An array of the same shape as `a`, with each element rounded to the specified number of decimal places.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>ndarray</dd>
        <dd className='return-description'>A new array containing the rounded values.</dd>
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
np.round(weight_arr, 0) # Doesn't include decimals
```
array([40.,  2., 15., 80., 25.,  1.,  0., 10.])

```python
np.round(weight_arr, 0) # Doesn't include decimals
```
array([40. ,  1.5, 15. , 80. , 25. ,  1. ,  0.2, 10. ])
