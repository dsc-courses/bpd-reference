---
sidebar_position: 2
sidebar_label: Random Choice
title: Random Choice
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>np.random.choice(arr, size, replace=True, p=[p_0, p_1, ...])</code>

<div className='base'>
    <!-- Description -->
    <p><strong>Generates a random sample from a given array or list.</strong></p>
    <dl>
        <!-- Input -->
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr</dd>
        <dd className='parameter-description'><em>array, list, or integer</em></dd>
        <dd className='parameter-description'>If array or list, `np.random.choice` will sample from those elements. If integer (e.g. 5), `np.random.choice` will sample from `np.arange(5)` (aka `array([0, 1, 2, 3, 4])`).</dd>
        <dd className='parameter'>size : <em>integer, default 1</em></dd>
        <dd className='parameter-description'>Number of random samples to draw.</dd>
        <dd className='parameter'>replace : <em>boolean, default True</em></dd>
        <dd className='parameter-description'>If True, element can be selected multiple times. If False, each element can only be selected once.</dd>
        <dd className='parameter'>p : <em>array or list, default uniform distribution</em></dd>
        <dd className='parameter-description'>Probabilities corresponding with each element in `arr`.</dd>
        <!-- Returns -->
        <dt className='term'>Returns:</dt>
        <dd>Generated random samples</dd>
        <!-- Return Type -->
        <dt className='term'>Return Type:</dt>
        <dd>integer or array</dd>
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>If `replace = False`, `size` must be *smaller* than the length of the array or list. Otherwise, the function will raise a `ValueError: Cannot take a larger sample than population when 'replace=False'`.</li>
            </ul>
        </dd>
    </dl>
</div>

---

```python
example_array = np.array([1, 2, 3, 4, 5])
example_array
```
array([1, 2, 3, 4, 5])

```python
np.random.choice(example_array)
```
1
```python
np.random.choice(example_array, 3, replace=True)
```
array([5, 2, 3])
```python
np.random.choice(example_array, 3, replace=True, p=[0.05, 0.05, 0.05, 0.05, 0.8])
```
array([4, 5, 5])
```python
np.random.choice(example_array, 3, replace=True, p=[0, 0, 0, 0, 1])
```
array([5, 5, 5])
```python
np.random.choice([1, 2], 3, replace=True, p=[0.8, 0.2])
```
array([2, 1, 2])
```python
np.random.choice([1, 2], 3, replace=False, p=[0.8, 0.2])
```
ValueError: Cannot take a larger sample than population when 'replace=False'

