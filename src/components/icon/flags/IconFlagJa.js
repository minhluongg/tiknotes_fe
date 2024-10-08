import React from "react";

const IconFlagJa = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="me-3 w-5 h-5"
      viewBox="0 0 512 512"
    >
      <mask id="a">
        <circle cx={256} cy={256} r={256} fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#eee" d="M0 0h512v512H0z" />
        <circle cx={256} cy={256} r="111.3" fill="#d80027" />
      </g>
    </svg>
  );
};

export default IconFlagJa;
