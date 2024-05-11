---
sidebar_position: 1
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>np.append(arr, value)</code>

<div className='base'>
    <p><strong>A copy of arr with value appended to the end. This does not
    change arr unless you store the result in arr.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>array</em></dd>
        <dd className='parameter-description'>The original array to which a value will be appended.</dd>
        <dd className='parameter'>value : <em>any type</em></dd>
        <dd className='parameter-description'>The value to append to the array.</dd>

        <dt className='term'>Returns:</dt>
        <dd>new_arr - a new array containing the elements of the original array followed by the appended value</dd>

        <dt className='term'>Return Type:</dt>
        <dd>array</dd>
    </dl>
</div>

---

```python
np.append(weight_arr, 2)
```

array([40.  ,  1.5 , 15.  , 80.  , 25.  ,  1.  ,  0.25, 10.  ,  2.  ])
