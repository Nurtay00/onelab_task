import React, { useState } from "react";
import "./AddCategoryWindow.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AddCategoryWindow(props: any) {
  const [category, setcategory] = useState({
    category: "",
  });
  const AddCategory = (value: any) => {
    if (value.category === "") {
      alert("значение не может быть пустым");
    } else if (value.category === "nocategory") {
      alert("значение не может быть nocategory");
    } else {
      var ok = false;
      props.information.categories.forEach((item: any) => {
        if (item.category === value.category) {
          ok = true;
        }
      });
      if (!ok) {
        props.onAddCategory(value);
        props.click(false);
      } else {
        alert("такая категория уже существует");
      }
    }
  };
  return (
    <div className="addcategory__wrapper">
      <h3 className="header">Добавить категорию</h3>
      <div className="addcategory__form">
        <input
          type="text"
          onChange={(event) => setcategory({ category: event.target.value })}
        />
        <div className="addcategory__btns">
          <Button variant="primary" onClick={() => AddCategory(category)}>
            Добавить категорию
          </Button>
          <button className="btn" onClick={() => props.click(false)}>
            отменить
          </button>
        </div>
      </div>
    </div>
  );
}
