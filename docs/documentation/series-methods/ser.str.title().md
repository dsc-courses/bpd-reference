---
sidebar_position: 13
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.str.title()</code>

<div className='base'>
    <p><strong>Converts strings in the Series to title case. Each beginning letter of a continuous string of letters will be uppercased.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with each element in title case.</dd>

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
comment_ser.str.title()
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There Are No Bad Dogs, Only Bad Owners.","My Best Birthday Present Ever!!!","****All You Need Is Love And A Cat.****","Love Is A Wet Nose And A Wagging Tail.","Be The Person Your Dog Thinks You Are.","No, Thank You!","No, Thank You!","No, Thank You!"]}'} />