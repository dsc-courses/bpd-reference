---
sidebar_position: 2
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>bpd.read_csv(filepath)</code>

<div className='base'>
    <p><strong>Read a comma-separated values (csv) file into DataFrame.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>filepath : <em>string, path object, file-like object.</em></dd>
        <dd className='parameter-description'>Any valid string path is acceptable. The string could also be a URL.</dd>

        <dt className='term'>Returns:</dt>
        <dd>df - DataFrame with read csv file.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

---

```python
pets = bpd.read_csv('pets.csv')
pets
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"],["dog_004","dog","black",45.0,6.7,false,"No, thank you!"],["dog_005","dog","white",10.0,7.0,false,"No, thank you!"],["dog_006","dog","golden",35.0,4.0,false,"No, thank you!"],["cat_004","cat","black",10.0,1.2,true,"No, thank you!"],["cat_005","cat","white",15.0,2.5,true,"No, thank you!"],["ham_003","hamster","black",0.5,0.1,false,"No, thank you!"],["dog_007","dog","white",50.0,6.1,false,"No, thank you!"],["ham_004","hamster","golden",0.25,0.2,false,"No, thank you!"],["dog_008","dog","black",40.0,5.0,false,"No, thank you!"],["dog_009","dog","white",30.0,4.8,false,"No, thank you!"],["cat_006","cat","black",3.0,0.5,true,"No, thank you!"]]}'} />