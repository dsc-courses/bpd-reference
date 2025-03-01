---
sidebar_position: 5
sidebar_label: Sample
title: Sample
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>df.sample(n, replace=False)</code>

<div className='base'>
    <p><strong>Randomly samples `n` rows from `df`.</strong></p>
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>df : <em>DataFrame</em></dd>
        <dd className='parameter-description'>DataFrame to sample from.</dd>
        <dd className='parameter'>n : <em>integer</em></dd>
        <dd className='parameter-description'>Number of rows to draw.</dd>
        <dd className='parameter'>replace : <em>boolean, default False</em></dd>
        <dd className='parameter-description'>If True, rows are selected *with* replacement. If False, rows are selected *without* replacement.</dd>
        <dt className='term'>Returns:</dt>
        <dd>A random sample of `n` rows from `df`</dd>
        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>If `replace = False`, `n` must be *smaller* than the length of the DataFrame. Otherwise, the function will raise a `ValueError: Cannot take a larger sample than length of DataFrame when 'replace=False'`.</li>
            </ul>
        </dd>
    </dl>
</div>

---

```python
pets.sample(3, replace=True)
```
<DataFrameComponent data={'{"columns":["ID","Unnamed: 0","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[4,6,1],"data":[["dog_003",4,"dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_002",6,"hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_001",1,"cat","golden",1.5,0.2,true,"My best birthday present ever!!!"]]}'} />

```python
pets.sample(3, replace=False)
```
<DataFrameComponent data={'{"columns":["ID","Unnamed: 0","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[1,6,4],"data":[["cat_001",1,"cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["ham_002",6,"hamster","golden",0.25,0.2,false,"No, thank you!"],["dog_003",4,"dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'} />

```python
pets.shape[0]
```
8
```python
pets.sample(9, replace=False)
```
ValueError: Cannot take a larger sample than length of DataFrame when 'replace=False'



---
<SuggestionForm/>