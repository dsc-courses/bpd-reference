---
sidebar_position: 4
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.replace(oldvalue, newvalue)</code>

<div className='base'>
    <p><strong>Method description</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>oldvalue : <em>String</em></dd>
        <dd className='parameter-description'>The string to replace.</dd>

        <dd className='parameter'>newvalue : <em>String</em></dd>
        <dd className='parameter-description'> The string to replace the old value with.</dd>

        <dt className='term'>Returns:</dt>
        <dd>The string with the replaced terms.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>
    </dl>
</div>

---

```python
txt = "I like potato, wanna mash my potato, won't you mash your potato with me?"
txt.replace("avocado", "potato")
```
"I like avocado, wanna mash my avocado, won't you mash your avocado with me?" 

```python
# Replace is often used to remove white space. 
txt = "Remove All The Space Here! "
txt.replace(" ", "")
```
"RemoveAllTheSpaceHere!"


---
<SuggestionForm/>