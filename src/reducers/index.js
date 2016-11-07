import { combineReducers } from 'redux'
import widgets from 'reducers/widgetsReducer'
import settings from 'reducers/settingsReducer'

const rootReducer = combineReducers({
  settings,
  widgets
})

export default rootReducer
