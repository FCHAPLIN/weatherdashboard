import React, {Component, PropTypes} from 'react'
import shallowCompare from 'react-addons-shallow-compare';
import {widgetRequestAction} from 'actions/WidgetsActions';
import { connect } from 'react-redux'

class WidgetComponent extends Component {
  constructor(props) {
      super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    return shallowCompare(this, nextProps, nextState);
  }
  componentDidMount(){
    //get dispatch function
    const {dispatch} = this.props;
    //request new map
    dispatch(widgetRequestAction(this.props.id,this.props.cityName));
  }
  render() {
    const {cityName, temperature, cityCountry, weather, status} = this.props;
    const iconClass="wi wi-"+weather;
    return (
      <div className="pure-u-1 pure-u-md-1-2">
          {status==='idle' &&
          <div className="widget" data-city={cityName} >
            <div className="widget__city-name">{cityName}<span className="widget__city-country">({cityCountry})</span></div>
            <div className="widget__temperature">
              <span className="widget__temp-value">{temperature}</span>
              <span className="widget__temp-unit">°C</span>
            </div>
            <div className="widget__weather-icon"><i className={iconClass}></i></div>
          </div>}
          {status==='pending' &&
            <div className="widget pending">
              <div className="widget__loading-icon"><i className="icon icon-spinner8"></i></div>
            </div>}
          {status==='error' &&
            <div className="widget error">
              <div className="widget__city-error">{cityName}</div>
            </div>}
      </div>
    );
  }
}

WidgetComponent.propTypes = {
}

export default connect()(WidgetComponent);
