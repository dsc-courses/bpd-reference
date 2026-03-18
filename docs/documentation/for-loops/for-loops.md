---
sidebar_position: 8
---

import '@site/src/css/function.css';

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
        <dd className='parameter'>loop body : <em></em></dd>
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

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

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



---
:::info See Also
[`np.append()`](<../arrays-and-numpy/np.append().md>) · [`np.arange()`](<../arrays-and-numpy/np.arange().md>) · [`Writing Functions`](../Functions/Writing Functions.md) · [`if / elif / else`](../if-statements/if-elif-else.md)
:::

<SuggestionForm/>
