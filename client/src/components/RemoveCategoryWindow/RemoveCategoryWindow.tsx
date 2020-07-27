import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function RemoveCategoryWindow(props: any) {
  console.log("props - RemoveCategoryWindow", props);
  return (
    <Modal.Dialog style={{ zIndex: 1000 }}>
      <Modal.Header
        closeButton
        onClick={() => {
          props.click({ window: false, item: null });
        }}
      >
        <Modal.Title>
          Точно удалить категорию '{props.item.category}'?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Все товары в этой категории будут помечены "nocategory"
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.onRemoveCategory(props.item);
            props.click({ window: false, item: null });
            props.setcategory("all");
          }}
        >
          Да
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.click({ window: false, item: null });
          }}
        >
          Нет
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
