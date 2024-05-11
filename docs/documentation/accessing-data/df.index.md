---
sidebar_position: 5
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>df.index</code>

<div className='base'>
    <!-- Description -->
    <p><strong>Returns an "array" containing the indices of the DataFrame.</strong></p>
    <dl>
        <!-- Note -->
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>Positions start at 0.</li>
                <li>Negative positions start from the end of the DataFrame.</li>
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

<p><br></br> **Convert index to a numpy array. Learn more about this in the [Data Format Conversion](https://dsc-courses.github.io/bpd-reference/docs/data%20format%20conversion/np.array()) section.** </p>

```python
np.array(pets_idx)
```
array(['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001',
       'ham_002', 'cat_003'], dtype=object)