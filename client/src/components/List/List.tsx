import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./List";
export default function List(props: any) {
  var sortedList;
  if (props.category === "all") {
    sortedList = props.information.list;
  } else {
    sortedList = props.information.list.filter(
      (item: any) => props.category === item.category
    );
  }
  return (
    <div className="wrapper__list">
      <Table striped bordered hover size="sm" style={{ width: "890px" }}>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>#</th>
            <th>Название товара</th>
            <th style={{ width: "230px" }}>ID</th>
            <th style={{ width: "99px" }}>Категория</th>
            <th style={{ width: "129px" }}>Цена закупки</th>
            <th style={{ width: "138px" }}>Цена продажи</th>
            <th style={{ width: "89px" }}></th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map((item: any, index: number) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>{item.category}</td>
                <td>{item.purchasePrice}</td>
                <td>{item.sellingPrice}</td>
                <td>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fas fa-trash"
                      onClick={() => {
                        props.removeClick({ window: true, item });
                      }}
                    />
                  </span>

                  <span style={{ paddingLeft: "15px" }}>
                    <i
                      className="fas fa-edit"
                      onClick={() => {
                        props.setedit(item.id);
                        props.click(true);
                      }}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
