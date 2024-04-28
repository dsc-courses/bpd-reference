---
sidebar_position: 7
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import '../../../src/css/function.css';

<code>df.groupby(column_name).median()</code>

<div className='base'>
    <p><strong>Returns a DataFrame, with rows as groups, and each column as the median of the column values within each group.</strong></p>

    <dl>
        <dt className='term'>Note:</dt>
        <dd>Only for columns of type <code>int</code> or <code>float</code>, all other columns are automatically dropped.</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python
pets.groupby('Species').median()
```

<DataFrameComponent data={'{"columns":["Weight","Age","Is_Cat"],"index":["cat","dog","hamster"],"data":[[10.0,0.2,1.0],[40.0,2.0,0.0],[0.625,1.6,0.0]]}'} />
