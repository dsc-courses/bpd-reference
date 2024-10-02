---
sidebar_position: 10
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.str.lower()</code>

<div className='base'>
    <p><strong>Converts strings in the Series to lowercase.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with each element in lowercase.</dd>

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
comment_ser.str.lower()
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      there are no bad dogs, only bad owners.","my best birthday present ever!!!","****all you need is love and a cat.****","love is a wet nose and a wagging tail.","be the person your dog thinks you are.","no, thank you!","no, thank you!","no, thank you!"]}'} />