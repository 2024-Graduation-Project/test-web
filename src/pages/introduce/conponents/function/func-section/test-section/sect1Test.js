import { ioText } from "../../../../introduceText";
import scrollVisible from "../../../../../../custom-hook/introduce/scrollVisible";

function Sect1Test() {
    const isVisible = scrollVisible(900);

    return (
        <div className='sect1-test-container'>
            <div className='test-input-container'>
                <p className='title3'>Input</p>
                <div className='test-input'>
                    <div className='text-input-lv4'><p>{ioText.inputTextLv4}</p></div>
                </div>
            </div>
            <div className='test-output-container'>
                <p className='title3'>Output</p>
                <div className='test-output'>
                    <div className={`${isVisible ? 'text-animation-output' : 'invisible'}`}>{ioText.outputTextLv4}</div>
                </div>
            </div>
        </div>
    );
}

export default Sect1Test;