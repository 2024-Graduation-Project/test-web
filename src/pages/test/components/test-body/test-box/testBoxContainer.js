import TestInput from "./testInput";
import TestResult from "./testResult";
import {useState} from "react";

function TestBoxContainer() {
    const [resultText, setResultText] = useState([]);
    function handleResultMessage(result) {
        setResultText(result);
    }

    return (
        <div className='test-box-container'>
            <TestInput setResultText={handleResultMessage}/>
            <TestResult result={resultText}/>
        </div>
    );
}

export default TestBoxContainer;