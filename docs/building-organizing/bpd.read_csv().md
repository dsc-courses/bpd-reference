---
sidebar_position: 2
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>bpd.read_csv(filepath)</code>

<div className='base'>
    <p><strong>Read a comma-separated values (csv) file into DataFrame.</strong></p>
    
    <dl>
        <dt>Input:</dt>
        <dd>filepath: str, path object, file-like object.</dd>
        <dd>Any valid string path is acceptable. The string could also be a URL.</dd>

        <dt>Returns:</dt>
        <dd>df - DataFrame with read csv file.</dd>

        <dt>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

```python3
pets = bpd.read_csv('pets.csv')
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />