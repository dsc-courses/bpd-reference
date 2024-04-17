---
sidebar_position: 4
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.drop(columns=column_name or [col_1 name, ..., col_k_name])</code>

<div className='base'>
    <p><strong>Drops a single column, or every column in a list of column names.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>columns: <em>string or list</em></dd>
        <dd className='parameter-description'>column name(s) to drop.</dd>

        <dt className='term'>Returns:</dt>
        <dd>df_without_cols - A new DataFrame without the column(s) specified in the method</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

```python
pets = pets.assign(ID=['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001', 'ham_002'],
                   New_column_1=['this', 'is', 'a', 'new', 'column', 'I', 'assigned'], 
                  New_column_2=['this', 'is', 'another', 'new', 'column', 'I', 'assigned'])
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age","ID","New_column_1","New_column_2"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0,"dog_001","this","this"],["cat","golden",15.0,8.0,"cat_001","is","is"],["cat","black",20.0,9.0,"cat_002","a","another"],["dog","white",80.0,2.0,"dog_002","new","new"],["dog","black",25.0,0.5,"dog_003","column","column"],["hamster","black",1.0,3.0,"ham_001","I","I"],["hamster","golden",0.25,0.2,"ham_002","assigned","assigned"]]}'} />

```python3
pets = pets.drop(columns=['New_column_1', 'New_column_2'])
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age","ID"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0,"dog_001"],["cat","golden",15.0,8.0,"cat_001"],["cat","black",20.0,9.0,"cat_002"],["dog","white",80.0,2.0,"dog_002"],["dog","black",25.0,0.5,"dog_003"],["hamster","black",1.0,3.0,"ham_001"],["hamster","golden",0.25,0.2,"ham_002"]]}'} />