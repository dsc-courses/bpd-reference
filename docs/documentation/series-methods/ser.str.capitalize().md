---
sidebar_position: 12
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.str.capitalize()</code>

<div className='base'>
    <p><strong>Converts strings in the Series to be capitalized. Only the first character in the string will be capitalized.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with each element's first character capitalized.</dd>

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

<p><br></br> **Notice that `ser.str.capitalize()` only works when there are no special characters before the first letter in the sentence.** </p>

```python
comment_ser.str.capitalize()
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      there are no bad dogs, only bad owners.","My best birthday present ever!!!","****all you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />

<p><br></br> **After removing special characters, `ser.str.capitalize()` will work. This is also an example of how to use multiple `ser.str` methods on a bpd Series.** </p>

```python
comment_ser.str.strip().str.capitalize()
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["There are no bad dogs, only bad owners.","My best birthday present ever!!!","****all you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />