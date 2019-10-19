import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import tomorrowNightBright from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-bright';

SyntaxHighlighter.registerLanguage('javascript', js);

const ClipboardItem = ({ header, code }) => {

    const [isCopied, setIsCopied] = useState(false);

    const onCopy = () => {
        setIsCopied(true);
    };

    useEffect(() => {
        if (isCopied) {
            const copyTimer = setTimeout(() => {
                setIsCopied(false);
            }, 3000);
            return () => {
                clearTimeout(copyTimer);
            };
        }
    }, [isCopied]);


    return (
        <div className="text-left">
            <h4 className="lead">
                {header}
                <CopyToClipboard style={{ textAlign: "center" }} onCopy={onCopy} text={code}>
                    <button className="btn btn-link btn-lg" data-toggle="tooltip" data-placement="bottom" title={isCopied ? "Copied!" : "Copy"}>
                        <span style={!isCopied ? { display: "inline-block" } : { display: "none" }} className="fa-layers fa-stack fa-fw">
                            <i style={{ color: "turquoise" }} className="fas fa-clipboard fa-2x" />
                            <i style={{ color: "red" }} className="fas fa-long-arrow-alt-right" />
                            <span className="fa-layers-text fa-inverse" data-fa-transform="shrink-8 down-6">copy</span>
                        </span>
                        <span style={isCopied ? { display: "inline-block" } : { display: "none" }} className="fa-layers fa-stack fa-fw">
                            <i style={{ color: "turquoise" }} className="fas fa-clipboard fa-2x" />
                            <i style={{ color: "green" }} className="fas fa-check" />
                            <span className="fa-layers-text fa-inverse" data-fa-transform="shrink-10 down-8">copied</span>
                        </span>
                    </button>
                </CopyToClipboard>
            </h4>
            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default ClipboardItem;