const section3Text1 =
    "TorchServe도 다른 API와 마찬가지로, HTTP 요청/응답을 통해서 엔드 포인트와 상호작용한다. 따라서 적절한 URL로 HTTP 요청을 보내면 API로부터 응답이 온다."
const section3Text2 =
    "JavaScript에선 \"\\uxxxx\"를 확인한 순간 유니코드로 인식하여 문자로 변환해준다.  다른 언어를 사용할 경우 유니코드를 문자로 변환해주는 별도의 작업이 필요할 수도 있다."
const exampleURL = `const torchServeURL = "http://localhost:0000/predictions/KcELECTRA;
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

export default {
    section3Text1,
    section3Text2,
    exampleURL,
    axiosRequestCode,
    responseMessage
}