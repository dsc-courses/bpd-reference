---
sidebar_position: 2
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>df.get(column_name).apply(function_name)</code>

<div className='base'>
    <p><strong>Applies a function of one parameter to every entry in the column.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>function_name: <em>a python function</em></dd>
        <dd className='parameter-description'>The function to apply to every entry in the column. This function should take a single parameter and return a value.</dd>

        <dt className='term'>Returns:</dt>
        <dd> A Series of the same size containing the results of the function application.</dd>

        <dt className='term'>Return Type:</dt>
        <dd className='parameter'>Series:</dd>
        <dd className='parameter-description'>The returned Series will have the same index as the input Series and will contain the transformed values based on the applied function.</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python
pets.get('Species').apply(is_dog)
```

<SeriesComponent data='{"name":"Species","dtype":"bool", "index":["0","1","2","3","4","5","6"],"data":["True","False","False","True","True","False","False"]}' />


```python
pets.get('Weight').apply(np.sqrt)
```

<SeriesComponent data='{"name":"Weights","dtype":"float64", "index":["0","1","2","3","4","5","6","7"],"data":["6.324555","3.872983","4.472136","8.944272","5.000000","1.000000","0.500000"]}' />
