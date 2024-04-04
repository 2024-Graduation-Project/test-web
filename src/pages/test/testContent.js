import TestBox from "./components/testBox";
import TestText from "./components/testText";
import EtcContent from "../introduce/conponents/etc/etcContent";

function TestContent() {
    return(
        <div className="test-container">
            <div className='test-image-container'>
                <img className="main-image" src="./images/3.jpg"></img>
            </div>
            <TestText />
            <TestBox />
        </div>
    )
}

export default TestContent;