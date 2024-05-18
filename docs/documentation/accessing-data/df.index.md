---
sidebar_position: 5
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>df.index</code>

<div className='base'>
    <!-- Description -->
    <p><strong>Returns the indices (row labels) of the DataFrame.</strong></p>
    <dl>
        <!-- Note -->
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>The index of a DataFrame is a series of labels that identify each row. The labels can be integers, strings, or any other hashable type.</li>
                <li>Positions start at 0. Negative positions start from the end of the DataFrame.</li>
                <li>The return type is bpd.Index. Use `np.array()` to convert it to a numpy array.</li>
            </ul>
        </dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'
} />

```python
pets.index[0]
```
0

```python
pets.index[-3]
```
5

```python
pets_idx = pets.set_index('ID').index
pets_idx
```
Index(['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001',
       'ham_002', 'cat_003'],
      dtype='object', name='ID')

<p><br></br> **Convert index to a numpy array. Learn more about this in the [Data Format Conversion](https://dsc-courses.github.io/bpd-reference/docs/documentation/data%20format%20conversion/np.array()) section.** </p>

```python
idx_arr = np.array(pets_idx)
idx_arr
```
array(['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001',
       'ham_002', 'cat_003'], dtype=object)