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

**Association:** Any relationship or link between two variables in a scatter plot
- Positive association: as one variable increases, the other tends to increase.
- Negative association: as one variable increases, the other tends to decrease.

**Correlation coefficient $r$**: The correlation coefficient, $r$, of two variables $x$ and $y$ measures the strength of the linear association between them (how clustered points are around a straight line).
- Positive association: as one variable increases, the other tends to increase.
- Negative association: as one variable increases, the other tends to decrease.

**Regression line**: A line through (0, 0), intercept of 0, with slope $r$, when both variables are measured in standard units.
- Always predicts that $y$ will be closer to the average than $x$, the *regression to the mean* effect.
- Not saying $y$ is actually closer to the mean than $x$, only a prediction.

:::

---
## Formulas

### Standard Units
Standardize your units to compare two variables with different units (ex. height and weight).

$$x_{i(su)}=\dfrac{x_{i}-\textnormal{mean of $x$}}{\textnormal{SD of $x$}}$$

:::note
- **$$x_{i}$$** = value (in original units) from column x
- **$$x_{i(su)}$$** = value of $x_{i}$ converted to standard units
:::

### Regression Line
Used to make predictions about the value of y based on the correlation coefficient and the value of x.

$$\textnormal{predicted y}_{i(su)} = r\cdot x_{i(su)} $$

:::note
- **$$x_{i(su)}$$** = value of $x_{i}$ converted to standard units
- **$r$** = correlation coefficient, the strength of the linear association between $x$ and $y$
:::