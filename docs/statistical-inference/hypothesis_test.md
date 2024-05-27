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

:::info Terminology
**Hypothesis Test**: A process that test whether a sample was drawn from a population, given a population distribution and a sample.

To conduct a hypothesis test:
1. Simulate the experiment many times under the assumption that the null hypothesis is true.
2. Compute a test statistic on each of the simulated samples, as well as on the observed sample.
3. Look at the resulting empirical distribution of test statistics and see where the observed test statistic falls. If it seems like an atypical value (too large or too small), we reject the null hypothesis; otherwise, we fail to reject the null.
:::

---
## Code Example

### 1. State the question/hypothesis

:::info Hypotheses
We will test the following pair of hypotheses at the standard p = 0.05 significance level.
* **Null Hypothesis:**  The proportion of "golden" hamsters is equal to the proportion of "golden" pets in the overall population.
* **Alternative Hypothesis:** The distribution of "golden" characters among hamsters is greater than the proportion of "golden" pets in the overall population.
:::

Since the alternative hypothesis is of the form "A is greater than B," the **test statistic** should measure signed difference rather than absolute difference.

$\therefore$ We use **the difference in proportions** of golden hamsters and golden pets in the overall population as the test statistic.

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