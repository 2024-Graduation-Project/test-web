import scrollVisible from "../../../../custom-hook/introduce/scrollVisible";

function ChartExplain() {
    const isVisible = scrollVisible(1800);

    return (
        <div className='chart-explain-container'>
            <div className={`chart-explain ${isVisible ? 'visible' : ''}`}>
                "데이터를 수집한 사설 마인크래프트 서버의 유저 분포로 미성년자가 대부분이며, 혐오 표현에 무방비하게 노출되어 있습니다."
            </div>
        </div>
    );
}

export default ChartExplain;