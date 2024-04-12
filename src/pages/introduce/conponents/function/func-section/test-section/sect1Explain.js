import scrollVisible from "../../../../../../custom-hook/introduce/scrollVisible";

function Sect1Explain() {
    const isVisible = scrollVisible(900 );

    return (
        <div className='sect1-explain-container'>
            <div className={`explain-text ${isVisible ? 'visible' : ''}`}>"Filtering and Slang Classification by severity"</div>
        </div>
    );
}

export default Sect1Explain;