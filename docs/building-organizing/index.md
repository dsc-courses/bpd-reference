---
title: "building and organizing DataFrames"
---
import '../../src/css/chapters.css';

<p className="main-description">Each function/method creates a new DataFrame. Remember to save it!</p>

## Manipulating
<br />

<div className="method-container">
    <div className="method">
        [<code>bpd.DataFrame</code>](bpd.DataFrame())()
    </div>
    <div className="description">
        <p>Creates an empty DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>bpd.read_csv</code>](bpd.read_csv())(filepath)
    </div>
    <div className="description">
        <p>Read a comma-separated values (csv) file into DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.assign</code>](bpd.assign())(name_of_column=column_data)
    </div>
    <div className="description">
        <p>Adds a new column to the DataFrame.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.drop</code>](bpd.drop())(columns=column_name or [col_1_name, ..., col_k_name])
    </div>
    <div className="description">
        <p>Drops a single column, or every column in a list of column names.</p>
    </div>
</div>

## Indexing
<br />

<div className="method-container">
    <div className="method">
        [<code>df.set_index</code>](bpd.set_index())(column_name)
    </div>
    <div className="description">
        <p>Moves a column to the index.</p>
    </div>
</div>

## Organizing
<br />

<div className="method-container">
    <div className="method">
        [<code>df.reset_index</code>](bpd.reset_index())(drop=False)
    </div>
    <div className="description">
        <p>Moves a column to the index.</p>
    </div>
</div>

<div className="method-container">
    <div className="method">
        [<code>df.sort_values</code>](bpd.sort_values())(by=column_name, ascending=True)
    </div>
    <div className="description">
        <p>Sorts the entire DataFrame in ascending order by the values in the column.</p>
    </div>
</div>

## Merging
<br />

<div className="method-container">
    <div className="method">
        [<code>df.merge</code>](bpd.merge())(right, how='inner', on=column, left_on=left_column, right_on=right_column, left_index=False, right_index=False)
    </div>
    <div className="description">
        <p>Merges two DataFrames by specified columns or indexes, using the specified type of merge.</p>
    </div>
</div>