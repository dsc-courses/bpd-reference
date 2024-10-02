---
sidebar_position: 6
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>df.reset_index(drop=False)</code>

<div className='base'>
    <p><strong>Resets the index of `df` to the default one.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>drop : <em>boolean, default False</em></dd>
        <dd className='parameter-description'>If False, adds index as a column to the DataFrame. If True, doesn't add index as a column into the DataFrame.</dd>

        <dt className='term'>Returns:</dt>
        <dd>A new DataFrame with or without the column set as the index</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

---

```python
pets = pets.set_index('ID')
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002","cat_003"],"data":[["dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["hamster","black",1.0,3.0,false,"No, thank you!"],["hamster","golden",0.25,0.2,false,"No, thank you!"],["cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

```python
pets.reset_index()
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

<p><br></br> **Note that when `drop=True`, the previous index will be dropped instead of becoming a new column in the DataFrame.** </p>

```python
pets.reset_index(drop=True)
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["hamster","black",1.0,3.0,false,"No, thank you!"],["hamster","golden",0.25,0.2,false,"No, thank you!"],["cat","black",10.0,0.0,true,"No, thank you!"]]}'} />