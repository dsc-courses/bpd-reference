---
sidebar_position: 9
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>ser.str.strip(to_strip = None)</code>

<div className='base'>
    <p><strong>Removes the specified character(s) from each string in the Series from both the left and right side.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>to_strip : <em>string or None, default None</em></dd>
        <dd className='parameter-description'>A specified character/a set of characters to be removed. All combinations of this set of characters will be stripped. If not specified, removes whitespace (including newlines).</dd>

        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with each element as a list of strings stripped by the specified character/set of characters.</dd>

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
comment_ser.str.strip()
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />

```python
comment_ser.str.strip('*')
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","All you need is love and a cat.","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />

```python
# Notice how nothing changes
comment_ser.str.strip('?')
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />

<p><br></br> **Remove a set of characters simultaneously. (e.g. remove both `*` and whitespace)** </p>

```python
comment_ser.str.strip('* ')
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["There are no bad dogs, only bad owners.","My best birthday present ever!!!","All you need is love and a cat.","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />



---
<SuggestionForm/>