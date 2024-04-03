import sect2Text from "../contentSection2Text";

function ContentSection2() {
    return (
        <div className='content-section'>
            <p className='title1'>Request/Response Format</p>
            <p className='text'>요청을 보낼 때, 다음의 형식을 지켜서 JSON으로 보낸다.</p>
            <div className='code-section'>
                <code className='code-font'><span>{sect2Text.requestFormat}</span></code>
            </div>
            <p className='text'>{sect2Text.section2Text1}</p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{sect2Text.responseFormat}</code></pre>
            </div>
        </div>
    );
}

export default ContentSection2;