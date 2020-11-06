import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import Button from "../../components/Button";

const ItemForm = ({ onSubmit, loading, errorMessage }) => {
    const { register, watch, handleSubmit, errors } = useForm();

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-3 padding-xl">
            <div>
              <label className="note-bold black-40">ID</label>
              <div className="position-relative">
                <input type="number" name="id" className="likuid-input full-width subheadline"
                  ref={register({})}
                />
              </div>
              <ErrorMessage errors={errors} name="id" render={({message}) => <span className="likuid-red note">{message}</span>}/>
            </div>
          </div>
          <div className="col-3 padding-xl">
            <div>
              <label className="note-bold black-40">Name</label>
              <div className="position-relative">
                <input type="text" name="name" className="likuid-input full-width subheadline"
                  ref={register({})}
                />
              </div>
              <ErrorMessage errors={errors} name="name" render={({message}) => <span className="likuid-red note">{message}</span>}/>
            </div>
          </div>
          <div className="col-3 padding-xl">
            <div>
              <label className="note-bold black-40">Quantity</label>
              <div className="position-relative">
                <input type="number" name="quantity" className="likuid-input full-width subheadline"
                  ref={register({})}
                />
              </div>
              <ErrorMessage errors={errors} name="quantity" render={({message}) => <span className="likuid-red note">{message}</span>}/>
            </div>
          </div>
          <div className="col-1 padding-xl">
            <div>
              <Button text={"Delete"} type="submit" disabled={Object.keys(errors).length !== 0 || loading}/>
            </div>
          </div>
          <div className="col-1 padding-xl">
            <div>
              <Button text={"Update"} type="submit" disabled={Object.keys(errors).length !== 0 || loading}/>
            </div>
          </div>
        </div>

        {/* Temporary Showing Error message from response */}
        {errorMessage && (
          <label className="alert alert-danger full-width text-center margin-top-lg">{errorMessage}</label>
        )}
    </form>
    )
}

export default ItemForm
