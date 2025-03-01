---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.split(separator, maxsplit)</code>

<div className='base'>
    <p><strong>Splits a string into a list. You can specify the separator, default separator is any whitespace.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>separator : <em>String, optional (Default is whitespace " ")</em></dd>
        <dd className='parameter-description'>Specifies the separator to use when splitting the string. </dd>

        <dd className='parameter'>maxsplit : <em>String, optional (Default is -1)</em></dd>
        <dd className='parameter-description'>Specifies how many splits to do. Default value is -1, which is "all occurrences".</dd>


        <dt className='term'>Returns:</dt>
        <dd>A list object of the separated string.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>array</dd>
    </dl>
</div>

---

```python
# Replace is often used to remove white space. 
txt = "I like potato, wanna mash my potato, won't you mash your potato with me?"

x = txt.split()

print(x)

```
['I', 'like', 'potato,', 'wanna', 'mash', 'my', 'potato,', "won't", 'you', 'mash', 'your', 'potato', 'with', 'me?']



```python
# Replace is often used to remove white space. 
txt = "Split#By#Delimiter"

x = txt.split("#")

print(x)

```
['Split', 'By', 'Delimiter']



---
<SuggestionForm/>