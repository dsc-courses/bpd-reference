---
sidebar_position: 5
sidebar_label: Observed & Test Statistic
title: Observed & Test Statistic
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Concept

:::info Terminology
**Experiment**: A process whose outcome is random.

- Example: Flipping 100 coins.

**Observed Statistic**: A statistic computed from the observed data.
- Example: The number of heads observed.

**Test Statistic**: A statistic computed from a sample generated under the assumption that the null hypothesis is true.
- Think of the test statistic a number you write down each time you perform an experiment.
- The test statistic should be such that high observed values lean towards one hypothesis and low observed values lean towards the other.
:::
## Common Test Statistics 🌟

    ### 1. Absolute Difference 
    Absolute difference in group mean/median/number of times a certain event happens.
        - ✅ Used for measuring how different two **numerical distributions** are, and when the alternative hypothesis is **_not equal to_**. For example, "the coin is biased" or "the probability of tossing a head is 0.5".
        - 💻 [Example](https://dsc-courses.github.io/bpd-reference/docs/statistical-inference/permutation_test#code-example-absolute-difference) of using absolute difference as the test statistic in a permutation test.

    ### 2. Difference 
    Difference in group mean/median/number of times a certain event happens.
        - ✅ Used for measuring how different two **numerical distributions** are, and the alternative hypothesis is **_less than_** or **_greater than_**. For example, "the coin is biased towards heads" or "the probability of tossing a head is greater then 0.5".
        - 💻 [Example](https://dsc-courses.github.io/bpd-reference/docs/statistical-inference/hypothesis_test#code-example-1-difference) of using difference as the test statistic in a hypothesis test.

    ### 3. Total Variation Distance (TVD) 
    A test statistic that quantifies how different **two categorical distributions** are by calculating the sum of the absolute differences of their proportions, all divided by 2.
        - ❌️ The TVD is not used for permutation tests.
        - ✅ Used for assessing whether an "observed sample" was drawn randomly from a known **categorical distribution**.
        - 💻 [Example](https://dsc-courses.github.io/bpd-reference/docs/statistical-inference/hypothesis_test/#code-example-2-tvd) of using TVD as the test statistic in a hypothesis test.

```python
#code implementation
def tvd(dist1, dist2):
    '''Computes the TVD between two categorical distributions, 
       assuming the categories appear in the same order.'''
    return np.abs(dist1 - dist2).sum() / 2
```

:::note
**3 Ways of Manually Computing TVD:** 🧮

Let's use an example to show how TVD can be computed in three ways.

In the `full_pets` DataFrame, we found that the color distribution of dogs seems different from that of all pets.

<DataFrameComponent data={'{"columns":["Pets_Dist","Dogs_Dist"],"index":["black","golden","white"],"data":[[0.53,0.44],[0.21,0.12],[0.26,0.44]]}'} />

*Assume $P$ is one distribution and $Q$ is the other, and the categories appear in the same order.*
1. **Follow the definition:** Calculate the sum of the absolute differences of the proportions of the two distributions (P and Q), all divided by 2. 

    $$
    \begin{align*} 
    \text{TVD}
    &= \frac{1}{2}(|0.53-0.44|+|0.21-0.12|+|0.26-0.44|) \\
    &= \frac{1}{2}(0.09+0.09+0.18) \\
    &= 0.18
    \end{align*} 
    $$

2. **Sum of positive differences:** Add only the values where one distribution (e.g. P_i) is greater than the other (e.g. Q_i) . This essentially sums the excessive probabilities in one distribution over the other. \
$$\text{TVD}=\sum max(P_i-Q_i,0)$$

to do: replace formula with example DataFrame visualization

3. **Sum of negative differences:** Add only the absolute values where the selected distribution (e.g. P_i) is less than the other (e.g. Q_i). This essentially sums the deficient probabilities in one distribution relative to the other. \
$$\text{TVD}=\sum abs(min(P_i-Q_i,0)) \ \text{or} \ \text{TVD}=\sum max(Q_i-P_i,0)$$

to do: replace formula with example DataFrame visualization
:::




