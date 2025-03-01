---
sidebar_position: 1
sidebar_label: Hypothesis Test vs. Permutation Test
title: Hypothesis Test vs. Permutation Test
tags: 
  - hypothesis test
  - permutation test
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Difference

**(Standard) Hypothesis Test** 
- A **population distribution**.
- **One** observed **sample**.
- Answers questions in the form: Does this sample look like it was drawn from the population?

**Permutation Test**
- **No** information about any **population distributions**.
- **Two** observed **samples**.
- Answers questions in the form: Do these two samples look like they were drawn from the same population?


## Concept Check 👀
Which test do you choose in each of the following scenarios (Hypothesis Test or Permutation Test)?

1. In DSC 10, we ask all students whether they liked labs or homework more. Compare the proportion of students who preferred labs to the proportion who preferred homeworks.
2. Compare the proportion of students from Sixth College who have taken DSC 10 and the proportion of students from Muir College who have taken DSC 10.

<details>
<summary>Answer</summary>
1. Hypothesis Test.
2. Permutation Test.

:::tip
**Method 1:**
Think about whether you need one column or two columns of data to perform the task.

If you only need one column of data (e.g. head/tail), then it is a hypothesis test. If you need two columns (one with labels and one with values), then it is a permutation test.

**Method 2:**
If you can find the proportion of group B by only knowing the proportion of group A, then it is a hypothesis test. For instance, in the first scenario, since we know that DSC 10 students like either labs or homework, we can calculate the proportion of students who preferred labs by subtracting the proportion of students who preferred homework from the whole proportion (100%).

However, for the second scenario, we cannot infer one proportion from another. Thus, it is a permutation test.
:::
</details>





---
<SuggestionForm/>







