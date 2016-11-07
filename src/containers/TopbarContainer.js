import { connect } from 'react-redux'
import TopBarComponent from 'components/partials/TopBarComponent'

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

const TopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarComponent);

export default TopBarContainer;
