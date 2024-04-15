import DataFrameComponent from '../../components/DataFrameComponent.jsx';
import '../../src/css/function.css';

<code>bpd.read_csv(filepath)</code>

<div className='base'>
    <p><strong>Read a comma-separated values (csv) file into DataFrame.</strong></p>
    <dl>
        <dt>Input:</dt>
        <dd>filepath: str, path object, file-like object.</dd>
        <dd>Any valid string path is acceptable. The string could also be a URL.</dd>

        <dt>Returns:</dt>
        <dd>df - DataFrame with read csv file.</dd>

        <dt>Return Type:</dt>
        <dd>DataFrame</dd>
    </dl>
</div>

```python3
pets = bpd.read_csv('pets.csv')
pets
```

<DataFrameComponent data={'{"Species":{"0":"dog","1":"cat","2":"cat","3":"dog","4":"dog","5":"hamster","6":"hamster"},"Color":{"0":"black","1":"golden","2":"black","3":"white","4":"black","5":"black","6":"golden"},"Weight":{"0":40.0,"1":15.0,"2":20.0,"3":80.0,"4":25.0,"5":1.0,"6":0.25},"Age":{"0":5.0,"1":8.0,"2":9.0,"3":2.0,"4":0.5,"5":3.0,"6":0.2}}'} />