---
sidebar_position: 5
sidebar_label: P-value
title: P-value
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Concept

:::info Terminology
**P-value**: The probability, under the null hypothesis, that the test statistic **is equal** to the value that was observed in the data **or is even further in the direction of the alternative**. Its formal name is the observed **significance level**.
:::

## Result Interpretation
- If the p-value is sufficiently large, we say the data is consistent with the null hypothesis and so we "**fail to reject the null hypothesis**".
- If the p-value is below some cutoff, we say the data is inconsistent with the null hypothesis, and we "**reject the null hypothesis**".
    - If a p-value is less than 0.05, the result is said to be **statistically significant**.
    - If a p-value is less than 0.01, the result is said to be **highly statistically significant**.

## Histogram Visualization
 p-values correspond to the "tail areas" of a histogram, starting at the observed statistic. (to do: add a diagram)

to do: add an example (code + graph) / or link to a coding example


