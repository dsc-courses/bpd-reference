---
sidebar_position: 7
sidebar_label: Standard Units, Correlation, Regression
title: Standard Units, Correlation, Regression
tags: 
  - querying
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Concept

:::tip Key Idea
We use regression to make predictions about the data (based on the correlation between two variables in standard units).
:::

:::info Terminology
**Standardization**: Converting all values of a variable (i.e. a column) to standard units (resulting values are standardized).

$$x_{i(su)}=\dfrac{x_{i}-\textnormal{mean of $x$}}{\textnormal{SD of $x$}}$$

**Association:** Any relationship or link between two variables in a scatter plot
- Positive association: as one variable increases, the other tends to increase.
- Negative association: as one variable increases, the other tends to decrease.

**Correlation coefficient $r$:** The correlation coefficient, $r$, of two variables $x$ and $y$ measures the strength of the linear association between them (how clustered points are around a straight line).
- Positive association: as one variable increases, the other tends to increase.
- Negative association: as one variable increases, the other tends to decrease.

:::