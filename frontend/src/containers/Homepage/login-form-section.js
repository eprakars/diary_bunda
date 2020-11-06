import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import Button from "../../components/Button";

const LoginFormSection = ({ onSubmit, loading, errorMessage }) => {
    const { register, watch, handleSubmit, errors } = useForm();

    return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="margin-top-lg">
          <label className="note-bold black-40">Email</label>
          <div className="position-relative">
            <input type="text" name="email" className="likuid-input full-width subheadline"
              ref={register({})}
            />
          </div>
          <ErrorMessage errors={errors} name="email" render={({message}) => <span className="likuid-red note">{message}</span>}/>
        </div>

        <div className="margin-top-lg">
          <label className="note-bold black-40">Kata Sandi</label>
          <div className="position-relative">
            <input type="password" name="password" className="likuid-input full-width subheadline"
              ref={register({})}
            />
          </div>
          <ErrorMessage errors={errors} name="password" render={({message}) => <span className="likuid-red note">{message}</span>}/>
        </div>

        <div className="row margin-top-xl">
          <div>
            <Button text={"Login"} type="submit" disabled={Object.keys(errors).length !== 0 || loading}/>
          </div>
        </div>

        {/* Temporary Showing Error message from response */}
        {errorMessage && (
          <label className="alert alert-danger full-width text-center margin-top-lg">{errorMessage}</label>
        )}
    </form>
    )
}

export default LoginFormSection
