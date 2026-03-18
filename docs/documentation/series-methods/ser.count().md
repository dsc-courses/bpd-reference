---
sidebar_position: 1
---

import '@site/src/css/function.css';

<code>ser.count()</code>

<div className='base'>
    <p><strong>Returns the number of non-NA/null observations in the Series. Essentially the length of a Series, assuming that every row has an observation.</strong></p>
</div>

---

```python
weight_ser = pets.get('Weight')
weight_ser
```
<SeriesComponent data={'{"name":"Weight","dtype":"float64", "index":[0,1,2,3,4,5,6,7],"data":[40.0,1.5,15.0,80.0,25.0,1.0,0.25,10.0]}'} />

```python
weight_ser.count()
```
8




---
:::info See Also
[`ser.sum()`](<../series-methods/ser.sum().md>) · [`ser.unique()`](<../series-methods/ser.unique().md>) · [`np.count_nonzero()`](<../arrays-and-numpy/np.count_nonzero().md>)
:::

<SuggestionForm/>