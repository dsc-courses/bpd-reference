---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.title()</code>

<div className='base'>
    <p><strong>Make the first letter in each word upper case。</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd>No parameters.</dd>

        <dt className='term'>Returns:</dt>
        <dd>Input string with first letter of each word capitalized.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>

        <dt className='term'>Note:</dt>
        <dd> To store the string with the titled words, you will have to assign it a variable. I.e., `sample_string.title()` does not modify the original string. See example below. </dd>

    </dl>
</div>

---

```python
txt = "pandas are the best" 

# Assign modified string to a variable, be it a new variable or reassign to original txt. 
txt_title = txt.title()
print(txt_title)
```
"Pandas Are The Best"



---
<SuggestionForm/>