import React, {Component, PropTypes} from 'react'

const AddWidgetComponent = (props) => {
  const {onNewClick} = props;
  return (
    <div className="pure-u-1 pure-u-md-1-2">
      <div className="add-widget" onClick={onNewClick}>
        <i className="icon icon-plus"/>
      </div>
    </div>
  )
}

export default AddWidgetComponent;
