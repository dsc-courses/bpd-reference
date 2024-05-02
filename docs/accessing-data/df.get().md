---
sidebar_position: 2
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>df.get(column_name)</code><strong>or</strong><code>df.get([col_1_name, ..., col_k_name])</code>

<div className='base'>
    <p><strong>Return column(s) from DataFrame.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>Series or Dataframe with the corresponding key(s)</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Series or DataFrame</dd>

        <dt className='term'>Note:</dt>
        <dd>Can return a dataframe of one column by putting the column name in square brackets</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python
pets.get('Species')
```
<SeriesComponent data={'{"name":"Species","index":[0,1,2,3,4,5,6,7],"data":["dog","cat","cat","dog","dog","hamster","hamster","cat"], "dtype":"object"}'} /> 

```python
pets.get(['Species'])
```
<DataFrameComponent data={'{"columns":["Species"],"index":[0,1,2,3,4,5,6,7],"data":[["dog"],["cat"],["cat"],["dog"],["dog"],["hamster"],["hamster"],["cat"]]}'} />

```python
pets.get(['Species', 'Color'])
```
<DataFrameComponent data={'{"columns":["Species","Color"],"index":[0,1,2,3,4,5,6,7],"data":[["dog","black"],["cat","golden"],["cat","black"],["dog","white"],["dog","black"],["hamster","black"],["hamster","golden"],["cat","black"]]}'} />