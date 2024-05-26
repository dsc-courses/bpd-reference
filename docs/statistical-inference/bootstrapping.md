---
sidebar_position: 8
sidebar_label: Boostrapping and Confidence Intervals
title: Bootstrapping and Confidence Intervals
tags: 
  - for-loop 
  - histogram
---

import DataFrameComponent from '@site/components/DataFrameComponent.jsx';
import GoogleSlides from '@site/components/GoogleSlides.jsx';

## Concept

:::tip Key Idea
We use a bootstrapping to estimate the distribution of the sample statistic to see how different our it could have been. We use confidence intervals to define a range that captures most of the bootstrapped distribution of the sample statistic.
:::

:::info Terminology
**Bootstrapping**: Bootstrapping is a type of hypothesis test that involves resampling from a single sample to estimate the 
distribution of the sample statistic. It answers the question of how different the sample statistic could have been if given a different sample. To conduct bootstrapping:

1. Resample from the original sample with replacement.
2. Calculate the sample statistic on the bootstrapped resample.
3. Save the results into an array.
4. Repeat steps 1 through 3 to generate an empirical distribution of the test statistic.
5. Calculate the confidence interval and see if the observed statistic lies in it. If the observed statistic is not 
in our confidence interval, we have evidence to reject the null.


**Confidence Intervals:** A confidence interval is a range that captures most of the distribution of the bootstrapped sample statistic in 
the hopes of also containing the true population parameter within it. If 
we were to construct a 95% confidence interval, we aren't saying that there is a 95% chance that the true population parameter lies in the 
interval as the interval either contains it or it doesn't. Instead, we are saying that approximately 95% of the time, the intervals you 
create will contain the true population parameter. For example, if we generated 100 confidence intervals, about 95 of them will have the 
true population parameter.
:::

:::note
When resampling, the size of the resample should be the same as the original sample with replacement.
:::

The diagram below provides an overview of conducting bootstrapping, although it references a different dataset.

<GoogleSlides
src="https://docs.google.com/presentation/d/e/2PACX-1vS_iYHJYXSVMMZ-YQVFwMEFR6EFN3FDSAvaMyUm-YJfLQgRMTHm3vI-wWJJ5999eFJq70nWp2hyItZg/embed?start=true&loop=false&delayms=3000&rm=minimal"
sourceLink="https://docs.google.com/presentation/d/1oYakqMdI7z61BthvgWUJvbT21bKTXg01KmAibglepBI/edit?usp=sharing"
/>

The diagram below provides an overview of creating confidence intervals, although it references a different situation. For additional helpful visual guides, please visit the [Diagrams](https://dsc10.com/diagrams/) site.

<GoogleSlides
src="https://docs.google.com/presentation/d/e/2PACX-1vTaPZsueXI6fey_5cj2Y1TevkR1joBvpwaWVsZNvgBlnJSrw1EiBLHJywkFH_QNLU5Tdr6JZgDrhFxG/embed?start=true&loop=false&delayms=3000&rm=minimal"
sourceLink="https://docs.google.com/presentation/d/1l5GVyl60FrornEaZnGL6REV4gjEydRncNVi6k1hHUsA/edit?usp=sharing"
/>

---
## Code Example

### 1. Take a random sample of size 12 from the `full_pets` DataFrame.

Let's say we didn't have access to all of the information in the `full_pets` DataFrame and were only able to collect a sample of 12 pets.

```python
# Magic to ensure that we get the same results every time this code is run. 
np.random.seed(42)

# sample
pets_sample = full_pets.sample(12, replace=False)
pets_sample
```

<DataFrameComponent data={'{"columns":["Unnamed: 0","ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[18,14,4,13,10,7,6,3,2,15,17,8],"data":[[18,"cat_006","cat","black",3.0,0.5,true,"No, thank you!"],[14,"dog_007","dog","white",50.0,6.1,false,"No, thank you!"],[4,"dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],[13,"ham_003","hamster","black",0.5,0.1,false,"No, thank you!"],[10,"dog_006","dog","golden",35.0,4.0,false,"No, thank you!"],[7,"cat_003","cat","black",10.0,0.0,true,"No, thank you!"],[6,"ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],[3,"dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],[2,"cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],[15,"ham_004","hamster","golden",0.25,0.2,false,"No, thank you!"],[17,"dog_009","dog","white",30.0,4.8,false,"No, thank you!"],[8,"dog_004","dog","black",45.0,6.7,false,"No, thank you!"]]}'} />

---

### 2. Find the observed parameter

In this case, we are interested in finding the median weight of the entire population.

```python
pets_sample = full_pets.sample(12, replace=False)
print('Median of pets_sample weight:', pets_sample.get('Weight').median())
```

Median of pets_sample weight: 20.0

---

### 3. Bootstrap the sample 10,000 times with replacement

Since we were only able to collect one random sample from the full population, we can't be sure if this singular guess predicts the 
true population parameter well. We can't go out and collect 
another random sample, so we will resample from the original sample with replacement to simulate what could've been.

```python
boot_medians = np.array([])
for i in np.arange(10000):
    # 1. resample the data
    resample = pets_sample.sample(pets_sample.shape[0], replace=True)

    # 2. calculate the median of the resample
    boot_median = resample.get('Weight').median()

    # 3. append the median to the array
    boot_medians = np.append(boot_medians, boot_median)
```

This code will create 10,000 bootstrapped samples and calculate the median for each of them, but a different 
reasonable number can be used instead. Since these samples are all random, the information in each sample and 
median will be different from one another.

---

### 4. Create a 95% confidence interval
Instead of using a single number to estimate the true population parameter, we create a range of where we think it is.

```python
# Get the 95% confidence interval
left = np.percentile(boot_medians, 2.5) # 2.5th percentile
right = np.percentile(boot_medians, 97.5) # 97.5th percentile
```

Remember that the 95% confidence interval does not mean we have a 95% chance of containing the true population parameter. It means 
that about 95% of all intervals we create will contain the true population parameter.

---

### 5. Conclusion

```python
left, right
```

(1.75, 40.0)

:::info Conclusion
* From this interval, we are 95% confident that the true population median lies somewhere between 1.75 and 40.
* We have no way of knowing where exactly in this interval does the true population median falls or even if it is contained at all.
* What we do know is that if we were to repeat the process and generate multiple confidence intervals, roughly 95% of them will 
contain the true population median.
:::

---

### 6. Extra

Let's look at the distribution of the bootstrapped medians!

```python
# Create the histogram.
# Plot the histogram of boot_medians
plt.hist(boot_medians, bins=20, density=True, ec = 'w')

plt.show()
```
![Distribution](/img/statistical-inference-plots/bootstrapping.png)

A 95% confidence level means that **approximately 95% of the time, the intervals you create through this process will contain the true population parameter**.