---
sidebar_position: 3
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>ser.loc[label]</code>

<div className='base'>
    <p><strong>Return element of Series that corresponds to its row label.</strong></p>
    <dl>
        <dt className='term'>Note:</dt>
        <dd>Often `ser` comes from `df.get(column_name)`.</dd>
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