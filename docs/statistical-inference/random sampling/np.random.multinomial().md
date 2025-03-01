---
sidebar_position: 3
sidebar_label: Random Multinomial
title: Random Multinomial
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SeriesComponent from '@site/components/SeriesComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import '@site/src/css/function.css';

<code>np.random.multinomial(n, [p_0, p_1, p_2, ...])</code>

<div className='base'>
    <p><strong>Determines the number of times each outcome occurs based on the given probabilities.</strong></p>
    <dl>
        <dt className='term'>Input:</dt>
        <dd className='parameter'>n : <em>integer</em></dd>
        <dd className='parameter-description'>Number of random samples to draw.</dd>
        <dd className='parameter'>[p_0, p_1, p_2, ...] : <em>list or array of floats</em></dd>
        <dd className='parameter-description'>Probabilities for each outcome.</dd>
        <dt className='term'>Returns:</dt>
        <dd>Number of times each outcome is drawn</dd>
        <dt className='term'>Return Type:</dt>
        <dd>array of integers</dd>
        <dt className='term'>Note:</dt>
        <dd>
            <ul>
                <li>Each element in `[p_0, p_1, p_2, ...]` must be between 0 and 1. The elements in `[p_0, p_1, p_2, ...]` must sum to 1.</li>
            </ul>
        </dd>
    </dl>
</div>

---

```python
np.random.multinomial(100, [0.2, 0.5, 0.3])
```
array([19, 54, 27])

```python
np.random.multinomial(100, [0.1, 0.1, 0.8]) 
```
array([12,  8, 80])
```python
#use np.random.choice to achieve the function of np.random.multinomial
def manual_multinomial(n, p):
    values = np.arange(len(p))
    choices = np.random.choice(values, size=n, replace=True, p=p)
    value_counts = np.array([])
    for value in values:
        value_count = np.count_nonzero(choices == value)
        value_counts = np.append(value_counts, value_count)
    return value_counts.astype(int)

manual_multinomial(100, [0.1, 0.1, 0.8])
```
array([10, 16, 74])



---
<SuggestionForm/>