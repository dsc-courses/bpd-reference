---
sidebar_position: 8
---
import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>ser.str.split(seperator=' ')</code>

<div className='base'>
    <p><strong>Splits the string in the Series/Index from the beginning, at the specified seperator/delimiter string.</strong></p>
</div>

<br />

```python3
comment_ser = pets.get('Owner_Comment')
comment_ser
```
<SeriesComponent data={'{"name":"Owner_Comment","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'} />

```python
comment_ser.str.split()
```
<SeriesComponent data={'{"name":"Owner_Comment", "dtype":"object","index":[0,1,2,3,4,5,6,7],"data":[["There","are","no","bad","dogs,","only","bad","owners."],["My","best","birthday","present","ever!!!"],["****All","you","need","is","love","and","a","cat.****"],["Love","is","a","wet","nose","and","a","wagging","tail."],["Be","the","person","your","dog","thinks","you","are."],["No,","thank","you!"],["No,","thank","you!"],["No,","thank","you!"]]}'} />