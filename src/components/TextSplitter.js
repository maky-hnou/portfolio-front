import React, { useState, useEffect } from "react";

export default function TextSplitter({ text, maxWidth }) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const breakTextIntoLines = () => {
      const sentences = text.split("\n");
      const updatedLines = [];

      sentences.forEach((sentence) => {
        const words = sentence.split(" ");
        let currentLine = "";

        words.forEach((word, index, array) => {
          const testLine = currentLine ? `${currentLine} ${word}` : word;

          // Create an in-memory div to measure the width of the line
          const testDiv = document.createElement("div");
          testDiv.style.display = "inline-block";
          testDiv.style.visibility = "hidden";
          testDiv.style.whiteSpace = "pre-wrap";
          testDiv.textContent = testLine;

          document.body.appendChild(testDiv);
          const testWidth = testDiv.offsetWidth;

          // Check if the line exceeds the maxWidth
          if (testWidth <= maxWidth || index === 0) {
            currentLine = testLine;
          } else {
            updatedLines.push(currentLine);
            currentLine = word;
          }

          // Add the last line
          if (index === array.length - 1) {
            updatedLines.push(currentLine);
          }

          document.body.removeChild(testDiv);
        });
      });

      setLines(updatedLines);
    };

    breakTextIntoLines();
  }, [text, maxWidth]);

  return lines;
}
