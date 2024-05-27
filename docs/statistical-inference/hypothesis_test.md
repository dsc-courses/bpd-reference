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
* **Null Hypothesis:**  The proportion of "white" dogs among all dogs is **equal** to the proportion of "white" pets in the overall population.
* **Alternative Hypothesis:** The distribution of "white" dogs among all dogs is **greater than** the proportion of "white" pets in the overall population.
:::

Since the alternative hypothesis is of the form "A is **_greater than_** B," the **test statistic** should measure **signed difference** rather than absolute difference.

$\therefore$ We use **the difference in proportions** of white dogs among all dogs and white pets in the overall poplulation as the test statistic.

---

### 2. Calculate the overall proportion

We first compute the proportion of white pets in the overall population, which will be used for calculating the test statistic.

```python
#Method 1: Obtain a series of boolean values (1s and 0s), and calculate the mean
overall_prop = (full_pets.get('Color')=='white').mean()

#Method 2: Query the DataFrame and obtain the proportion by using .shape[0]
#overall_prop = full_pets[full_pets.get('Color')=='white'].shape[0]/full_pets.shape[0]

overall_prop
```
0.2631578947368421

---

### 3. Create a function to calculate test statistic

Create a function to calculate the test statistic during every trial of our hypothesis test.

```python
def difference_in_proportions(dogs_prop, overall_prop):
    """
    Calculate the difference in proportions of golden hamsters and golden pets in the overall population.
    ---
    Input:
        hamsters_prop: the proportion of white dogs among all dogs.
        overall_prop: the proportion of white pets in the overall population.
    ---
    Output:
        The difference in proportions of white dogs among dogs and white pets in the overall population.
    """
    return dogs_prop - overall_prop
```
_Note: Although we can simply do this in the for-loop shown in the next step, we can practice good coding habits by separating our code into readable bits!_

---

### 4. Compute the observed statistic

```python
# Query the DataFrame to only include dogs
dogs_df = full_pets[full_pets.get('Species') == 'dog']
# Compute the observed proportion of white dogs among all dogs
obs_dogs_prop = (dogs_df.get('Color') == 'white').mean()
# Calculate the observed statistic
observed_stat = difference_in_proportions(obs_dogs_prop, overall_prop)
observed_stat
```
0.18128654970760233

---

### 4. Simulate the hypothesis test under the null hypothesis

```python
n = 500 # Number of simulations.
test_statistics = np.array([]) # Array to keep track of the test statistic for each iteration.
for i in np.arange(n): # Run the simulation `n` number of times
    # 1. Simulate the dogs distribution
    
    # Calculte the smaple size (number of dogs)
    sample_size = dogs_df.shape[0]
    
    # Proportion of "white" dogs among dogs is equal to the proportion of white pets among the overall population
    model_proportions = np.array([obs_dogs_prop, 1-obs_dogs_prop]) 
    
    # Calculate the the proportion of white dogs among all dogs.
    simulation_proportion = np.random.multinomial(sample_size, model_proportions)[0] / sample_size
    
    # 2. Compute the test statistic
    test_stat = difference_in_proportions(simulation_proportion, overall_prop)

    # 3. Save the result
    test_statistics = np.append(test_statistics, test_stat)
```
This code will run the permutation test 500 times, but a different reasonable number can be used instead. It is **crucial** to keep track of the test statistic each time our for-loop runs so that the number of simulated values can be stored.

---

### 5. Conclusion

```python
p_value = np.count_nonzero(test_statistics >= observed_stat) / n

print("The observed value of the test statistic is:", observed_stat)
print("The p-value is:", p_value)
```
**The observed value of the test statistic is:** 0.18128654970760233 <br />
**The p-value is:** 0.616

Using a significance level of 0.05:

:::info Conclusion
* Under the null hypothesis, there is a sufficiently large probability of seeing a difference greater than the observed value. The data are consistent with the null hypothesis.
* Since our p-value is greater than 0.05, we **fail to reject** the null hypothesis.
:::

---

### 6. Extra

Let's see how our observed statistic compares to the overall simulated values!

```python
# Create the histogram.
bpd.DataFrame().assign(test_statistics=test_statistics).plot(kind='hist', bins= 10, density=True, ec='w')
# Don't worry about these lines - you won't need to know it for this course!
plt.axvline(x=observed_stat, c='black', linewidth=4);
yticks = plt.gca().get_yticks()
plt.yticks(yticks, np.round(yticks * 0.1, 2))
plt.show()
```

![Distribution](/img/statistical-inference-plots/hypothesis-test.png)

From this graph, we can see that more than half of the data are to the **right** of the black vertical line (our observed test statistic), meaning we have a relatively high p-value!
