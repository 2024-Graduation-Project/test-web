import { useState, useEffect } from "react";
import axios from "axios";

function TestContent() {
    const [result, setResult] = useState({});

    function axiosPOST(sentence) {
        const formData = new FormData();
        formData.append("sentence", sentence);
    
        axios({
            method: "POST",
            url: "/api/",
            data: formData
        })
            .then(response => {
                setResult(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <div className="test-container">
            {/*<form className="api-form" name="sentence" action="/api_url" method="get"> /!* 서버 구현하면 action값 바꿔주면 된다. *!/*/}
            {/*    <input className="api-input" type="text" name="sentence" placeholder="please write a sentence."></input>*/}
            {/*    <input className="api-submit" type="submit" value="submit"></input>*/}
            {/*</form><hr />*/}
            {/*<div className="api-output">*/}
            {/*    output*/}
            {/*</div>  */}
            <div className='test-text-container'>
                <p className='test-text'>Try Now!</p>
            </div>
            <div className='test-box-container'>
                <p>test area</p>
            </div>
        </div>
    )
}

export default TestContent;