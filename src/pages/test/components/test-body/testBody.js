import TestBoxContainer from "./test-box/testBoxContainer";
import TestExplainContainer from "./test-explain/testExplainContainer";

function TestBody() {

    return(
        <div className='test-body'>
            <TestBoxContainer />
            <TestExplainContainer />
        </div>
    );
}

export default TestBody;