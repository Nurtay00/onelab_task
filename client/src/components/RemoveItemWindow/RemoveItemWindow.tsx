import React from "react";
import "./RemoveItemWindow.css";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function RemoveItemWindow(props: any) {
  return (
    <Modal.Dialog style={{ zIndex: 1000 }}>
      <Modal.Header
        closeButton
        onClick={() => {
          props.click({ window: false, item: null });
        }}
      >
        <Modal.Title>Точно удалить товар '{props.item.name}'?</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.onRemove(props.item._id);
            props.click({ window: false, item: null });
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
