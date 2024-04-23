---
sidebar_position: 7
---

import DataFrameComponent from '../components/DataFrameComponent.jsx';
import '../src/css/function.css';

<code>df.groupby(column_name)</code><strong>or</strong><code>df.groupby([column_names])</code>

<div className='base'>
    <p><strong>Group DataFrame by values in columns specified in <em>column_name</em> or a list of <em>column_names</em></strong>.</p>
    
    <p>A groupby operation groups large amounts of data based on the column name(s)</p>

    <dl>
        <dt className='term'>Note:</dt>
        <dd>Grouping without an <strong>aggregate method</strong> will return a DataFrameGroupBy object (not DataFrame)</dd>

        <dt className='term'>Input:</dt>
        <dd className='parameter'>column_name : <em>string</em></dd>
        <dd className='parameter-description'>Group by the column specified.</dd>
        <dd className='parameter'>column_names : <em>list</em> (of strings)</dd>
        <dd className='parameter-description'>Groups by all listed columns, starting with the first one in the list.</dd>

        <dt className='term'>Returns:</dt>
        <dd>df_gb - groupby object that contains information about the groups.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrameGroupBy</dd>
    </dl>

<p><strong>Aggregate Methods</strong></p>
<code>.mean()</code> <code>.median()</code> <code>.count()</code> <code>.max()</code> <code>.min()</code> <code>.sum()</code> 

</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python
pets.groupby('Species').count()
```

<DataFrameComponent data={'{"columns":["ID","Color","Weight","Age"],"index":["cat","dog","hamster"],"data":[[2,2,2,2],[3,3,3,3],[2,2,2,2]]}'} />

