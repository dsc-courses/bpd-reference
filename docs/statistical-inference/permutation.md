---
sidebar_position: 2
sidebar_label: Permutation Testing
title: Permutation Testing
---

import DataFrameComponent from '../../components/DataFrameComponent.jsx';

<p style="font-size:20px;"><b>Key Idea: We use a permutation test to test whether two samples were drawn from the same population.</b></p>

The diagram provides an overview of conducting a permutation test, although it references a different dataset. For additional helpful visual guides, please visit the [Diagrams](https://dsc10.com/diagrams/) site.

<iframe
src="https://docs.google.com/presentation/d/e/2PACX-1vSovXDonR6EmjrT45h4pY1mwmcKFMWVSdgpbKHC5HNTm9sbG7dojvvCDEQCjuk2dk1oA4gmwMogr8ZL/embed?start=true&loop=false&delayms=3000&rm=minimal"
frameborder="0"
width="700"
height="400"
allowfullscreen="true"
mozallowfullscreen="true"
webkitallowfullscreen="true"
style={{clipPath: 'inset(3.5px 5.5px 8px 5px)'}}></iframe>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <a href="https://docs.google.com/presentation/d/1TTWoQ7FU4tzBGc7EskF6WYccIn1BWQbTSizAiFc2p2o/edit?usp=sharing">(source)</a>
</div>


---

## 1. State the question/hypothesis

Our pair of hypotheses is:
* **Null Hypothesis:** The mean weights of dogs and cats are the *same*.
* **Alternative Hypothesis:** The mean weights of dogs and cats are *different*.

Since the alternative hypothesis is of the form "A and B are different," the test statistic should measure distance and use an absolute value.

$\therefore$ Use **absolute difference in group means** as the test statistic.

---

## 2. Query the DataFrame

Since we want to compare the distributions of only cats and dogs, we need to make sure to only include the relevant pieces of data (e.g., cats and dogs weights).

```python
# Create a boolean Series that references which rows fulfill either condition.
querying_condition = (full_pets.get('Species') == 'dog') | (full_pets.get('Species') == 'cat')
# Query.
cats_dogs = full_pets[querying_condition]
# Display the first 5 rows only.
cats_dogs.take(np.arange(5)) 
```

<DataFrameComponent data={'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'} />

---

## 3. Create a function to calculate test statistic

Since our hypotheses depend on the test statistic, create a function to be able to calculate it during every trial of our permutation test.

```python
def difference_in_means(cats_dogs):
    """
    Calculate the absolute difference in the mean weight of dogs and cats.
    ---
    Input:
      cats_dogs: a DataFrame containing the columns 'Species' and 'Weight'.
    ---
    Output:
        The absolute difference in the mean weight of dogs and cats.
    """
    means = cats_dogs.groupby('Species').mean()
    return np.abs((means.get('Weight').loc['dog'] - means.get('Weight').loc['cat']))
```

*Note: Although we can simply do this in the function, we can practice good coding habits by separating our code into readable bits!*

---

## 4. Simulate the permutation test

```python
n = 500 # Number of simulations.
statistics = np.array([]) # Array to keep track of the difference in means for each iteration.
for i in np.arange(n): # Run the simulation `n` number of times
    # 1. Shuffle the species.
    shuffled = cats_dogs.assign(Species=np.random.permutation(cats_dogs.get('Species')))

    # 2. Compute the test statistic.
    statistic = difference_in_means(shuffled)

    # 3. Save the result.
    statistics = np.append(statistics, statistic)
```

This code will run the permutation test 500 times, but a different reasonable number can be used instead. It is **crucial** to keep track of the difference in means each time our for-loop runs so that the number of simulated values can be displayed. 

---

## 5. Conclusion

```python
observed = difference_in_means(cats_dogs)
p_value = np.count_nonzero(statistics >= observed) / n

print("The observed value of the test statistic is:", observed)
print("The p-value is:", p_value)
```
**The observed value of the test statistic is: 30.361111111111107** <br />
**The p-value is: 0.004**

Using a significance level of 0.05...

**Conclusion:**
* Under the null hypothesis, we rarely see a difference greater than the observed value.
* Therefore, we **reject** the null hypothesis: the evidence implies that the two groups do not come from the same distribution.
* Still, we cannot conclude that species causes a different weight because there may be other factors at play.

---

## 6. Extra

Let's see how our observed statistic compares to the overall simulated values!

```python
# Create the histogram.
bpd.DataFrame().assign(statistics=statistics).plot(kind='hist', bins=20, density=True, ec='w')
# Don't worry about this line - you won't need to know it for this course!
plt.axvline(x=observed, c='black', linewidth=4, label='population difference in means')
```
![Distribution](/img/statistical-inference-plots/permutation-test.png)

From this graph, we can tell that there is barely any data to the **right** of the black vertical line, meaning we have a very low p-value!