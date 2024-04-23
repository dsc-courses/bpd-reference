---
sidebar_position: 2
---
import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>ser.max()</code>

<div className='base'>
    <p><strong>Returns the maximum of the values in the Series.</strong></p>
</div>

<br />

```python3
weight_ser = pets_mini.get('Weight')
weight_ser
```
<SeriesComponent data={'{"name":"Weight","dtype":"float64", "index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002","cat_003"],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'} />

```python
weight_ser.max()
```
80.0