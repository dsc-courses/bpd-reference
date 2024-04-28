---
sidebar_position: 14
---
import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>ser.str.replace(old, new, count=-1)</code>

<div className='base'>
    <p><strong>Substitutes the 'old' string with the 'new' string in each element of the Series, limiting the number of replacements to 'count' occurrences.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>old : <em>string</em></dd>
        <dd className='parameter-description'>String to replace.</dd>
        <dd className='parameter'>new : <em>string</em></dd>
        <dd className='parameter-description'>Replacement string.</dd>
        <dd className='parameter'>count : <em>int, default -1</em></dd>
        <dd className='parameter-description'>Maximum number of occurences to replace. -1 (the default value) means replace all occurences.</dd>

        <dt className='term'>Returns:</dt>
        <dd>Returns a Series with the substring old replaced by the new for count number of times.</dd>

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
comment_ser.str.replace('dog', 'cat')
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad cats, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your cat thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />

```python
comment_ser.str.replace('dog', 'cat').str.replace('birthday', '🍰')
```
<SeriesComponent data={'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad cats, only bad owners.","My best \\ud83c\\udf70 present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your cat thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />