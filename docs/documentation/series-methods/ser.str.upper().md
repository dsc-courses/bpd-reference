---
sidebar_position: 11
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>ser.str.upper()</code>

<div className='base'>
    <p><strong>Converts strings in the Series to uppercase.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with each element uppercased.</dd>

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
comment_ser.str.upper()
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      THERE ARE NO BAD DOGS, ONLY BAD OWNERS.","MY BEST BIRTHDAY PRESENT EVER!!!","****ALL YOU NEED IS LOVE AND A CAT.****","LOVE IS A WET NOSE AND A WAGGING TAIL.","BE THE PERSON YOUR DOG THINKS YOU ARE.","NO, THANK YOU!","NO, THANK YOU!","NO, THANK YOU!"]}'} />