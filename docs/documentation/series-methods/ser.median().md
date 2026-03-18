---
sidebar_position: 6
---

import '@site/src/css/function.css';

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




---
:::info See Also
[`ser.mean()`](<../series-methods/ser.mean().md>) · [`ser.min()`](<../series-methods/ser.min().md>) · [`ser.max()`](<../series-methods/ser.max().md>)
:::

<SuggestionForm/>