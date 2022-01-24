import React, { useEffect, useState } from "react";
import relacsData from "../../relacs.json";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";
import "../components/component_styles.css";

function RelacsCode({ questionLink }) {
  const [codeText, setCodeText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(questionLink)
      .then((resp) => resp.text())
      .then((codeSnippet) => {
        if (codeSnippet.includes("404")) {
          throw new Error("404");
        } else {
          setLoading(false);
          setCodeText(codeSnippet);
        }
      })
      .catch(() => setError(true));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="relacs-code-block">
      <SyntaxHighlighter language="java" style={monokaiSublime}>
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
        {relacsData.questions.map((q) => (
          <RelacsCode questionLink={q} />
        ))}
      </div>
    </>
  );
}

export default relacs;
