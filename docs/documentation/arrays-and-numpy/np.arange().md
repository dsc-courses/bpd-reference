---
sidebar_position: 1
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>np.arange(start, stop, step)</code>

<div className='base'>
    <p><strong>An array of numbers starting with start, increasing/decreasing in increments of step, and stopping before (excluding) stop. If start or step are omitted, the default values are 0 and 1, respectively.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>start : <em>integer (default 0)</em></dd>
        <dd className='parameter-description'>The starting value of the sequence.</dd>
        <dd className='parameter'>stop : <em>integer</em></dd>
        <dd className='parameter-description'>The end value of the sequence, which is not included in the output.</dd>
        <dd className='parameter'>step : <em>integer (default 1)</em></dd>
        <dd className='parameter-description'>The difference between each two consecutive values.</dd>

        <dt className='term'>Returns:</dt>
        <dd>array - an array of numbers from start to stop, incremented by step</dd>

        <dt className='term'>Return Type:</dt>
        <dd>array</dd>
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
