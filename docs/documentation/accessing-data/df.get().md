---
sidebar_position: 2
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>df.get(column_name)</code><strong>or</strong><code>df.get([col_1_name, ..., col_k_name])</code>

<div className='base'>
    <p><strong>Returns column(s) from DataFrame.</strong></p>

    <dl>
        <dt className='term'>Returns:</dt>
        <dd>Series or DataFrame with the corresponding key(s).</dd>

        <dt className='term'>Return Type:</dt>
        <dd>Series or DataFrame</dd>

        <dt className='term'>Note:</dt>
        <dd>Can return a DataFrame with one column by putting the column name in square brackets.</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

```python
pets.get('Species')
```
<SeriesComponent data={'{"name":"Species","index":[0,1,2,3,4,5,6,7],"data":["dog","cat","cat","dog","dog","hamster","hamster","cat"], "dtype":"object"}'} /> 

<p><br></br> **Get a series as a DataFrame.** </p>

```python
pets.get(['Species'])
```
<DataFrameComponent data={'{"columns":["Species"],"index":[0,1,2,3,4,5,6,7],"data":[["dog"],["cat"],["cat"],["dog"],["dog"],["hamster"],["hamster"],["cat"]]}'} />

```python
pets.get(['Species', 'Color'])
```
<DataFrameComponent data={'{"columns":["Species","Color"],"index":[0,1,2,3,4,5,6,7],"data":[["dog","black"],["cat","golden"],["cat","black"],["dog","white"],["dog","black"],["hamster","black"],["hamster","golden"],["cat","black"]]}'} />

---
<SuggestionForm/>
