export const CANCEL_WIDGET = 'CANCEL_WIDGET';
export const NEW_WIDGET = 'NEW_WIDGET';
export const ADD_WIDGET = 'ADD_WIDGET';
export const FORM_NAME_CHANGE = 'FORM_NAME_CHANGE';
export const FORM_RESET = 'FORM_RESET';

export const newWidgetAction = () => {
    return {
        type: NEW_WIDGET
    }
}

export const cancelWidgetAction = () => {
    return {
        type: CANCEL_WIDGET
    }
}

export const formNameChangeAction = (value) => {
  return {
    type: FORM_NAME_CHANGE,
    value
  }
}

export const formResetAction = (value) => {
  return {
    type: FORM_RESET
  }
}
