import scrollVisible from "../../../../../../custom-hook/introduce/scrollVisible";

function Sect1Explain() {
    const isVisible = scrollVisible(700);

    return (
        <div className='sect1-explain-container'>
            <div className={`explain-text ${isVisible ? 'visible' : ''}`}>"심각도별 필터링 및 비속어 분류"</div>
        </div>
    );
}

export default Sect1Explain;