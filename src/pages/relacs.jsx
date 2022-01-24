import React, { useEffect, useState } from "react";
import recalsData from "../../relacs.json";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '../components/component_styles.css'

function RelacsCode({ questionLink }) {
  const [codeText, setCodeText] = useState("");

  useEffect(() => {
    fetch(questionLink)
      .then((resp) => resp.text())
      .then((codeSnippet) => {
        if (codeSnippet.includes("404")) {
          throw new Error("404");
        } else {
          setCodeText(codeSnippet);
        }
      })
      .catch(() => setError(true));
  }, []);

  return (
    <div className="relacs-code-block">
      <SyntaxHighlighter language="java" style={atomOneLight}>
        {codeText}
      </SyntaxHighlighter>
    </div>
  );
}

function relacs() {
  return (
    <>
      <NavBar />
      <div id="relacs-problems-wrapper">
        {recalsData.questions.map((q) => <RelacsCode questionLink={q} />)}
      </div>
    </>
  );
}

export default relacs;
