import React, {Component, PropTypes} from 'react'

const AddWidgetFormComponent = (props) => {
  const {onSubmitClick, onCancelClick, onSubmit, onNameChange, cityName} = props;
  return (
    <div className="form-container">

    <h2 className="sub-title">Add A Widget</h2>
    <p>Please enter the city name, or the city code if you know it.</p>
    <form className="add-form" onSubmit={onSubmit}>
        <div className="input-container">
          <input id="cityName" type="text" placeholder="City name" onChange={onNameChange} value={cityName}/>
        </div>
        <div className="input-container">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmitClick}>Add It !</button>
        </div>
    </form>
      <div className="form-container__close" onClick={onCancelClick}><i className="icon-cross"></i></div>

    </div>
  )
}

export default AddWidgetFormComponent;
