---
sidebar_position: 7
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.sort_values(by=column_name, ascending=True)</code>

<div className='base'>
    <p><strong>Sorts the entire DataFrame in ascending order by the values in the column. `ascending` can be omitted, as it's default value is `True`</strong></p>
    
    <dl>
        <dt className="term">Input:</dt>
        <dd className='parameter'>column_name : str</dd>
        <dd className='parameter-description'>column name to sort by</dd>
        <dd className='parameter'>ascending : boolean</dd>
        <dd className='parameter-description'>sort ascending vs. descending.</dd>

        <dt className="term">Returns:</dt>
        <dd>df_sorted - A new DataFrame with the specified column sorted in ascending/descending</dd>

        <dt className="term">Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

```python3
pets = pets.sort_values(by='Weight', ascending=True)
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[6,5,1,2,4,0,3],"data":[["hamster","golden",0.25,0.2],["hamster","black",1.0,3.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","black",25.0,0.5],["dog","black",40.0,5.0],["dog","white",80.0,2.0]]}'}/>

```python3
pets = pets.sort_values(by='Age', ascending=False)
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[2,1,0,5,3,4,6],"data":[["cat","black",20.0,9.0],["cat","golden",15.0,8.0],["dog","black",40.0,5.0],["hamster","black",1.0,3.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","golden",0.25,0.2]]}'} />