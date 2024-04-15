import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.shape</code>

<div className='base'>
    <p><strong>Return a tuple representing the dimensionality of the DataFrame.</strong></p>

    <dl>
        <dt>Returns:</dt>
        <dd>a tuple representing the dimensionality of the DataFrame.</dd>

        <dt>Return Type:</dt>
        <dd>Tuple</dd>

        <dt>Note:</dt>
        <dd>If `df.shape[0]`, returns the number of <strong>observations (rows)</strong> in the DataFrame.</dd>
        <dd>If `df.shape[1]`, returns the number of <strong>variables (columns)</strong> in the DataFrame.</dd>
    </dl>
</div>

```python3
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python3
pets.shape
```
(7, 4)

```python3
pets.shape[0]
```
7

```python3
pets.shape[1]
```
4