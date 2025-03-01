---
sidebar_position: 2
sidebar_label: Bootstrapping vs. the CLT
title: Bootstrapping vs. the CLT
tags: 
  - bootstrapping
  - the central limit theorem
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import SuggestionForm from '@site/components/SuggestionForm.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Difference

**Bootstrapping** 
- **Goal:** to estimate the distribution of a **sample statistic** (e.g. the sample mean).
- Given just a **single sample**

**The Central Limit Theorem**
- **Goal:** to describe the distribution of the **sample mean (or sum)**
- It **depends on** information about the **population** (i.e. the population mean and population SD). However, since the **sample mean and SD** are likely to be close to the population mean and SD, we can use them as **approximations** in the CLT!

As a result, we can approximate the distribution of the sample mean, given just a single sample, without ever having to bootstrap!
In other words, the CLT is a **shortcut** to bootstrapping!




---
<SuggestionForm/>