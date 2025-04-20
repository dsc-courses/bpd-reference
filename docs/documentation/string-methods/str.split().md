---
sidebar_position: 5
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.split(separator)</code>

<div className='base'>
    <p><strong>Splits a string into a list. You can specify the separator, default separator is any whitespace.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>separator : <em>String, optional (Default is whitespace " ")</em></dd>
        <dd className='parameter-description'>Specifies the separator to use when splitting the string. </dd>
        
        <dt className='term'>Returns:</dt>
        <dd>A list object of the separated string.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>list</dd>
    </dl>
</div>

---

```python
txt = "I like potato, wanna mash my potato, won't you mash your potato with me?"
txt.split()
```
['I', 'like', 'potato,', 'wanna', 'mash', 'my', 'potato,', "won't", 'you', 'mash', 'your', 'potato', 'with', 'me?']


```python
txt = "Split#By#Delimiter"
txt.split("#")
```
['Split', 'By', 'Delimiter']



---
<SuggestionForm/>