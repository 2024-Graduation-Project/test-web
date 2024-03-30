function SepcSection2() {
    const requestSyntax = `curl -X POST https://{SERVER_URL}/predictions/KcELECTRA \\
  -H "Content-Type: application/json" \\
  -d '{ \\
      \t"text": "메시지 내용", \\
      }'`;
    const serverURL = `https://{SERVER_URL}/predictions/KcELECTRA`;
    return (
        <div className='content-section'>
            <p className='title1'>Request</p>
            <p className='title2'>Request Syntax</p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{requestSyntax}</code></pre>
            </div>
            <div className='table-section'>
                <table>
                    <tr>
                        <th>method</th><th>request URL</th>
                    </tr>
                    <tr>
                        <td>POST</td><td>{serverURL}</td>
                    </tr>
                </table>
            </div>
            <p className='title2'>Request Header</p>
            <div className='table-section'>
                <table>
                    <tr><th>parameter</th><th>type</th><th>essential</th><th>etc</th></tr>
                    <tr><td>Content-Type</td><td>String</td><td>Yes</td><td>application/json</td></tr>
                </table>
            </div>
            <p className='title2'>Request Elements</p>
            <div className='table-section'>
                <table>
                    <tr><th>parameter</th><th>type</th><th>essential</th><th>etc</th></tr>
                    <tr><td>text</td><td>String</td><td>Yes</td><td>message</td></tr>
                </table>
            </div>
        </div>
    );
}

export default SepcSection2;
