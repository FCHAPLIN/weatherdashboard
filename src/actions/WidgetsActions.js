import config from 'config/config';

export const WIDGET_REQUEST_PENDING = 'WIDGET_REQUEST_PENDING';
export const WIDGET_REQUEST_ERROR = 'WIDGET_REQUEST_ERROR';
export const WIDGET_REQUEST_SUCCESS = 'WIDGET_REQUEST_SUCCESS';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const ADD_WIDGET = 'ADD_WIDGET';


export const widgetRequestAction = (widget, city) => {
  return (dispatch) => {
      let request = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+config.appid+'&units=metric';
      dispatch(widgetRequestPendingAction(widget));
      fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
          if (response.cod >= 400) {
              throw Error(response.statusText);
          }else{
              dispatch(widgetRequestSuccessAction(widget, response));
          }
        })
        .catch(function(error) {
            dispatch(widgetRequestErrorAction(widget,error));
        });
  }
}
export const widgetRequestPendingAction = (widget) => {
    return {
        type: WIDGET_REQUEST_PENDING,
        widget
    }
}

export const widgetRequestErrorAction = (widget,error) => {
    return {
        type: WIDGET_REQUEST_ERROR,
        widget,
        error
    }
}

export const widgetRequestSuccessAction = (widget, data) => {

    return {
        type: WIDGET_REQUEST_SUCCESS,
        widget,
        data
    }
}

export const removeWidgetAction = (widget) => {
    return {
        type: REMOVE_WIDGET,
        widget
    }
}

export const addWidgetAction = (cityName) => {
    return {
        type: ADD_WIDGET,
        cityName
    }
}
