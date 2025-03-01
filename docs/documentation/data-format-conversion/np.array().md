---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>np.array(input)</code>

<div className='base'>
    <p><strong>Casts an iterable (bpd.Series, bpd.Index, and list) into a NumPy array.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>input : <em>ser, df.index, df.columns, list</em></dd>
        <dd className='parameter-description'>Name of series/.columns/list to cast to an array.</dd>

        <dt className='term'>Returns:</dt>
        <dd>An array with the same elements as the input. </dd>

        <dt className='term'>Return Type:</dt>
        <dd>Array</dd>
    </dl>
</div>

---

<p><strong>Series to Array</strong></p>

```python
weight_ser = pets.get('Weight')
weight_ser
```

<SeriesComponent data={'{"name":"Weight", "dtype": "float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'} />

```python
weight_arr = np.array(weight_ser)
weight_arr
```

array([40. , 15. , 20. , 80. , 25. , 1. , 0.25])

<p><strong>bpd.Index to Array</strong></p>

```python
pets_idx = pets.set_index('ID').index
pets_idx
```

Index(['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001', 'ham_002', 'cat_003'], dtype='object', name='ID')

```python
#df.index to array
pets_idx_arr = np.array(pets.set_index('ID').index)
pets_idx_arr
```
array(['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001', 'ham_002', 'cat_003'], dtype=object)

```python
pets_cols = pets.columns
pet_cols
```

Index(['ID', 'Species', 'Color', 'Weight', 'Age', 'Is_Cat', 'Owner_Comment'], dtype='object')

```python
#df.columns to array
pets_cols_arr = np.array(pets.columns)
pet_cols_arr
```
array(['ID', 'Species', 'Color', 'Weight', 'Age', 'Is_Cat',
       'Owner_Comment'], dtype=object)

<p><strong>List to Array</strong></p>

```python
pets_list = ["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"]
pet_list
```
["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"]

```python
pets_list_arr = np.array(pets_list)
pet_list_arr
```
array(["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"], dtype=object)


---
<SuggestionForm/>
