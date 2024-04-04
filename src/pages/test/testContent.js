import TestBody from "./components/test-body/testBody";
import TestHeader from "./components/test-header/testHeader";

function TestContent() {
    return(
        <div className="test-container">
            <TestHeader />
            <TestBody />
        </div>
    )
}

export default TestContent;