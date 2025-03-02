---
sidebar_position: 2
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.join(iterable)</code>

<div className='base'>
    <p><strong>Takes all items in an iterable (array, list, etc.) of string and joins them into one string, separated by the string it is called on. </strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>iterable : <em>iterable</em></dd>
        <dd className='parameter-description'>Required. A sequence of strings. </dd>

        <dt className='term'>Returns:</dt>
        <dd>The joined string.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>
    </dl>
</div>

---

```python
"".join(["pandas", "are", "the", "best" ]) 
```
"pandasarethebest"

```python
"#".join(["pandas", "are", "the", "best" ]) 
```
"pandas#are#the#best"


---
<SuggestionForm/>