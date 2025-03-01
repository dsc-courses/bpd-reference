---
sidebar_position: 3
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.lower()</code>

<div className='base'>
    <p><strong>Converts string to lowercase.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd>no parameters. </dd>

        <dt className='term'>Returns:</dt>
        <dd>Input string with all letters in lower case.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>

        <dt className='term'>Note:</dt>
        <dd> To store the string with the lower case words, you will have to assign it a variable. I.e., `sample_string.lower()` does not modify the original string. See example below. </dd>


    </dl>
</div>


---

```python
txt = "I LOVE BABY PANDAS"

# Assign modified string to a variable, be it a new variable or reassign to original txt. 
txt_lowered = txt.lower()
print(txt.lower()) 
```
"i love baby pandas"


---
<SuggestionForm/>