---
title: "Arrays and NumPy"
---

import '@site/src/css/chapters.css';

<p className="main-description">Functions/methods for working with Arrays and NumPy.</p>

<div className="method-container">
    <div className="method">
        [<code>arr</code>](arr[])[index]
    </div>
    <div className="description">
        <p>Retrieve the element at position index in the array arr. The first element is arr[0].</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.get</code>](df.get())(column_name)
    </div>
    <div className="description">
        <p>Return column(s) from DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.append</code>](np.append())(arr, value)
    </div>
    <div className="description">
        <p>A copy of arr with value appended to the end. This does not change arr unless you store the result in arr.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.arange</code>](np.arange())(start, stop, step)
    </div>
    <div className="description">
        <p>An array of numbers starting with start, increasing/decreasing in increments of step, and stopping before (excluding) stop. If start or step are omitted, the default values are 0 and 1, respectively.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.count_nonzero</code>](np.count_nonzero())(arr)
    </div>
    <div className="description">
        <p>The number of non-zero entries in arr. True counts as 1, False counts as 0.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.percentile</code>](np.percentile)(arr, p)
    </div>
    <div className="description">
        <p>The pth percentile of the numbers in arr.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.round</code>](np.round())(arr, decimals)
    </div>
    <div className="description">
        <p>Rounds each element of an array to a specified number of decimal places.</p>
    </div>
</div>