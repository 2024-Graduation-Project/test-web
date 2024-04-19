import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Markdown({ text }) {
    return (
        <ReactMarkdown
            components={{
                // 코드 블록을 어떻게 표현할지 정의
                code({ node, inline, className, children, ...props }) {
                    // 사용된 언어를 찾기 위해 className에서 language-xxx를 찾음
                    const match = /language-(\w+)/.exec(className || '');
                    // 사용된 언어가 명시된 경우 SyntaxHighlighter로 감싸서 코드 하이라이팅 적용
                    return !inline && match ? (
                        <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, '')}
                            style={dracula}
                            language={match[1]}
                            PreTag="div"
                        />
                    ) : (
                        // 사용된 언어가 없는 경우 또는 적합하지 않은 경우 그대로 반환
                        <code {...props} className={className}>
                            {children}
                        </code>
                    );
                },

            }}
        >
            {text}
        </ReactMarkdown>
    );
}
