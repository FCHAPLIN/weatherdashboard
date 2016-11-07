import { connect } from 'react-redux'
import SettingsComponent from 'components/SettingsComponent'
import {removeWidgetAction, addWidgetAction} from 'actions/WidgetsActions'
import {newWidgetAction, cancelWidgetAction, formNameChangeAction, formIdChangeAction, formResetAction} from 'actions/SettingsActions'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClick: (e) => {
      dispatch(removeWidgetAction(e))
    },
    onNewClick: () => {
      dispatch(newWidgetAction())
    },
    onSubmit: (e) => {
      e.preventDefault();
      dispatch(addWidgetAction(e.nativeEvent.target.elements.cityName.value))
      dispatch(formResetAction())
      dispatch(cancelWidgetAction())
    },
    onNameChange: (e) => {
      dispatch(formNameChangeAction(e.target.value))
    },
    onSubmitClick: (e,data) => {
      e.preventDefault();
    },
    onCancelClick: () => {
      dispatch(cancelWidgetAction())
    }
  }
}

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsComponent);


export default SettingsContainer;
