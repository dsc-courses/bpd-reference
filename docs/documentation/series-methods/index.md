---
title: "Series Methods"
---

import '@site/src/css/chapters.css';
import SuggestionForm from '@site/components/SuggestionForm.jsx';

<p className="main-description">Methods that can be performed on a Series.</p>

## Aggregation
<br />

<div className="method-container">
    <div className="method">
        [<code>ser.count()</code>](ser.count())
    </div>
    <div className="description">
        <p>Returns the number of non-NA/null observations in the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.max()</code>](ser.max())
    </div>
    <div className="description">
        <p>Returns the maximum of the values in the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.min()</code>](ser.min())
    </div>
    <div className="description">
        <p>Returns the minimum of the values in the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.sum()</code>](ser.sum())
    </div>
    <div className="description">
        <p>Returns the sum of the values in the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.mean()</code>](ser.mean())
    </div>
    <div className="description">
        <p>Returns the mean of the values in the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.median()</code>](ser.median())
    </div>
    <div className="description">
        <p>Returns the median of the values in the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.unique()</code>](ser.unique())
    </div>
    <div className="description">
        <p>Returns the unique values in the Series.</p>
    </div>
</div>

## String
<br />

<div className="method-container">
    <div className="method">
        [<code>ser.str.split()</code>](ser.str.split())
    </div>
    <div className="description">
        <p>Splits each string element in the Series from the beginning, at the specified seperator/delimiter string.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.strip(to_remove=None)</code>](ser.str.strip())
    </div>
    <div className="description">
        <p>Removes the specified character from each string in the Series from left and right sides.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.lower()</code>](ser.str.lower())
    </div>
    <div className="description">
        <p>Converts strings in the Series to lowercase.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.upper()</code>](ser.str.upper())
    </div>
    <div className="description">
        <p>Converts strings in the Series to uppercase.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.capitalize()</code>](ser.str.capitalize())
    </div>
    <div className="description">
        <p>Capitalizes the first character in of every element in the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.title()</code>](ser.str.title())
    </div>
    <div className="description">
        <p>Converts strings in the Series to title case.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.replace(old, new)</code>](ser.str.replace())
    </div>
    <div className="description">
        <p>Substitutes all `old` strings with the `new` string for every element of the Series.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.len()</code>](ser.str.len())
    </div>
    <div className="description">
        <p>Counts the number of characters in the Series for each element.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>ser.str.contains(substring)</code>](ser.str.contains())
    </div>
    <div className="description">
        <p>Tests if a substring is contained within each element of the Series.</p>
    </div>
</div>



---
<SuggestionForm/>