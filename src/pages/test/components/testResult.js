function TestResult({ result }) {
    if (result.length === 0) result = [ "----", "----", "----", "----", "----", "----"];

    const resultCode =
        `[lv0]:\t${result[0]}\n[lv1]:\t${result[1]}\n[lv2]:\t${result[2]}\n[lv3]:\t${result[3]}\n\n[level]:\t${result[4]}\n[masked]:\t${result[5]}`

    return (
        <div className='test-result-text'>
            <pre><code>
                <p className='result-text'>{resultCode}</p>
            </code></pre>
        </div>
    );
}

export default TestResult;