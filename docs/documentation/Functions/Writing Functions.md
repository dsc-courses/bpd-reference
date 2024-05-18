---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>def function_name(parameters):</code>

<div className='base'>
    <p><strong>Define a customizable function in Python.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>parameters: <em>any data type</em></dd>
        <dd className='parameter-description'>These parameters are variables that act as placeholders for the values you pass to the function. A function can take a single parameter or a comma-separated list of parameters. Including parameters is optional; a function may operate without any.</dd>

        <dt className='term'>Returns:</dt>
        <dd>The result of the function. If there is no return statement, the function returns None by default.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>The type of the returned object depends on the value provided by the return expression. If no return statement is used, the return type is NoneType.</dd>
    </dl>
</div>

---

```python
def is_dog(species):
    """
    Sees if the species is a dog.
    ---
    Input:
        species: a string
    ---
    Output:
        a boolean
    """
    if species == 'dog':
        return True
    return False
```

```python
is_dog('dog')
```

True

---

```python
def categorize_animal(index):
    """
    Categorizes the animal based on its species, weight, and age.
    ---
    Input:
        index: a string containing the ID of the animal
    ---
    Output:
        a string describing the animal
    """
    pets_idx = pets.set_index('ID')
    species = pets_idx.loc[index].get('Species')
    weight = pets_idx.loc[index].get('Weight')
    age = pets_idx.loc[index].get('Age')
    
    # Initialize descriptors
    life_stage = ''
    weight_status = ''
    
    # Define thresholds for dogs
    if species == 'dog':
        if age < 2:
            life_stage = 'Puppy'
        elif age < 7:
            life_stage = 'Adult'
        else:
            life_stage = 'Senior'
        
        if weight < 20:
            weight_status = 'Underweight'
        elif weight <= 60:
            weight_status = 'Normal'
        else:
            weight_status = 'Overweight'
    
    # Define thresholds for cats
    elif species == 'cat':
        if age < 2:
            life_stage = 'Kitten'
        elif age < 10:
            life_stage = 'Adult'
        else:
            life_stage = 'Senior'
        
        if weight < 2:
            weight_status = 'Underweight'
        elif weight <= 10:
            weight_status = 'Normal'
        else:
            weight_status = 'Overweight'
    
    # Define thresholds for hamsters
    elif species == 'hamster':
        if age < 0.5:
            life_stage = 'Young'
        elif age < 2:
            life_stage = 'Adult'
        else:
            life_stage = 'Senior'
        
        if weight < 0.2:
            weight_status = 'Underweight'
        elif weight <= 0.5:
            weight_status = 'Normal'
        else:
            weight_status = 'Overweight'
    
    # Return a combined description as a single string
    return f"{life_stage} {weight_status}"
```

```python
categorize_animal(pets.get('ID').iloc[0])
```

'Adult Normal'