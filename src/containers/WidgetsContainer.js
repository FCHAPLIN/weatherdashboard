import { connect } from 'react-redux'
import WidgetsComponent from 'components/WidgetsComponent'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(playerSubmitAction())
    }
  }
}

const WidgetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetsComponent);


export default WidgetsContainer;
