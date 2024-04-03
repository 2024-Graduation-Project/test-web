const section1Text1 =
    "미리 학습한 모델을 TorchServe로 배포하였기 때문에, HTTP 요청 및 응답이 가능한 모든 언어와 상호작용 가능하다. 매뉴얼은 React.js, Axios를 사용하여 작성하였다."
const section1Text2 = "axios 설치 코드 :";
const section1Text3 = "설치한 axios는 다음과 같이 사용할 수 있다."
const installAxiosCode = "npm install axios";
const exampleAxiosCode = `axios.post(url, request)
            .then((response) => { console.log("전송 성공:", response.data); })
            .catch((error) => { console.log("전송 실패:", error); })`;

export default{
    section1Text1,
    section1Text2,
    section1Text3,
    installAxiosCode,
    exampleAxiosCode,
}