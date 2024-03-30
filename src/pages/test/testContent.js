import TestBox from "./components/testBox";
import TestText from "./components/testText";
import EtcContent from "../introduce/conponents/etc/etcContent";

function TestContent() {
    return(
        <div className="test-container">
            <TestText />
            <TestBox />
        </div>
    )
}

export default TestContent;