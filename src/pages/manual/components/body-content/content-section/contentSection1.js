import sect1Text from "../contentSection1Text";

function ContentSection1() {
    return (
        <div className='content-section'>
            <p className='title1'>Installation</p>
            <p className='text'>{sect1Text.section1Text1}</p>
            <p className='text'>axios 설치 코드 : </p>
            <div className='code-section'>
                <code className='code-font'><span>{sect1Text.installAxiosCode}</span></code>
            </div>
            <p className='text'>설치한 axios는 다음과 같이 사용할 수 있다.</p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{sect1Text.exampleAxiosCode}</code></pre>
            </div>
        </div>
    );
}

export default ContentSection1;