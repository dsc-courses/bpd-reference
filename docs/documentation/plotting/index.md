---
title: "Plotting"
---

import '@site/src/css/chapters.css';

<p className="main-description">Plotting and visualization of DataFrames.</p>

<div className="method-container">
    <div className="method">
        [<code>df.plot</code>](Histogram)(kind='hist', y=data_col, bins=the_bins, density=True, ec='w')
    </div>
    <div className="description">
        <p>Creates a histogram using a DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.plot</code>](Scatter%20Plot)(kind='scatter', x=data_col, y=data_col)
    </div>
    <div className="description">
        <p>Creates a scatter plot using a DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.plot</code>](Bar%20Plot)(kind='bar', x=data_col, y=data_col)
    </div>
    <div className="description">
        <p>Creates a bar plot using a DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.plot</code>](Line%20Plot)(kind='line', x=data_col, y=data_col)
    </div>
    <div className="description">
        <p>Creates a line plot using a DataFrame.</p>
    </div>
</div>