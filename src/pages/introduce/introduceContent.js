import {useEffect, useState} from "react";

import Reason from './conponents/reason/reason.js';
import Function from "./conponents/function/function";

function IntroduceContent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true);
    }, [])

    return(
        <div className="main-container">
            {/*<img className="main-image" src="./images/main.jpg"></img>*/}
            <div className="main-image"></div>
            <div className={`image-text ${isVisible? 'visible' : ''}`}><p>Introducing Our API</p></div>

            <Reason />
            <Function />
        </div>
    )
}

export default IntroduceContent