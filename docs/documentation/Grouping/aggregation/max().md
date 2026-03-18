---
sidebar_position: 7
---

import '@site/src/css/function.css';

<code>df.groupby(column_name).max()</code>

<div className='base'>
    <p><strong>Returns a DataFrame, with rows as groups, and each column as the max of the column values within each group.</strong></p>

    <dl>
        <dt className='term'>Note:</dt>
        <dd>Columns with String values display the maximum alphabetical starting character (ex. <code>"white"</code> is alphabetically after <code>"black"</code> and <code>"golden"</code>).</dd>
    </dl>
</div>

---

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

```python
pets.groupby('Species').max()
```

<DataFrameComponent data={'{"columns":["ID","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["cat","dog","hamster"],"data":[["cat_003","golden",15.0,9.0,true,"No, thank you!"],["dog_003","white",80.0,5.0,false,"Love is a wet nose and a wagging tail."],["ham_002","golden",1.0,3.0,false,"No, thank you!"]]}'} />




---
:::info See Also
[`groupby`](../../Grouping/groupby.md) · [`min()`](<../../Grouping/aggregation/min().md>) · [`ser.max()`](<../../series-methods/ser.max().md>)
:::

<SuggestionForm/>