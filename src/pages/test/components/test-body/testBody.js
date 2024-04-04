import TestBoxContainer from "./test-box/testBoxContainer";
import TestExplainContainer from "./test-explain/testExplainContainer";

function TestBody() {

    return(
        <div className='test-body'>
            <TestExplainContainer />
            <TestBoxContainer />
        </div>
    );
}

export default TestBody;