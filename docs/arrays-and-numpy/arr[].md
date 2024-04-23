---
sidebar_position: 1
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>arr[index]</code>

<div className='base'>
    <p><strong>Retrieve the element at position index in the array arr. The first element is arr[0].</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>index : <em>integer</em></dd>
        <dd className='parameter-description'>Position of desired element to retrieve in array.</dd>

        <dt className='term'>Returns:</dt>
        <dd>element - data in the specified index of the array</dd>

        <dt className='term'>Return Type:</dt>
        <dd>integer, float, string, list, etc.</dd>
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