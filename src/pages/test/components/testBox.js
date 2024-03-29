import { useState } from "react";

import TestInput from "./testInput";
import TestResult from "./testResult";

function TestBox() {
    const [resultText, setResultText] = useState([]);
    function handleResultMessage(result) {
        setResultText(result);
    }

    return(
        <div className='test-area-container'>
            <TestInput setResultText={handleResultMessage}/>
            <TestResult result={resultText}/>
        </div>
    );
}

export default TestBox;