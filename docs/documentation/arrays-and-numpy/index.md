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
        <p>Retrieves the element at the index-th position in `arr`. The first element is `arr`[0].</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.append</code>](np.append())(arr, value)
    </div>
    <div className="description">
        <p>A copy of `arr` with `value` appended to the end. This does not change `arr` unless you store the result in `arr`.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.arange</code>](np.arange())(start, stop, step)
    </div>
    <div className="description">
        <p>An array of numbers beginning at `start`, increasing in increments of `step`, and ending before `stop`. If `start` or `step` is omitted, the default values will be 0 and 1, respectively.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.count_nonzero</code>](np.count_nonzero())(arr)
    </div>
    <div className="description">
        <p>The number of non-zero entries in `arr`. True counts as 1, False counts as 0.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.percentile</code>](np.percentile())(arr, p)
    </div>
    <div className="description">
        <p>The p-th percentile of the numbers in `arr`.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>np.round</code>](np.round())(arr, decimals)
    </div>
    <div className="description">
        <p>Rounds each element of `arr` to the `decimals` number of places.</p>
    </div>
</div>