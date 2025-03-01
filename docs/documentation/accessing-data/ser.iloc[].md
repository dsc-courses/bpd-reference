---
sidebar_position: 4
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>ser.iloc[position]</code>

<div className='base'>
    <p><strong>Returns the element in the Series at the given position.</strong></p>
    <dl>
        <dt className='term'>Note:</dt>
        <ul>
                <li>Positions start at 0.</li>
                <li>`ser` often comes from `df.get(column_name)`.</li>
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
species_ser.iloc[2]
```
'cat'

```python
species_ser.iloc[3]
```
'dog'


---
<SuggestionForm/>
