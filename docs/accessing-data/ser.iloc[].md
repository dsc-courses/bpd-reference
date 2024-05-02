---
sidebar_position: 4
---

import SeriesComponent from '../../components/SeriesComponent.jsx';
import '../../src/css/function.css';

<code>ser.iloc[position]</code>

<div className='base'>
    <p><strong>Returns element contained in Series at the given position.</strong></p>
    <dl>
        <dt className='term'>Note:</dt>
        <dd>Positions start at 0</dd>
        <dd>Often `ser` comes from `df.get(column_name)`</dd>
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