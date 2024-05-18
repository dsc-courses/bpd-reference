---
sidebar_position: 1
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import '@site/src/css/function.css';

<code>def function_name(parameters):</code>

<div className='base'>
    <p><strong>Define a customise function in Python.</strong></p>

    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>parameters: <em>any data type</em></dd>
        <dd className='parameter-description'>These parameters are variables that act as placeholders for the values you pass to the function. A function can take a single parameter or a comma-separated list of parameters. Including parameters is optional; a function may operate without any.</dd>

        <dt className='term'>Returns:</dt>
        <dd>The result of the function. If there is no return statement, the function returns None by default.</dd>

        <dt className='term'>Return Type:</dt>
        <dd>The type of the returned object depends on the value provided by the return expression. If no return statement is used, the return type is NoneType.</dd>
    </dl>
</div>

---

```python
def is_dog(species):
    if species == 'dog':
        return True
    return False
```

```python
is_dog('dog')
```

True