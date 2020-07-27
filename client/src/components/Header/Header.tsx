import React from "react";
import "./Header.css";

import { Button } from "react-bootstrap";

export default function Header(props: any) {
  return (
    <div className="header__wrapper">
      <h1 className="header__title">My App</h1>
      <div className="header__btns">
        <Button variant="success " onClick={() => props.setitemWindow(true)}>
          Добавить товар
        </Button>
        <Button
          variant="success "
          onClick={() => props.setcategoryWindow(true)}
        >
          Добавить категорию
        </Button>
      </div>
    </div>
  );
}
