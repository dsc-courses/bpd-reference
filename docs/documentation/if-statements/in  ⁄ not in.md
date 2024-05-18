---
sidebar_position: 2
description: Checks for membership of object within a sequence.
---

import DataFrameComponent from '../../../components/DataFrameComponent.jsx';
import SeriesComponent from '../../../components/SeriesComponent.jsx';
import '../../../src/css/function.css';

<code>if \<object\> in \<sequence\>: <br/></code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code> \<if body\> <br/> </code>
<code>if \<object\> not in \<sequence\>: <br/></code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code> \<if body\> </code>

<div className='base'>
    <p><strong>Checks for membership of object within a sequence.</strong></p>

    <dl>
        <dt className='term'>Operators:</dt>
        <dd className='parameter'>in : <em></em></dd>
        <dd className='parameter-description'>Checks if object is a member of a sequence</dd>

        <dd className='parameter'>not in : <em></em></dd>
        <dd className='parameter-description'>Checks if object is not a member of a sequence</dd>

        <dt className='term'>Returns:</dt>
        <dd>True or False</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Boolean</dd>
    </dl>
</div>

---

```python
id_ser = pets.get('ID')
id_ser
```

<SeriesComponent data={'{"name":"ID","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002","cat_003"]}'} />

```python
def cat_and_dog_info(pet_id):
    id_arr = np.array(pets.get('ID'))
    if pet_id not in id_arr:
        return 'This pet is not in our record'
```

```python
cat_and_dog_info('cat_009')
```

'This pet is not in our record'