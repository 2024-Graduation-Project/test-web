const section2Text1 =
    "응답은 JSON이 아닌 배열 형식으로 온다. [0]~[3]은 Request Message가 각 클래스에 속할 확률이다. [4]는 욕설이 필터링된 문장이며, 유니코드 형식임을 유의한다."
const requestFormat = `{ "text": "message" }`;
const responseFormat =
    `[
    "0.9997372031211853",
    "4.3749314500018954e-05",
    "9.505049092695117e-05",
    "0.0001239777193404734",
    "\\uc548\\ub155\\ud558\\uc138\\uc694"
]`;

export default {
    section2Text1,
    requestFormat,
    responseFormat
}