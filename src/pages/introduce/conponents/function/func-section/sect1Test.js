import scrollVisible from "../../../../../custom-hook/introduce/scrollVisible";

function Sect1Test() {
    const isVisible = scrollVisible(500);

    return (
        <div className='sect1-test-container'>
            <div className='test-input-container'>
                <p className='title3'>Input</p><br/>
                <div className='test-input'>
                    <div className={`${isVisible ? 'text-animation-input' : 'invisible'}`}>야이 개새끼야</div>
                </div>
            </div>
            <div className='test-output-container'>
                <p className='title3'>Output</p><br/>
                <div className='test-output'>
                    <div className={`${isVisible ? 'text-animation-output' : 'invisible'}`}>야이 OOO야</div>
                </div>
            </div>
        </div>
    );
}

export default Sect1Test;