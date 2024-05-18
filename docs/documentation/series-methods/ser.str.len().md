---
sidebar_position: 15
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.str.len()</code>

<div className='base'>
    <p><strong>Counts the number of characters in the Series for each element.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with the number of characters for each element.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Series</dd>
    </dl>
</div>

---

```python
comment_ser = pets.get('Owner_Comment')
comment_ser
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />

```python
comment_ser.str.len()
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"int64","index":[0,1,2,3,4,5,6,7],"data":[45,32,39,38,38,14,14,14]}'} />