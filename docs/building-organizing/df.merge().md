---
sidebar_position: 8
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>df.merge(right, how='inner', on=column, left_on=left_column, right_on=right_column, left_index=False, right_index=False)</code>

<div className='base'>
    <p><strong>Merges two DataFrames by specified columns or indexes, using the specified type of merge.</strong></p>
    
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>right : <em>DataFrame</em></dd>
        <dd className='parameter-description'>DataFrame to merge with.</dd>
        <dd className='parameter'>how : <em>{'left', 'right', 'outer', 'inner', 'cross'}, default 'inner'</em></dd>
        <dd className='parameter-description'>Type of merge to be performed.</dd>
        <dd className='parameter'>on : <em>label or list</em></dd>
        <dd className='parameter-description'>Column or index names to join on.</dd>
        <dd className='parameter'>left_on : <em>label, list, or array-like</em></dd>
        <dd className='parameter-description'>Column or index names to join on the in the left DataFrame.</dd>
        <dd className='parameter'>right_on : <em>label, list, or array-like</em></dd>
        <dd className='parameter-description'>Column or index names to join on the in the right DataFrame.</dd>
        <dd className='parameter'>left_index : <em>boolean, default False</em></dd>
        <dd className='parameter-description'>Use index from left DataFrame as join key(s).</dd>
        <dd className='parameter'>right_index : <em>boolean, default False</em></dd>
        <dd className='parameter-description'>Use index from right DataFrame as join key(s).</dd>

        <dt className='term'>Returns:</dt>
        <dd>df_merged - A new DataFrame with the two DataFrames merged on the specified input combinations.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>

        <dt className='term'>Note:</dt>
        <dd>The number of columns merged on the left and right DataFrames must be the same.</dd>
        <dd><em>left_on</em> and <em>left_index</em> cannot happen at the same time. Same as <em>right_on</em> and <em>right_index</em>.</dd>
    </dl>
</div>

```python
pets_info = bpd.DataFrame().assign(
    Pet_ID=['dog_001', 'cat_001', 'cat_002', 'dog_002', 'dog_003', 'ham_001'],
    Breed=['Labrador', 'Sphinx', 'Siamese', 'Chihuahua', 'Labrador', 'Roborovski'],
    Owner=['Jason', 'Lauren', 'Cassidy', 'Bobby', 'Dhruv', 'Cassidy']
)
pets_info
```

<DataFrameComponent data={'{"columns":["Pet_ID","Breed","Owner"],"index":[0,1,2,3,4,5],"data":[["dog_001","Labrador","Jason"],["cat_001","Sphinx","Lauren"],["cat_002","Siamese","Cassidy"],["dog_002","Chihuahua","Bobby"],["dog_003","Labrador","Dhruv"],["ham_001","Roborovski","Cassidy"]]}'}/>

```python
pets.merge(pets_info, left_on='ID', right_on='Pet_ID')
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Pet_ID","Breed","Owner"],"index":[0,1,2,3,4,5],"data":[["dog_001","dog","black",40.0,5.0,"dog_001","Labrador","Jason"],["cat_001","cat","golden",15.0,8.0,"cat_001","Sphinx","Lauren"],["cat_002","cat","black",20.0,9.0,"cat_002","Siamese","Cassidy"],["dog_002","dog","white",80.0,2.0,"dog_002","Chihuahua","Bobby"],["dog_003","dog","black",25.0,0.5,"dog_003","Labrador","Dhruv"],["ham_001","hamster","black",1.0,3.0,"ham_001","Roborovski","Cassidy"]]}'} />

```python
pets_info = pets_info.set_index('Pet_ID')
pets.merge(pets_info, left_on='ID', right_index=True)
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Breed","Owner"],"index":[0,1,2,3,4,5],"data":[["dog_001","dog","black",40.0,5.0,"Labrador","Jason"],["cat_001","cat","golden",15.0,8.0,"Sphinx","Lauren"],["cat_002","cat","black",20.0,9.0,"Siamese","Cassidy"],["dog_002","dog","white",80.0,2.0,"Chihuahua","Bobby"],["dog_003","dog","black",25.0,0.5,"Labrador","Dhruv"],["ham_001","hamster","black",1.0,3.0,"Roborovski","Cassidy"]]}'} />