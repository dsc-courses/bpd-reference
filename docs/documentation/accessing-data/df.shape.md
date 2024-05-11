---
sidebar_position: 1
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>df.shape</code>

<div className='base'>
    <p><strong>Return a tuple representing the dimensionality of the DataFrame.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>a tuple representing the dimensionality of the DataFrame.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Tuple</dd>

        <dt className='term'>Note:</dt>
        <dd>`df.shape[0]` returns the number of <strong>observations (rows)</strong> in the DataFrame.</dd>
        <dd>`df.shape[1]` returns the number of <strong>variables (columns)</strong> in the DataFrame.</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'
} />

```python
pets.shape
```
(8, 7)

```python
pets.shape[0]
```
8

```python
pets.shape[1]
```
7