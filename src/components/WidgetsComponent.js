import React, {Component, PropTypes} from 'react'
import TopBarContainer from 'containers/TopBarContainer'
import WidgetComponent from 'components/WidgetComponent'
import { Link } from 'react-router'

function getWidget(widget, index){

  return (
    <WidgetComponent  key={index}
                      id={index}
                      status={widget.status}
                      cityName={widget.cityName}
                      temperature={widget.temperature}
                      weather={widget.weather}
                      cityCountry={widget.cityCountry}
                      cityID={widget.cityID}
                      lat={widget.lat}
                      lng={widget.lng}/>
  )
}

const WidgetsComponent = (data) => {
  const {widgets} = data.state;
  const widgetsList = widgets.map((widget, index)=>getWidget(widget, index));
  return (
    <div>
      <TopBarContainer page="Widgets"/>
      <div className="pure-g widget-list">
         {widgetsList}
      </div>
      {!widgetsList.length && <div className="no-widget">No widget to display... Create one first !
      <div className="btn-container">
        <Link to='Settings' className="btn btn-primary">Create Widget</Link>
      </div>
      </div>}
    </div>
  )
}

export default WidgetsComponent;
