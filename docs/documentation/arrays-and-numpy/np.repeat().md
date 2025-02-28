---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>np.repeat()</code>

<div className='base'>
    <p><strong>Repeat each element of an array after themselves.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>array_like</em></dd>
        <dd className='parameter-description'>Input array.</dd>

        <dd className='parameter'>repeats : <em>int or array of ints</em></dd>
        <dd className='parameter-description'>The number of repetitions for each element. repeats is broadcasted to fit the shape of the given axis.</dd>

        <dd className='parameter'>axis : <em>int, optional (Default flattens array)</em></dd>
        <dd className='parameter-description'>The axis along which to repeat values. By default, use the flattened input array, and return a flat output array.</dd>

        <dt className='term'>Returns:</dt>
        <dd>An array with repetitions of the original array.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>numpy ndarray</dd>
    </dl>
</div>

---

```python
np.repeat(3, 4) #Iterate over one element
```
array([3, 3, 3, 3])

```python
np.repeat([1, 2, 3, 4], 2) # Iterate over an array 
```
array([1, 1, 2, 2, 3, 3, 4, 4])



```python
arr = np.array([[1, 2], [3, 4]])

# Default behavior (flattened input)
np.repeat(arr, 2)

np.repeat(arr, 2, axis=0)
```
array([1, 1, 2, 2, 3, 3, 4, 4])

array(
[[1, 2],
 [1, 2],
 [3, 4],
 [3, 4]]
)