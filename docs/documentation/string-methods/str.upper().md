---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>str.upper()</code>

<div className='base'>
    <p><strong>Converts string to uppercase.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd>no parameters. </dd>

        <dt className='term'>Returns:</dt>
        <dd>Input string with all letters capitalized.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>

        <dt className='term'>Note:</dt>
        <dd> To store the string with the capitalized words, you will have to assign it a variable. I.e., `sample_string.upper()` does not modify the original string. See example below. </dd>


    </dl>
</div>


---

```python
txt = "i love baby pandas"

# Assign modified string to a variable, be it a new variable or reassign to original txt. 
txt_lowered = txt.upper()
print(txt.upper()) 
```
"I LOVE BABY PANDAS"
