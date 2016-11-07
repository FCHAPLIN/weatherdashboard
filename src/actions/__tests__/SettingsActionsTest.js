import * as actions from '../SettingsActions'

describe('Settings Actions', () => {
  it('should create an action to change status to new widget', () => {
    const expectedAction = {
      type: actions.NEW_WIDGET
    }
    expect(actions.newWidgetAction()).toEqual(expectedAction)
  }),
  it('should create an action to cancel a new widget', () => {
    const expectedAction = {
      type: actions.CANCEL_WIDGET
    }
    expect(actions.cancelWidgetAction()).toEqual(expectedAction)
  }),
  it('should create an action to change the form city name', () => {
    const value="Montpellier"
    const expectedAction = {
      type: actions.FORM_NAME_CHANGE,
      value
    }
    expect(actions.formNameChangeAction("Montpellier")).toEqual(expectedAction)
  }),
  it('should create an action to reset the form', () => {
    const expectedAction = {
      type: actions.FORM_RESET
    }
    expect(actions.formResetAction()).toEqual(expectedAction)
  })
})
