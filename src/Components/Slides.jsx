import React, { useState } from "react";

function Slides({ slides }) {
  const [actual, setActual] = useState(0);
  const mostrarActual = slides[actual];

  const handleReset = () => {
    setActual(0);
  };
  const handleNext = () => {
    setActual(actual + 1);
  };
  const handleBefore = () => {
    setActual(actual - 1);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={handleReset}
          disabled={actual === 0}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          onClick={handleBefore}
          disabled={actual === 0}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={slides.length === actual + 1}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
        <h1 data-testid="title">{mostrarActual.title}</h1>
        <p data-testid="text">{mostrarActual.text}</p>
      </div>
    </div>
  );
}

export default Slides;
