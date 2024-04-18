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
        <dd className='parameter'>name_of_column : <em>str</em></dd>
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
pets = pets.assign(ID=['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001', 'ham_002'],
                   New_column_1=['this', 'is', 'a', 'new', 'column', 'I', 'assigned'], 
                   New_column_2=['this', 'is', 'another', 'new', 'column', 'I', 'assigned'])
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age","ID","New_column_1","New_column_2"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0,"dog_001","this","this"],["cat","golden",15.0,8.0,"cat_001","is","is"],["cat","black",20.0,9.0,"cat_002","a","another"],["dog","white",80.0,2.0,"dog_002","new","new"],["dog","black",25.0,0.5,"dog_003","column","column"],["hamster","black",1.0,3.0,"ham_001","I","I"],["hamster","golden",0.25,0.2,"ham_002","assigned","assigned"]]}'} />