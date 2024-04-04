import {useState} from "react";
import axios from "axios";

function TestInput({ setResultText }) {
    const [inputText, setInputText] = useState("");
    const serverURL = "http://localhost:3030/torch";

    function preprocess(rawResult) {
        const probToNum = rawResult.slice(0, 4).map(Number);
        const resultLevel = probToNum.indexOf(Math.max(...probToNum));
        const resultStr = [ probToNum[0], probToNum[1], probToNum[2], probToNum[3], resultLevel, rawResult[4] ]

        return resultStr;
    }
    function handleSubmit(event) {
        event.preventDefault();
        if(!inputText.trim()) return;

        // // 테스트
        // const testResponseMessage = [
        //     "0.9997372031211853",
        //     "4.3749314500018954e-05",
        //     "9.505049092695117e-05",
        //     "0.0001239777193404734",
        //     "\uc548\ub155\ud558\uc138\uc694"
        // ]
        //
        // console.log("응답 메시지:", testResponseMessage);
        // setResultText(preprocess(testResponseMessage));

        const message = { "text": inputText }
        axios.post(serverURL, message)
            .then((response) => {
                console.log("전송 성공:", response.data);
                setResultText(preprocess(response.data));
            })
            .catch((error) => {
                console.log("전송 실패:", error);
            })

        setInputText("");
    };

    return (
        <div className='test-input-container'>
            <form className='test-input-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="please input sentence."
                    size={50}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </form>
        </div>
    );
}

export default TestInput