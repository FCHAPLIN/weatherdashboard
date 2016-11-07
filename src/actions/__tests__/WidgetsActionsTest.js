import * as actions from '../WidgetsActions'

describe('Widgets Actions', () => {
  it('should create an action to remove a widget', () => {
    const widget=2;
    const expectedAction = {
      type: actions.REMOVE_WIDGET,
      widget
    }
    expect(actions.removeWidgetAction(2)).toEqual(expectedAction)
  }),
  it('should create an action to cancel a new widget', () => {
    const cityName="Paris";
    const expectedAction = {
      type: actions.ADD_WIDGET,
      cityName
    }
    expect(actions.addWidgetAction('Paris')).toEqual(expectedAction)
  })
})
