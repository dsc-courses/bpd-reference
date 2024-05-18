---
sidebar_position: 3
description: Allows for multiple conditions to be combined at the same time.
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>if \<condition\> and \<condition\>: <br/></code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code> \<if body\> <br/> </code>
<code>if \<condition\> or \<condition\>: <br/></code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code> \<if body\> <br/> </code>
<code>if not(\<condition\>): <br/></code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code> \<if body\> <br/> </code>

<div className='base'>
    <p><strong>Allows for multiple conditions to be combined at the same time. </strong></p>

    <dl>
        <dt className='term'>Operators:</dt>
        <dd className='parameter'>and : <em></em></dd>
        <dd className='parameter-description'>If all conditions are satisfied, the if body is executed.</dd>
        <dd className='parameter'>or : <em></em></dd>
        <dd className='parameter-description'>If at least one of the conditions is satisfied, the if body is executed.</dd>
        <dd className='parameter'>not : <em></em></dd>
        <dd className='parameter-description'>If the reverse of the condition is satisfied, the if body is executed.</dd>

        <dt className='term'>Returns:</dt>
        <dd>True or False</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Boolean</dd>
    </dl>
</div>

---

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0],["cat_001","cat","golden",1.5,0.2],["cat_002","cat","black",15.0,9.0],["dog_002","dog","white",80.0,2.0],["dog_003","dog","black",25.0,0.5],["ham_001","hamster","black",1.0,3.0],["ham_002","hamster","golden",0.25,0.2],["cat_003","cat","black",10.0,0.0]]}'} />

```python
def more_descriptive_name(id_str, species, color, weight, age):
    return id_str + ': This ' + color + ' ' + species + ' weighs ' + weight + ' lbs and is ' + age + ' years old'
    
def cat_and_dog_info(pet_id):
    id_arr = np.array(pets.get('ID'))
    if pet_id not in id_arr:
        return 'This pet is not in our record'
    pets_info = pets[pets.get('ID') == pet_id]
    age = pets_info.get('Age').iloc[0]
    weight = pets_info.get('Weight').iloc[0]
    species = pets_info.get('Species').iloc[0]
    color = pets_info.get('Color').iloc[0]
    if (species == 'dog') and (age < 1.5):
        return pet_id + ': This is a puppy 🐶'
    elif (species == 'cat') and (age < 1):
        return pet_id + ': This is a kitten 🐱'
    elif (species == 'dog') or (species == 'cat'):
        weight = str(weight)
        age = str(age)
        return more_descriptive_name(pet_id, species, color, weight, age)
```

```python
cat_and_dog_info('dog_001')
```

'dog_001: This black dog weighs 40.0 lbs and is 5.0 years old'

```python
cat_and_dog_info('cat_001')
```

'cat_001: This is a kitten 🐱'

```python
cat_and_dog_info('cat_009')
```

'This pet is not in our record'