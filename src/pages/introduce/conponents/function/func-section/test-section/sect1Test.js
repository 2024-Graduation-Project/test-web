import { ioText } from "../../../../introduceText";
import scrollVisible from "../../../../../../custom-hook/introduce/scrollVisible";

function Sect1Test() {
    const isVisible = scrollVisible(900);

    return (
        <div className='sect1-test-container'>
            <div className='func-input-container'>
                <p className='title3'>Input</p>
                <div className='func-input'>
                    <div className='text-input-lv0'>{ioText.inputTextLv0}</div>
                    <div className='text-input-lv1'>{ioText.inputTextLv1}</div>
                    <div className='text-input-lv2'>{ioText.inputTextLv2}</div>
                    <div className='text-input-lv3'>{ioText.inputTextLv3}</div>
                </div>
            </div>
            <div className='func-output-container'>
                <p className='title3'>Output</p>
                <div className='func-output'>
                    <div className={`${isVisible ? 'text-animation-output' : 'invisible'}`}>{ioText.outputTextLv0}<br/></div>
                    <div className={`${isVisible ? 'text-animation-output' : 'invisible'}`}>{ioText.outputTextLv1}</div>
                    <div className={`${isVisible ? 'text-animation-output' : 'invisible'}`}>{ioText.outputTextLv2}</div>
                    <div className={`${isVisible ? 'text-animation-output' : 'invisible'}`}>{ioText.outputTextLv3}</div>
                </div>
            </div>
        </div>
    );
}

export default Sect1Test;