import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>ser.count()</code>

<div className='base'>
    <p><strong>Returns number of non-NA/null observations in the Series.</strong></p>
</div>

<br />

```python3
pets
```
<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python3
weight_ser = pets.get('Weight')
weight_ser.count()
```
7