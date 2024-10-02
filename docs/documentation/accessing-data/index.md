---
title: "Accessing Data"
---

import '@site/src/css/chapters.css';

<p className="main-description"></p>

<div className="method-container">
    <div className="method">
        [<code>df.shape</code>](df.shape)
    </div>
    <div className="description">
        <p>Returns a tuple representing the dimensions of the DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.get</code>](df.get())(column_name)
    </div>
    <div className="description">
        <p>Returns column(s) from DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.loc</code>](ser.loc[])[]
    </div>
    <div className="description">
        <p>Returns the element of Series that corresponds to its row label.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.iloc</code>](ser.iloc[])[]
    </div>
    <div className="description">
        <p>Returns the element contained in Series at the given position.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.index</code>](df.index)
    </div>
    <div className="description">
        <p>Returns the indices (row labels) of the DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.columns</code>](df.columns)
    </div>
    <div className="description">
        <p>Returns the column labels of the DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.take</code>](df.take())(indices)
    </div>
    <div className="description">
        <p>Returns the elements in the given positional indices.</p>
    </div>
</div>