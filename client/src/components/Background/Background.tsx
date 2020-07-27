import React from "react";
import "./Background.css";
export default function Background(props: any) {
  console.log("props - ", props);
  return (
    <div
      className="background"
      onClick={() => {
        props.click(false);
      }}
    ></div>
  );
}
