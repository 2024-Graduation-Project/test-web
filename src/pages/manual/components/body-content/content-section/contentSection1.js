function ContentSection1() {
    const exampleAxiosCode = `axios.post(url, request)
            .then((response) => { console.log("전송 성공:", response.data); })
            .catch((error) => { console.log("전송 실패:", error); })`;

    return (
        <div className='content-section'>
            <p className='title1'>Installation</p>
            <p className='text'>
                미리 학습한 모델을 TorchServe로 배포하였기 때문에,
                HTTP 요청 및 응답이 가능한 모든 언어와 상호작용 가능하다.
                매뉴얼은 React.js, Axios를 사용하여 작성하였다.
            </p>
            <p className='text'>
                axios 설치 코드 :
            </p>
            <div className='code-section'>
                <code className='code-font'><span>npm install axios</span></code>
            </div>
            <p className='text'>
                설치한 axios는 다음과 같이 사용할 수 있다.
            </p>
            <div className='long-code-section'>
                <pre><code className='code-font'>{ exampleAxiosCode }</code></pre>
            </div>
        </div>
    );
}

export default ContentSection1;