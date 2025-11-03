---
sidebar_position: 6
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>str.strip(characters)</code>

<div className='base'>
    <p><strong>Remove spaces at the beginning and at the end of the string.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>characters : <em>String, optional</em></dd>
        <dd className='parameter-description'>A set of characters to remove as leading/trailing characters. Default is white space " ". </dd>

        <dt className='term'>Returns:</dt>
        <dd>String with removed leading and trailing space or specified characters.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>String</dd>
    </dl>
</div>

---

```python
"     panda     ".strip()
```
"panda"

```python
# The 'y' in 'baby' does not get stripped since its in the middle.
"...baby panda?!   ".strip(".?! y")
```
"baby panda"




---
<SuggestionForm/>