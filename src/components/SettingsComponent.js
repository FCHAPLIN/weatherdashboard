import React, {Component, PropTypes} from 'react'
import TopBarContainer from 'containers/TopBarContainer'
import WidgetSettingComponent from 'components/WidgetSettingComponent'
import AddWidgetComponent from 'components/AddWidgetComponent'
import AddWidgetFormComponent from 'components/AddWidgetFormComponent'
import { Link } from 'react-router'

function getWidget(widget, index, onRemoveClick){
  let boundRemoveClick = onRemoveClick.bind(this, index);
  return (
    <WidgetSettingComponent  key={index}
                      id={index}
                      cityName={widget.cityName}
                      cityCountry={widget.cityCountry}
                      cityID={widget.cityID}
                      onRemoveClick={boundRemoveClick} />
  )
}

const SettingsComponent = (props) => {
  const widgetsData = props.state.widgets;
  const { onRemoveClick, onNewClick, onSubmitClick, onCancelClick, onSubmit, onNameChange, cityName } = props;
  const adding = props.state.settings.adding;
  const widgets = widgetsData.map((widget, index)=>getWidget(widget, index, onRemoveClick));

  return (
    <div>
      <TopBarContainer page="Settings"/>
      {adding && <AddWidgetFormComponent
          onSubmitClick={onSubmitClick}
          onSubmit={onSubmit}
          onCancelClick={onCancelClick}
          onNameChange={onNameChange}
          cityName ={cityName}/>}
      <div className="pure-g widget-list">
        {widgets}
        <AddWidgetComponent onNewClick={onNewClick}/>
      </div>
      <div className="pure-g widget-list">
        <div className="btn-container pure-u-1 pure-u-md-1-2">
          <Link to='Home' className="btn btn-primary">Done !</Link>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent;
