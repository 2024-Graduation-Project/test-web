import Chart from "./chart";
import chartData from "./chartData.json"

function ChartContainer() {
    return (
        <div className='chart-container'>
            <div className='chart-title'>Chart by age</div>
            <Chart chartData={chartData}/>
        </div>
    );
}

export default ChartContainer;
