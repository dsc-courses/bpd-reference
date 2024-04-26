---
sidebar_position: 8
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>for \<loop variable\> in \<sequence\>: <br/> </code> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code> \<loop body\> </code>

<div className='base'>
    <p><strong>Performs the loop body for every element of the sequence.</strong></p>

    <dl>
        <dt className='term'>Components:</dt>
        <dd className='parameter'>loop variable : <em>variable</em></dd>
        <dd className='parameter-description'>Variable that will take on the value of every element in the 
        sequence at some point in the loop. Any valid variable is acceptable.</dd>
        <dd className='parameter'>sequence : <em>iterable object</em></dd>
        <dd className='parameter-description'>e.g. Arrays, Lists, Strings</dd>
        <dd className='parameter'>loop body : <em>.</em></dd>
        <dd className='parameter-description'>Code to be executed for every element in sequence. </dd>

        <dt className='term'>Results:</dt>
        <dd>Output of loop body</dd>

        <!-- <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd> -->
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Age","Weight"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog",5.0,40.0],["cat_001","cat",0.2,1.5],["cat_002","cat",9.0,15.0],["dog_002","dog",2.0,80.0],["dog_003","dog",0.5,25.0],["ham_001","hamster",3.0,1.0],["ham_002","hamster",0.2,0.25],["cat_003","cat",0.0,10.0]]}'} />

```python
for i in np.arange(pets.shape[0]):
    chosen_pet = pets.iloc[i]
    pet_id = chosen_pet.get('ID')
    species = chosen_pet.get('Species')
    age = chosen_pet.get('Age')
    weight = chosen_pet.get('Weight')
    print("This is a " + species + " with pet id " + str(pet_id) +', age ' + str(age) +', and weight '+str(weight))
```

This is a dog with pet id dog_001, age 5.0, and weight 40.0 <br/>
This is a cat with pet id cat_001, age 0.2, and weight 1.5 <br/>
This is a cat with pet id cat_002, age 9.0, and weight 15.0 <br/>
This is a dog with pet id dog_002, age 2.0, and weight 80.0 <br/>
This is a dog with pet id dog_003, age 0.5, and weight 25.0 <br/>
This is a hamster with pet id ham_001, age 3.0, and weight 1.0 <br/>
This is a hamster with pet id ham_002, age 0.2, and weight 0.25 <br/>
This is a cat with pet id cat_003, age 0.0, and weight 10.0