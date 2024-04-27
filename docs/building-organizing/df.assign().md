---
sidebar_position: 3
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.assign(name_of_column=column_data)</code>

<div className='base'>
    <p><strong>Adds/replaces a column. name_of_column should not have quotes or spaces.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>name_of_column : <em>string</em></dd>
        <dd className='parameter-description'>Name of column to assign list to.</dd>
        <dd className='parameter'>column_data : <em>list</em></dd>
        <dd className='parameter-description'>Data the column names contains.</dd>

        <dt className='term'>Returns:</dt>
        <dd>df_with_cols - A new DataFrame with the columns in addition to all the existing columns.</dd>

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