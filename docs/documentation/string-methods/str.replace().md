---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.replace(oldvalue, newvalue, count)</code>

<div className='base'>
    <p><strong>Method description</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>oldvalue : <em>String</em></dd>
        <dd className='parameter-description'>The string to search for.</dd>

        <dd className='parameter'>newvalue : <em>String</em></dd>
        <dd className='parameter-description'> The string to replace the old value with.</dd>

        <dd className='parameter'>count : <em>int, Optional (Default is all occurences)</em></dd>
        <dd className='parameter-description'> A number specifying how many occurrences of the old value you want to replace. </dd>

        <dt className='term'>Returns:</dt>
        <dd>The string with the replaced terms.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>
    </dl>
</div>

---

```python
# Replace is often used to remove white space. 
txt = "I like potato, wanna mash my potato, won't you mash your potato with me?"

x = txt.replace("avocado", "potato")

print(x)

```
"I like avocado, wanna mash my avocado, won't you mash your avocado with me?" 


```python
# Replace is often used to remove white space. 
txt = "Remove All The Space Here! "

x = txt.replace(" ", "")

print(x)

```
"RemoveAllTheSpaceHere!"


---
<SuggestionForm/>