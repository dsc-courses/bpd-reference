---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.count(value)</code>

<div className='base'>
    <p><strong> Returns the number of times a specified value appears in the string.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>value : <em>String</em></dd>
        <dd className='parameter-description'> The string to value to search for.</dd>

        <dt className='term'>Returns:</dt>
        <dd>The number of times value appears in str.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>int</dd>
    </dl>
</div>

---

```python
"I like potato, wanna mash my potato, won't you mash your potato with me?".count("potato")
```
3

---
<SuggestionForm/>