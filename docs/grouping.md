---
sidebar_position: 4
---

import DataFrameComponent from '../components/DataFrameComponent.jsx';
import '../src/css/function.css';

<code>df.groupby(by)</code>

<div className='base'>
    <p><strong>Group DataFrame by values in columns specified in <em>by</em>.</strong></p>
    <p>A groupby operation involves some combination of splitting the object, applying a function, and combining the results.
    This can be used to group large amounts of data and compute operations on these groups.</p>

    <dl>
        <dt>Input:</dt>
        <dd>by: column, or list of operations</dd>
        <dd>Group by the column specified. If list, groups from left to right.</dd>

        <dt>Returns:</dt>
        <dd>df_gb - groupby object that contains information about the groups.</dd>

        <dt>Return Type:</dt>
        <dd>DataFrameGroupBy</dd>
    </dl>
</div>

```python3
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python
pets.groupby('Species').count()
```

<DataFrameComponent data={'{"columns":["ID","Color","Weight","Age"],"index":["cat","dog","hamster"],"data":[[2,2,2,2],[3,3,3,3],[2,2,2,2]]}'} />

