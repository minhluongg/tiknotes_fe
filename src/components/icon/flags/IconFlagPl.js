import React from "react";

const IconFlagPl = () => {
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
        <path fill="#d80027" d="m0 256 256.4-44.3L512 256v256H0z" />
        <path fill="#eee" d="M0 0h512v256H0z" />
      </g>
    </svg>
  );
};

export default IconFlagPl;
