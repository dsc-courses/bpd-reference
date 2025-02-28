---
sidebar_position: 0
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>str.join(iterable)</code>

<div className='base'>
    <p><strong>Takes all items in an iterable (tuple, list, etc.) and joins them into one string. </strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>iterable : <em>iterable</em></dd>
        <dd className='parameter-description'>Required. Any iterable object where all the returned values are strings. </dd>

        <dt className='term'>Returns:</dt>
        <dd>The joined string</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>
    </dl>
</div>

---

```python
str.join(["pandas", "are", "the", "best" ]) 
```
"pandasarethebest"
