---
sidebar_position: 16
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.str.contains(substring)</code>

<div className='base'>
    <p><strong>Tests if a substring is contained within each element of the Series.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>substring : <em>string</em></dd>
        <dd className='parameter-description'>String to search for.</dd>

        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with a boolean value for each element expressing if each element contained the inputted substring.</dd>

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
comment_ser.str.contains('dog')
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"bool","index":[0,1,2,3,4,5,6,7],"data":[true,false,false,false,true,false,false,false]}'} />