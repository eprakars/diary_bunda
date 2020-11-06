import React, {Fragment} from 'react';

const Button = props => {
  const { className, text, disabled, outline, onClick, dataToggle, dataTarget, type, small, borderless, fullwidth, halfwidth } = props;
  return (
    <Fragment>
      { !outline && (
        <button className={`btn-liku-primary ${small ? "btn-liku-primary-small" : ""} ${fullwidth ? "full-width" : ""} ${halfwidth ? "half-width" : ""}` }  type={type} onClick={onClick} disabled={disabled} data-toggle={dataToggle} data-target={dataTarget}>
          {text}
        </button>
      )}
      { outline && !borderless && (
        <button className={`btn-liku-secondary ${small ? "btn-liku-secondary-small" : ""} ${fullwidth ? "full-width" : ""} ${halfwidth ? "half-width" : ""}` } type={type} onClick={onClick} disabled={disabled} data-toggle={dataToggle} data-target={dataTarget}>
          {text}
        </button>
      )}
      { outline && borderless && (
        <button className={`${className ? className : small ? "btn-liku-secondary-small-borderless" : "btn-liku-secondary-borderless"}`} type={type} onClick={onClick} disabled={disabled} data-toggle={dataToggle} data-target={dataTarget}>
          {text}
        </button>
      )}
    </Fragment>
  )
}

export default Button
