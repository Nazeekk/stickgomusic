import React from "react";

const Icon = ({ type, onClickIcon }) => {
  const renderSwitch = (type) => {
    switch (type) {
      case "play":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#D9D9D9"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        );
      case "pause":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#D9D9D9"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        );
      case "next":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#D9D9D9"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
            />
          </svg>
        );
      case "prev":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#D9D9D9"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
            />
          </svg>
        );
			default: <h1><mark>Введи йобаний тайп для айтема</mark></h1>
			}
  };

  return (
    <div className="icon" onClick={onClickIcon}>
      {renderSwitch(type)}
    </div>
  );
};

export default Icon;
