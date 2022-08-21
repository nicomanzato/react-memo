import React, { useEffect, useState, useRef } from 'react';
import './counter.css';

export const Counter = ({
  value,
  increment,
  expensiveOperation,
  expensiveOperationLabel,
}) => {
  useEffect(() => {
    // console.log(value);
  }, [increment]);

  return (
    <div className="counter">
      <div className="counter__value">{value}</div>
      <div className="counter__button" onClick={increment}>
        +
      </div>
      {expensiveOperationLabel && (
        <div className="counter__button" onClick={expensiveOperation}>
          {expensiveOperationLabel}
        </div>
      )}
    </div>
  );
};
