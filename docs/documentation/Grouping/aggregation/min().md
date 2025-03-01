---
sidebar_position: 7
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>df.groupby(column_name).min()</code>

<div className='base'>
    <p><strong>Returns a DataFrame, with rows as groups, and each column as the min of the column values within each group.</strong></p>

    <dl>
        <dt className='term'>Note:</dt>
        <dd>Columns with String values display the minimum alphabetical starting character (ex. <code>"black"</code> is alphabetically before <code>"golden"</code> and <code>"white"</code>).</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

```python
pets.groupby('Species').min()
```

<DataFrameComponent data={'{"columns":["ID","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["cat","dog","hamster"],"data":[["cat_001","black",1.5,0.0,true,"****All you need is love and a cat.****"],["dog_001","black",25.0,0.5,false,"      There are no bad dogs, only bad owners."],["ham_001","black",0.25,0.2,false,"No, thank you!"]]}'
} />

---
<SuggestionForm/>