---
sidebar_position: 10
sidebar_label: The Central Limit Theorem
title: The Central Limit Theorem
tags: 
  - the standard normal distribution
  - confidence intervals
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Concept

:::info Terminology
**The Central Limit Theorem (CLT):** The probability distribution of the **sum or mean** of a large random sample drawn **with replacement** will be **roughly normal**, regardless of the distribution of the population from which the sample is drawn.
:::

**Characteristics of the Distribution of the Sample Means**
- **Shape:** The CLT says that the distribution of the sample mean is **roughly normal**, no matter what the population looks like.
- **Center:** This distribution is centered at the **population mean**.

$$
\begin{align*}  
\text{Mean of Distribution of Possible Sample Means} 
&= \text{Population Mean} \\
&\approx \text{Sample Mean}
\end{align*} 
$$

- **Spread:** 
    - The **distribution's standard deviation** will be described by the square root law: 

    $$
    \begin{align*} 
    \text{SD of Distribution of Possible Sample Means} 
    &= \frac{\text{Population SD}}{\sqrt{\text{sample size}}} \\
    &\approx \frac{\text{Sample SD}}{\sqrt{\text{sample size}}} 
    \end{align*}
    $$

    - A **95%** CLT-based confidence interval for the population mean is given by

    $$
    \left[\text{sample mean} - 2\cdot \frac{\text{sample SD}}{\sqrt{\text{sample size}}},
    \text{sample mean} + 2\cdot \frac{\text{sample SD}}{\sqrt{\text{sample size}}}
    \right]
    $$

:::note
We often use the sample mean and SD instead of the population mean and SD, since we have this information for a sample, but not the population.
:::

The diagram below provides an overview of the Central Limit Theorem, although it references a different dataset. For additional helpful visual guides, please visit the [Diagrams](https://dsc10.com/diagrams/) site.

<GoogleSlides
src="https://docs.google.com/presentation/d/e/2PACX-1vTIYviveyB3wk7ck7_gFpyZTEwT67jTl0aDdidTn1iqtjRRT70ihB7HKT4rwO68dcUtr80OgOlyvsHn/embed?start=true&loop=false&delayms=3000&rm=minimal"
sourceLink="https://docs.google.com/presentation/d/1GX74m6k0PbLU6j5zPUuylbkcgsel2MPfcpfACZ45AVQ/edit?usp=sharing"
/>



---
<SuggestionForm/>