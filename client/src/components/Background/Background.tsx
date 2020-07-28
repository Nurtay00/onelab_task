import React from "react";
import "./Background.css";
export default function Background(props: any) {
  return (
    <div
      className="background"
      onClick={() => {
        props.click(false);
      }}
    ></div>
  );
}
