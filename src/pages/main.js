import React, { useState } from 'react';

import Menu from './menu';
import Body from './body';
import Test from './test';

import '../index.css';

function Main() {
    const [selectedContent, setSelectedContent] = useState(0);

    function handleContentChange(content) {
        setSelectedContent(content);
    }

    return (
        <div>
            <Menu selectContent={handleContentChange} />
            <Body contentCode={selectedContent} />        
            {/* <Test /> */}
        </div>
    )
}

export default Main;