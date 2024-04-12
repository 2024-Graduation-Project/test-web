import Chart from "./chart";
import chartData from "./chartData.json"
import ChartExplain from "./chartExplain";

function ChartContainer() {
    return (
        <div className='chart-container'>
            <div className='chart-title'>Chart by age</div>
            <ChartExplain />
            <Chart chartData={chartData}/>
        </div>
    );
}

export default ChartContainer;
