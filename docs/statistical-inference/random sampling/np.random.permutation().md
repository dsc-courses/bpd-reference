---
sidebar_position: 4
sidebar_label: Random Permutation
title: Random Permutation
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>np.random.permutation(arr)</code>

<div className='base'>
    <p><strong>Randomly shuffles/reorders `arr`.</strong></p>
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>array, list, or integer</em></dd>
        <dd className='parameter-description'>If array or list, randomly reorder array or list. If integer (e.g. 5), randonly reorder `np.arange(5)` (aka `array([0, 1, 2, 3, 4])`).</dd>
        <dt className='term'>Returns:</dt>
        <dd>Shuffled/reordered array</dd>
        <dt className='term'>Return Type:</dt>
        <dd>array</dd>
    </dl>
</div>

---
```python
example_array = np.array([1, 2, 3, 4, 5])
example_array
```
array([1, 2, 3, 4, 5])

```python
for i in range(5):
    print(f'{i + 1}st random permutation:')
    print(np.random.permutation(example_array), end='\n\n')
```
1st random permutation:
[3 5 4 2 1]

2st random permutation:
[5 4 1 2 3]

3st random permutation:
[3 5 4 1 2]

4st random permutation:
[5 1 2 4 3]

5st random permutation:
[2 4 1 3 5]