import scrollVisible from "../../../../custom-hook/introduce/scrollVisible";

function ChartExplain() {
    const isVisible = scrollVisible(1800);

    return (
        <div className='chart-explain-container'>
            <div className={`chart-explain ${isVisible ? 'visible' : ''}`}>
                "The teenage gamers are being exposed to swear."
            </div>
        </div>
    );
}

export default ChartExplain;