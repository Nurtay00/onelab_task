import React from "react";
import "./AddItemWindow.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
interface MyFormValues {
  name: string;
  category: string;
  purchasePrice: number;
  sellingPrice: number;
}
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  purchasePrice: Yup.number().required("Required"),
  sellingPrice: Yup.number().required("Required"),
});
export default function AddItemWindow(props: any) {
  const initialValues: MyFormValues = {
    name: "",
    category: "nocategory",
    purchasePrice: 0,
    sellingPrice: 0,
  };

  return (
    <div className="additem__wrapper">
      <h1 className="header">Добавить Товар</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          props.onAdd(values);
          props.click(false);
        }}
      >
        <Form className="form">
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
            <div className="title">Закупочная</div>
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
              placeholder="123"
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
              Добавить
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
