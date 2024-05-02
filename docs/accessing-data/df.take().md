---
sidebar_position: 6
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.take(indices)</code>

<div className='base'>
    <!-- Description -->
    <p><strong>Return the elements in the given <em>positional</em> indices.</strong></p>
    <dl>
        <!-- Input -->
        <dt className='term'>Input:</dt>
        <dd className='parameter'>indices : <em>array</em></dd>
        <dd className='parameter-description'>An array of ints indicating which positions to take.</dd>
        <!-- Return -->
        <dt className='term'>Returns:</dt>
        <dd>df - DataFrame with only the indices specified.</dd>
        <!-- Return Type -->
        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'
} />

```python
# 0, 2, 4 indices.
pets.take(np.arange(0, 6, 2))
```
<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,2,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'} />