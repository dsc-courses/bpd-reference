---
sidebar_position: 1
sidebar_label: Intro
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';

export const Tag = ({children, color}) => (
    <span
    style={{
        backgroundColor: color,
        borderRadius: '4px',
        color: '#fff',
        padding: '0.2rem 0.5rem',
        fontWeight: 'bold',
    }}>
    {children}
    </span>
);

# BabyPandas Documentation

<Tag color='#FF5733'>Assumption:</Tag>  Assume that `df` is a DataFrame, `ser` is a Series, `arr` is an array, and we have already run `import babypandas as bpd` and `import numpy as np`. 

---

This section contains common and useful methods in the BabyPandas package. For examples in this section, refer to the `pets` DataFrame. 

```python
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'} />

[Download this data](@site/static/data/pets.csv)
