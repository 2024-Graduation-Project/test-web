import {useEffect, useState} from "react";

import Reason from './conponents/reason/reason.js';
import Function from "./conponents/function/function";
import useVisible from "../../custom-hook/introduce/initialVisible";
import EtcContent from "./conponents/etc/etcContent";

function IntroduceContent() {
    const isVisible = useVisible();
    const reasonsText = [
        "API for personal servers for game operators",
        "Preventing slang from being exposed to users",
        "Reduce operational costs to improve user experience"
    ];

    return(
        <div className="main-container">
            {/*<img className="main-image" src="./images/main.jpg"></img>*/}
            <div className="main-image"></div>
            <div className={`image-text ${isVisible? 'visible' : ''}`}><p>Introducing Our API</p></div>
            <div className='main-body-container'>
                <Reason reasonsText={reasonsText}/>
                <Function />
                <EtcContent />
            </div>
        </div>
    )
}

export default IntroduceContent