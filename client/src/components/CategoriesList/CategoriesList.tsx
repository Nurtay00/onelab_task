import React from "react";
import { ListGroup } from "react-bootstrap";
export default function CategoriesList(props: any) {
  return (
    <div style={{ width: "150px" }}>
      <ListGroup as="ul">
        {props.category === "all" ? (
          <ListGroup.Item as="li" active>
            Все
          </ListGroup.Item>
        ) : (
          <ListGroup.Item as="li" onClick={() => props.setcategory("all")}>
            Все
          </ListGroup.Item>
        )}

        {props.information.categories.map((item: any, index: number) => {
          if (props.category === item.category) {
            return (
              <ListGroup.Item
                as="li"
                key={index}
                active
                onClick={() => props.setcategory(item.category)}
              >
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    props.removeClick({ window: true, item });
                  }}
                />{" "}
                <span style={{ width: "130px" }}>{item.category}</span>
              </ListGroup.Item>
            );
          }
          return (
            <ListGroup.Item
              as="li"
              key={index}
              onClick={() => props.setcategory(item.category)}
            >
              <i
                className="fas fa-trash"
                onClick={() => {
                  props.removeClick({ window: true, item });
                }}
              />

              {item.category}
            </ListGroup.Item>
          );
        })}
        {props.category === "nocategory" ? (
          <ListGroup.Item as="li" active>
            Без категории
          </ListGroup.Item>
        ) : (
          <ListGroup.Item
            as="li"
            onClick={() => props.setcategory("nocategory")}
          >
            Без категории
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}
