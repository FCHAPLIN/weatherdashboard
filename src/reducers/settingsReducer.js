import { NEW_WIDGET, CANCEL_WIDGET, FORM_NAME_CHANGE, FORM_RESET } from 'actions/SettingsActions'

const settings = (state = {}, action) => {
  switch (action.type) {

    case NEW_WIDGET:
        return Object.assign({}, state, {
            adding:true
        })

    case CANCEL_WIDGET:
      return Object.assign({}, state, {
          adding:false
      })

      case CANCEL_WIDGET:
        return Object.assign({}, state, {
            adding:false
        })

    case FORM_NAME_CHANGE:
      return Object.assign({}, state, {
          cityName:action.value
      })

    case FORM_RESET:
      return Object.assign({}, state, {
          cityId:'',
          cityName:''
      })

    default:
        return state
    }
}

export default settings;
