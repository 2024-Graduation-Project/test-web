function Chart() {
    return (
        <div className='chart'>
            <ul className='chart-Y'>
                <li>0</li>
                <li>25</li>
                <li>50</li>
                <li>75</li>
                <li>100</li>
            </ul>
            <ul className='chart-X'>
                <li>
                    <div>
                        <strong>10대</strong>
                    </div>
                    <button type='button'>
                        <span>10대 이용자 수</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Chart;