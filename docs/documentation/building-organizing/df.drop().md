---
sidebar_position: 4
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>df.drop(columns=column_name or [col_1_name, ..., col_k_name])</code>

<div className='base'>
    <p><strong>Drops a single column, or every column in a list of column names.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>columns : <em>string or list</em></dd>
        <dd className='parameter-description'>column name(s) to drop.</dd>

        <dt className='term'>Returns:</dt>
        <dd>df_without_cols - A new DataFrame without the column(s) specified in the method</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

---

```python
pets = pets.assign(New_column_1=['this', 'is', 'a', 'new', 'column', 'I', 'assigned'], 
                  New_column_2=['this', 'is', 'another', 'new', 'column', 'I', 'assigned'])
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment","New_column_1","New_column_2"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners.","this","this"],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!","is","is"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****","a","another"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail.","new","new"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are.","column","column"],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!","I","I"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!","assigned","assigned"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!",".","."]]}'} />

```python3
pets = pets.drop(columns=['New_column_1', 'New_column_2'])
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />