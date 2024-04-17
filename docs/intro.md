---
sidebar_position: 1
---

import DataFrameComponent from '../components/DataFrameComponent.jsx';

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

# BabyPandas documentation

In this documentation, `df` is a DataFrame, `ser` is a Series, and `arr` is an array.

<Tag color='#FF5733'>Important:</Tag> Assume that babypandas has been imported as bpd, and numpy has been imported as np.

---

For all examples, refer to the following DataFrame.
```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />
