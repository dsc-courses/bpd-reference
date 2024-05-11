---
sidebar_position: 7
---

import DataFrameComponent from '../../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../../components/SeriesComponent.jsx';
import '../../../../src/css/function.css';

<code>df.groupby(column_name).max()</code>

<div className='base'>
    <p><strong>Returns a DataFrame, with rows as groups, and each column as the max of the column values within each group.</strong></p>

    <dl>
        <dt className='term'>Note:</dt>
        <dd>Columns with String values display the maximum alphabetical starting character (ex. <code>"white"</code> is alphabetically after <code>"black"</code> and <code>"golden"</code>).</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python
pets.groupby('Species').max()
```

<DataFrameComponent data={'{"columns":["ID","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["cat","dog","hamster"],"data":[["cat_003","golden",15.0,9.0,true,"No, thank you!"],["dog_003","white",80.0,5.0,false,"Love is a wet nose and a wagging tail."],["ham_002","golden",1.0,3.0,false,"No, thank you!"]]}'} />
