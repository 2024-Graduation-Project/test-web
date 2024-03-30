import React, { useState } from 'react';

import Menu from './menu';
import Body from './body';
import TopButton from "./topButton";

import '../index.css';
import EtcContent from "./introduce/conponents/etc/etcContent";

function Main() {
    const [selectedContent, setSelectedContent] = useState(0);

    function handleContentChange(content) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedContent(content);
    }

    return (
        <div className='container'>
            <Menu selectContent={handleContentChange} />
            <Body contentCode={selectedContent} />
            <TopButton />
        </div>
    )
}

export default Main;