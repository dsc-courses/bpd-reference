---
sidebar_position: 1
sidebar_label: Intro
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';

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

# Statistical Inference

<Tag color='#FF5733'>Assumption:</Tag>  Assume that `df` is a DataFrame, `ser` is a Series, `arr` is an array, and we already run `import babypandas as bpd` and `import numpy as np`.

---
This section provides explanations and code implementations of theories covered in [**DSC 10**](https://dsc10.com). For examples in this section, refer to the `full_pets` DataFrame, which has more data than `pets` DataFrame (which is used in the Documentation section).


```python
full_pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"],["dog_004","dog","black",45.0,6.7,false,"No, thank you!"],["dog_005","dog","white",10.0,7.0,false,"No, thank you!"],["dog_006","dog","golden",35.0,4.0,false,"No, thank you!"],["cat_004","cat","black",10.0,1.2,true,"No, thank you!"],["cat_005","cat","white",15.0,2.5,true,"No, thank you!"],["ham_003","hamster","black",0.5,0.1,false,"No, thank you!"],["dog_007","dog","white",50.0,6.1,false,"No, thank you!"],["ham_004","hamster","golden",0.25,0.2,false,"No, thank you!"],["dog_008","dog","black",40.0,5.0,false,"No, thank you!"],["dog_009","dog","white",30.0,4.8,false,"No, thank you!"],["cat_006","cat","black",3.0,0.5,true,"No, thank you!"]]}'} />
