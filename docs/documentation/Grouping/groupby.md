---
sidebar_position: 7
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';
import '@site/src/css/function.css';

<code>df.groupby(column_name)</code><strong>or</strong><code>df.groupby([column_names])</code>

<div className='base'>
    <p><strong>Groups all DataFrame rows with the same value in <em>column_name</em> or list of <em>column_names</em></strong>.</p>
    
    <p>A groupby operation groups large amounts of data based on the column name(s).</p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>column_name : <em>string</em></dd>
        <dd className='parameter-description'>Groups by the column specified. The column becomes the index.</dd>
        <dd className='parameter'>column_names : <em>list</em> (of strings)</dd>
        <dd className='parameter-description'>Groups by all listed columns, starting with the first one in the list. The columns become the indices.</dd>

        <dt className='term'>Returns:</dt>
        <dd>A new DataFrame with the parameter column(s) as the index and all other columns grouped.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>DataFrame</dd>

        <dt className='term'>Note:</dt>
        <dd>A `groupby()` is usually followed by an <strong>aggregate method</strong>. A `groupby()` <strong>without</strong> an aggregate method will return a <strong>DataFrameGroupBy object</strong> rather than a DataFrame.</dd>

        <small-title><strong>Aggregate Methods</strong></small-title><br></br>
        [<code>.mean()</code>](aggregation/mean()) &nbsp; [<code>.median()</code>](aggregation/median()) &nbsp; [<code>.count()</code>](aggregation/count()) &nbsp; [<code>.max()</code>](aggregation/max()) &nbsp; [<code>.min()</code>](aggregation/min()) &nbsp; [<code>.sum()</code>](aggregation/sum())
    </dl>
</div>

The diagram below provides a visualization of how groupby works using a variation of our main dataset. For additional helpful visual guides, please visit the [Diagrams](https://dsc10.com/diagrams/) site.
<GoogleSlides
src="https://docs.google.com/presentation/d/e/2PACX-1vTgVlFngQcLMYHP-z1vq5lVXjsBgcHebc-3TX7SW6L_gjX6TD1gsflvVDQUpWiDdeEPqJASenUIfBVd/embed?start=true&loop=false&delayms=3000&rm=minimal"
sourceLink="https://docs.google.com/presentation/d/1XZ-nuM5XMFR5WgqZ2rt3mn9gDCPfB8ESu07okHKchqw/edit?usp=sharing"
/>






---

```python
pets
```

<DataFrameComponent data={'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'} />

<p></p>
<p><code>.groupby()</code><strong> with one column</strong></p>

```python
pets.groupby('Species').count()
```

<DataFrameComponent data={'{"columns":["ID","Color","Weight","Age"],"index":["cat","dog","hamster"],"data":[[2,2,2,2],[3,3,3,3],[2,2,2,2]]}'} />

<p></p>
<p><code>.groupby()</code><strong> with multiple columns</strong></p>
```python
pets.groupby(['Species', 'Color']).count().reset_index()
```

<DataFrameComponent data={'{"columns":["Species","Color","ID","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5],"data":[["cat","black",2,2,2,2,2],["cat","golden",1,1,1,1,1],["dog","black",2,2,2,2,2],["dog","white",1,1,1,1,1],["hamster","black",1,1,1,1,1],["hamster","golden",1,1,1,1,1]]}'} />