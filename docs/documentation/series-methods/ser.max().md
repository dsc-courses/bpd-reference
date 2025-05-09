---
sidebar_position: 2
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>ser.max()</code>

<div className='base'>
    <p><strong>Returns the maximum of the values in the Series.</strong></p>
    <dl>
        <dt className='term'>Note:</dt>
        <dd> Not to be confused with python's own `max` function. Learn more about it <a href="https://docs.python.org/3/library/functions.html#max" target="_blank" rel="noopener noreferrer">here</a>.</dd>
    </dl>
</div>

---

```python
weight_ser = pets.get('Weight')
weight_ser
```
<SeriesComponent data={'{"name":"Weight","dtype":"float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'} />

```python
weight_ser.max()
```
80.0