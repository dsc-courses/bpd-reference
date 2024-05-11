---
sidebar_position: 7
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>df.sort_values(by=column_name, ascending=True)</code>

<div className='base'>
    <p><strong>Sorts the entire DataFrame in ascending order by the values in the column. `ascending` can be omitted, as it's default value is `True`</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>column_name : <em>string</em></dd>
        <dd className='parameter-description'>column name to sort by.</dd>
        <dd className='parameter'>ascending : <em>boolean, default 'True'</em></dd>
        <dd className='parameter-description'>sort ascending vs. descending.</dd>

        <dt className='term'>Returns:</dt>
        <dd>df_sorted - A new DataFrame with the specified column sorted in ascending/descending.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

---

```python
pets = pets.sort_values(by='Weight', ascending=True)
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[6,5,1,7,2,4,0,3],"data":[["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."]]}'}/>

```python
pets = pets.sort_values(by='Age', ascending=False)
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[2,0,5,3,4,1,6,7],"data":[["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />