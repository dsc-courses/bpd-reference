---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>np.append(arr, value)</code>

<div className='base'>
    <p><strong>Finds the unique elements of an array.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>arr : <em>numpy array</em></dd>
        <dd className='parameter-description'>The input array to find unique values for.</dd>

        <dt className='term'>Returns:</dt>
        <dd>The sorted unique values.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>numpy array</dd>
    </dl>
</div>

---

```python
pets_species = pets.get('Species')
pets_species
```

<SeriesComponent data={'{"name":"Species","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["dog","cat","cat","dog","dog","hamster","hamster","cat"]}'} />

```python
species_array = np.array(pets_species)
```

array(['dog', 'cat', 'cat', 'dog', 'dog', 'hamster', 'hamster', 'cat'])

```python
np.unique(species_array)
```

array(['cat', 'dog', 'hamster'])