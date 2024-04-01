import React, {useEffect, useState} from "react";

import Reason from './conponents/reason/reason.js';
import Function from "./conponents/function/function";
import useVisible from "../../custom-hook/introduce/initialVisible";
import EtcContent from "./conponents/etc/etcContent";

function IntroduceContent() {
    const isVisible = useVisible();
    const reasonsText = [
        { content: "API for personal servers for game operators", visible: 1 },
        { content: "Preventing slang from being exposed to users", visible: 2 },
        { content: "Reduce operational costs to improve user experience", visible: 3 },
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