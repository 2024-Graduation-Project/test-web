import TestInput from "./testInput";
import TestResult from "./testResult";
import {useState} from "react";

function TestArea() {
    const [resultText, setResultText] = useState([]);
    function handleResultMessage(result) {
        setResultText(result);
    }

    return (
        <div className='test-area'>
            <TestInput setResultText={handleResultMessage}/>
            <TestResult result={resultText}/>
        </div>
    );
}

export default TestArea;