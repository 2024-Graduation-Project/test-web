function Section4() {
    const exampleURL = `const torchServeURL = "http://localhost:8080/predictions/KcELECTRA;
const requestMessage = "안녕하세요";`;
    const axiosRequestCode = `axios.post(torchServeURL, requestMessage)
            .then((response) => { console.log("전송 성공:", response.data); })
            .catch((error) => { console.log("전송 실패:", error); })`;
    const responseMessage = `[
    "0.9997372031211853",
    "4.3749314500018954e-05",
    "9.505049092695117e-05",
    "0.0001239777193404734",
    "\\uc548\\ub155\\ud558\\uc138\\uc694"
]`;

    return (
        <div className='content-section'>
            <p className='title1'>Other Uses</p>
            <p className='text'>
                HTTP 요청/응답을 지원하는 모든 언어는 API를 사용할 수 있기 때문에,
                다양한 환경에서 다양한 용도로 활용할 수 있다.
            </p>
            <p className='text'>
                예시 TorchServe URL과 Request Message :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ exampleURL }</code></pre>
            </div>
            <p className='text'>
                axios로 POST 요청을 보내는 코드 :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ axiosRequestCode }</code></pre>
            </div>
            <p className='text'>
                console.log()를 통해서 Response Message 확인 :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ responseMessage }</code></pre>
            </div>
            <p className='text'>
                JavaScript는 "\uxxxx"를 확인한 순간 유니코드로 인식하여 자동으로 문자로 변환해준다.
                다른 언어를 사용할 경우 유니코드를 문자로 변환해주는 별도의 작업이 필요할 수도 있다.
            </p>
        </div>
    );
}

export default Section4;