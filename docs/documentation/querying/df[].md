---
sidebar_position: 2
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>df[condition]</code>

<div className='base'>
    <p><strong>Creates a new dataframe containing only the rows that satisfy a specific condition. </strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>condition : <em>bool</em></dd>
        <dd className='parameter-description'> A sequence of boolean values with length equal to the number of rows of the DataFrame.</dd>

        <dt className='term'>Returns:</dt>
        <dd>new_df - A new DataFrame that contains only the rows whose corresponding element in condition is True.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

---

```python
pets
```
<DataFrameComponent data ={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

<p><strong> Series of bools of if Species is a dog AND Color is white </strong></p>

```python
(pets.get('Species')=='dog') & (pets.get('Color')=='white')
```

<SeriesComponent data = {'{"name":"Species is a dog AND color is white","index":[0,1,2,3,4,5,6,7],"data":[false,false,false,true,false,false,false,false]}'} />

<p><strong> DataFrame where Species is a dog AND Color is white </strong></p>

```python
pets[(pets.get('Species')=='dog') & (pets.get('Color')=='white')]
```

<DataFrameComponent data = {'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[3],"data":[["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."]]}'} />

<p><strong> Series of bools where Species is a dog OR Color is white</strong></p>

```python
(pets.get('Species')=='dog') | (pets.get('Color')=='white')
```
<SeriesComponent data = {'{"name":"Species is a dog OR color is white","index":[0,1,2,3,4,5,6,7],"data":[true,false,false,true,true,false,false,false]}'} />

<p><strong> DataFrame where Species is a dog OR Color is white</strong></p>

```python
pets[(pets.get('Species')=='dog') | (pets.get('Color')=='white')]
```

<DataFrameComponent data = {'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,3,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'} />

<p><strong>Some other examples!</strong></p>

```python
pets[pets.get('Weight') >= 25]
```

<DataFrameComponent data = {'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,3,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'} />

```python
pets[pets[(pets.get('Weight') >= 25) &  (pets.get('Weight') < 80)]]
```

<DataFrameComponent data = {'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'} />

```python
pets[pets[pets.get('Color').str.contains('e')]]
```

<DataFrameComponent data = {'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[1,3,6],"data":[["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"]]}'} />

```python
pets[pets1 = pets.set_index('ID')
pets1[pets1.index.str.contains('cat')]]
```

<DataFrameComponent data = {'{"columns":["Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["cat_001","cat_002","cat_003"],"data":[["cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

```python
pets[pets.index > 3]
```

<DataFrameComponent data = {'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[4,5,6,7],"data":[["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />