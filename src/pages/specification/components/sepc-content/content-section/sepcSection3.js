function SepcSection3() {
    const responseSyntax =
`[
    "0.9997372031211853",
    "4.3749314500018954e-05",
    "9.505049092695117e-05",
    "0.0001239777193404734",
    "\\uc548\\ub155\\ud558\\uc138\\uc694"
]`;

    return (
        <div className='content-section'>
            <p className='title1'>Response</p>
            <p className='title2'>Response Syntax</p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{responseSyntax}</code></pre>
            </div>
            <p className='title2'>Response Elements</p>
            <div className='table-section'>
                <table>
                    <tr><th>index</th><th>type</th><th>essential</th><th>etc</th></tr>
                    <tr><td>0</td><td>String</td><td>Yes</td><td>first class</td></tr>
                    <tr><td>1</td><td>String</td><td>Yes</td><td>second class</td></tr>
                    <tr><td>2</td><td>String</td><td>Yes</td><td>third class</td></tr>
                    <tr><td>3</td><td>String</td><td>Yes</td><td>fourth class</td></tr>
                    <tr><td>4</td><td>String</td><td>Yes</td><td>masked message</td></tr>
                </table>
            </div>
        </div>
    );
}

export default SepcSection3;
