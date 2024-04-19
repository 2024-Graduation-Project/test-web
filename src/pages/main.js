import React, { useState } from 'react';

import Menu from './menu';
import Body from './body';
import TopButton from "./topButton";

import '../index.css';

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

// import Highlight from 'react-highlight';
//
// // pages/index.js (또는 다른 페이지 파일)
//
// import React from 'react';
// import Markdown from '../Markdown';
//
// const markdownText = `
// # Hello Markdown!
//
// This is a **Markdown** example with \`code\` blocks:
//
// \`\`\`javascript
// function greet(name) {
//   return 'Hello, ' + name + '!';
// }
//
// console.log(greet('World'));
// \`\`\`
//
// // And here's an image:
// // ![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
// // `;
//
// export default function Main() {
//     return (
//         <div>
//             <h1>Markdown Example</h1>
//             <Markdown text={markdownText} />
//         </div>
//     );
// }
