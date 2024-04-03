import sect3Text from "../contentSection3Text";

function ContentSection3() {
    return (
        <div className='content-section'>
            <p className='title1'>Using Axios</p>
            <p className='text'>{sect3Text.section3Text1}</p>
            <p className='text'>
                ex) TorchServe URL과 Request Message :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{sect3Text.exampleURL}</code></pre>
            </div>
            <p className='text'>
                axios로 POST 요청을 보내는 코드 :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{sect3Text.axiosRequestCode}</code></pre>
            </div>
            <p className='text'>
                console.log()를 통해서 Response Message 확인 :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{sect3Text.responseMessage}</code></pre>
            </div>
            <p className='text'>{sect3Text.section3Text2}</p>
        </div>
    );
}

export default ContentSection3;