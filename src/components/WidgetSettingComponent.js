import React, {Component, PropTypes} from 'react'
import shallowCompare from 'react-addons-shallow-compare';
import {widgetRequestAction} from 'actions/WidgetsActions';
import { connect } from 'react-redux'

class WidgetSettingComponent extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const {cityName, onRemoveClick} = this.props;

    return (
      <div className="pure-u-1 pure-u-md-1-2">
          <div className="widget setting" data-city={cityName}>
            <div className="widget__city-name">{cityName}</div>
            <div className="widget__remove" onClick={onRemoveClick}>
              <i className="icon icon-cross"/>
            </div>
          </div>
      </div>
    );
  }
}

WidgetSettingComponent.propTypes = {
}

export default connect()(WidgetSettingComponent);
