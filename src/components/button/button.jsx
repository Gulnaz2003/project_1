import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        background: props.background,
        color: props.color,
        borderRadius: props.borderRadius,
        height: props.height,
        width: props.width,
        padding: props.padding,
        borderColor: props.borderColor,
        fontSize: props.fontSize,
        margin: props.margin,
      }}
    >
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
