---
sidebar_position: 4
sidebar_label: Observed & Test Statistic
title: Observed & Test Statistic
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Concept

:::info Terminology
**Experiment**: A process whose outcome is random.

- Example: flipping 100 coins.

**Observed Statistic**: A statistic computed from the observed data.
- Example: The number of heads observed.

**Test Statistic**: A statistic computed from a sample generated under the assumption that the null hypothesis is true.
- Think of the test statistic a number you write down each time you perform an experiment.
- The test statistic should be such that high observed values lean towards one hypothesis and low observed values lean towards the other.
- **Common Test Statistic** 🌟
    1. **Total Variation Distance (TVD)**: A test statistic that quantifies how different **two categorical distributions** are by calculating the sum of the absolute differences of their proportions, all divided by 2.
        - The TVD is not used for permutation tests
        - ✅ Used for assessing whether an "observed sample" was drawn randomly from a known **categorical distribution**:

    2. **Absolute Difference** in group mean/median/number of times a certain event happens.
        - ✅ Used for measuring how different two **numerical distributions** are, and when the alternative hypothesis is **_not equal to_**. For example, "the coin is biased" or "the probability of tossing a head is 0.5".

    3. **Difference** in group mean/median/number of times a certain event happens
        - ✅ Used for measuring how different two **numerical distributions** are, and the alternative hypothesis is **_less than_** or **_greater than_**. For example, "the coin is biased towards heads" or "the probability of tossing a head is greater then 0.5".
:::

:::note
**3 Ways of Computing TVD** 🧮
1. Follow the definition (calculating the sum of the absolute differences of the two distributions' proportions, all divided by 2)
2. 
3. 
:::


