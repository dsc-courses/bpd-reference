---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>np.count_nonzero(arr)</code>

<div className='base'>
    <p><strong>Returns the number of non-zero entries in `arr`. True counts as 1, False counts as 0.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>numpy array</em></dd>
        <dd className='parameter-description'>The array to count non-zero entries in.</dd>

        <dt className='term'>Returns:</dt>
        <dd>The number of non-zero entries in the array.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>integer</dd>
    </dl>
</div>

---

```python
is_cat_arr = np.array(pets.get('Is_Cat'))
is_cat_arr
```

array([False,  True,  True, False, False, False, False,  True])

```python
np.count_nonzero(is_cat_arr)
```
3

```python
age_arr = np.array(pets.get('Age'))
age_arr
```
array([5. , 0.2, 9. , 2. , 0.5, 3. , 0.2, 0. ])

```python
np.count_nonzero(age_arr)
```
7


---
<SuggestionForm/>
