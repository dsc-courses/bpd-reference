---
sidebar_position: 8
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.str.split(pat = None)</code>

<div className='base'>
    <p><strong>Splits each string element in the Series from the beginning, at the specified seperator/delimiter string.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>pat : <em>string or None, default None</em></dd>
        <dd className='parameter-description'>String to split on. If not specified, split on whitespace.</dd>

        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with each element as a list of strings split from the original string.</dd>

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

<p><br></br> **In the default setting, the string is split by whitespace.** </p>

```python
comment_ser.str.split()
```
<SeriesComponent data={'{"name":"Owner_Comment", "dtype":"object","index":[0,1,2,3,4,5,6,7],"data":[["There","are","no","bad","dogs,","only","bad","owners."],["My","best","birthday","present","ever!!!"],["****All","you","need","is","love","and","a","cat.****"],["Love","is","a","wet","nose","and","a","wagging","tail."],["Be","the","person","your","dog","thinks","you","are."],["No,","thank","you!"],["No,","thank","you!"],["No,","thank","you!"]]}'} />

<p><br></br> **Split the string by specified seperator.** </p>

```python
comment_ser.str.split(',')
```
<SeriesComponent data={'{"name":"Owner_Comment", "dtype":"object", "index":[0,1,2,3,4,5,6,7],"data":[["      There are no bad dogs"," only bad owners."],["My best birthday present ever!!!"],["****All you need is love and a cat.****"],["Love is a wet nose and a wagging tail."],["Be the person your dog thinks you are."],["No"," thank you!"],["No"," thank you!"],["No"," thank you!"]]}'} />
