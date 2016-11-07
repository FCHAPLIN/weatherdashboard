import icons from 'config/icons'
import {
    WIDGET_REQUEST_PENDING,
    WIDGET_REQUEST_ERROR,
    WIDGET_REQUEST_SUCCESS,
    REMOVE_WIDGET,
    ADD_WIDGET } from 'actions/WidgetsActions'

const widgets = (state = [], action) => {
    switch (action.type) {
        case WIDGET_REQUEST_PENDING:
        return [
          ...state.slice(0, action.widget),
          Object.assign({}, state.slice(action.widget), {
              status:'pending'
          }),
          ...state.slice(action.widget+1 )
        ];

        case WIDGET_REQUEST_ERROR:
        return [
          ...state.slice(0, action.widget),
          Object.assign({}, state.slice(action.widget), {
              status:'error',
              cityName:'This widget have an error...'
          }),
          ...state.slice(action.widget+1 )
        ];

        case WIDGET_REQUEST_SUCCESS:
            let code = action.data.weather[0].id;
            let icon = icons[code].icon;
            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
              icon = 'day-' + icon;
            }
            let temp = Math.floor(action.data.main.temp);
            return [
              ...state.slice(0, action.widget),
              {
                 status:'idle',
                 cityName: action.data.name,
                 weather:icon,
                 temperature:temp,
                 cityCountry: action.data.sys.country,
                 cityID: action.data.id,
                 lat: action.data.coord.lat,
                 lng: action.data.coord.lon
              },
              ...state.slice(action.widget+1 )
            ];


        case REMOVE_WIDGET:
          return [
            ...state.slice(0, action.widget),
            ...state.slice(action.widget+1 )
          ]


        case ADD_WIDGET:
        return [
          ...state,
          {
             status:'idle',
             cityName: action.cityName,
             weather:'',
             temperature:'',
             cityCountry: '',
             cityID: '',
             lat: false,
             lng: false
          }
        ];

        default: return state
    }
}

export default widgets;
