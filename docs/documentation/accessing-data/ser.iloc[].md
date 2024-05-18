---
sidebar_position: 4
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>ser.iloc[position]</code>

<div className='base'>
    <p><strong>Returns element contained in Series at the given position.</strong></p>
    <dl>
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>Positions start at 0.</li>
                <li>Often `ser` comes from `df.get(column_name)`.</li>
            </ul>
        </dd>
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