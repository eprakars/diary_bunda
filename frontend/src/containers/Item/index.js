import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStoreState, useStoreDispatch, useStoreActions } from "easy-peasy";
import ItemForm from "./item-form";

/* eslint-disable react/prefer-stateless-function */
const Item = () => {
  const history = useHistory();
  const { Registration } = useStoreState((state) => state);

  const { Item } = useStoreState((state) => state);
  const { initialState } = Item;
  const { errorMessage, loading, result } = initialState;

  const { updateItem, deleteItem } = useStoreActions(
    ({ Item }) => Item
  );

  useEffect(() => {
    if (!Registration.initialState.result.token) {
      history.push('/home');
    }
 }, [history])


  const onSubmit = (data) => {
    data.token = Registration.initialState.result.token
    updateItem(data);
  };

  const onDelete = (data) => {
    data.token = Registration.initialState.result.token
    deleteItem(data)
  }
  return (
    <div>
        <ItemForm
          onSubmit={onSubmit}
          onDelete={onDelete}
          errorMessage={errorMessage}
        />
    </div>
  );
};

export default Item;
