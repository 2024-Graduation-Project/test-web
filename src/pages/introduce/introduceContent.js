import Reason from './conponents/reason/reason.js';
import Function from "./conponents/function/function";
import useVisible from "../../custom-hook/introduce/initialVisible";
import EtcContent from "./conponents/etc/etcContent";

import { introduceTitle, reasonsText } from "./introduceText";
import ChartContainer from "./conponents/chart/chartContainer";
import CriteriaContainer from "./conponents/criteria/criteriaContainer";

function IntroduceContent() {
    const isVisible = useVisible();

    return(
        <div className="main-container">
            <img className="main-image" src="./images/4.jpg"></img>
            <div className={`image-text ${isVisible? 'visible' : ''}`}><p>{introduceTitle}</p></div>
            <div className='main-body-container'>
                <Reason reasonsText={reasonsText}/>
                <Function />
                <ChartContainer />
                <CriteriaContainer />
                <EtcContent />
            </div>
        </div>
    )
}

export default IntroduceContent