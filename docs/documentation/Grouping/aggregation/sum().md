---
sidebar_position: 7
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>df.groupby(column_name).sum()</code>

<div className='base'>
    <p><strong>Returns a DataFrame, with rows as groups, and each column as the sum of the column values within each group.</strong></p>

    <dl>
        <dt className='term'>Note:</dt>
        <dd>Only for columns of type <code>int</code> or <code>float</code>, all other columns are automatically dropped.</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

```python
# Most cases, this won't be very helpful!
pets.groupby('Species').sum()
```

<DataFrameComponent data={'{"columns":["ID","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["cat","dog","hamster"],"data":[["cat_001cat_002cat_003","goldenblackblack",26.5,9.2,3,"My best birthday present ever!!!****All you need is love and a cat.****No, thank you!"],["dog_001dog_002dog_003","blackwhiteblack",145.0,7.5,0,"      There are no bad dogs, only bad owners.Love is a wet nose and a wagging tail.Be the person your dog thinks you are."],["ham_001ham_002","blackgolden",1.25,3.2,0,"No, thank you!No, thank you!"]]}'} />

```python
pets.get(['Weight', 'Age', 'Species', 'Is_Cat']).groupby('Species').sum()
```

<DataFrameComponent data={'{"columns":["Weight","Age","Is_Cat"],"index":["cat","dog","hamster"],"data":[[26.5,9.2,3],[145.0,7.5,0],[1.25,3.2,0]]}'} />


---
<SuggestionForm/>