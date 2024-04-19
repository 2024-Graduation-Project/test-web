import scrollVisible from "../../../../custom-hook/introduce/scrollVisible";

function CriteriaExplain() {
    const isVisible = scrollVisible(3200);

    return(
        <div className='cri-explain-container'>
            <div className={`cri-explain ${isVisible ? 'visible' : ''}`}>
                "비속어 분류 기준"
            </div>

        </div>
    );
}

export default CriteriaExplain;

