---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>np.arange(start, stop, step)</code>

<div className='base'>
    <p><strong>Returns an array of numbers beginning with `start`, incrementing by `step`, and ending before `stop`. If `start` or `step` is omitted, the default values will be 0 and 1, respectively.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>start : <em>integer (default 0)</em></dd>
        <dd className='parameter-description'>The starting value of the sequence.</dd>
        <dd className='parameter'>stop : <em>integer</em></dd>
        <dd className='parameter-description'>The end value of the sequence, which is not included in the output.</dd>
        <dd className='parameter'>step : <em>integer (default 1)</em></dd>
        <dd className='parameter-description'>The difference between each two consecutive values.</dd>

        <dt className='term'>Returns:</dt>
        <dd>An array of numbers from start to stop, incremented by step.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>numpy array</dd>
    </dl>
</div>


---

```python
np.arange(1, 9, 2)
```
array([1, 3, 5, 7])

```python
np.arange(10, 2, -3)
```
array([10,  7,  4])
