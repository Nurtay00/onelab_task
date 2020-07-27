import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Mainpage.css";

import {
  onRemove,
  onRemoveCategory,
  onEdit,
  fetchList,
  onAdd,
  onAddCategory,
} from "../../store/actions/actions";
import List from "../../components/List/List";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import EditItemWindow from "../../components/EditItemWindow/EditItemWindow";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import Background from "../../components/Background/Background";
import AddItemWindow from "../../components/AddItemWindow/AddItemWindow";
import AddCategoryWindow from "../../components/AddCategoryWindow/AddCategoryWindow";
import RemoveItemWindow from "../../components/RemoveItemWindow/RemoveItemWindow";
import RemoveCategoryWindow from "../../components/RemoveCategoryWindow/RemoveCategoryWindow";

function Mainpage(props: any) {
  useEffect(
    () => {
      props.fetchList();
    },
    // eslint-disable-next-line
    []
  );

  const [edit, setedit] = useState(null);
  const [itemWindow, setitemWindow] = useState(false);
  const [categoryWindow, setcategoryWindow] = useState(false);
  const [editWindow, seteditWindow] = useState(false);
  const [category, setcategory] = useState("all");
  const [removeItemWindow, setremoveItemWindow] = useState({
    window: false,
    item: null,
  });
  const [removeCategoryWindow, setremoveCategoryWindow] = useState({
    window: false,
    item: null,
  });
  if (!props.information.loading) {
    return (
      <div className="mainpage__wrapper">
        <Header
          setitemWindow={setitemWindow}
          setcategoryWindow={setcategoryWindow}
        />
        <div className="lists__wrapper">
          <CategoriesList
            {...props}
            removeClick={setremoveCategoryWindow}
            category={category}
            setcategory={setcategory}
          />
          <List
            {...props}
            setedit={setedit}
            click={seteditWindow}
            removeClick={setremoveItemWindow}
            category={category}
          />
        </div>

        {removeCategoryWindow.window ? (
          <RemoveCategoryWindow
            {...props}
            item={removeCategoryWindow.item}
            click={setremoveCategoryWindow}
            setcategory={setcategory}
          />
        ) : null}
        {removeCategoryWindow.window ? (
          <Background click={setremoveCategoryWindow} />
        ) : null}

        {removeItemWindow.window ? (
          <RemoveItemWindow
            {...props}
            item={removeItemWindow.item}
            click={setremoveItemWindow}
          />
        ) : null}
        {removeItemWindow.window ? (
          <Background click={setremoveItemWindow} />
        ) : null}
        {edit !== null && editWindow ? (
          <EditItemWindow
            {...props}
            edit={edit}
            setedit={setedit}
            click={seteditWindow}
          />
        ) : null}
        {editWindow ? <Background click={seteditWindow} /> : null}
        {itemWindow ? <AddItemWindow {...props} click={setitemWindow} /> : null}
        {itemWindow ? <Background click={setitemWindow} /> : null}
        {categoryWindow ? (
          <AddCategoryWindow {...props} click={setcategoryWindow} />
        ) : null}
        {categoryWindow ? <Background click={setcategoryWindow} /> : null}
      </div>
    );
  } else {
    return <Loader />;
  }
}

function mapStateToProps(state: any) {
  return {
    information: state,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onAdd: (value: {
      name: string;
      category: string;
      purchasePrice: number;
      sellingPrice: number;
    }) => dispatch(onAdd(value)),
    onAddCategory: (value: string) => dispatch(onAddCategory(value)),
    onRemove: (value: string) => dispatch(onRemove(value)),
    onEdit: (value: {
      name: string;
      category: string;
      purchasePrice: number;
      sellingPrice: number;
      _id: string;
    }) => dispatch(onEdit(value)),
    onRemoveCategory: (value: { category: string; _id: string }) =>
      dispatch(onRemoveCategory(value)),
    fetchList: () => dispatch(fetchList()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Mainpage);
