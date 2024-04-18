---
sidebar_position: 5
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.set_index()</code>

<div className='base'>
    <p><strong>Moves a column to the index</strong></p>
    
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
pets = pets.assign(ID=['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001', 'ham_002'])
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age","ID"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0,"dog_001"],["cat","golden",15.0,8.0,"cat_001"],["cat","black",20.0,9.0,"cat_002"],["dog","white",80.0,2.0,"dog_002"],["dog","black",25.0,0.5,"dog_003"],["hamster","black",1.0,3.0,"ham_001"],["hamster","golden",0.25,0.2,"ham_002"]]}'} />

```python3
pets = pets.set_index('ID')
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002"],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />