---
sidebar_position: 2
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>list(arr)</code>

<div className='base'>
    <p><strong>Casts an array into a list.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>array</em></dd>
        <dd className='parameter-description'>Array that you want to cast into a list</dd>

        <dt className='term'>Returns:</dt>
        <dd>new_list - A new list that contains every element from the array, in list form.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>List</dd>
    </dl>
</div>

---

```python
pets_arr = np.array(["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"])
pet_arr
```

array(["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"])

```python
pet_list = list(pet_arr)
pet_list
```
["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"]