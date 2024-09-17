import React from "react";

const IconFlagVN = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="me-3 w-5 h-5"
    >
      <mask id="a">
        <circle cx={256} cy={256} r={256} fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#d80027" d="M0 0h512v512H0z" />
        <path
          fill="#ffda44"
          d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
        />
      </g>
    </svg>
  );
};

export default IconFlagVN;
