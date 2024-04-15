function ContentSection4() {
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
            <p className='title1'>Minecraft</p>
            <p className='text'>
                HTTP 요청/응답을 지원하는 모든 언어는 API를 사용할 수 있기 때문에,
                다양한 환경에서 다양한 용도로 활용할 수 있다.
                마인크래프트는 Java언어를 기반으로 만들어졌기 때문에 아래와 같이 활용할 수 있다.
            </p>
            <p className='text'>
                마인크래프트에서 API를 호출하는 코드 :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ exampleURL }</code></pre>
            </div>
            <p className='text'>
                Response Message 로부터 해당 문장의 레벨과 필터링된 문장을 추출하는 코드:
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ axiosRequestCode }</code></pre>
            </div>
            <p className='text'>
                필터링된 문장을 게임 서버에 전송하는 코드 :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ responseMessage }</code></pre>
            </div>
            <p className='text'>
                비속어의 레벨에 따라 채팅을 한 유저에게 가할 패널티를 설정하는 코드 :
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ responseMessage }</code></pre>
            </div>
        </div>
    );
}

export default ContentSection4;