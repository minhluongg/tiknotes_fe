import React from "react";

const IconFlagTh = () => {
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
        <path
          fill="#d80027"
          d="M0 0h512v89l-79.2 163.7L512 423v89H0v-89l82.7-169.6L0 89z"
        />
        <path
          fill="#eee"
          d="M0 89h512v78l-42.6 91.2L512 345v78H0v-78l40-92.5L0 167z"
        />
        <path fill="#0052b4" d="M0 167h512v178H0z" />
      </g>
    </svg>
  );
};

export default IconFlagTh;
