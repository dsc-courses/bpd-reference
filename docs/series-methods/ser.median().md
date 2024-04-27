---
sidebar_position: 6
---
import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>ser.median()</code>

<div className='base'>
    <p><strong>Returns the median of the values in the Series.</strong></p>
</div>

---

```python
weight_ser = pets.get('Weight')
weight_ser
```
<SeriesComponent data={'{"name":"Weight","dtype":"float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'} />

```python
weight_ser.median()
```
12.5