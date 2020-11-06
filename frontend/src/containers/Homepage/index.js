import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStoreState, useStoreDispatch, useStoreActions } from "easy-peasy";
import LoginFormSection from "./login-form-section";

/* eslint-disable react/prefer-stateless-function */
const Homepage = () => {
  const history = useHistory();
  const dispatch = useStoreDispatch();
  const { homepage } = useStoreState((state) => state);
  useEffect(() => {
    dispatch.Homepage.getData();
}, [dispatch.Homepage]);

  const { Registration } = useStoreState((state) => state);
  const { initialState } = Registration;
  const { errorMessage, loading, status } = initialState;

  const { postCreateInvestor } = useStoreActions(
    ({ Registration }) => Registration
  );

  const onSubmit = (data) => {
    postCreateInvestor(data);
    console.log(initialState);
    if (initialState.result.token) {
      history.push('/item');
    }
  };

  useEffect(() => {
    if (status === 'finished')  {
     const goToItem = () => {
       history.push('/item');
     }
     goToItem();
   }
 }, [status, history])

  return (
    <div>
      <LoginFormSection
        onSubmit={onSubmit}
        loading={loading}
        errorMessage={errorMessage}
        />
    </div>
  );
};

export default Homepage;
