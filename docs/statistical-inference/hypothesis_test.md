---
sidebar_position: 6
sidebar_label: Hypothesis Test
title: Hypothesis Test
tags: 
  - querying 
  - functions
  - for-loop 
  - histogram
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Concept

:::tip Key Idea
We use a hypothesis test to test whether a sample was drawn from a population.
:::

---
## Code Example

### 1. State the question/hypothesis

:::info Hypotheses
Our pair of hypotheses is:
* **Null Hypothesis:** 
* **Alternative Hypothesis:** 
:::

---

### 2. Query the DataFrame

comment

```python

```

---

### 3. Create a function to calculate test statistic

comment

```python

```

---

### 4. Simulate the hypothesis test

```python

```

---

### 5. Conclusion

```python

```
**The observed value of the test statistic is:** <br />
**The p-value is:**

Using a significance level of 0.05:

:::info Conclusion

:::

---

### 6. Extra

Let's see how our observed statistic compares to the overall simulated values!

```python
# Create the histogram.
bpd.DataFrame().assign(statistics=statistics).plot(kind='hist', bins=20, density=True, ec='w')
# Don't worry about this line - you won't need to know it for this course!
plt.axvline(x=observed, c='black', linewidth=4, label='population difference in means')
```