---
sidebar_position: 5
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>df.set_index(column_name)</code>

<div className='base'>
    <p><strong>Moves a column to the index.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>column_name : <em>string</em></dd>
        <dd className='parameter-description'>column name to make as the index</dd>

        <dt className='term'>Returns:</dt>
        <dd>df_with_idx - A new DataFrame with the column set as the index</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

---

```python
pets = pets.set_index('ID')
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002","cat_003"],"data":[["dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["hamster","black",1.0,3.0,false,"No, thank you!"],["hamster","golden",0.25,0.2,false,"No, thank you!"],["cat","black",10.0,0.0,true,"No, thank you!"]]}'} />