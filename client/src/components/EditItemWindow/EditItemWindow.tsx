import React from "react";
import { Button } from "react-bootstrap";
import "./EditItemWindow.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
interface MyFormValues {
  name: string;
  category: string;
  purchasePrice: number;
  sellingPrice: number;
  _id: string;
}
export default function EditItemWindow(props: any) {
  const sortedInfromation: any = {
    ...props.information.list.filter((item: any) => item.id === props.edit),
  };
  const initialValues: MyFormValues = {
    name: sortedInfromation[0].name,
    category: sortedInfromation[0].category,
    purchasePrice: sortedInfromation[0].purchasePrice,
    sellingPrice: sortedInfromation[0].sellingPrice,
    _id: sortedInfromation[0]._id,
  };
  function editItemFunction(item: any) {
    if (
      item.name !== "" &&
      item.category !== "" &&
      item.purchasePrice !== 0 &&
      item.sellingPrice !== 0
    ) {
      props.onEdit(item);
      props.setedit(null);
      props.click(false);
    } else {
      alert("не правильнные данны");
    }
  }
  return (
    <div className="edititem__wrapper">
      <h1 className="edit__header">Изменить товар</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
          editItemFunction(values);
        }}
      >
        <Form className="edit__form">
          <div style={{ margin: "0 auto" }}>
            <div className="title">Tовар</div>
            <Field
              type="text"
              name="name"
              placeholder="товар"
              className="inputfield"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div style={{ margin: "0 auto" }}>
            <div className="title">Закупочная стоимость</div>
            <Field
              type="number"
              name="purchasePrice"
              placeholder="123"
              className="inputfield"
            />
            <ErrorMessage
              name="purchasePrice"
              component="div"
              className="error"
            />
          </div>
          <div style={{ margin: "0 auto" }}>
            <div className="title">Розничная цена</div>
            <Field
              type="number"
              name="sellingPrice"
              placeholder="sellingPrice"
              className="inputfield"
            />
            <ErrorMessage
              name="sellingPrice"
              component="div"
              className="error"
            />
          </div>
          <div style={{ margin: "0 auto" }}>
            <div className="title">Категория</div>
            <Field name="category" component="select" className="inputfield">
              <option value="nocategory" disabled selected>
                nocategory
              </option>
              {props.information.categories.length === 0 ? (
                <option value="nocategory">nocategory</option>
              ) : (
                props.information.categories.map((item: any, index: number) => {
                  return (
                    <option value={item.category} key={index}>
                      {item.category}
                    </option>
                  );
                })
              )}
            </Field>
          </div>

          <div
            style={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button variant="primary btn" type="submit">
              Изменить
            </Button>
            <button className="btn" onClick={() => props.click(false)}>
              Отменить
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
