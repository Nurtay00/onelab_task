import axios from "axios";
import { url } from "../../URL";
export function fetchList() {
  return async (dispatch: any) => {
    dispatch(fetchStartList());
    await axios
      .get(`${url}/list`)
      .then((res) => res.data)
      .then((ans) => dispatch(fetchListSuccses(ans)));
    await axios
      .get(`${url}/categories`)
      .then((res) => res.data)
      .then((ans) => dispatch(fetchCategoriesSuccses(ans)));
  };
}

export function fetchStartList() {
  return {
    type: "LOADING",
  };
}
export function fetchListSuccses(list: any) {
  return {
    type: "SUCCSES",
    value: list,
  };
}

export function fetchCategoriesSuccses(categories: any) {
  return {
    type: "SUCCSES_CATEGORY",
    value: categories,
  };
}
export function onAdd(value: {
  name: string;
  purchasePrice: number;
  sellingPrice: number;
  category: string;
}) {
  return async (dispatch: any) => {
    await axios
      .post(`${url}/list`, value)
      .then((value) => dispatch({ type: "ADD", value: value.data }));
  };
}

export function onRemove(value: string) {
  return async (dispatch: any) => {
    axios
      .delete(`${url}/list/${value}`)
      .then(() => dispatch({ type: "REMOVE", value: value }));
  };
}

export function onEdit(value: {
  name: string;
  category: string;
  purchasePrice: number;
  sellingPrice: number;
  _id: string;
}) {
  return async (dispatch: any) => {
    axios
      .put(`${url}/list/${value._id}`, value)
      .then(() => dispatch({ type: "EDIT", value: value }));
  };
}

export function onAddCategory(value: any) {
  return async (dispatch: any) => {
    // state.categories.forEach()
    await axios
      .post(`${url}/categories`, value)
      .then((value) => dispatch({ type: "ADD_CATEGORY", value: value.data }));
  };
}

export function onRemoveCategory(value: { category: string; _id: string }) {
  if (value.category === "nocategory") {
    alert("you can not delete it");
  } else {
    return async (dispatch: any) => {
      axios
        .delete(`${url}/categories/${value._id}`)
        .then(() => {
          const state = dispatch(State());
          state.list.forEach((item: any) => {
            if (item.category === value.category) {
              dispatch(onEdit({ ...item, category: "nocategory" }));
            }
          });
        })
        .then(() => {
          console.log("value.category - ", value.category);
          dispatch({ type: "REMOVE_CATEGORY", value: value.category });
        });
    };
  }
}
export function State() {
  return (dispatch: any, getState: any) => {
    const items = getState();

    return items;
  };
}
