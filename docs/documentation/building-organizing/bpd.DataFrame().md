---
sidebar_position: 1
---

import '@site/src/css/function.css';
import DataFrameComponent from '@site/components/DataFrameComponent.jsx';

<code>bpd.DataFrame()</code>

<div className='base'>
    <p><strong>Creates an empty DataFrame. </strong></p>
</div>

```python
example_df = bpd.DataFrame().assign(
    Pet_ID=['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001'],
    Breed=['Labrador', 'Sphinx', 'Siamese', 'Chihuahua', 'Labrador', 'Roborovski'],
     Color=["black", "golden", "black", "white", "golden", "black"],
)
example_df 
```
<DataFrameComponent data={'{"columns": ["Pet_ID", "Breed", "Color"],"index": [0, 1, 2, 3, 4, 5],"data": [["dog_001", "Labrador", "black"],["cat_001", "Sphinx", "golden"],["cat_002", "Siamese", "black"],["dog_002", "Chihuahua", "white"],["dog_003", "Labrador", "golden"],["ham_001", "Roborovski", "black"]]}'} />

