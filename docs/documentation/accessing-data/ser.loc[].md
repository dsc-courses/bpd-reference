---
sidebar_position: 3
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.loc[label]</code>

<div className='base'>
    <p><strong>Returns the element of the Series that corresponds to its row label.</strong></p>
    <dl>
        <dt className='term'>Note:</dt>
        <ul>
            <li> Often `ser` comes from `df.get(column_name)`. </li>
            <li> In DSC 10, we only use `loc` and `iloc` on Series, and never on DataFrames. That's because we want to avoid working with row objects, which contain data of varying types. To extract something from a data frame, you should always use `get` first to grab the column as a series, then use `loc` or `iloc` to get the individual entry.</li>
        </ul> 
    </dl>
</div>
---

```python
species_ser
```

<SeriesComponent data={'{"name":"Species","index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002","cat_003"],"data":["dog","cat","cat","dog","dog","hamster","hamster","cat"], "dtype":"object"}'} />

```python
species_ser.loc['dog_002']
```
'dog'
