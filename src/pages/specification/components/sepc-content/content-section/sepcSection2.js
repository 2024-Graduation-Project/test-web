import { requestSyntax, serverURL } from '../../../specificationText';

function SepcSection2() {
    return (
        <div className='content-section'>
            <p className='title1'>Request</p>
            <p className='title2'>Request Syntax</p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{requestSyntax}</code></pre>
            </div>
            <div className='table-section'>
                <table>
                    <thead>
                        <tr><th>method</th><th>request URL</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>POST</td><td>{serverURL}</td></tr>
                    </tbody>
                </table>
            </div>
            <p className='title2'>Request Header</p>
            <div className='table-section'>
                <table>
                    <thead>
                        <tr><th>parameter</th><th>type</th><th>essential</th><th>etc</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Content-Type</td><td>String</td><td>Yes</td><td>application/json</td></tr>
                    </tbody>
                </table>
            </div>
            <p className='title2'>Request Elements</p>
            <div className='table-section'>
                <table>
                    <thead>
                        <tr><th>parameter</th><th>type</th><th>essential</th><th>etc</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>text</td><td>String</td><td>Yes</td><td>message</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SepcSection2;
